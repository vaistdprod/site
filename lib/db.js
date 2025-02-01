import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
    console.log('MongoDB připojeno.');
  } catch (error) {
    console.error('MongoDB chyba během připojení:', error);
  }
}