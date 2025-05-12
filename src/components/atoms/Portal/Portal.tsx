'use client';

import { type FC, type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
	children: ReactNode;
	selector: string;
}

export const Portal: FC<IPortal> = ({ children, selector }) => {
	const [mounted, setMounted] = useState(false);
	const [target, setTarget] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setMounted(true);
		const el = document.querySelector(selector);
		if (el instanceof HTMLElement) {
			setTarget(el);
		}
	}, [selector]);

	if (!target || !mounted) return null;
	return createPortal(children, target);
};
