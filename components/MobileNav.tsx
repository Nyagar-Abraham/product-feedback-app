import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import menu from '@/public/assets/shared/mobile/icon-hamburger.svg';
import close from '@/public/assets/shared/mobile/icon-close.svg';
import Filter from './Filter';
import RoadMap from './RoadMap';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { LogInIcon } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger className="msm:hidden" asChild>
				<Image src={menu} alt="menu" />
			</SheetTrigger>
			<SheetContent className="bg-white pl-10 w-[350px]">
				<div className="flex flex-col gap-4  w-[220px] mt-10 ">
					<Filter mobile />
					<RoadMap mobile />
				</div>

				<div className="mt-6 w-[220px]">
					<SignedOut>
						<Link
							href="sign-in"
							className="flex gap-3 px-3 py-1 text-darkGray bg-lightGray hover:bg-veryLightGray rounded-lg items-center"
						>
							<LogInIcon />
							<span>Log in</span>
						</Link>
					</SignedOut>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
