import { useState,useEffect } from 'react'
import { Button, Container, Form, FormTitle, Input, InputLabel, TopassWord, ToRegister, WrapperForm } from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

function Login() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Holatni o'zgartirish
    }; 
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })
   
     const handleChange = (e)=>{
        let {value,name}=e.target
        setFormData({...formData, [name]:value})
        
    }
  
    // const Click = (e)=>{
    //     e.preventDefault()
    // }
    useEffect(()=>{
        const response =  fetch("http://localhost/srm/login.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email, password: formData.password }),
          });
    },[formData])
    return (
        <Container>
            <WrapperForm>
                <FormTitle>Login to your account</FormTitle>
                <FormTitle.Subtitle>Enter your details to login.</FormTitle.Subtitle>
                <Form method='post'>
                    <InputLabel>
                        <span>Email Address<sup>*</sup></span>
                        <Input placeholder='Enter your email address' name='email' required onChange={(e)=>handleChange(e)}/>
                    </InputLabel>
                    <InputLabel>
                        <span>Password<sup>*</sup></span>
                        <Input placeholder='Enter your password' type={!isVisible ? 'password' : 'text'} name='password' required onChange={(e)=>handleChange(e)} />
                        <FontAwesomeIcon
                            icon={isVisible ? faEye : faEyeSlash}
                            onClick={toggleVisibility}
                            className='icon'
                        />
                    </InputLabel>
                    <TopassWord to='/'>Forgot password?</TopassWord>
                    <Button name='submit'>Kirish</Button>
                </Form>
                <ToRegister>Agar hisobingiz bo'lmasa <NavLink to='/register'>Ro'yhatdan o'ting</NavLink></ToRegister>
            </WrapperForm>
        </Container>
    )
}

export default Login