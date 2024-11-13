import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export function ButtonComponent(props) {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = "Hey! I changed";
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = "I changed again!";
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <button ref={buttonRef} onClick={props.onClick}>
      Click me!
    </button>
  );
}

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};
