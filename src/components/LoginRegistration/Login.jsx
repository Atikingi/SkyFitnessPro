import {useEffect, useState} from 'react';

import styles from './style.module.css';
import {Registration} from "./Registration";
import {UIButton} from "../UI/UIButton/UIButton";
import Logo from "../Logo/Logo";

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('Логин не может быть пустым')
	const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
	const [emailVisited, setEmailVisited] = useState(false)
	const [passwordVisited, setPasswordVisited] = useState(false)
	const [formValid, setFormValid] = useState(false)
	const [enterError, setEnterError] = useState('')
	const [loginLoading, setLoginLoading] = useState(false)

	// const dispatch = useDispatch()

	// const loginError = useSelector(loginErrorSelector)
	const loginError = false

	// const navigate = useNavigate()

	const loginHandler = (event) => {
		const email = event.target.value
		setEmail(email)
		setEmailError(email ? '' : 'E-mail не может быть пустым')
	}
	const passwordHandler = (event) => {
		setPassword(event.target.value)
		event.target.value ? setPasswordError('') : setPasswordError('Пароль не может быть пустым')
	}
	const blurHandler = (event) => {
		switch (event.target.name) {
			case 'email':
				setEmailVisited(true)
				break
			case 'password':
				setPasswordVisited(true)
				break
		}
	}
	useEffect(() => {
		setFormValid(!(emailError || passwordError))
	}, [emailError, passwordError])

	async function enterHandler(event) {
		event.preventDefault()

		const user = {
			username: 'Megapixar',
			first_name: '',
			last_name: '',
			email,
			password,
		}
		setLoginLoading(true)
		try {
			// const response = await axios.get(`./stub.json`)
			sessionStorage.setItem('userName', user.username)
			// await dispatch(fetchCreateToken(user, ''))
			sessionStorage.setItem('userEmail', email)
			setPasswordError('')
			setLoginLoading(false)
			// navigate('/main')
		} catch (error) {
			setLoginLoading(false)
			setEnterError('Не получилось, описание в консоли')
			console.log(error.request.responseText)
		}
	}

	const registerHandler = (event) => {
		event.preventDefault()
		// navigate('/registration')
	}

	if (loginError) return <p>${loginError.message}</p>

	return (
		<div className={styles.container}>
			<div className={styles.loginModalBlock}>
				<div className={styles.inputBlock}>
					<Logo/>
					{emailVisited && emailError && <div className={styles.loginError}>{emailError}</div>}
					<input
						className={styles.input}
						onChange={(event) => loginHandler(event)}
						onBlur={(event) => blurHandler(event)}
						name="email"
						placeholder="Электропочта"
					/>

					{passwordVisited && passwordError && (
						<div className={styles.passwordError}>{passwordError}</div>
					)}
					<input
						className={styles.input}
						onChange={(event) => passwordHandler(event)}
						onBlur={(event) => blurHandler(event)}
						onKeyDown={(event) => {
							if (event.key === 'Enter') enterHandler(event);
						}}
						name="password"
						placeholder="Пароль"
					/>
				</div>

				{enterError && <div className={styles.passwordError}>{enterError}</div>}
				<div className={styles.buttonBlock}>
					{/*<Link to="/main">*/}
					<UIButton
						disabled={!formValid}
						onClick={(event) => enterHandler(event)}
						text='Войти'
					/>
					{/*</Link>*/}
					{/*<Link to="/registration">*/}
					<UIButton onClick={(event) => registerHandler(event)}
										text='Зарегистрироваться'/>
					{/*</Link>*/}
				</div>

				{loginLoading && <div className={styles.loadingSpinner}></div>}
			</div>
		</div>
	);
}
