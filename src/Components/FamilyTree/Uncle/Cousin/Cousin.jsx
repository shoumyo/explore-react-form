import React from 'react';
import Special from '../../Dad/Myself/Special/Special';
import Friend from '../../../Freiend/Friend';

const Cousin = ({name,Asset}) => {
    return (
        <div className='family-tree'>
            <h3>{name}</h3>
            {
                name==='momo' && <Special Asset={Asset}></Special>
            }
            {
                name==='mona' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;