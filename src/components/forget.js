import React from 'react';
import Nav from './Nav';
import './styles.css';

function Forget() {
    return (
        <div className="register">
            <Nav />
            <div className='block block-rounded'>
                <br />
                <div>
                    <h3 className='block-title' id='lec'>Forget Password</h3>
                </div>
                <div className='block-content block-content-full'>
                    <div className='row'>
                        <div className='space-y-2 col-lg-8'>
                            <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                <div>
                                    <label className='visually-hidden' for='example-if-email2'>Email</label>
                                    <input type='email' className='form-control form-control-alt' id='example' name='email' placeholder='Email' />
                                </div>
                                <br />
                                <div style={{marginLeft: -60}}>
                                    <button className='btn btn-dark' style={{marginLeft: 60, width: 400}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forget;