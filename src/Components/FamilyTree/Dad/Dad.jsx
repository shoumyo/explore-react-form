import React from 'react';
import '../FamilyTree.css';
import Myself from './Myself/Myself';
import Brother from './Brother/Brother';
import Sister from './Sister/Sister';

const Dad = () => {
    return (
        <div className='family-tree'>
            <h3>Dad</h3>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;