import menu from 'data/menu.json';
import styles from './Start.module.scss';

export default function Start() {
	let recommendedDishes = [...menu];
	recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
	return (
		<section>
			<h3 className={styles.title}>Chef's recommendations</h3>
			<div className={styles.recommendedItems}>
				{
					recommendedDishes.map(item => (
						<div key={item.id} className={styles.recommendedItem}>
							<div className={styles.recommendedItem__image}>
								<img src={item.photo} alt={item.title} />
							</div>
							<button className={styles.recommendedItem__button}>See more</button>
						</div>
					))
				}
			</div>
		</section>
	);
}