import styles from './Items.module.scss';
import menu from 'data/menu.json';
import Item from './Item';
import { useEffect, useState } from 'react';

interface Props {
  search: string;
  filter: number | null;
  sort: string;
}

export default function Items({ search, filter, sort }: Props) {
	const [list, setList] = useState(menu);

	const testSearch = (title: string) => {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	};

	const testFilter = (id: number) => {
		if (filter) return filter === id;
		return true;
	};
  
	const sortList = (newList: typeof menu) => {
		switch (sort) {
		case 'portion':
			return newList.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'amount_people':
			return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'price':
			return newList.sort((a, b) => a.price > b.price ? 1 : -1);
		default:
			return newList;
        
		}
	};

	useEffect(() => {
		const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
		setList(sortList(newList));
	}, [search, filter]);

	return (
		<div className={styles.items}>
			{list.map(item => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}