'use client';

import { Button, Card, Modal, Typography } from '@/components';
import { useTranslations } from 'next-intl';
import React, { type FC, useState } from 'react';

interface IIncomeCard {
	amount: number;
}

export const IncomeCard: FC<IIncomeCard> = ({ amount }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const t = useTranslations('Vocab');

	return (
		<>
			<Card color="green" className="w-32 space-y-2">
				<div className="flex items-center justify-between">
					<Typography.Title level="h3" className="text-sm capitalize">
						{t('income')}
					</Typography.Title>
					<Button
						className="px-2 rounded-full backdrop-blur-md bg-white/50 text-black/75 font-semibold shadow-md border border-white/50 transition-all hover:bg-white/60 hover:shadow-lg hover:scale-105"
						onClick={() => setIsModalOpen(true)}
					>
						+
					</Button>
				</div>
				<Typography.Text>${amount}</Typography.Text>
			</Card>
			{isModalOpen && (
				<Modal title={t('income')} onClose={() => setIsModalOpen(false)}>
					test
				</Modal>
			)}
		</>
	);
};
