import React from "react";
import Dropdown from "@bbc/igm-dropdown-select";
import "@bbc/igm-dropdown-select/dist/DropdownSelect.css";

function MobileNavigation({ options }) {
  function relativePathMatches(route) {
    return window.location.pathname.endsWith(`/${route}`);
  };

  const dropDownOptions = options.map(option => {
    return { value: option, label: option };
  });

  return (
    <div>
      <Dropdown options={dropDownOptions} />
    </div>
  );
}

export default MobileNavigation;
