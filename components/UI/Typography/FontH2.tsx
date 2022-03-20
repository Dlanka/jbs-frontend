import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontH2Props = TextBaseProps;

const FontH2 = (props: FontH2Props) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="lg">
      {children}
    </TextBase>
  );
};

export default FontH2;
