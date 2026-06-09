import React from 'react';
import Cousin from '../Uncle/Cousin/Cousin';

const Aunt = () => {
    return (
        <div className='family-tree'>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin name='momo'></Cousin>
                <Cousin name='mona'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;