import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';

const Wrap = styled.div`
    padding: 1rem;
    max-width: ${theme.maxScreenWidth};
    margin:0 auto;
`;
const Form = styled.form`
    padding:1rem;
    
`;
const Field = styled.div`
    label{
        display: block;
       color: ${theme.colors.mainTxt};
    }
    input{
        display: block;
        width: 100%;
        border-radius: 0px 10px 0px 10px;
        border-color: ${theme.colors.main};
        border-style: solid;
        margin-bottom: .75rem;
       max-width: 300px;
    }
`;
const Button = styled.button`
    background-color: ${theme.colors.second};
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
        <Wrap>
            <h1>{signInMode ? 'Sign in' : 'Sign up'}</h1>
            <Form>
                {displayInputs.map((item)=>{
                
                return (<Field key={item.name}>
                    <label>{item.label}</label>
                    <input name={item.name} value={item.value} type={item.type} onChange={inputsOnChangeHandle}/>
                </Field>);

              
            })}
                  <Field>
                    <Button>
                        {signInMode ? 'Sign in' : 'Sign up'}
                    </Button>
                </Field>
            </Form>
        </Wrap>
    );
};

export default SignIn;
