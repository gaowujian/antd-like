import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import "./styles/index.scss";

export type ButtonType = "default" | "primary" | "secondary" | "link";
export type ButtonSize = "sm" | "lg";

type ButtonProps = ButtonHTMLAttributes<any> & {
  btnType?: ButtonType;
  size?: ButtonSize;
  href?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, size, href, disabled, children } = props;
  const classes = classNames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: disabled && btnType !== "link",
  });
  //
  if (btnType === "link") {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: "default",
};
export default Button;
