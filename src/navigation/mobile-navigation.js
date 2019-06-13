import React, { useState } from "react";
import Dropdown from "@bbc/igm-dropdown-select";
import { withRouter } from "react-router-dom";
import "@bbc/igm-dropdown-select/dist/DropdownSelect.css";
import capitalise from '../text-helpers';

function MobileNavigation({ options, history }) {
  const dropDownOptions = options.map(option => {
    return { value: option, label: capitalise(option) };
  });

  const getCurrentOption = () =>
    dropDownOptions.find(
      option => option.value === history.location.pathname.split("/").pop()
    ) || null;

  const [selectedOption, setSelectedOption] = useState(getCurrentOption());

  const handleSelect = option => {
    setSelectedOption(option);
    history.push(`/${option.value}`);
  };

  return (
    <div>
      <Dropdown
        options={dropDownOptions}
        value={selectedOption}
        onChange={handleSelect}
        useDropdownIndicator
      />
    </div>
  );
}

export default withRouter(MobileNavigation);
