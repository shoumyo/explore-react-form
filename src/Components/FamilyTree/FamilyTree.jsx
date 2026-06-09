import React from 'react';
import Granpa from './Granpa/Granpa';
import Dad from './Dad/Dad';
import Uncle from './Uncle/Uncle';
import Aunt from './Aunt/Aunt';
import './FamilyTree.css';

const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <div className='family-tree'>
            <Granpa></Granpa>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
        </div>
    );
};

export default FamilyTree;