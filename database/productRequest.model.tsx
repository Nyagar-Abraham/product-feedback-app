import { Document, Schema, model, models } from 'mongoose';

export interface IProductRequest extends Document {
    title: string;
    category: string;
    status: string;
    upvotes?: Schema.Types.ObjectId[];
    description: string;
    comments?: Schema.Types.ObjectId[];
    user: Schema.Types.ObjectId;
}

const productRequestSchema = new Schema<IProductRequest>({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    upvotes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const ProductRequest = models.ProductRequest || model<IProductRequest>('ProductRequest', productRequestSchema);

export default ProductRequest;
