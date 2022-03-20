import React from "react";
import useToggle from "../../../hooks/useToggle";
import { clz } from "../../../utility";

interface IProps {
  label: string;
  active?: boolean;
  value?: any;
  onSelected?: (val: any, status?: boolean) => void;
}

export type ChipProps = IProps & React.HTMLAttributes<HTMLButtonElement>;

const Chip = (props: ChipProps) => {
  const { label, active, value = null, onSelected, className, ...rest } = props;

  const { status, onToggle } = useToggle({ status: active });

  const activeStatus = React.useMemo(() => {
    return status
      ? "bg-primary text-white"
      : "border-primary text-opacity-50 hover:text-opacity-70 border-opacity-50 hover:border-opacity-70 text-primary";
  }, [status]);

  const onToggleHandler = () => {
    onToggle();
    onSelected && onSelected(value, status);
  };

  return (
    <button
      {...rest}
      type="button"
      className={clz(
        "px-3 py-1 rounded-full  text-center outline-none m-0 text-xxs border select-none",
        className,
        activeStatus
      )}
      onClick={onToggleHandler}
    >
      <span>{label}</span>
    </button>
  );
};

export default Chip;
