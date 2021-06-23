/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos 
*/

import React from 'react'
import Button from '../ui/Button'
import { Link, useHistory } from 'react-router-dom'
const Logos = [
  { img1: 'images/jpg/sso-img-01.jpg' },
  { img2: 'images/brand/systems-logos/blancos/logo-intell20.svg' }
]

const InputCorreo = {
  clase: 'input-group mb-3',
  id: 'username',
  type: 'email',
  icon: 'fas fa-user',
  placeholder: 'Your username or email',
  aria: 'username'
}

const InputPassword = {
  id: 'username',
  type: 'password',
  icon: 'fas fa-lock',
  placeholder: 'Your password',
  aria: 'username'
}

const Submit = {
  title: 'Submit',
  type: 'submit',
  col: '6',
  icon: 'fas fa-sign-in-alt',
  typebootstrap: 'primary',
  borderRadius:'0.3rem'
}


const Login = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/panel");
  }

  return (

    <div id="page" className="page">
        <div className="sso-cover">
            <img className="responsive" src={Logos[0].img1} alt="Logo" />
        </div>
        <div className="sso-container">
            <main>
                <h1><img src="/images/brand/systems-logos/negros/logo-palaceelite.svg" alt="Intelligence 2.0" /></h1>
                <header className="sso-header">
                    <h1 className="sso-title" style={{textAlign:'center'}}><img src={Logos[1].img2} alt="Logo" /></h1>
                </header>
                <article className="sso-form">
                    <h2 className="sso-form-title">On your way to succeed</h2>
                    <form className='align-middle'>
                        <h3>Sign in</h3>
                        <div className="input-group mb-3 shadow">
							            <label className="screen-reader-text">Username</label>
							            <span className="input-group-text" id="username"><i className="fas fa-user"></i></span>
							            <input type="text" className="form-control" placeholder="Your username or email" aria-label="Username" aria-describedby="username"/>
						            </div>
                        {/* <div className="input-group mb-12">
                            <Input id={InputCorreo.id} type={InputCorreo.type} icon={InputCorreo.icon} placeholder={InputCorreo.placeholder} aria={InputCorreo.aria} />
                        </div> */}
                        <div className="input-group mb-3 shadow">
							            <label className="screen-reader-text">Password</label>
							            <span className="input-group-text" id="password"><i className="fas fa-lock"></i></span>
							            <input type="password" className="form-control" placeholder="Your password" aria-label="password" aria-describedby="password"/>
						            </div>
                        {/* <div className="input-group mb-12">
                            <Input id={InputPassword.id} type={InputPassword.type} icon={InputPassword.icon} placeholder={InputPassword.placeholder} aria={InputPassword.aria} />
                        </div> */}
                        <div className="pl-0 mb-3 form-check">
                            <div className="checkbox_input mr-2">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <span className="checkmark" />
                            </div>{' '}
                            <label className="form-check-label" htmlFor="exampleCheck1">Keep me signed in</label>
                        </div>
                        <Button title={Submit.title} type={Submit.type} col={Submit.col} icon={Submit.icon} typebootstrap={Submit.typebootstrap} onClick={()=>{
                          handleClick();
                          history.push("/panel");
                        }} borderRadius={Submit.borderRadius} />
                        <div className="mt-3">Forgot your password? <Link to="">Restore it here</Link>.</div>
                    </form>
                </article>
            </main>
        </div>
    </div>
  );
}


export default Login;