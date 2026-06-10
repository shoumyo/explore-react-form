import React, { createContext, useState } from 'react';
import Granpa from './Granpa/Granpa';
import Dad from './Dad/Dad';
import Uncle from './Uncle/Uncle';
import Aunt from './Aunt/Aunt';
import './FamilyTree.css';

 export const AssetContext=createContext('');
 export const MoneyContext=createContext(0);

const Asset='diamonmd';
const NewAsset='Gold';
const FamilyTree = () => {

    const[money,setMoney]=useState(0);

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <h4>Total Family Money: {money}</h4>
            <MoneyContext value={[money,setMoney]}>
                 <AssetContext.Provider value={NewAsset}>
                <div className='family-tree'>
                    <Granpa Asset={Asset}></Granpa>
                </div>
            </AssetContext.Provider>
            </MoneyContext>
           
            
        </div>
    );
};

export default FamilyTree;