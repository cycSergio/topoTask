import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Filter.css';

const Filter = (props) => {
    const [keyword, setKeyword] = useState('');

    // get user's input in the filter bar
    const inputChangeHandler = e => {
        setKeyword(e.target.value.trim());
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            props.onFilter(keyword);
        }, 1000)
        
        return () => {
            clearTimeout(timer);
        }
    }, [keyword]
    )


    return (
        <div className='Filter'>
            <div className='InputWrapper'>
                <input
                    value={keyword} 
                    onChange={inputChangeHandler}
                    className={'SearchInput'}
                    type='text'
                    placeholder={"Please enter a search keyword."} />
                <FontAwesomeIcon
                    className={'SearchIcon'}
                    icon={faSearch} />
            </div>

        </div>
    )
}

export default Filter