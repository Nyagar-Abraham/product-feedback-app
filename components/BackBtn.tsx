'use client';

import React from 'react';
import { Button } from './ui/button';
import arrow from '@/public/assets/shared/icon-arrow-left.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const BackBtn = ({ theme }: { theme: string }) => {
	const router = useRouter();
	return (
		<Button
			onClick={() => router.back()}
			className={`text-xs font-semibold flex-center gap-3 !p-0 !bg-transparent hove:!bg-transparent
    ${theme === 'dark' ? 'bg-transparent text-lightGray' : 'text-darkBlue'}
    `}
		>
			<Image src={arrow} alt="back" />
			<span className="hover:underline underline-offset-2">Go Back</span>
		</Button>
	);
};

export default BackBtn;
