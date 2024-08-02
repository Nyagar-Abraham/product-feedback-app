'use client';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

const Sort = () => {
	return (
		<div className="flex items-center justify-center gap-2">
			<span className="text-lightGray text-sm text-nowrap w-fit ">
				Sort by:
			</span>
			<Select>
				<SelectTrigger className="h4 text-veryLightGray border-none">
					<SelectValue placeholder="Most Upvotes" />
				</SelectTrigger>
				<SelectContent className="text-base mt-4 font-semibold w-[200px] bg-white text-darkGray ">
					<SelectItem
						className=" border-b border-mediumGray  flex-between "
						value="Most Upvoted"
					>
						Most Upvoted
					</SelectItem>
					<SelectItem
						className=" border-b border-mediumGray  flex-between "
						value="Least Upvoted"
					>
						Least Upvoted
					</SelectItem>
					<SelectItem
						className=" border-b border-mediumGray  flex-between "
						value="system"
					>
						System
					</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Sort;
