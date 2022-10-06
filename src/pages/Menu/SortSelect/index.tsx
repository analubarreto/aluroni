import styles from './SortSelect.module.scss';
import options from './options.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function SortSelect({ sort, setSort }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const sortName = sort && options.find(option => option.value === sort)?.name;

	return (
		<button
			className={classNames({
				[styles.sortSelect]: true,
				[styles['sortSelect--active']]: sort !== ''
			})}
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen(!isOpen)}
		>
			<span>{ sortName || 'Order by:' }</span>
			{isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
			<div className={classNames({
				[styles.sortSelect__options]: true,
				[styles['sortSelect__options--active']]: isOpen
			})}>
				{
					options.map(option => (
						<div className={styles.sortSelect__option} key={option.value} onClick={() => setSort(option.value)}>
							{option.name}
						</div>
					))
				}
			</div>
		</button>
	);
}