import { clz } from "@/utility";
import React, { Children, ReactNode } from "react";
import { TextCaption } from "../Typography";

interface FilterContentProps {
  children: ReactNode;
  title: string;
  containerClassName?: string;
}

const FilterContent = (props: FilterContentProps) => {
  const { children, title, containerClassName } = props;
  return (
    <div className={clz("flex flex-col", containerClassName)}>
      <TextCaption component="span" color="secondary_600">
        {title}
      </TextCaption>

      <div className="flex flex-wrap mt-1">{children}</div>
    </div>
  );
};

export default FilterContent;
