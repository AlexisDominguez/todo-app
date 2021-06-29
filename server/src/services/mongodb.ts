import mongoose from "mongoose";

const connectMongo = async (mongoUrl: string): Promise<void> => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  } catch (error) {
    return error;
  }
};

export { connectMongo };
