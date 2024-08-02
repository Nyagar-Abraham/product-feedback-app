import { Document, Schema, model, models } from 'mongoose';

export interface IUser extends Document {
    name: string;
    username: string;
    clerkId: string;
    email?: string;
    image?: string;
    joinedAt: Date;
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    joinedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const User = models.User || model<IUser>('User', userSchema);

export default User;
