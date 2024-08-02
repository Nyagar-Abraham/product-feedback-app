import Image from 'next/image';
import icon from '@/public/assets/suggestions/illustration-empty.svg';

import { Button } from './ui/button';
import Modal from './Dialog';
import { FeedBackForm } from './FeedbackForm';

const NoFeedback = () => {
	return (
		<div className="msm:rounded-lg mt-7 bg-white shadow-md px-8 pt-20 pb-8 flex-center">
			<div className=" text-center">
				<Image src={icon} alt="icon" className=" mx-auto mb-10" />

				<h3 className="h3 text-darkGray mb-5 captalize">
					There is no feedback yet
				</h3>
				<p className="p2 md:px-3 mb-8">
					Got a suggestion? Got a bug that needs to be squashed? We love hearing
					about new ideas to improve our app{' '}
				</p>
				<Modal
					trigger={
						<Button
							size="lg"
							className="rounded-lg flex-center text-lightGray mx-auto"
						>
							+ Add Feedback
						</Button>
					}
				>
					<FeedBackForm />
				</Modal>
			</div>
		</div>
	);
};

export default NoFeedback;
