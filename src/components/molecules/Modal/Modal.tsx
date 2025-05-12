'use client';

import { Button, Icon, Portal } from '@/components';
import classNames from 'classnames';
import { type FC, type MouseEvent, type ReactNode, useEffect } from 'react';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
	title?: string;
	maxWidth?: string;
	className?: string;
}

export const Modal: FC<ModalProps> = ({
	children,
	onClose,
	title,
	maxWidth = 'max-w-[500px]',
	className = '',
}) => {
	const handleOverlayClick = (e: MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	useEffect(() => {
		const handleEscapeKey = (e: globalThis.KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		};

		document.addEventListener('keydown', handleEscapeKey);

		return () => {
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [onClose]);

	return (
		<Portal selector="#modal-root">
			<div
				className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
				onClick={handleOverlayClick}
				onKeyDown={(e) => console.log(e)}
			>
				<div
					className={classNames(
						'relative bg-white rounded-2xl w-full p-4 shadow-xl',
						maxWidth,
						className,
					)}
				>
					<Button
						onClick={onClose}
						className="absolute size-6 rounded-full top-1 rtl:left-1 ltr:right-1 hover:bg-gray-200 duration-100"
					>
						<Icon name="Close" className="mx-auto" size="1em" />
					</Button>
					{title && (
						<h2 className="text-xl font-semibold mb-4 text-gray-800">
							{title}
						</h2>
					)}
					<div>{children}</div>
				</div>
			</div>
		</Portal>
	);
};
