app.post('/wallet/recharge', async (req, res) => {
  try {
    const { userId, amount } = req.body;

    if (!userId || !amount) {
      return res.status(400).send('User ID and amount are required');
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

      wallet.balance += amount;
      wallet.updated_at = new Date();
      await wallet.save({ session });

      const transaction = new Transaction({
        user_id: userId,
        amount: amount,
        type: 'recharge',
        created_at: new Date()
      });
      await transaction.save({ session });

      await session.commitTransaction();
      session.endSession();

      res.status(200).send('Wallet recharged successfully');
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});
