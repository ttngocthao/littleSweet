import React, { ChangeEvent, useState,MouseEvent } from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import DecoImg from '../../images/formPage.jpg';
import Title from '../title/Title';
import { IErrorRes, signInAccount } from '../../utils/users';
import { navigate } from 'gatsby-link';
import { UserCredential } from '@firebase/auth';

const Wrap = styled.div`
    padding: 1rem;
    max-width: ${theme.maxScreenWidth};
    margin:0 auto;
`;
const Form = styled.form`
    padding:1rem;
    /* max-width: 300px; */
    margin: 0 auto;
    border: 1px solid silver;
    width: 100%;
    border-radius: 8px;
     @media only screen and (min-width: 700px){
          border-radius: 8px 0 0 8px;
     }
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
        border-color: ${theme.colors.third};
        border-style: solid;
        margin-bottom: .75rem;
        padding:.25rem;
       /* max-width: 300px; */
    }
    @media only screen and (min-width: 700px){
        padding-left: 1rem;
        padding-right: 1.5rem;
    }
`;
const Button = styled.button`
    background-color: ${theme.colors.second};
    color: white;
    padding: .25rem 2rem;
    border-radius: 0px 7px 0px 7px;
    display: block;
    text-align: center;
    margin: 0 auto;
    margin-top: 2rem;
`;
const DecorationImg = styled.figure`
    max-width: 300px;
    display: none;
    border: 1px solid silver;
    border-radius: 0 8px 8px 0;
    overflow: hidden;
    @media only screen and (min-width: 700px){
        display: block;
    }
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 740px;
    margin:2rem auto 4rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 3px 3px 20px rgb(0 0 0 / 15%);
    
`;
const FormTitle = styled(Title)`
h2{
    font-size:1.5rem;
    
}
@media only screen and (max-width: 699px){
    h2{
        padding-left: 0;
    }
       
        &:after{
            width: 0;
        }
    }  
`;
const FormSwitchWrap = styled.div`
    padding-top: 1rem;
    button{
        font-size: .75rem;
        display: block;
        text-align: right;
        text-decoration: underline;
        width: 100%;
    }
`;
const ErrorMsg = styled.p`
    color: red;
    @media only screen and (min-width: 700px){
        padding-left: 1rem;
        padding-bottom: 1.5rem;
    }
`;
interface IInputs {
    email:IInput
    password:IInput
    repeatPassword:IInput
}
interface IInput {
    label:string
    value:string
    name:string
    type:string
   
}
const SignIn = () => {
    const [signInMode,setSignInMode]=useState(true);
    const [errorMsg,setErrorMsg]=useState('');
    const [inputs,setInputs] =useState({
        email: {label:'Email',value:'',name:'email',type:'email'},
        password:{label:'Password',value:'',name:'password',type:'password'},
        repeatPassword:{label:'Retype Password',value:'',name:'repeatPassword',type:'password'}
    });
    const inputsOnChangeHandle =(e:ChangeEvent<HTMLInputElement>)=>{
       
       // console.log( {[e.target.name]:{...inputs[e.target.name as keyof IInputs],value:e.target.value}});
        setInputs({
            ...inputs,
            [e.target.name]:{...inputs[e.target.name as keyof IInputs],value:e.target.value}
        });
    };
    const displayInputs = !signInMode ? Object.values(inputs) : Object.values(inputs).filter(item=>item.name!=='repeatPassword');
    
    const onClickHandle =async(e:MouseEvent)=>{
        e.preventDefault();
        const emptyFields = displayInputs.filter(item=>item.value==='');
        if(emptyFields.length===0 && signInMode){
            // alert('process form');
            // console.log(inputs.email.value,inputs.password.value);
            
            const res= await signInAccount({email:inputs.email.value,password:inputs.password.value});

            const userRes = res as UserCredential;
            const errorRes = res as IErrorRes;

            console.log('res',res);

            if(errorRes.status ===400){
                alert(errorRes.message);
                console.log(errorRes);
                return;
            }
            if(userRes){
               void navigate('/app/profile');
            }
           
        }
        if(emptyFields.length=== 0 && !signInMode){
            console.log('call sign up function');
        }

        if(emptyFields.length!==0){         
            setErrorMsg('Please fill all the inputs');
            
        }
    };
  
    return (
        <Wrap>
            
            <Content>
                <Form>
                
            <FormTitle title={signInMode ? 'Sign in' : 'Sign up'}/>
                {errorMsg!== '' && <ErrorMsg>{errorMsg}</ErrorMsg>}
                {displayInputs.map((item,index)=>{
                
                return (<Field key={index}>
                    <label>{item.label}</label>
                    <input required={true} name={item.name} value={item.value} type={item.type} onChange={inputsOnChangeHandle}/>
                   
                </Field>);

              
            })}
            <Field>
            
                {signInMode && <p>Forgot password?</p>} 
                <FormSwitchWrap>
                   {signInMode ? <button onClick={()=>setSignInMode(false)}>Sign up with us</button> : <button onClick={()=>setSignInMode(true)}>Sign in to your account</button>}
                </FormSwitchWrap>
            </Field>
               
                <Button onClick={onClickHandle}>
                    {signInMode ? 'Sign in' : 'Sign up'}
                </Button>
              
            </Form>
            <DecorationImg>
                <img src={DecoImg as string} alt=''/>
            </DecorationImg>
            </Content>
            
        </Wrap>
    );
};

export default SignIn;
