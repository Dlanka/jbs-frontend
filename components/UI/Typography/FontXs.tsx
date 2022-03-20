import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontXsProps = TextBaseProps;

const FontXs = (props: FontXsProps) => {
  const { children, ...rest } = props;
  return (
    <TextBase {...rest} size="xs">
      {children}
    </TextBase>
  );
};

export default FontXs;
