import React, { ButtonHTMLAttributes, LinkHTMLAttributes } from "react";
import classNames from "classnames";
import "./style.scss";

export type ButtonType = "default" | "primary" | "secondary" | "danger" | "link";
export type ButtonSize = "sm" | "lg";

// 组件单独支持的属性
interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  href?: string;
  disabled?: boolean; //对于这种原生就有的属性要做好赋值
}
// 支持的所有属性
type ButtonProps = ButtonHTMLAttributes<HTMLElement> & LinkHTMLAttributes<HTMLElement> & BaseButtonProps;

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType = "default", size, href, disabled, children, className, ...rest } = props;
  const classes = classNames(
    "btn",
    {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size,
      disabled: disabled && btnType !== "link",
    },
    className
  );
  //必须是link类型且href属性才能算做一个link button
  if (btnType === "link" && href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
