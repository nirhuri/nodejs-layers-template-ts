import mongoose from "mongoose";

const MONGO_OPTIONS =   {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.0bqqa.mongodb.net/myDatabase?retryWrites=true&w=majority",
  MONGO_OPTIONS,
  (err: any) => {
    if (err) throw err;
    console.log("Connected to Mongo");
  }
);
