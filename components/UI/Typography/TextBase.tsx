import React from "react";

import useStyleClasses, {
  TexTColors,
  TexTSizes,
} from "@/hooks/useStyleClasses";
import { clz } from "@/utility";

export type ComponentTypes =
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "div"
  | "a";

interface IProps {
  size?: TexTSizes;
  component?: ComponentTypes;
  color?: TexTColors;
}

export type TextBaseProps = IProps &
  React.HTMLAttributes<any> &
  React.AnchorHTMLAttributes<any>;

const TextBase = (props: TextBaseProps) => {
  const {
    size = "xs",
    children,
    component = "div",
    className,
    color = "secondary_400",
    ...rest
  } = props;

  const { sizes, colors } = useStyleClasses();

  const sizeClass = React.useMemo(() => {
    return sizes[size];
  }, [size, sizes]);

  const colorClass = React.useMemo(() => {
    return colors[color];
  }, [color, colors]);

  const Component = component;

  return (
    <Component {...rest} className={clz(sizeClass, colorClass, className)}>
      {children}
    </Component>
  );
};

export default TextBase;
