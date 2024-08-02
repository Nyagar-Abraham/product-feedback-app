import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

const Modal = ({
	children,
	trigger,
}: {
	children: React.ReactNode;
	trigger: React.ReactNode;
}) => {
	return (
		<Dialog>
			<DialogTrigger className="rounded-lg bg-white text-darkGray ">
				{trigger}
			</DialogTrigger>
			<DialogContent className="bg-white text-darkGray rounded-lg">
				<DialogHeader>
					<DialogTitle className="text-start mt-4">
						Create New feedback
					</DialogTitle>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
