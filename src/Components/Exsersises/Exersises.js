import React, { useEffect, useState } from 'react';
import style from '../images/style.jpg'
import './Exersises.css';

const Exersises = () => {
    const [exersise, setExersise] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div class="exersise">
            <h2>Select today's exersise</h2>

            <div className='exersiser-container'>
                <div className='exersise-details'>

                    <img src={style} alt="" />
                    <div>
                        <h4>Abrahon Mahmud Sujon</h4>
                        <p>Rangpur, Bangladesh</p>
                    </div>
                </div>

                <div className='about-gymer'>
                    <p>65kg <br />Weight</p>
                    <p>5.8 <br />Height</p>
                    <p>22kg <br />Age</p>
                </div>
                <h2>Add A Break</h2>
                <div className='timer-count'>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>


            </div>

        </div>
    );
};

export default Exersises;