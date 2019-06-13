import React from 'react';
import Dropdown from '@bbc/igm-dropdown-select';
import '@bbc/igm-dropdown-select/dist/DropdownSelect.css';

function MobileNavigation( { options } ) {
    return (
        <div>
            <Dropdown options={options}/>
        </div>
    );
}

export default MobileNavigation;
