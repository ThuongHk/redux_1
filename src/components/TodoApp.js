import React from 'react';
// import {jobsSelector} from '../redux/selector';
import {useDispatch,useSelector} from 'react-redux';
import {addJob} from '../redux/actions';
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function TodoApp(props) {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const listJobs = useSelector(state => state);
     console.log(listJobs);
    const handleChange = (e)=>{
      setText(e.target.value)
    //   console.log(e.target.value);
    }

    const handleClickAddTodo = () => {
        dispatch(addJob({
            id: uuidv4(),
            name: text,
            complete: false

        }))
        setText('')

    }

    return (
            <div>
            <p>Search:</p>
            <input type="text"/>
            <p> Nhập công việc:</p>
            <input type='text' value={text} onChange={handleChange}/>  <button onClick={handleClickAddTodo} type="submit">Thêm</button>

            <div>{listJobs.map((job)=>(<li key={job.id}>{job.name}</li>))}</div>
            </div>
    );
}

export default TodoApp;