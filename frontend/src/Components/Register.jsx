import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import '../index.css';
import Foter from "./Footer";
import { useState } from "react";

export default function Register() {

    const [haveAnAccount , setHaveAnAccount] = useState(true);
    const toggleRegister = (e) => {
        e.preventDefault();
        if(haveAnAccount) setHaveAnAccount(false)
        else setHaveAnAccount(true)
        console.log(haveAnAccount); 
    }
  return (
<div>
    {!haveAnAccount ? (<form className="flex max-w-md flex-col gap-4 container box-shadow mg-t-2">
      <div>
        <h1 className="text-center"><strong>Register</strong></h1>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput id="email2" type="email" placeholder="example@email.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username2" value="Your username" />
        </div>
        <TextInput id="username2" type="username" placeholder="example" required shadow />
      </div>
      
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2" value="Your password" />
        </div>
        <TextInput id="password2" type="password" placeholder="Your password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput id="repeat-password" type="password" placeholder="Re-type your password" required shadow />
      </div>

      <Button  type="submit">Register new account</Button>
      <div className="flex gap-2 color-gray">
      Already have an account?<button onClick={ toggleRegister}> Login here
      </button></div>
    </form>) : (
        <form className="flex max-w-md flex-col gap-4 container box-shadow mg-t-2">
        <div>
            <h1 className="text-center"><strong>Login</strong></h1>
          <div className="mb-2 block">
            <Label htmlFor="username2" value="Your username" />
          </div>
          <TextInput id="username2" type="text" placeholder="example" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="username2" type="password" placeholder="Your password" required shadow />
        </div>
        
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Re-type your password" />
          </div>
          <TextInput id="password2" type="password" placeholder="Re-type your password" required shadow />
        </div>
        <Button  type="submit">Register new account</Button>
        <div className="flex gap-2 color-gray">
        Don't have an account?<button onClick={ toggleRegister}> Register here
        </button>
        </div>
      </form>
    )}
    <Foter />
    </div>
  );
}
