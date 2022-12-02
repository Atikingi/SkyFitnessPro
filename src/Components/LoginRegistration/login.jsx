import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {fetchCreateToken} from "../../Store/Thunks/tokenThunk";
import {BASE_URL} from "../../Store/store";
import axios from "axios";

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
	//
	// const loginError = useSelector(loginErrorSelector)

	const navigate = useNavigate()

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
			username: '',
			first_name: '',
			last_name: '',
			email,
			password,
		}
		setLoginLoading(true)
		try {
			const response = await axios.post(`${BASE_URL}/user/login/`, user)
			sessionStorage.setItem('userName', response.data.username)
			await dispatch(fetchCreateToken(user, ''))
			sessionStorage.setItem('userEmail', email)
			setPasswordError('')
			setLoginLoading(false)
			navigate('/main')
		} catch (error) {
			setLoginLoading(false)
			setEnterError('Не получилось, описание в консоли')
			console.log(error.request.responseText)
		}
	}

	// if (loginError) return <p>${loginError.message}</p>

	return (
		<>
			<LoginBackground/>
			<S.Login>
				<S.Logo/>
				{(emailVisited && emailError) && <S.LoginError>{emailError}</S.LoginError>}
				<input onChange={event => loginHandler(event)} onBlur={event => blurHandler(event)} name='email'
							 placeholder={'Электропочта'}/>

				{(passwordVisited && passwordError) && <S.PasswordError>{passwordError}</S.PasswordError>}
				<input onChange={event => passwordHandler(event)}
							 onBlur={event => blurHandler(event)}
							 onKeyDown={(event) => {
								 if (event.key === 'Enter') enterHandler(event)
							 }}
							 name='password'
							 placeholder='Пароль'/>

				{enterError && <S.PasswordError>{enterError}</S.PasswordError>}
				<Link to='/main'><S.EnterButton disabled={!formValid}
																				onClick={(event) => enterHandler(event)}>Войти</S.EnterButton></Link>
				<Link to='/registration'><S.RegisterButton>Зарегистрироваться</S.RegisterButton></Link>

				{loginLoading && <S.LoadingSpinner/>}
			</S.Login>
		</>
	)
}
