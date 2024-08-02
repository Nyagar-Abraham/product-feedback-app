import { Document, Schema, model, models } from 'mongoose';

export interface IComment extends Document {
    content: string;
    user: Schema.Types.ObjectId;
    replies: Schema.Types.ObjectId[];
}

const commentSchema = new Schema<IComment>({
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
    }]
});

const Comment = models.Comment || model<IComment>('Comment', commentSchema);

export default Comment;
