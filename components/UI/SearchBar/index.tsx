import React from "react";

import Input from "../Forms/Input";
import WebIcon from "../WebIcon";




const SearchBar = () => {
  const [isToggleFilter, setIsToggleFilter] = React.useState(false);

  const toggleStyles = React.useMemo(() => {
    let styles = "bg-gary-400 text-secondary-400";

    if (isToggleFilter) {
      styles = "bg-primary text-white";
    }

    return styles;
  }, [isToggleFilter]);


  return (
    <div
      className="flex justify-between "
    >
      <div className="flex-1 flex items-center justify-between relative">
        <WebIcon
          name="SearchIcon"
          size="16"
          className="text-secondary-600 absolute left-2"
        />
        <Input type="text" placeholder="Search" className="pl-8  w-full" />
      </div>

      {/* <IconButton
        name="FilterIcon"
        onClick={() => setIsToggleFilter((prev) => !prev)}
        iconSize="16"
        className={clz("ml-2", toggleStyles)}
      /> */}
    </div>
  );
};

export default SearchBar;
