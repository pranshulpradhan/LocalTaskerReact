import React, { useState, useEffect } from 'react';
import './Alert.css';

const Alert = ({ message, isAlertVisible, onClose }) => {
  const [isVisible, setIsVisible] = useState(isAlertVisible);

  useEffect(() => {
    setIsVisible(isAlertVisible);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [isAlertVisible, onClose]);

  const handleAlertClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div className={`alert ${isVisible ? 'visible' : 'hidden'}`}>
      <span>{message}</span>
      <button className="closeButton" onClick={handleAlertClose}>
        &#10005;
      </button>
    </div>
  );
};

export default Alert;
