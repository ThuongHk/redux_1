import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchJob} from '../../redux/actions';

function Search(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        dispatch(searchJob(e.target.value))
        // console.log(e.target.value);
    }
    return (
        <div>
              <p>Search:</p>
            <input type="text" value={text} onChange={handleChange}/>
        </div>
    );
}

export default Search;