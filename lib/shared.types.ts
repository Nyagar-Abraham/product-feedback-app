export interface CreateUserParams {
	clerkId: string;
	name: string;
	username: string;
	email: string;
	image: string;
}
export interface UpdateUserParams {
	clerkId: string;
  updateData: {
    name?: string;
    username?: string;
    email?: string;
    image?: string;
  };
  path: string;
}

export interface DeleteUserParams {
	clerkId: string;
}
