import React from "react";
import { Children } from "react";

interface AdsListProps {
  children: React.ReactNode;
}

const AdsList = (props: AdsListProps) => {
  const { children } = props;
  return <div className="block">{children}</div>;
};

export default AdsList;
