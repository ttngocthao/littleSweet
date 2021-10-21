import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Field = styled.div`
    label{
        display: block;
    }
    input{
        display: block;
    }
`;

const SignIn = () => {
    const [signInMode,setSignInMode]=useState(true);
    const [inputs,setInputs] =useState({
        email: {label:'Email',value:'',name:'email',type:'email'},
        password:{label:'Password',value:'',name:'password',type:'password'},
        repeatPassword:{label:'Retype Password',value:'',name:'repeatPassword',type:'password'}
    });
    const inputsOnChangeHandle =(e:ChangeEvent<HTMLInputElement>)=>{
        setInputs({
            ...inputs,
            [e.target.name]:{...[e.target.name],value:e.target.value}
        });
    };
    const displayInputs = signInMode ? Object.values(inputs) : Object.values(inputs).filter(item=>item.name!=='repeatPassword');
    
    return (
        <div>
            <h1>{signInMode ? 'Sign in' : 'Sign up'}</h1>
            <form>
                {displayInputs.map((item)=>{
                
                return (<Field key={item.name}>
                    <label>{item.label}</label>
                    <input name={item.name} value={item.value} type={item.type} onChange={inputsOnChangeHandle}/>
                </Field>);
            })}
            </form>
        </div>
    );
};

export default SignIn;
