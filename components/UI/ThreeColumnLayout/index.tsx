import { clz } from "@/utility";
import React from "react";

interface ThreeColumnLayoutProps {
  centerContent: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  centerClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
  outerClassName?: string;
}

const ThreeColumnLayout = (props: ThreeColumnLayoutProps) => {
  const {
    centerContent,
    leftContent,
    rightContent,
    leftClassName,
    rightClassName,
    centerClassName,
    outerClassName,
  } = props;

  return (
    <div
      className={clz("grid lg:grid-cols-[25%,auto,25%] gap-6", outerClassName)}
    >
      <div className={leftClassName}>{leftContent}</div>
      <div className={centerClassName}>{centerContent}</div>
      <div className={rightClassName}>{rightContent}</div>
    </div>
  );
};

export default ThreeColumnLayout;
