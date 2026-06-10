import React, { useContext } from 'react';
import { AssetContext } from '../../../FamilyTree';


const Special = ({Asset}) => {

    const NewAsset=useContext(AssetContext);

    return (
        <div className='family-tree'>
            <h3>Special</h3>
            <p>Asset: {Asset}</p>
            <p>New Asset: {NewAsset}</p>
        </div>
    );
};

export default Special;