import React from "react";
import { IconTypes } from "../../../icons";
import { clz } from "../../../utility";
import SVGIcon from "../SVGIcon";
import WebIcon, { IconsSizes } from "../WebIcon";

interface IProps {
  iconSize?: IconsSizes;
  name: IconTypes;
  iconClassName?: string;
  component?: "a" | "button";
}

export type IconButtonProps = IProps & React.ButtonHTMLAttributes<any>;

const IconButton = (props: IconButtonProps) => {
  const {
    iconSize = "24",
    name,
    className,
    iconClassName,
    component = "button",
    ...rest
  } = props;

  const Component = component;

  return (
    <Component
      {...rest}
      className={clz(
        "w-7 h-7 p-0 flex items-center justify-center rounded-full",
        className
      )}
    >
      <WebIcon name={name} size={iconSize} className={iconClassName} />
    </Component>
  );
};

export default IconButton;
