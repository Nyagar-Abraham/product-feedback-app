import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
	return (
		<main className="py-1 bg-lightGray min-h-screen   gap-8 sm:px-5 md:px-16 lg:px-28 mx-auto ">
			<NavBar place="roadmap" />
		</main>
	);
};

export default page;
