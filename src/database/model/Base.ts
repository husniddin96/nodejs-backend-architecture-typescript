import { Document } from 'mongoose';

export default interface Base extends Document {
    status?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}