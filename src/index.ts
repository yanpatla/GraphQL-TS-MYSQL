import app from "./app";
import { connectDB } from "./db";

const main = async () => {
  try {
    await connectDB();
    app.listen(3500);
    console.log("Listen On Port 3500");
  } catch (error) {
    console.log(error);
  }
};

main();
