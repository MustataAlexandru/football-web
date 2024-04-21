import { Button, Label, TextInput , Toast } from "flowbite-react";
import '../index.css';
import Foter from "./Footer";
import { useState , useRef , useEffect} from "react";
import { useUser } from "../ContextProvider/UserProvider";
import { Navigate } from "react-router-dom";
import { Progress } from "flowbite-react";

export default function Register() {
    const [progress, setProgress] = useState(0);
    const [progressVisible , setProgressVisible] = useState('hidden');
    const [haveAnAccount , setHaveAnAccount] = useState(true);
    const {isLoggedIn} = useUser();
    const {login} = useUser();
    const [isAlertVisible , setIsAlertVisible ] =  useState('hidden');
    const [alert , setAlert] = useState(null);
    const emailRef = useRef('');
    const userRef = useRef('');
    const passRef = useRef('');
    const rePassRef = useRef('');
    const loginUserName = useRef('');
    const loginPassword = useRef('');
    const loginRePassword = useRef('');
    
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     if (progress < 100) {
    //       setProgress(progress + 1);
    //     }
    //   },1);
  
    //   return () => clearTimeout(timer);
    // }, [isLoggedIn]);

    

   
    const loginHandler = async (event) => {
      event.preventDefault();
      const username =loginUserName.current.value;
      const password = loginPassword.current.value;

      try {
          const response = await fetch('http://localhost:3001/users/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password })
          });
          
          const data = await response.json();
          if (response.ok) {
              login(data.user);              
              console.log(data.user);                         
              setAlert('Logged in successfully!');
              // setTimeout(() =>{
              //   setProgressVisible('visible');
              // })
          
               
          } else {
              throw new Error(data.message);
          }
      } catch (error) {
          setAlert(error.message || 'Failed to login');
      } finally {
       
          setIsAlertVisible(true);
          setTimeout(() => setIsAlertVisible(false), 4000);
          
      }
  };

    

    const toggleRegister = (e) => {
        e.preventDefault();
        setHaveAnAccount(!haveAnAccount);
    }

    
    const toggleAlert =() => {
    setIsAlertVisible('visible');
        setTimeout(() => {
          setIsAlertVisible('hidden');
        }, 4000);
    }

    const addUserHandler = (e) => {
      e.preventDefault();
  
      fetch('http://localhost:3001/users/new', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              email: emailRef.current.value.trim(),
              username: userRef.current.value.trim(),
              password: passRef.current.value.trim()
          })
      })
      .then(res => {
          if (!res.ok) {
              throw new Error('No connection!');
          }
          return res.json();
      })
      .then(() => {
          emailRef.current.value = '';
          userRef.current.value = '';
          passRef.current.value = '';
          rePassRef.current.value = '';
          setAlert('Succesfully registered');
          toggleAlert();
      })
      .catch (error => {
          console.error('Error registering: ', error);
          setAlert(`${error.message}`);
      });
  }

 
 if (isLoggedIn) return <Navigate to='/' />
  
  console.log(haveAnAccount); 
  return (
<div>
      <Toast className={`abs-t-r ${isAlertVisible}`}>
      <div className="ml-2 text-sm font-normal"><strong style={{color: 'green'}}>{alert}</strong></div>     
      <Toast.Toggle />
      </Toast>
      {/* <Progress
          show={progressVisible}
          className={`mb-8 mt-8 ${progressVisible}`}
          progress={progress}
          textLabel=""
          size="lg"
          labelProgress
          labelText
        /> */}
    {!haveAnAccount ? (<form onSubmit={addUserHandler}  className="flex max-w-md flex-col gap-4 container box-shadow mg-t-2">
      <div>
        <h1 className="text-center"><strong>Register</strong></h1>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="example@email.com" ref={emailRef} required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username2" value="Your username" />
        </div>
        <TextInput id="username2" type="text" placeholder="example" ref={userRef} required shadow />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" placeholder="Your password" ref={passRef} required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" placeholder="Re-type your password" ref={rePassRef} required shadow />
      </div>

      <Button type="submit" onClick={() => setProgressVisible('visible')}>Register new account</Button>
      <div className="flex gap-2 color-gray" style={{padding: '10px', margin: '0 auto'}}>
      Already have an account?<button type="submit" onClick={toggleRegister}> Login here
      </button></div>
    </form>) : (
      <div> 
        <form className="flex max-w-md flex-col gap-4 container box-shadow mg-t-2" onSubmit={loginHandler}>
        <div>
            <h1 className="text-center"><strong>Login</strong></h1>
            
            
          <div className="mb-2 block">
            <Label htmlFor="username2" value="Your username" />
          </div>
          <TextInput id="username2" type="text" placeholder="example" ref={loginUserName} required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="username2" type="password" placeholder="Your password" ref={loginPassword} required shadow />
        </div>
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Re-type your password" />
          </div>
          <TextInput id="password2" type="password" placeholder="Re-type your password" ref={loginRePassword} required shadow />
        </div>
        <Button  type="submit" onClick={() => setProgressVisible('visible')}>Login</Button>
        <div className="flex gap-2 color-gray" style={{padding: '10px', margin: '0 auto'}}>
        Don't have an account?<button type="button" onClick={toggleRegister}> Register here
        </button>
        </div>
      </form>
     
      </div>
    )}
    <Foter />
    </div>
  );
}
