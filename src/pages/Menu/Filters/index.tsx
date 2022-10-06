import styles from './Filters.module.scss';
import React from 'react';
import filters from './filters.json';

import classNames from 'classnames';

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<null | number>>
}

export default function Filters({ filter, setFilter }: Props) {
	const selectFilter = (option: IOption) => {
		return filter === option.id ? setFilter(null) : setFilter(option.id);
	};

	return (
		<div className={styles.filters}>
			{filters.map((option) => (
				<button onClick={() => selectFilter(option)} className={classNames({
					[styles.filters__filter]: true,
					[styles['filters__filter--active']]: filter === option.id
				})} key={option.id}>
					{option.label}
				</button>
			))}
		</div>
	);
}