import React from 'react'
import './Style/Signup.css'

const Signup = () => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    return (
        <div className="container  d-flex flex-column align-items-center mt-5  col-4 h-75  py-5 container-signup ">
          <h2>Sing Up</h2>
          <form className="border py-5  px-3 w-100 h-100  ">
            <div className="form-group mb-3 ">
              <input
                type="text"
                className="form-control "
                id="yourname"
                aria-describedby="emailHelp"
                placeholder="Your name"
              />
            </div>
            <div className="form-group w-100">
              <input
                type="email"
                className="form-control "
                id="emial"
                aria-describedby="emailHelp"
                placeholder="Your Email"
                // onChange={(event) => setEmail(event.target.value)}
                // value={email}
              />
            </div>
            <div className="form-group w-100 mt-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                // onChange={(event) => setEmail(event.target.value)}
                // value={email}
              />
            </div>
            <div className="form-group w-100 mt-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder=" Re Password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-3" >
              Sing Up
              

            </button>
    
        <div className=''>
           <hr />
            <div className="">
              <p>
                Don't have an account yet? <span>Sign In</span>
              </p>
            </div>  
        </div>
           
    
           
          </form>
        </div>
      );
    };
    
export default Signup