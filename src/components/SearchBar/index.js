import styles from './SearchBar.module.scss';

import {FaSearch} from 'react-icons/fa';
import classNames from 'classnames/bind';
import React, {useState} from 'react';
import { Button } from '@mui/material';

const cx = classNames.bind(styles);


function SearchBar({setResult}) {
    const [input, setInput] = useState("");

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const result = json.filter((user) => {
                return input && user && user.name && user.name.toLowerCase().includes(input);
            })

            console.log(result);
        });
    };
    
    const handleChange = (value) => {
        setInput(value);
    };
    

    return ( 
        <div className={cx('input-wrapper')}>
            <FaSearch className={cx('search-icon')}/>
            <input 
            placeholder='Join room with code' 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
            />
            <Button onClick={fetchData}>Search</Button>
        </div>
     );
}

export default SearchBar;