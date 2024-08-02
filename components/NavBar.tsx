import Image from 'next/image';
import { Button } from './ui/button';

import suggestion from '@/public/assets/suggestions/icon-suggestions.svg';
import Sort from './Sort';
import BackBtn from './BackBtn';
import Modal from './Dialog';
import { FeedBackForm } from './FeedbackForm';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
const NavBar = ({ place }: { place: string }) => {
	return (
		<div className=" bg-darkBlue msm:rounded-lg p-3 flex-between ">
			<div className="flex gap-4">
				{place === 'home' && (
					<>
						<div className="max-msm:hidden space-x-3 flex items-center">
							<Image src={suggestion} alt="icon" />

							<p className="h3 text-white ">
								{0}
								{''} Suggestions
							</p>
						</div>
						<Sort />
					</>
				)}

				{place === 'roadmap' && (
					<div>
						<BackBtn theme="dark" />
						<p className="text-veryLightGray text-sm font-semibold mt-[-7px]">
							RoadMap
						</p>
					</div>
				)}
			</div>
			<div className="flex-center gap-2">
				<Modal
					trigger={
						<Button
							size="lg"
							variant="default"
							className="rounded-lg text-veryLightGray"
						>
							+ Add Feedback
						</Button>
					}
				>
					<FeedBackForm />
				</Modal>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<Link href="/sign-in">
						<LogIn className="text-primary h-[24px] w-24px" />
					</Link>
				</SignedOut>
			</div>
		</div>
	);
};

export default NavBar;
