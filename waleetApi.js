export const addOrderIdToRechargeHistoryColl = async ({
    order_id = "",
    user_id = "",
    amount = 0,
    status,
  }) => {
    console.log("user_id", user_id, "amount", amount, "order_id", order_id);
    try {
      if (order_id.length) {
        throw new Error("Do not send Order Id");
      }
  
      if (!user_id || user_id == "") {
        throw new Error("User Id is required");
      }
  
      if (!amount || amount == 0) {
        throw new Error("Amount is required");
      }
  
      var unique_order_id =
        Math.random().toString(36).substring(2, 15) +
        moment().unix() +
        Math.random().toString(36).substring(2, 15);
  
      const findDataWithOrderID = await TransctionHistorySchema.findOne({
        order_id: unique_order_id,
      });
      console.log("order_id is ::::", order_id, findDataWithOrderID);
  
      if (findDataWithOrderID) {
        throw new Error("Order Id already exist");
      }
  
      // const rechargeHistory = new TransctionHistorySchema.create({
  
      const rechargeHistory = await TransctionHistorySchema.create({
        order_id: unique_order_id,
        user_id,
        amount,
        status,
        created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      });
  
      // await rechargeHistory.save();
      return rechargeHistory;
    } catch (error) {
      throw new Error(error);
    }
  };
  
  // below api is not in use now
  export const updateUserWalletBalance = async ({
    user_id = "",
    amount = 0,
    order_id = "",
    transaction_id = "",
    payment_method = "",
    status = "",
  }) => {
    try {
      const isDataExistsInRechargeOsWalletSchema =
        await TransctionHistorySchema.findOne({
          user_id,
          order_id,
          transaction_id: null,
        });
      console.log(
        "isDataExistsInRechargeOsWalletSchema",
        isDataExistsInRechargeOsWalletSchema
      );
      if (!isDataExistsInRechargeOsWalletSchema) {
        throw new Error("Wrong Order Id or transaction Id or User Id");
      } else if (isDataExistsInRechargeOsWalletSchema) {
        const updatedRechargeOsWalletSchema =
          await TransctionHistorySchema.updateOne(
            { order_id }, // Filter criteria
            {
              $set: {
                user_id,
                order_id,
                transaction_id,
                status,
                payment_method,
                amount,
              },
            } // Update operation
  
            // { $set: { email: newEmail } },
          ).exec();
        // return updatedRechargeOsWalletSchema;
      }
  
      const userWallet = await WalletBalanceOs.findOne({
        user_id,
      });
      if (userWallet) {
        userWallet.balance = userWallet.balance + amount;
        await userWallet.save();
        return userWallet;
      }
      const newUserWallet = new WalletBalanceOs({
        user_id,
        balance: amount,
      });
      await newUserWallet.save();
    } catch (error) {
      throw new Error(error);
    }
  };