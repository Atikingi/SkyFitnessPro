import { useState } from 'react';
import { UIButton } from '../../../../components/UI/UIButton/UIButton';
import UIModal from '../../../../components/UI/UIModal/UiModal';
import { NewLogin } from '../../../../components/LoginRegistration/NewLoginPassword/NewLogin';
import { NewPassword } from '../../../../components/LoginRegistration/NewLoginPassword/NewPassword';
import styles from './style.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import { backdrop } from '../../../../constants/animationSettings';

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
      <AnimatePresence>
        {showResetUsernameModal && (
          <UIModal>
            <motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit">
              <NewLogin closeModal={showUsernameModal} />
            </motion.div>
          </UIModal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResetPasswordModal && (
          <UIModal>
            <motion.div variants={backdrop} initial="hidden" animate="visible" exit="exit">
              <NewPassword closeModal={showPasswordModal} />
            </motion.div>
          </UIModal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Buttons;
