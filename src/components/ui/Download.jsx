import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Download = () => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret size="sm" color="secondary" style={{background:'transparent', border:'none'}}>
                <i className="fas fa-download"></i>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem><i className="fas fa-file-excel mr-2"></i>Excel</DropdownItem>
                <DropdownItem><i className="fas fa-file-pdf mr-2"></i>PDF</DropdownItem>
                <DropdownItem><i className="fas fa-file-csv mr-2"></i>CSV</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}
 
export default Download;