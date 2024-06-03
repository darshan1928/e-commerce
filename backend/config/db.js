const db = require("mongoose");

const connectDb = async () => {
  try {
    const { connection } = await db.connect(process.env.MONGODB_URI);
    console.log("connecction.host==", connection.host);
  } catch (error) {
    console.log("error==", error);
  }
};
module.exports = connectDb;
