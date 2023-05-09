import React from 'react'
import './profile.css'
export default function Profile() {
  return (
    <div>
        <div id="main">
            <h1 id="heading"> E-com Website </h1>
        </div>

        <div id="bar">
            <div id="leftbar">
                <p class="left">Cart</p>
                <hr class="line"/>

                <p class="left">Your Orders</p>
                <hr class="line"/>
            </div>

            <div id="rightbar">
                <div id="pinfo">
                    <h1>Personal Information</h1>
                    <div id="pi">
                        <div>
                            <h3>Name</h3>
                            <br/>
                            <h3>E-Mail</h3>
                            <br/>
                            <h3>Contact No.</h3>
                            <br/>
                            <h3>Address</h3>
                        </div>
                                
                        <div>
                            <input type="text" placeholder="Enter your name"/>
                            <button class="button">Edit</button>
                            <br/><br/>
                            <input type="email" placeholder="@gmail.com" />
                            <button class="button">Edit</button>
                            <br/><br/>
                            <input type="integer" placeholder="+91" />
                            <button class="button">Edit</button>
                            <br/><br/>
                            <input type="address" placeholder="Type your address"/>
                            <button class="button">Edit</button>
                        </div>
                  </div>
                    <div id="button">
                        <button class="delete"><h5>Reset Password</h5></button><br/><br/>
                        <button class="delete"><h5>Delete Account</h5></button>
                    </div>
                </div>
               <div id="mainbox1">
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>
               </div>

               <div id="mainbox2">
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>                    
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>                    
                    <div class="box1">
                        <div class="booknow">
                            <p>Description of the services........</p>
                            <p>$0.00</p>
                            <img src="booknow.jpg" height="50vh" width="100vw"/>
                        </div>
                    </div>                    
               </div>
            </div>
        </div>
    </div>

  )
}
