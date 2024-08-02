'use server';

import User from '@/database/user.model';
import { connectToDatabase } from '../mongoose';
import {
	CreateUserParams,
	DeleteUserParams,
	UpdateUserParams,
} from '../shared.types';
import ProductRequest from '@/database/productRequest.model';
import Comment from '@/database/comments.model';
import Reply from '@/database/replies.model';
import { revalidatePath } from 'next/cache';

export async function createUser(userData: CreateUserParams) {
	try {
		await connectToDatabase();

		const user = await User.create(userData);

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
export async function updateUser(params: UpdateUserParams) {
	try {
		await connectToDatabase();

		const { clerkId, updateData, path } = params;

		const user = await User.findOneAndUpdate({ clerkId }, updateData, {
			new: true,
		});
		revalidatePath(path);
		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function deleteUser(params: DeleteUserParams) {
	try {
		await connectToDatabase();

		const { clerkId } = params;

		const user = await User.findOneAndDelete({ clerkId });
		//delete comments
		await Comment.deleteMany({ user: user?._id });
		//delete requests
		await ProductRequest.deleteMany({ user: user?._id });
		//delete replies
		await Reply.deleteMany({ user: user?._id });
	} catch (error) {
		console.log(error);
		throw error;
	}
}
// export async function updateUser(params: UpdateUserParams) {
// 	try {
// 		await connectToDatabase();

// 		const { clerkId, updateData, path } = params;

// 	} catch (error) {
// 		console.log(error);
// 		throw error;
// 	}
// }
