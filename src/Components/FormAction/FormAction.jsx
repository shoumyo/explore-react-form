import React from 'react';

const FormAction = () => {

    const handleFormAction=(formData)=>{

    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type='text' name='Name' placeholder='Name'></input>
                <br></br>
                <input type='email' name='email' placeholder='Email'></input>
                <br></br>
                <input type='submit' placeholder='submit'></input>
            </form>
        </div>
    );
};

export default FormAction;