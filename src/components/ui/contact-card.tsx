import React from 'react';
import { cn } from '@/lib/utils';
import {
	type LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-brand-black border border-white/10 relative grid h-full w-full shadow-2xl md:grid-cols-2 lg:grid-cols-3 rounded-3xl overflow-hidden backdrop-blur-md',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute top-2 left-2 h-4 w-4 text-brand-pink/40 md:-top-3 md:-left-3 md:h-6 md:w-6" />
			<PlusIcon className="absolute top-2 right-2 h-4 w-4 text-brand-pink/40 md:-top-3 md:-right-3 md:h-6 md:w-6" />
			<PlusIcon className="absolute bottom-2 left-2 h-4 w-4 text-brand-pink/40 md:-bottom-3 md:-left-3 md:h-6 md:w-6" />
			<PlusIcon className="absolute bottom-2 right-2 h-4 w-4 text-brand-pink/40 md:-bottom-3 md:-right-3 md:h-6 md:w-6" />
			<div className="flex flex-col justify-between lg:col-span-2">
				<div className="relative h-full space-y-6 px-6 py-10 md:p-12">
					<h1 className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
						{title}
					</h1>
					<p className="text-brand-beige/70 max-w-xl text-sm md:text-lg lg:text-xl font-light leading-relaxed">
						{description}
					</p>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-4">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-white/5 flex h-full w-full items-center border-t border-white/10 p-6 sm:p-8 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-4 py-2', className)} {...props}>
			<div className="bg-brand-pink/10 rounded-xl p-3 border border-brand-pink/20">
				<Icon className="h-6 w-6 text-brand-pink" />
			</div>
			<div>
				<p className="font-bold text-white text-sm">{label}</p>
				<p className="text-brand-beige/50 text-xs tracking-wider">{value}</p>
			</div>
		</div>
	);
}
