import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontBodyProps = TextBaseProps;

const FontBody = (props: FontBodyProps) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="base">
      {children}
    </TextBase>
  );
};

export default FontBody;
