import classNames from 'classnames';
import React, { type FC, type ReactNode } from 'react';

interface IColor {
	color: 'green' | 'red' | 'gray';
	className?: string;
	children: ReactNode;
}

const colorClasses: Record<IColor['color'], string> = {
	green: 'from-green-300 to-green-100 border-green-300',
	red: 'from-red-300 to-red-100 border-red-300',
	gray: 'from-gray-300 to-gray-100 border-gray-300',
};

export const Card: FC<IColor> = ({ color, className = '', children }) => {
	return (
		<div
			className={classNames(
				'p-2 rounded-2xl bg-gradient-to-r shadow-lg border',
				colorClasses[color],
				className,
			)}
		>
			{children}
		</div>
	);
};
