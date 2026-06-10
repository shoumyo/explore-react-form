import React, { createContext } from 'react';
import Granpa from './Granpa/Granpa';
import Dad from './Dad/Dad';
import Uncle from './Uncle/Uncle';
import Aunt from './Aunt/Aunt';
import './FamilyTree.css';

 export const AssetContext=createContext('');

const Asset='diamonmd';
const NewAsset='Gold';
const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <AssetContext.Provider value={NewAsset}>
                <div className='family-tree'>
                    <Granpa Asset={Asset}></Granpa>
                </div>
            </AssetContext.Provider>
            
        </div>
    );
};

export default FamilyTree;