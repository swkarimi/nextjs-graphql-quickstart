import { BalanceCard } from '@/components';
import { IncomeCard } from '@/components';
import { ExpenseCard } from '@/components';
import React, { type FC } from 'react';

// type IAccountOverview = {};

export const AccountOverview: FC = () => {
	return (
		<div className="flex gap-1 p-4 w-full">
			<BalanceCard balance={2500} />
			<div className="flex flex-col gap-1">
				<IncomeCard amount={4000} />
				<ExpenseCard amount={1500} />
			</div>
		</div>
	);
};
