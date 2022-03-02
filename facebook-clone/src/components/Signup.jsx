import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import styles from './signup.module.css'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 430,
    height: 530,
    bgcolor: 'background.paper',
    boxShadow: 20,
    p: 0,
};

export const Signup = () => {
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
      <><Card sx={{border:1, maxWidth: 400, height:600, m:"auto" }}>
            <CardActions>
                <CardContent>
                    <div className={styles.container}>
                    <div className={styles.heading}>
                        <h1>Sign Up</h1>
                        <p>It's quick and easy</p>
                        <hr/>
                    </div>
                    <Box
                    sx={{
                        width: 350,
                        maxWidth: '100%'
                    }}
                    >
                        {/* <TextField id="outlined-basic" name='email' size='small' variant="outlined" placeholder='First name' sx={{width:150,mt:0}}/>
                        <TextField id="outlined-basic" name='password' size='small' variant="outlined"  placeholder='Surname' sx={{width:180,mt:1.2}}/>
                        <TextField id="outlined-basic" name='password' size='small' variant="outlined" fullWidth  placeholder='Mobile number or email address' sx={{width:180,mt:1.2}}/> */}
                        

                        {/* {1 > 5 ?<TextField id="outlined-basic" name='password' size='small' variant="outlined" fullWidth  placeholder='Re-enter email address' sx={{width:180,mt:1.2}} />:null}
                        <TextField id="outlined-basic" name='password' size='small' va  riant="outlined"  placeholder='New Password' sx={{width:180,mt:1.2}} /> */}
                        {/*  */}
                       <div>
                            <input type="text" name='firstname' value={data.name} onChange={(e)=>inputdata(e)} placeholder='First name'/>
                            <input type="text" name='lastname' value={data.name} onChange={(e)=>inputdata(e)} placeholder='Surname'/>
                       </div>
                        <div>
                            <input type="text" name='contact' value={data.name} onChange={(e)=>inputdata(e)} placeholder='Mobile number or email address'/>
                        </div>
                        <div>
                            <input type="text" name='password' value={data.name} onChange={(e)=>inputdata(e)} placeholder='New password'/>
                        </div>
                        <p>Date of birth</p>
                        <div>
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
                    	    <option value="">1999</option>
                    	    <option value="">2000</option>
                    	    <option value="">2001</option>
                    	    <option value="">2002</option>
                    	    <option value="">2003</option>
                    	    <option value="">2004</option>
                    	    <option value="">2005</option>
                    	    <option value="">2006</option>
                    	    <option value="">2007</option>
                        	<option value="">2008</option>
                        	<option value="">2009</option>
                        	<option value="">2010</option>
                            <option value="">2011</option>
                    	    <option value="">2012</option>
                    	    <option value="">2013</option>
                    	    <option value="">2014</option>
                    	    <option value="">2015</option>
                    	    <option value="">2016</option>
                    	    <option value="">2017</option>
                    	    <option value="">2018</option>
                    	    <option value="">2019</option>
                        	<option value="">2020</option>
                        	<option value="">2021</option>
                        	<option value="">2022</option>
                        </select>
                        </div>
                        <p>Gender</p>
                        <div>
                        <label>Female</label>
                        <input type="radio" name="gender" value='female' onClick={(e)=>inputdata(e)}/>
                        <label>Male</label>
                        <input type="radio" name="gender" value='male' onClick={(e)=>inputdata(e)}/>
                        <label>Custom</label>
                        <input type="radio" name="gender" value='custom' onClick={(e)=>inputdata(e)}/>
                        </div>
                        <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You<br/>
                         may receive SMS notifications from us and can opt out at any time.</p>                   
                    </Box>
                    {/* <FormControl  sx={{width:100,display:'flex'}} size='small'>
                        <p>Date of birth</p>
                        <Select
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Select
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Select
                            // value={age}
                            // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl> */}
                    </div>
                    <Button variant="contained" disableElevation color='success' sx={{ height: 50, mt:2, mb:2, bgcolor:"rgba(66,183,42,255)"}} onClick={()=>signup(data)}>
                        Sign Up
                    </Button>
                </CardContent>
            </CardActions>
        </Card></>
        
  )
}
