import React from 'react';
import Cousin from '../Uncle/Cousin/Cousin';

const Aunt = ({Asset}) => {
    return (
        <div className='family-tree'>
            <h3>Aunt</h3>

            <section className='flex'>
                <Cousin Asset={Asset} name='momo'></Cousin>
                <Cousin name='mona'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;