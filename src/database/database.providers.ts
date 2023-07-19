import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://kronance:kronancetest@denver.n3zfpjj.mongodb.net/xarala?serverSelectionTimeoutMS=20000&authSource=admin'),
  },
];
