import {useState} from 'react';

const useModal = (initialState = false) => {
  const [isVisible, setIsVisible] = useState(initialState);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return {
    isVisible,
    openModal,
    closeModal,
  };
};

export default useModal;
