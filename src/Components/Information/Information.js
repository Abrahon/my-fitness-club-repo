import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className='informatin-list'>
            <div className='img-information'>
                <img className='rounded-circle img' src="https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg" alt="" />
                <div>
                    <h4>Zahid Hossain</h4>
                    <p>Sydney, Australia</p>
                </div>
            </div>
            <div className='details'>
                <div >
                    <h3>75kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>25
                    </h3>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Information;