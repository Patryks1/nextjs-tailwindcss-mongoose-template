import mongoose from 'mongoose';

const connection: any = {};

const dbConnect = async (): Promise<void> => {
  if (connection.isConnected) {
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.log('MONGODB_URI Missing in .env');
    return;
  }

  if (!process.env.MONGODB_DB) {
    console.log('MONGODB_DB Missing in .env');
    return;
  }

  const db = await mongoose.connect(
    `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );

  connection.isConnected = db.connections[0].readyState;
};

export default dbConnect;
