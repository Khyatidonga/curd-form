import React from 'react'
import { useState } from 'react';


function Form() {
    const [UserDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        countary: '',
        gender : '',
        language : []
    }
    );

    const [userData, setuserData] = useState([])
    const [editindex, seteditindex] = useState(null)

    // validation //
    const [errors, seterrors] = useState({});
    const validateform = (data) =>{
        let errors = {};
        if (!data.fname) {
            errors.fname = "First Name is required";
        }
        if (!data.lname) {
            errors.lname = "Last Name is required";
        }
        if (!data.countary) {
            errors.countary = "Countary is required";
        }
        if (!data.gender) {
            errors.gender = "Gender is required";
        }
        return errors;
    }
    
    const handleSubmit = (e) => {
       
        const errors = validateform(UserDetails);
        if (Object.keys(errors).length > 0) {
            seterrors(errors);
        } else {
            if (editindex !== null) {
                const arr = userData
                arr[editindex] = UserDetails
                setuserData([...arr]);
                seteditindex(null)
            } else {
                setuserData([...userData, UserDetails]);
            }
            setUserDetails({ fname: "", lname: "", countary: "", gender: "" })
            seterrors({})
        }
    }

    // ends //




   

    const handlechange = (e) => {
        setUserDetails({ ...UserDetails, [e.target.name]: e.target.value });
    }


    const handleDelete = (index) => {
        const arr = userData
        arr.splice(index, 1);
        setuserData([...arr]);
    }

    const handleEdit = (item, index) => {
        setUserDetails(item)
        seteditindex(index)
    }
    
    // const handlecheckbox =(e) =>{
    //     const arr = UserDetails.language
    //     if(e.target.checked ){
    //         arr.push(e.target.value)
    //     }
    //     setUserDetails({...UserDetails,language:arr})
    // }
    // console.log(UserDetails.language)
    
    return (
        <div>
            <>
                <div className='container'>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                    <label class="form-label">First Name</label>
                    <input type='text' name='fname' id='fname' placeholder='First Name' className='form-control' value={UserDetails.fname} onChange={(e) => handlechange(e)} />
                    {errors.fname && <p style={{color : 'red'}}>{errors.fname}</p>}
                    <label class="form-label">Last Name</label>
                    <input type='text' name='lname' id='lname' placeholder='Last Name' className='form-control' value={UserDetails.lname} onChange={(e) => handlechange(e)} />
                    {errors.lname && <p style={{color : 'red'}}>{errors.lname}</p>}
                    <label className='form-label'>Countary</label>
                    <select className='form-control' name='countary' id='countary' value={UserDetails.countary} onChange={(e) => handlechange(e)}>
                        <option value='default'>Select Country</option>
                        <option value='USA'>USA</option>
                        <option value='UK'>UK</option>
                        <option value='Canada'>Canada</option>
                        <option value='Australia'>Australia</option>
                        <option value='India'>India</option>
                    </select>
                    {errors.countary && <p style={{color : 'red'}}>{errors.countary}</p>}
                    <br/>
                    <label>Gender</label><br/>
                    <input type="radio" id="Male" name="gender"  value="Male" checked={UserDetails.gender === 'Male' } onChange={(e) => handlechange(e)}/>
                    <label >Male</label><br />
                    <input type="radio" id="Female" name="gender"  value="Female" checked={UserDetails.gender === 'Female' } onChange={(e) => handlechange(e)} />
                    <label>Female</label><br />
                    <input type="radio" id="Other" name="gender" value="Other" checked={UserDetails.gender === 'Other' } onChange={(e) => handlechange(e)}   />
                    <label >Other</label> 
                    {errors.gender && <p style={{color : 'red'}}>{errors.gender}</p>}
                    <br /><br/>
                    {/* <label>Langauge</label><br/>
                    <input type="checkbox" id="langauge" name="langauge" value="Gujrati" checked={UserDetails.language.includes('Gujrati')} onChange={(e) =>  handlecheckbox(e)} />
                    <label> Gujrati</label><br />
                    <input type="checkbox" id="langauge" name="langauge" value="Hindi" checked={UserDetails.language.includes('Hindi')} onChange={(e) =>  handlecheckbox(e)} />
                    <label> Hindi</label><br />
                    <input type="checkbox" id="langauge" name="langauge"  value="English" checked={UserDetails.language.includes('English')} onChange={(e) =>  handlecheckbox(e)} />
                    <label> English</label><br /> */}

                    <button type='submit' className='btn btn-primary' style={{ marginTop: '10px', marginBottom: '10px' }} onClick={() => handleSubmit()}>Submit</button>

                </div>

                <table class="table table-striped">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Country</th>
                        <th>Gender</th>
                        {/* <th>Language</th> */}
                        <th>Action</th>
                    </tr>

                    {
                        userData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                <td>{item.countary}</td>
                                <td>{item.gender}</td>
                                {/* <td>{item.language}</td> */}
                                <></>
                                <td>
                                    <button className='btn btn-danger' style={{ marginRight: 10 }} onClick={() => handleDelete(index)}>Delete</button>
                                    <button className='btn btn-success' onClick={() => handleEdit(item, index)}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </table>


            </>

        </div>
    )
}



export default Form
