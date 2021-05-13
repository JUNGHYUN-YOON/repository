
import React,  {Component} from 'react';
import { TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchIcon';

class SearchBar extends Component {

    render(){

        <TextFiedl
            InputProps ={{
                startAdornment:(
                    <InputAdornment position = 'start'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }} />        
    }

}

export default SearchBar;

