import style from './style.module.css';
import Logo from "../../Logo/Logo";
import {UIButton} from "../../UI/UIButton/UIButton";


export const NewLogin = () => {
	return(
		<div className={style.newLoginModal}>
			<Logo/>
			<div className={style.sign}>Новый логин:</div>
			<input className={[style.input, style.inputBlock].join(' ')}  name='логин' placeholder='Логин'/>
			<UIButton text='Сохранить'/>
		</div>
	)
}