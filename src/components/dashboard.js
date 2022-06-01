import React from 'react';
import './styles.css';

function Dashboard() {
    return (
        <div className="register">
            <header class="p-0 shadow navbar navbar-primary sticky-top bg-primary flex-md-nowrap" id="head">
                <a class="px-3 navbar-brand me-0" id="land" href="/">Student Attendance</a>
                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                    <a class="px-3 nav-link" id="log" href="/Login">Log out</a>
                    </div>
                </div>
            </header>

            <div className='container-fluid'>
                <div className='row'>
                    <nav id='sidebarMenu' className='col-md-2 col-lg-2 d-md-block sidebar collapse' style={{width: 206, backgroundColor: '#2470dc'}}>
                        <div className='pt-3 position-sticky'>
                            <ul className='nav flex-column'>
                                <li className='nav-item'>
                                <br />
                                    <a className='nav-link' href='#create'>
                                        Create Course
                                    </a>
                                </li>
                                <br /><br />
                                <li className='nav-item'>
                                    <a className='nav-link' href='#register'>
                                        Register Student
                                    </a>
                                </li>
                                <br /><br />
                                <li className='nav-item'>
                                    <a className='nav-link' href='#take'>
                                        Take Attendance
                                    </a>
                                </li>
                                <br /><br />
                                <li className='nav-item'>
                                    <a className='nav-link' href='#abs'>
                                        Absent Student
                                    </a>
                                </li>
                                <br /><br />
                                <li className='nav-item'>
                                    <a className='nav-link' href='#view'>
                                       View Attendance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id='create'>
                        <br /><br />
                        <div>
                            <h3 className='block-title' id='lec'>Create Course</h3>
                        </div>
                        <div className='block-content block-content-full'>
                            <div className='row'>
                                <div className='space-y-2 col-lg-8'>
                                    <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                        <div>
                                            <label className='visually-hidden' for="example-if-email2">Course Name</label>
                                            <input type="text" class="form-control form-control-alt" id="example" name="name" placeholder="Course Name" />
                                        </div>
                                        <br />
                                        <select name = "block" class="btn btn-light" style={{width: 400}}>
                                        <option value = "FIRST" selected>FIRST</option>
                                        <option value = "SECOND">SECOND</option>
                                        <option value = "THIRD">THIRD</option>
                                        <option value = "FOURTH">FOURTH</option>
                                        </select>
                                        <br /><br />
                                        <select name = "session" class="btn btn-light" style={{width: 400}}>
                                        <option value = "2021/2022" selected>2021/2022</option>
                                        <option value = "2022/2023">2022/2023</option>
                                        <option value = "2023/2024">2023/2024</option>
                                        <option value = "2024/2025">2024/2025</option>
                                        <option value = "2025/2026">2025/2026</option>
                                        <option value = "2026/2027">2026/2027</option>
                                        <option value = "2027/2028">2027/2028</option>
                                        <option value = "2028/2028">2028/2029</option>
                                        <option value = "2029/2030">2029/2030</option>
                                        </select>
                                        <br /><br />
                                        <div style={{marginLeft: -60}}>
                                        <button class="btn btn-dark" style={{marginLeft: 60, width: 400}}>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="register">
                        <div>
                            <h3 className='block-title' id="lec">Register Student</h3>
                        </div>
                        <div className='block-content block-content-full'>
                            <div className='row'>
                                <div className='space-y-2 col-lg-8'>
                                    <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                    <div>
                                        <label className='visually-hidden' for="example-if-email2">Course Title</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="cname" placeholder="Course Title" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">First Name</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="fname" placeholder="First Name" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Last Name</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="lname" placeholder="Last Name" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Matric No</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="matno" placeholder="Matric No" />
                                    </div>
                                    <br />
                                    <select name = "dept" className='btn btn-light' style={{width: 400}}>
                                        <option value = "CSE" selected>CSE</option>
                                        <option value = "CHE">CHE</option>
                                        <option value = "CNSS">CNSS</option>
                                        <option value = "DMT">DMT</option>
                                        <option value = "BOP">BOP</option>
                                    </select>
                                    <br /><br />
                                    <select name = "level" className='btn btn-light' style={{width: 400}}>
                                        <option value = "ND1" selected>ND1</option>
                                        <option value = "ND2">ND2</option>
                                    </select>
                                    <br /><br />
                                    <div style={{marginLeft: -60}}>
                                        <button className='btn btn-dark' style={{marginLeft: 60, width: 400}}>Submit</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="take">
                        <div>
                            <h3 className='block-title' id="lec">Take Attendance</h3>
                        </div>
                        <div className='block-content block-content-full'>
                            <div className='row'>
                                <div className='space-y-2 col-lg-8'>
                                    <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                    <div>
                                        <label className='visually-hidden' for="example-if-email2">Course Title</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="tab" placeholder="Course Title" />
                                    </div>
                                    <br />
                                    <select name = "lev" className='btn btn-light' style={{width: 400}}>
                                        <option value = "ND1" selected>ND1</option>
                                        <option value = "ND2">ND2</option>
                                    </select>
                                    <br /><br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Class Attended</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="attended" placeholder="Class Attended" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Score</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="score1" placeholder="Score" />
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

                    <div id="abs">
                        <div>
                            <h3 className='block-title' id="lec">Absent Student</h3>
                        </div>
                        <div className='block-content block-content-full'>
                            <div className='row'>
                                <div className='space-y-2 col-lg-8'>
                                    <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                    <div>
                                        <label className='visually-hidden' for="example-if-email2">Course Title</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="cable" placeholder="Course Title" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Matric No</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="matric" placeholder="Matric No" />
                                    </div>
                                    <br />
                                    <div>
                                        <label className='visually-hidden' for="example-if-password2">Class Missed</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="cmiss" placeholder="Class Missed" />
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

                    <div id="view">
                        <div>
                            <h3 className='block-title' id="lec">View Attendance</h3>
                        </div>
                        <div className='block-content block-content-full'>
                            <div className='row'>
                                <div className='space-y-2 col-lg-8'>
                                    <div id='form' className='cols cols-row-lg-auto align-items-center'>
                                    <div>
                                        <label className='visually-hidden' for="example-if-email2">Course Title</label>
                                        <input type="text" class="form-control form-control-alt" id="example" name="able" placeholder="Course Title" />
                                    </div>
                                    <br />
                                    <select name = "levy" class="btn btn-light" style={{width: 400}}>
                                        <option value = "ND1" selected>ND1</option>
                                        <option value = "ND2">ND2</option>
                                    </select>
                                    <br /><br />
                                    <div style={{marginLeft: -60}}>
                                        <button className='btn btn-dark' style={{marginLeft: 60, width: 400}}>Search</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;