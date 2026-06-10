import React from 'react';
import Special from './Special/Special';

const Myself = ({Asset}) => {
    return (
        <div className='family-tree'>
            <h3>Myself</h3>
            <section className='flex'>
                <Special Asset={Asset}></Special>
            </section>
        </div>
    );
};

export default Myself;