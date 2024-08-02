'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { DialogClose } from '@radix-ui/react-dialog';

const formSchema = z.object({
	title: z.string().min(3).max(200),
	category: z.string().min(2).max(100),
	detail: z.string().min(2).max(500),
	status: z.string().min(2).max(100),
});

export function FeedBackForm({ type }: { type?: string }) {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			category: '',
			detail: '',
			status: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				className="flex gap-3 flex-col bg-white"
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem className="flex flex-col ">
							<FormLabel className="font-semibold text-sm capitalize mb-[-5px]">
								feedback Title
							</FormLabel>
							<FormDescription className="p2 mb-[-3px]  opacity-80">
								Add a short, descriptive headline
							</FormDescription>
							<FormControl>
								<Input
									className="h-[32px] rounded-lg focus:ring focus:ring-mediumGray/50 bg-lightGray px-2 py-1"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem className="flex flex-col ">
							<FormLabel className="font-semibold text-sm capitalize mb-[-5px]">
								category
							</FormLabel>
							<FormDescription className="p2 mb-[-3px]  opacity-80">
								Choose a category for your feedback
							</FormDescription>
							<FormControl>
								<Select
									onValueChange={(value) => field.onChange(value)}
									{...field}
								>
									<SelectTrigger className="bg-lightGray focus:ring focus:ring-mediumGray/50 h-[32px]">
										<SelectValue placeholder="Feature" />
									</SelectTrigger>
									<SelectContent className="bg-white">
										<SelectItem value="Feature">Feature</SelectItem>
										<SelectItem value="UI">UI</SelectItem>
										<SelectItem value="UX">UX</SelectItem>
										<SelectItem value="Enhancement">Enhancement</SelectItem>
										<SelectItem value="Bug">Bug</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				{type === 'edit' && (
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem className="flex flex-col ">
								<FormLabel className="font-semibold text-sm capitalize mb-[-5px]">
									update status
								</FormLabel>
								<FormDescription className="p2 mb-[-3px]  opacity-80">
									Chang feature status
								</FormDescription>
								<FormControl>
									<Select
										onValueChange={(value) => field.onChange(value)}
										{...field}
									>
										<SelectTrigger className="bg-lightGray focus:ring focus:ring-mediumGray/50 h-[32px]">
											<SelectValue placeholder="Feature" />
										</SelectTrigger>
										<SelectContent className="bg-white">
											<SelectItem value="Suggestion">Suggestion</SelectItem>
											<SelectItem value="Planned">Planned</SelectItem>
											<SelectItem value="In-Progress">In-Progress</SelectItem>
											<SelectItem value="Live">Live</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<FormField
					control={form.control}
					name="detail"
					render={({ field }) => (
						<FormItem className="flex flex-col ">
							<FormLabel className="font-semibold text-sm capitalize mb-[-5px]">
								feedback detail
							</FormLabel>
							<FormDescription className="p2 mb-[-3px]  opacity-80">
								Include any specific comments on what should be improved, added,
								etc
							</FormDescription>
							<FormControl>
								<Textarea
									className="h-[70px] rounded-lg focus:ring focus:ring-mediumGray/50 bg-lightGray px-2 py-1"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="flex max-xs:flex-col mt-2  gap-1">
					{type === 'edit' && (
						<div className="flex xs:basis-1/2  ">
							<Button className="bg-red-500 text-red-50 hover:bg-red-400 max-xs:flex-1 font-semibold text-sm">
								Delete
							</Button>
						</div>
					)}
					<div className="flex gap-1 max-xs:flex-col justify-end xs:basis-1/2">
						<DialogClose className="max-xs:flex-1">
							<Button className="hover:bg-darkBlue/70 bg-darkBlue text-white max-xs:w-full  font-semibold text-sm">
								Cancel
							</Button>
						</DialogClose>
						<Button
							className="font-semibold text-sm max-xs:flex-1 text-white"
							type="submit"
						>
							Add feedback
						</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
