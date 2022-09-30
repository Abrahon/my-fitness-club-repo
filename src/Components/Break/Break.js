import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Break.css'

const Break = ({ list }) => {
    let times = 0;
    for (const time of list) {
        times = parseFloat(times + time.time);

    }
    const [seconds, setSeconds] = useState([])
    const [breakTime, setBreakTime] = useState([0])

    useEffect(() => {
        fetch('data2.json')
            .then(res => res.json())
            .then(data => setSeconds(data))
    }, [])
    // console.log(seconds)

    const handleBreakTime = selectBreakTime => {
        localStorage.setItem("Break-Time", selectBreakTime);
        setBreakTime(selectBreakTime);
    };
    //console.log('slect');

    const notify = () => toast("Wow finally done!");

    return (
        <div className='informatin-list'>
            <h4 className='my-4'>Add A Break</h4>
            <div className='button'>
                <button onClick={(e) => handleBreakTime(e.target.innerText)} className=' flex-button'><p className='btn-p'>10s</p></button>
                <button onClick={(e) => handleBreakTime(e.target.innerText)} className=' flex-button'><p>20s</p></button>
                <button onClick={(e) => handleBreakTime(e.target.innerText)} className=' flex-button'><p>30s</p></button>
                <button onClick={(e) => handleBreakTime(e.target.innerText)} className=' flex-button'><p>40s</p></button>
                <button onClick={(e) => handleBreakTime(e.target.innerText)} className=' flex-button'><p>50s</p></button>
            </div >

            <div className='mt-5'>
                <h4 className=''>Exercise Details</h4>
                <h5 className='my-4 time'>Exercise time :{times} seconds </h5>
                <h5 className='time'>Break time:{breakTime}</h5>

            </div>
            <button onClick={notify} className='btn-cart mt-5'>
                <h5 className='btn-text'>Activity Completed</h5>

            </button>
            <ToastContainer />
        </div >
    );
};

export default Break;