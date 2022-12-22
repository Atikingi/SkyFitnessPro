export const passwordHandler = (event, setPassword, setPasswordRepeat, setError) => {
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
