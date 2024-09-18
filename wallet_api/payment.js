app.post('/wallet/pay', async (req, res) => {
    try {
      const { userId, amount, merchant, product_id } = req.body;
  
      if (!userId || !amount || !merchant || !product_id) {
        return res.status(400).send('User ID, amount, merchant, and product ID are required');
      }
  
      const session = await mongoose.startSession();
      session.startTransaction();
  
      try {
        const wallet = await Wallet.findOne({ user_id: userId }).session(session);
  
        if (!wallet) {
          await session.abortTransaction();
          session.endSession();
          return res.status(404).send('Wallet not found');
        }
  
        if (wallet.balance < amount) {
          await session.abortTransaction();
          session.endSession();
          return res.status(400).send('Insufficient balance');
        }
  
        wallet.balance -= amount;
        wallet.updated_at = new Date();
        await wallet.save({ session });
  
        const transaction = new Transaction({
          user_id: userId,
          amount: amount,
          type: 'payment',
          created_at: new Date()
        });
        await transaction.save({ session });
  
        const payment = new Payment({
          transaction_id: transaction._id,
          merchant: merchant,
          product_id: product_id,
          amount: amount,
          status: 'completed',
          created_at: new Date()
        });
        await payment.save({ session });
  
        await session.commitTransaction();
        session.endSession();
  
        res.status(200).send('Payment successful');
      } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  