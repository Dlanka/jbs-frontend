import React from "react";
import { clz } from "@/utility";
import useStyleClasses, { ButtonColors } from "@/hooks/useStyleClasses";

interface IProps {
  component?: "a" | "button";
  variant?: ButtonColors;
}

type ButtonProps = IProps &
  React.ButtonHTMLAttributes<any> &
  React.AnchorHTMLAttributes<any>;

const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    component = "button",
    variant = "primary",
    ...rest
  } = props;

  const { button } = useStyleClasses();

  const variantClass = React.useMemo(() => {
    let styles = button.primary;

    if (variant === "secondary") {
      styles = button.secondary;
    }

    return styles;
  }, [variant, button]);

  const Component = component;

  return (
    <Component {...rest} className={clz("btn", variantClass, className)}>
      {children}
    </Component>
  );
};

export default Button;
