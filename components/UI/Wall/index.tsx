import React from "react";
import { clz } from "../../../utility";

interface IProps {}

type WallProps = IProps & React.HtmlHTMLAttributes<HTMLDivElement>;

const Wall = (props: WallProps) => {
  const { children, className, ...rest } = props;

  return (
    <div {...rest} className={clz("rounded-lg bg-white", className)}>
      {children}
    </div>
  );
};

export default Wall;
