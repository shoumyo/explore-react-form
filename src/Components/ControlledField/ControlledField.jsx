import React, { useState } from 'react';

const ControlledField = () => {

    const[name,setName]=useState('');
    const[pasword,setPasword]=useState('');
    const [error, setError] = useState('');
    const [email,setEmail]=useState('');

    const onNameChange=(e)=>{
        setName(e.target.value);
    }

    const onEmailChange=(e)=>{
        setEmail(e.target.value);
    }


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
                <input type="name" name='name' onChange={onNameChange} defaultValue={name} placeholder='name'/>
                <br />
                <input type="email"  onChange={onEmailChange} defaultValue={email} name='email' placeholder='Email' required />
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