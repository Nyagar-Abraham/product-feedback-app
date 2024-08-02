import Filter from '@/components/Filter';
import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import NavBar from '@/components/NavBar';
import NoFeedback from '@/components/NoFeedback';
import RoadMap from '@/components/RoadMap';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { deleteUser } from '@/lib/actions/user.actions';

export default async function Home() {
	// await deleteUser({ clerkId: '' });
	return (
		<main className="py-1 bg-lightGray min-h-screen flex flex-col md:flex-row gap-8 sm:px-5 md:px-16 lg:px-28 mx-auto ">
			<div className="flex md:flex-col gap-6  md:w-[220px] max-msm:w-full ">
				<Header />
				<Filter />
				<RoadMap />
			</div>
			<div className=" flex-1">
				<NavBar place="home" />
				<NoFeedback />
			</div>
		</main>
	);
}
