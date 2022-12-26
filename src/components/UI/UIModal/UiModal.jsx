import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styles from './style.module.css';

const UIModal = ({ children }) => {
  const mount = document.getElementById('modal');
  mount.classList.add(styles.wrapper);
  const element = document.createElement('div');
  element.classList.add(styles.content);

  useEffect(() => {
    mount.appendChild(element);
    return () => {
      mount.removeChild(element);
    };
  }, [mount, element]);

  return createPortal(children, element);
};

export default UIModal;
