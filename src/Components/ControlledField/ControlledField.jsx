import React, { useState } from 'react';

const ControlledField = () => {

    const[pasword,setPasword]=useState('');


    const passwodOnChange=(e)=>{

    }


    const handleSubmit=(e)=>{

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' id='' placeholder='Email' required />
                <br />
                <input type="password" name="password" id=""
                placeholder='pasword' onChange={passwodOnChange} defaultValue={pasword} required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;