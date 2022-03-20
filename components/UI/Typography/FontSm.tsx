import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontSmProps = TextBaseProps;

const FontSm = (props: FontSmProps) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="sm">
      {children}
    </TextBase>
  );
};

export default FontSm;
