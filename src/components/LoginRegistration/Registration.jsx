import React, { useEffect, useState } from 'react';

import styles from './style.module.css';
import { UIButton } from '../UI/UIButton/UIButton';
import Logo from '../Logo/Logo';

export function Registration() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState('Логин не может быть пустым');
  const [passwordError, setError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  const loginHandler = (event) => {
    const login = event.target.value;
    setLogin(login);
  };

  const emailHandler = (event) => {
    const email = event.target.value;
    setEmail(email);
    email ? setEmailError('') : setEmailError('E-mail не может быть пустым');
    const regex = /.+@.+\..+/i;
    regex.test(String(email).toLowerCase())
      ? setEmailError('')
      : setEmailError('Некорректный e-mail');
  };

  const passwordHandler = (event) => {
    switch (event.target.name) {
      case 'password':
        setPassword(event.target.value);
        break;
      case 'passwordRepeat':
        setPasswordRepeat(event.target.value);
        break;
    }
    if (event.target.value.length < 8 || event.target.value.length > 16) {
      setError('Пароль должен быть от 8 до 16 символов');
      if (!event.target.value) {
        setError('Пароль не может быть пустым');
      }
    } else {
      setError('');
    }
  };

  const blurHandler = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmailVisited(true);
        break;
      case 'password':
        setPasswordVisited(true);
        break;
    }
  };

  useEffect(() => {
    emailError || passwordError ? setFormValid(false) : setFormValid(true);
  }, [emailError, passwordError]);

  function comparePasswords(event) {
    event.preventDefault();
    if (!passwordRepeat) {
      setError('Повторите пароль');
      return;
    }
    password === passwordRepeat ? createUser() : setError('Пароли не совпадают');
  }

  async function createUser() {
    const user = {
      username: login,
      first_name: '',
      last_name: '',
      email,
      password
    };
    setLoginLoading(true);
    try {
      // await axios.post(`${BASE_URL}/user/signup/`, user )
      // await axios.post(`${BASE_URL}/user/login/`, user)
      // await dispatch(fetchCreateToken(user, ''))
      setLoginLoading(false);
      // navigate('/main')
    } catch (error) {
      setLoginLoading(false);
      setError('Не получилось, описание в консоли');
      console.log(error.request.responseText);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginModalBlock}>
        <div className={styles.inputBlock}>
          <Logo />
          {/*<input className={styles.input}*/}
          {/*			 onChange={event => loginHandler(event)}*/}
          {/*			 value={login}*/}
          {/*			 name='name'*/}
          {/*			 placeholder='Имя'*/}
          {/*			 type='text'/>*/}

          {emailVisited && emailError && <div className={styles.loginError}>{emailError}</div>}
          <input
            className={styles.input}
            onChange={(event) => emailHandler(event)}
            value={email}
            onBlur={(event) => blurHandler(event)}
            name="email"
            placeholder="Электропочта"
            type="text"
          />

          {passwordVisited && passwordError && (
            <div className={styles.passwordError}>{passwordError}</div>
          )}
          <input
            className={styles.input}
            onChange={(event) => passwordHandler(event)}
            value={password}
            onBlur={(event) => blurHandler(event)}
            name="password"
            placeholder="Пароль"
            type="text"
          />

          <input
            className={styles.input}
            onChange={(event) => passwordHandler(event)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') comparePasswords(event);
            }}
            name="passwordRepeat"
            placeholder="Повторите пароль"
            type="text"
          />
        </div>
        {/*<Link to={'/main'}>*/}
        <div className={styles.buttonBlock}>
          <UIButton
            disabled={!formValid}
            onClick={(event) => comparePasswords(event)}
            text="Зарегистрироваться"
          />
          {/*</Link>*/}
        </div>
        {loginLoading && <div className={styles.loadingSpinner}></div>}
      </div>
    </div>
  );
}
