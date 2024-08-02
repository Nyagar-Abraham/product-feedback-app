import Link from 'next/link';

const items = ['Planned', 'In-Progress', 'Live'];

const RoadMap = ({ mobile }: { mobile?: boolean }) => {
	return (
		<div
			className={`p-4 flex-none rounded-lg bg-white shadow-md 
		${mobile ? '' : 'max-msm:hidden'}
		`}
		>
			<div className="flex-between mb-2">
				<h3 className="h3 text-darkBlue ">RoadMap</h3>
				<Link
					href={`/roadmap`}
					className=" text-secondary hover:underline hover:underline-offset-2 text-sn font-semibold"
				>
					View
				</Link>
			</div>
			<ul className="flex flex-col gap-2 ">
				{items.map((item: string) => (
					<li key={item} className=" flex items-center gap-3">
						<span
							className={`h-[10px] w-[10px] rounded-full
              ${item === 'Planned' && 'bg-orange'}
              ${item === 'In-Progress' && 'bg-primary'}
              ${item === 'Live' && 'bg-skyBlue'}
              `}
						/>
						<p className="p1 ">{item}</p>
						<span className="text-lg font-semibold text-mediumGray ml-auto">
							{0}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default RoadMap;
