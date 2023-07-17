import { Document } from "mongoose";

export interface Client extends Document {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly status: string;
}