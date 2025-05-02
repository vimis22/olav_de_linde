import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import {TouchableOpacity} from 'react-native';

/*
@link https://www.youtube.com/watch?v=J9raEY-1KPQ
 */
interface DropdownMenuProps {
    data: any;
    setSelected: any;
    search: boolean;
    dropdownStyles: object;
    dropdownItemStyles: object;
    dropdownItemTextStyle: object;
    searchBoxStyles: object;
    searchBoxTextStyle: object;
    placeholder: string;
    optionsHeight: any;
    optionsWidth: any;
    containerHeight: any;
    containerWidth: any;
    backgroundColor: string;
    textColor: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({data, setSelected, search, dropdownStyles, dropdownItemStyles, placeholder, optionsHeight: optionsHeight, optionsWidth: optionsWidth, containerHeight, containerWidth, dropdownItemTextStyle, searchBoxStyles: searchBoxStyles, searchBoxTextStyle, backgroundColor = '#330099'}) => {
    return (
        <TouchableOpacity style={{height: containerHeight, width: containerWidth, backgroundColor: backgroundColor}}>
            <SelectList data={data} setSelected={setSelected} search={search} dropdownStyles={{ ...dropdownStyles, height: optionsHeight, width: optionsWidth }} dropdownItemStyles={{ ...dropdownItemStyles, ...dropdownItemTextStyle }}
                        placeholder={placeholder} inputStyles={{ ...searchBoxStyles, ...searchBoxTextStyle }}/>
        </TouchableOpacity>
    );
};

export default DropdownMenu;
