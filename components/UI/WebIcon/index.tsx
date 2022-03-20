import React from "react";
import { IconTypes } from "../../../icons";
import { clz } from "../../../utility";
import SVGIcon from "../SVGIcon";

export type IconsSizes = "12" | "16" | "20" | "24";

interface IProps {
  size?: IconsSizes;
  name: IconTypes;
}

export type WebIconProps = IProps & React.HTMLAttributes<any>;

const WebIcon = (props: WebIconProps) => {
  const { name, size = "24", className, ...rest } = props;

  const IconSizeClass = React.useMemo(() => {
    let sizeClz = "w-6 h-6";

    if (size === "12") {
      sizeClz = "w-3 h-3";
    }

    if (size === "16") {
      sizeClz = "w-4 h-4";
    }

    if (size === "20") {
      sizeClz = "w-5 h-5";
    }

    if (size === "24") {
      sizeClz = "w-6 h-6";
    }

    return sizeClz;
  }, [size]);

  return (
    <span className={clz("inline-block", IconSizeClass, className)} {...rest}>
      <SVGIcon name={name} className="w-full h-full" />
    </span>
  );
};

export default WebIcon;
