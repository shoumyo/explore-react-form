import React from 'react';
import Cousin from './Cousin/Cousin';

const Uncle = () => {
    return (
        <div className='family-tree'>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='shommyo'></Cousin>
                <Cousin name='srijito'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;