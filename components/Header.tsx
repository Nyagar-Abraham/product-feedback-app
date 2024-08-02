'use client';

import Image from 'next/image';
import bgD from '@/public/assets/suggestions/desktop/background-header.png';
import bgT from '@/public/assets/suggestions/tablet/background-header.png';
import bgM from '@/public/assets/suggestions/mobile/background-header.png';
import MobileNav from './MobileNav';
import { useEffect, useState } from 'react';
import { AnyARecord } from 'dns';

const Header = () => {
	const [image, setImage] = useState<any>('');

	useEffect(() => {
		function callback() {
			const width = window.innerWidth;

			if (width < 680) {
				setImage(bgM);
			} else {
				setImage(bgD);
			}
		}

		window.addEventListener('resize', callback);

		return () => {
			window.removeEventListener('resize', callback);
		};
	}, []);

	return (
		<div className="relative flex-none overflow-hidden p-4 flex items-end msm:rounded-lg md:min-h-[150px] max-msm:w-full msm:flex-1">
			{image && (
				<Image
					src={image}
					alt="icon"
					fill
					placeholder="blur"
					className="absolute top-0 left-0 w-full h-full object-cover z-0"
				/>
			)}
			<div className="flex-between relative z-10 w-full ">
				<div className=" ">
					<h1 className="h1 text-white ">Frontend Mentor</h1>
					<p className="h3 text-lightGray">Feedback Board</p>
				</div>
				<MobileNav />
			</div>
		</div>
	);
};

export default Header;
