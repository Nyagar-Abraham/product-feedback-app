import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="h-screen flex items-start justify-center">
			<SignUp />
		</div>
	);
}
