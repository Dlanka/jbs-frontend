import React from "react";

export type TexTSizes = "xxs" | "xs" | "sm" | "lg" | "xl" | "base" | "2xl";

export type TexTColors =
  | "primary"
  | "secondary_400"
  | "secondary_600"
  | "black"
  | "white";

export type ButtonColors = "primary" | "secondary";

const useStyleClasses = () => {
  const sizes = {
    xxs: "text-xxs",
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  };

  const colors = {
    primary: "text-primary",
    secondary_400: "text-secondary-400",
    secondary_600: "text-secondary-600",
    black: "text-black",
    white: "text-white",
  };

  const button = {
    primary: "text-white bg-primary hover:bg-opacity-80",
    secondary: "text-white bg-secondary-400 hover:bg-opacity-80",
  };

  return {
    sizes,
    colors,
    button,
  };
};

export default useStyleClasses;
