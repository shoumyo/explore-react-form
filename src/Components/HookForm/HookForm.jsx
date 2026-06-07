import React from 'react';
import useInputField from '../../Hooks/UseInputField';

const HookForm = () => {

    const [name,nameOnChange]=useInputField('');
    const [email,emailOnChange]=useInputField('');

    const handleSubmit=e=>{
        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={nameOnChange} defaultValue={name} placeholder='name' />
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} placeholder='email' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;