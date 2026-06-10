import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';

const Granpa = ({Asset}) => {
    return (
        <div>
            <h3>Granpa</h3>
            <section className='flex'>
                <Dad Asset={Asset}></Dad>
                <Uncle></Uncle>
                <Aunt Asset={Asset}></Aunt>
            </section>
        </div>
    );
};

export default Granpa;