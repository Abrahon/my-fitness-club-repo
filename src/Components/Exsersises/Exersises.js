import React, { useEffect, useState } from 'react';
import style from '../images/style.jpg'
import './Exersises.css';

const Exersises = () => {
    const [exsersise, setExersise] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExersise(data))
    }, [])

    return (
        <div class="exersise">
            <div className='exersise-acontainer'>
                {
                    exsersise.map(exs => <Exersises key={exs.id}
                        exs={exs}
                    ></Exersises>)


                }

            </div>



        </div>
    );
};

export default Exersises;