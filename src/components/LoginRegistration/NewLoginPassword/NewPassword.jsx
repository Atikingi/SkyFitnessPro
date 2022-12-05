import React from 'react'
import style from './style.module.css';
import Logo from "../../Logo/Logo";
import {UIButton} from "../../UI/UIButton/UIButton";
import {useState} from "react";

export const NewPassword = () => {

	return (
		<div className={style.newPasswordModal}>
			<Logo/>
			<div className={style.sign}>Новый пароль:</div>
			<div className={style.inputBlock}>
				<input className={style.input}
					// onChange={event => passwordHandler(event)}
					// value={password}
					// onBlur={event => blurHandler(event)}
							 name='password'
							 placeholder='Пароль'
							 type='text'/>
				<input className={style.input}
					// onChange={event => passwordHandler(event)}
					// onKeyDown={event => {
					//  if (event.key === 'Enter') comparePasswords(event)
					// }}
							 name='passwordRepeat'
							 placeholder='Повторите пароль'
							 type='text'/>
			</div>
			<UIButton text='Сохранить'
				// onClick={(event) => saveHandler(event)}
			/>
		</div>
	)
}