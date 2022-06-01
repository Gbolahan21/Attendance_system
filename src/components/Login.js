import React from 'react';
import Nav from './Nav';
import './styles.css';

function Login() {

    return (
        <div className="register">
            <Nav />
            <div className='block block-rounded'>
                <br />
                <div>
                    <h3 className='block-title' id='lec'>Lecturer Login</h3>
                </div>
                <div className='block-content block-content-full'>
                    <div className='row'>
                        <div className='space-y-2 col-lg-8'>
                            <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                <div>
                                    <label className='visually-hidden' for='example-if-email2'>Email</label>
                                    <input type='email' className='form-control form-control-alt' id='example' name='email' placeholder='Email'/>
                                </div>
                                <br />
                                <div>
                                    <label className='visually-hidden' for='example-if-password2'>Password</label>
                                    <input type='password' className='form-control form-control-alt' id='example' name='pass' placeholder='Password'
                                    />
                                </div>
                                <br />
                                <div style={{marginLeft: -60}}>
                                    <button className='btn btn-dark' style={{marginLeft: 60, width: 400}}>Lecturer Login</button>
                                    <br /><br />
                                    <a href="/student" class="btn btn-dark" style={{marginLeft: 60, width: 400}}>Student Login</a>
                                </div>
                                <a href="/forget" style={{textDecoration: "none", color: "black"}}><h5 style={{marginTop: 20, fontSize: 15, marginLeft: -280}}>Forget Password</h5></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;