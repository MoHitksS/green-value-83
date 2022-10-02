import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputBox from '../Components/InputBox';

const OTP = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()
  useEffect(()=>{
    if(query==='12345'){
      alert('Payment Successfull');
      navigate('/')
    }
    else if(query.length === 5 && query !== '12345'){
      alert('Enter Correct OTP');
    }
  },[query])
  return (
    <Container>
      <InputBox setQuery={setQuery} length={5} maxInput={1} />
    </Container>
  );
}

const Container = styled.div`
width:100%;
text-align:center;
  margin-top:200px;
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  form{
    width:25%;
    height:300px;
    margin-auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding:20px;
  }

  form h1{
    width:50%;
  }

  input{
    height:50px;
    width:50px;
    margin:5px;
    text-align:center;
  }
`

export default OTP