import * as mongoose from 'mongoose';

export const ClientSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    status: String
})
