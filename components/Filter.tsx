import { Badge } from './ui/badge';

const options = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
const Filter = ({ mobile }: { mobile?: boolean }) => {
	return (
		<div
			className={`flex flex-none gap-3 rounded-lg p-5 flex-wrap w-[220px] shadow-md  bg-white
			${mobile ? '' : 'max-msm:hidden'}
		`}
		>
			{options.map((option) => (
				<Badge
					key={option}
					className={`bg-veryLightGray hover:bg-lightGray 
        active:bg-secondary active:text-white text-darkBlue rounded-lg py-2 px-4 font-semibold
        `}
				>
					{option}
				</Badge>
			))}
		</div>
	);
};

export default Filter;
