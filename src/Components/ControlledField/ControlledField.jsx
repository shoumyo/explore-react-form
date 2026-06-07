import React, { useState } from 'react';

const ControlledField = () => {

    const[pasword,setPasword]=useState('');
    const [error, setError] = useState('');


    const passwodOnChange=(e)=>{
        setPasword(e.target.value);

        if(pasword.length <6){
            setError('Password must be 6 character or longer');
        }
        else{
            setError('');
        }
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(pasword.length <6){
            setError('Password must be 6 character or longer');
        }
        else{
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' id='' placeholder='Email' required />
                <br />
                <input type="password" name="password"
                placeholder='pasword' onChange={passwodOnChange} defaultValue={pasword} required />
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;