import React, { useState } from "react";
import Dropdown from "@bbc/igm-dropdown-select";
import { withRouter } from "react-router-dom";
import "@bbc/igm-dropdown-select/dist/DropdownSelect.css";

function MobileNavigation({ options, history }) {
  const dropDownOptions = options.map(option => {
    return { value: option, label: option };
  });

  const getCurrentOption = () =>
    dropDownOptions.find(
      option => option.value === history.location.pathname.split("/").pop()
    ) || null;

  const [selectedOption, setSelectedOption] = useState(getCurrentOption());

  const handleSelect = option => {
    console.log('options', JSON.stringify(option, null, 2));
    setSelectedOption(option);
    console.log('selectedOption', JSON.stringify(option, null, 2));
    history.push(`/${option.value}`);
  };
  return (
    <div>
      <Dropdown
        options={dropDownOptions}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
}

export default withRouter(MobileNavigation);
