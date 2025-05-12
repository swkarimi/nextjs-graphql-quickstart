'use client';

import { Typography } from '@/components';
import { Card } from '@/components';
import { useTranslations } from 'next-intl';
import React, { type FC } from 'react';

interface IBalance {
	balance: number;
}

export const BalanceCard: FC<IBalance> = ({ balance }) => {
	const t = useTranslations('Vocab');

	return (
		<Card color="gray" className="w-52">
			<Typography.Title level="h3" className="text-sm capitalize">
				{t('balance')}
			</Typography.Title>
			<Typography.Text>${balance}</Typography.Text>
		</Card>
	);
};
