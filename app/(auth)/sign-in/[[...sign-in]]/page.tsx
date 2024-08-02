import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className="h-screen flex items-start justify-center">
			<SignIn />
		</div>
	);
}
