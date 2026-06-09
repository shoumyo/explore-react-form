import React from 'react';

const ProductForm = () => {

    const handleProductSubmit =e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const price=e.target.price.value;
        const quantity=e.target.quanttity.value;

        const newProduct={
            name,
            price,
            quantity
        }
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
        </div>
    );
};

export default ProductForm;