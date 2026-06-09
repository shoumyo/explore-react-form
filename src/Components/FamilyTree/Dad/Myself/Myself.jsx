import React from 'react';
import Special from './Special/Special';

const Myself = () => {
    return (
        <div className='family-tree'>
            <h3>Myself</h3>
            <section className='flex'>
                <Special></Special>
            </section>
        </div>
    );
};

export default Myself;