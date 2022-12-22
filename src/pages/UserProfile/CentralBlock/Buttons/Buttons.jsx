import React, { useState } from 'react';
import styles from './style.module.css';
import { UIButton } from '../../../../components/UI/UIButton/UIButton';
import UIModal from '../../../../components/UI/UIModal/UiModal';
import { NewLogin } from '../../../../components/LoginRegistration/NewLoginPassword/NewLogin';
import { NewPassword } from '../../../../components/LoginRegistration/NewLoginPassword/NewPassword';

const Buttons = () => {
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showResetUsernameModal, setShowResetUsernameModal] = useState(false);

  const showPasswordModal = () => {
    setShowResetPasswordModal((prevState) => !prevState);
  };

  const showUsernameModal = () => {
    setShowResetUsernameModal((prevState) => !prevState);
  };

  return (
    <div className={styles.buttons}>
      <UIButton onClick={showUsernameModal}>Редактировать логин</UIButton>
      <UIButton onClick={showPasswordModal}>Редактировать пароль</UIButton>
      {showResetUsernameModal && (
        <UIModal>
          <NewLogin closeModal={showUsernameModal} />
        </UIModal>
      )}
      {showResetPasswordModal && (
        <UIModal>
          <NewPassword closeModal={showPasswordModal} />
        </UIModal>
      )}
    </div>
  );
};

export default Buttons;
