import React from 'react';

const SimpleForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name' />
                <br></br>
                <input type="email" name='email' placeholder='Your mail' />
                <input type='submit' value='submit'></input>
            </form>
        </div>
    );
};

export default SimpleForm;