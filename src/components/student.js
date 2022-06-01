import React from 'react';
import Nav from './Nav';
import './styles.css';

function Student() {
    return (
        <div className="register">
            <Nav />
            <div className='block block-rounded'>
                <br />
                <div>
                    <h3 className='block-title' id='lec'>Student Personal Attendance</h3>
                </div>
                <div className='block-content block-content-full'>
                    <div className='row'>
                        <div className='space-y-2 col-lg-8'>
                            <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                <div>
                                    <label className='visually-hidden' for='example-if-email2'>Course Title</label>
                                    <input type='text' className='form-control form-control-alt' id='example' name='course' placeholder='Course Title' />
                                </div>
                                <br />
                                <div>
                                    <label className='visually-hidden' for='example-if-password2'>Matric No</label>
                                    <input type='text' className='form-control form-control-alt' id='example' name='matno' placeholder='Matric No' />
                                </div>
                                <br />
                                <div style={{marginLeft: -60}}>
                                    <button className='btn btn-dark' style={{marginLeft: 60, width: 400}}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Student;