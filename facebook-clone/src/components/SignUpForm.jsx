import React, { useContext, useState } from 'react';
import styles from './signup.module.css'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const style = { 
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    height: 530,
};

export const SignUpForm = () => {

    const {signup} = useContext(AuthContext);
    const [data,setData] = useState({});

    const inputdata = (e) =>{
        let {name,value} = e.currentTarget;
        setData({
            ...data,
            [name]:value
        })
    }

  return (
    <>
        <div className={styles.container}>
                    <Box
                    sx={style,{
                        width: 400,
                        maxWidth: '100%'
                    }}
                    >
                       <div className={styles.namediv}>
                            <input type="text" name='firstname' value={data.name} onChange={(e)=>inputdata(e)} placeholder='First name'/>
                            <input type="text" name='lastname' value={data.name} onChange={(e)=>inputdata(e)} placeholder='Surname'/>
                       </div>
                        <div className={styles.mobilediv}>
                            <input type="text" name='contact' value={data.name} onChange={(e)=>inputdata(e)} placeholder='Mobile number or email address'/>
                        </div>
                        <div className={styles.passworddiv}>
                            <input type="text" name='password' value={data.name} onChange={(e)=>inputdata(e)} placeholder='New password'/>
                        </div>
                        
                        <div className={styles.dobdiv}>
                        <p>Date of birth</p>
                        <select name="day" value={data.name} onChange={(e)=>inputdata(e)}>
                            <option value=""></option>
                    	    <option value="1">1</option>
                    	    <option value="2">2</option>
                    	    <option value="3">3</option>
                    	    <option value="4">4</option>
                    	    <option value="5">5</option>
                    	    <option value="6">6</option>
                    	    <option value="7">7</option>
                    	    <option value="8">8</option>
                    	    <option value="9">9</option>
                        	<option value="10">10</option>
                        	<option value="11">11</option>
                        	<option value="12">12</option>
                        	<option value="13">13</option>
                        	<option value="14">14</option>
                        	<option value="15">15</option>
                        	<option value="16">16</option>
                        	<option value="17">17</option>
                        	<option value="18">18</option>
                        	<option value="19">19</option>
                        	<option value="20">20</option>
                        	<option value="21">21</option>
                        	<option value="22">22</option>
                        	<option value="23">23</option>
                        	<option value="24">24</option>
                        	<option value="25">25</option>
                        	<option value="26">26</option>
                        	<option value="27">27</option>
                        	<option value="28">28</option>
                        	<option value="29">29</option>
                        	<option value="30">30</option>
                        	<option value="31">31</option>
                        </select>
                        <select name="month"  value={data.name} onChange={(e)=>inputdata(e)}>
                        <option value=""></option>
                    	    <option value="feb">January</option>
                    	    <option value="jan">February</option>
                    	    <option value="mar">March</option>
                    	    <option value="apr">April</option>
                    	    <option value="may">May</option>
                    	    <option value="jun">June</option>
                    	    <option value="jul">July</option>
                    	    <option value="aug">August</option>
                    	    <option value="sep">September</option>
                        	<option value="oct">October</option>
                        	<option value="nov">November</option>
                        	<option value="dec">December</option>
                        </select>
                        <select name="month"  value={data.name} onChange={(e)=>inputdata(e)}>
                        <option value=""></option>
                    	    <option value="1999">1999</option>
                    	    <option value="2000">2000</option>
                    	    <option value="2001">2001</option>
                    	    <option value="2002">2002</option>
                    	    <option value="2003">2003</option>
                    	    <option value="2004">2004</option>
                    	    <option value="2005">2005</option>
                    	    <option value="2006">2006</option>
                    	    <option value="2007">2007</option>
                        	<option value="2008">2008</option>
                        	<option value="2009">2009</option>
                        	<option value="2010">2010</option>
                            <option value="2011">2011</option>
                    	    <option value="2012">2012</option>
                    	    <option value="2013">2013</option>
                    	    <option value="2014">2014</option>
                    	    <option value="2015">2015</option>
                    	    <option value="2016">2016</option>
                    	    <option value="2017">2017</option>
                    	    <option value="2018">2018</option>
                    	    <option value="2019">2019</option>
                        	<option value="2020">2020</option>
                        	<option value="2021">2021</option>
                        	<option value="2022">2022</option>
                        </select>
                        </div>
                        
                        <div className={styles.genderdiv}>
                        <p>Gender</p>
                        <span>
                        <label>Female</label>
                        <input type="radio" name="gender" value='female' onClick={(e)=>inputdata(e)}/>
                        </span>
                        <span>
                        <label>Male</label>
                        <input type="radio" name="gender" value='male' onClick={(e)=>inputdata(e)}/>
                        </span>
                        <span>
                        <label>Custom</label>
                        <input type="radio" name="gender" value='custom' onClick={(e)=>inputdata(e)}/>
                        </span>
                        </div>
                        <p>By clicking Sign Up, you  agree to our Terms, Data Policy and Cookie Policy. You<br/>
                         may receive SMS notifications from us and can opt out at any time.</p>                   
                    </Box>
                    </div>
                    
                    <div className={styles.buttondiv}>
                    <Button variant="contained" disableElevation color='success' sx={{ height: 40,width: 200, mt:2, mb:2, bgcolor:"rgba(66,183,42,255)"}} onClick={()=>signup(data)}>
                        Sign Up
                    </Button>
                    </div>
    </>
  )
}
