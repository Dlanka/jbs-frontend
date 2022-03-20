import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontH1Props = TextBaseProps;

const FontH1 = (props: FontH1Props) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="xl">
      {children}
    </TextBase>
  );
};

export default FontH1;
