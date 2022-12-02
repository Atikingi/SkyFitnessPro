import styles from './style.module.css'

export const UiButton = (props) => {
	return(
		<button className={styles.button} onClick={props.onClick}>{props.title}</button>
	)
}