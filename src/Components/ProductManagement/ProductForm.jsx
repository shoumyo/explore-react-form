import React, { useState } from 'react';

const ProductForm = ({handleProducts}) => {

    const[Error,setError]=useState('');

    const handleProductSubmit =e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quantity.value;

        if(name.length===0){
            setError('Provide a name');
        }
        else if(price.length===0){
            setError('Provide a price');
            return;
        }
        else if(price<0){
            setError('Provide a positive price');
            return;
        }
        else if(quantity.length===0){
            setError('Provide a quantity');
            return;
        }

        const newProduct={
            name,
            price,
            quantity
        }
        handleProducts(newProduct);
    }

    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='name'/>
                <br />
                <input type="text" name="price" placeholder='price' />
                <br />
                <input type="text" name="quantity" placeholder='quantity'/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}><small>{Error}</small></p>
        </div>
    );
};

export default ProductForm;