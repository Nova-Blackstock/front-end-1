import React , { useState, useEffect } from 'react';
// COMPONENT IMPORTS
import Header from './Components/Header'
import HowToForm from './Components/HowToForm'
import Signup from './Components/Signup'
import formSchema from './Components/Validation/FormSchema'

//Empty Form Structures
const initialSignup = {
  fName:'',
  lName:'',  
  username: '',
  password: '',
  email:'',
}

const initialLogIn = {
  username:'',
  password:''
}

const initialHowToForm= {
  username: '',
  topic: '',
  steps: '',
}

const initialFormErrors ={
  email:'',
  password:'',

}

const initialDisabled = true
const initialHowtoCards = []


function App() {
  //SignUpStates
  const [signUpFormValues, setSignUpFormValues] = useState(initialSignup)
  return (
    <div>
      <Header />
      <HowToForm />
      <Signup />

    </div>
  );
}

export default App;
