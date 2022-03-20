import React from "react";
import { IconTypes } from "../../../icons";

import * as Icons from "../../../icons";

export interface IProps {
  name?: IconTypes;
}

type SVGIconProps = IProps & React.SVGProps<SVGSVGElement>;

const SVGIcon = (props: SVGIconProps) => {
  const { name, ...rests } = props;

  const IconComponent = React.useMemo(() => {
    return Icons[name!];
  }, [name]);

  return <IconComponent {...rests} />;
};

export default SVGIcon;
