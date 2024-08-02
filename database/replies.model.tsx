import { Document, Schema, model, models } from 'mongoose';

export interface IReply extends Document {
	content: string;
	user: Schema.Types.ObjectId;
	replyingTo: string;
}

const replySchema = new Schema<IReply>({
	content: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	replyingTo: {
		type: String,
		required: true,
	},
});

const Reply = models.Reply || model<IReply>('Reply', replySchema);

export default Reply;
