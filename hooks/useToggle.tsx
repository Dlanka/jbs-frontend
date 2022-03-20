import React from "react";

interface UseToggleTypes {
  status?: boolean;
}

const useToggle = (options: UseToggleTypes) => {
  const { status = false } = options;
  const [isToggle, setIsToggle] = React.useState<boolean>(status);

  React.useEffect(() => {
    setIsToggle(status);
  }, [status]);

  const onToggleHandler = () => {
    setIsToggle((prev) => !prev);
  };

  return {
    status: isToggle,
    onToggle: onToggleHandler,
  };
};

export default useToggle;
