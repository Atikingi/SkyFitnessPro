import styles from './style.module.css';

export const UIButton = (props) => {
	return (
		<button className={styles.button}
						onClick={props.onClick}
						disabled={props.disabled}>
			{props.loading ? <div className={styles.loadingSpinner}/> : props.text}
		</button>
	);
};
