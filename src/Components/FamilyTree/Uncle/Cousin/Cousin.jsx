import React from 'react';
import Special from '../../Dad/Myself/Special/Special';

const Cousin = ({name,Asset}) => {
    return (
        <div className='family-tree'>
            <h3>{name}</h3>
            {
                name==='momo' && <Special Asset={Asset}></Special>
            }
        </div>
    );
};

export default Cousin;