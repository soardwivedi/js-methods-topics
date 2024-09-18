app.get('/wallet/history/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
  
      const transactions = await Transaction.find({ user_id: userId }).sort({ created_at: -1 });
  
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  