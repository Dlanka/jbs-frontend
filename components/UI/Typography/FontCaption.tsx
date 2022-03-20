import { clz } from "@/utility";
import React from "react";
import TextBase, { TextBaseProps } from "./TextBase";

type FontCaptionProps = TextBaseProps;

const FontCaption = (props: FontCaptionProps) => {
  const { children, className, ...rest } = props;
  return (
    <TextBase {...rest} size="xxs" className={clz(className)}>
      {children}
    </TextBase>
  );
};

export default FontCaption;
