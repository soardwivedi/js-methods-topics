async function createUser(username, email, passwordHash) {
    const user = new User({ username, email, passwordHash });
    await user.save();
    return user;
  }

  async function createWallet(userId, currency) {
    const wallet = new Wallet({ userId, currency });
    await wallet.save();
    return wallet;
  }

  async function createTransaction(userId, walletId, amount, type, description) {
    const transaction = new Transaction({ userId, walletId, amount, type, description });
    await transaction.save();
    return transaction;
  }
  
  async function updateWalletBalance(walletId, amount) {
    const wallet = await Wallet.findById(walletId);
    wallet.balance += amount;
    wallet.updatedAt = new Date();
    await wallet.save();
    return wallet;
  }

  async function getUserTransactions(userId) {
    return Transaction.find({ userId }).sort({ createdAt: -1 });
  }
  