import React from "react";

interface IProps {}

export type InputProps = IProps & React.InputHTMLAttributes<any>;

const Input = (props: InputProps) => {
  const {className,...rest} = props;

  return <input {...rest} className={["input-feild",className].join(' ')}/>;
};

export default Input;
