import React, { ReactNode } from "react";
import { clz } from "../../../utility";

interface IProps {}

export type ContainerProps = IProps & React.HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...rest }: ContainerProps) => {
  return (
    <div
      {...rest}
      className={clz(
        "md:container flex flex-col justify-center mx-auto px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
