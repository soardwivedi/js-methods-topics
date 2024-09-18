const userSchema = {
  _id: ObjectId,
  fname: String,
  lname: String,
  email: String,
  phone: String,
  password: String, // Hash of the password
  created_at: Date,
  updated_at: Date,
};

const walletSchema = {
  _id: ObjectId,
  user_id: ObjectId, // Reference to Users collection
  balance: Number,
  created_at: Date,
  updated_at: Date,
};

const transactionSchema = {
  _id: ObjectId,
  user_id: ObjectId, // Reference to Users collection
  amount: Number,
  type: String, // "recharge" or "payment"
  created_at: Date,
  metadata: Object, // Additional info related to the transaction
};

const paymentSchema = {
  _id: ObjectId,
  transaction_id: ObjectId, // Reference to Transactions collection
  merchant: String,
  product_id: String,
  amount: Number,
  status: String, // "pending", "completed", "failed"
  created_at: Date,
};
