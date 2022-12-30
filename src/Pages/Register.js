import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Register.css';

export default function Register() {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');

   const handleRegister = (e) => {
   
    if (username.trim() && pass.trim() && email.trim()) {
        console.log({ username, email, pass });
        setPass("");
        setUsername("");
        setEmail("");
        e.preventDefault();
    }}
   return (
      <div className="register">
         <form class="form-card form"method='POST' onSubmit={handleRegister}>
            <div class="card_header">
               <svg
                  height="28"
                  width="28"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                     d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
                     fill="currentColor"
                  ></path>
               </svg>
               <h1 class="form_heading">Sign Up</h1>
            </div>
            <div class="field-reg">
               <label for="username">Username</label>
               <input
                  id="username"
                  placeholder="Username"
                  type="text"
                  value={username}
                  required
                  class="input-reg"
                  onChange={(e)=>setUsername(e.target.value)}
               />
            </div>
            <div class="field-reg">
               <label for="usermail">User Email</label>
               <input
                  id="usermail"
                  placeholder="User Email"
                  type="email"
                  value={email}
                  required
                  class="input-reg"
                  onChange={(e)=> setEmail(e.target.value)}
               />
            </div>
            <div class="field-reg">
               <label for="password">Password</label>
               <input
                  id="password"
                  placeholder="Password"
                  type="password"
                  required
                  minLength={6}
                  value={pass}
                  class="input-reg"
                  onChange={(e) => setPass(e.target.value)}
               />
            </div>
            <div class="field-reg">
               <button class="button-reg">Register</button>
            </div>

            <div class="field-reg">
               <code>already have an account?</code>
               <Link to="/" class="button-login">
                  Login
               </Link>
            </div>
         </form>
      </div>
   );
}
