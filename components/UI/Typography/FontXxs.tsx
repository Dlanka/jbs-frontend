import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontXxsProps = TextBaseProps;

const FontXxs = (props: FontXxsProps) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="xxs">
      {children}
    </TextBase>
  );
};

export default FontXxs;
