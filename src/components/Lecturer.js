import React from 'react';
import Nav from './Nav';
import './styles.css';

function Reg() {

    return (
        <div className="register">
            <Nav />
            <div className='block block-rounded'>
                <br />
                <div>
                    <h3 className='block-title' id='lec'>Lecturer Registration</h3>
                </div>
                <div className='block-content block-content-full'>
                    <div className='row'>
                        <div className='space-y-2 col-lg-8'>
                            <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                <div>
                                    <label 
                                        className='visually-hidden' 
                                        for='example-if-email2'>
                                        First Name
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control form-control-alt' 
                                        id='example' 
                                        placeholder='First Name'
                                    />
                                </div>
                                <br />
                                <div>
                                    <label 
                                        className='visually-hidden' 
                                        for='example-if-email2'>
                                        Last Name
                                    </label>
                                    <input 
                                        type='text' 
                                        className='form-control form-control-alt' 
                                        id='example' 
                                        placeholder='Last Name'
                                    />
                                </div>
                                <br />
                                <div>
                                    <label 
                                        className='visually-hidden' 
                                        for='example-if-email2'>
                                        Email
                                    </label>
                                    <input 
                                        type='email' 
                                        className='form-control form-control-alt' 
                                        id='example' 
                                        placeholder='Email'
                                    />
                                </div>
                                <br />
                                <div>
                                    <label 
                                        className='visually-hidden' 
                                        for='example-if-password2'>
                                        Password
                                    </label>
                                    <input 
                                        type='password' 
                                        className='form-control form-control-alt' 
                                        id='example' 
                                        placeholder='Password'
                                    />
                                </div>
                                <br />
                                <div>
                                    <label 
                                        className='visually-hidden' 
                                        for='example-if-password2'>
                                        Confirm Password
                                    </label>
                                    <input 
                                        type='password' 
                                        className='form-control form-control-alt' 
                                        id='example' 
                                        placeholder='Confirm Password'
                                    />
                                </div>
                                <br />
                                <div style={{marginLeft: -60}}>
                                    <button 
                                        className='btn btn-dark' 
                                        style={{marginLeft: 60, width: 400}}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reg;