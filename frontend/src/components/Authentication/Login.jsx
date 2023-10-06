import React,{useState} from 'react'
import {
  Stack,
  Box,
  VStack,
  StackDivider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
const Login = () => {
  const [show,setShow]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler=() => {
    
  }
  const credentialsHandler=() => {
    console.log("Clicked")
    setEmail("guest@example.com");
    setPassword("123456");
    console.log(email,password)
  };
  return (
    <VStack
    
    spacing="5px"
    color="black"
  >
   
    <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup>
        <Input
        value={password}
          type={show?"text":"password"}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={()=>setShow(!show)}>
            {show?"Hide":"Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
   
    <Button
      colorScheme="blue"
      width="100%"
      style={{marginTop: 15}}
      onClick={loginHandler}
    >
      Login
    </Button>
    <Button
      colorScheme="red"
      width="100%"
      style={{marginTop: 15}}
      onClick={credentialsHandler}
    >
      Get Guest User Credentials
    </Button>
  </VStack>
  )
}

export default Login