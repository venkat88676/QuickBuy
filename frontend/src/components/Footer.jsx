import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer>
            <div id="footer-contact">
                <div>
                    <div className="contact">
                        <div> <ion-icon name="location-sharp"></ion-icon></div>

                        <p>House N0 1 Shivaji Nagar ,Gandhi Road ,Delhi ,New Delhi</p>
                    </div>
                    <div className="contact">
                        <div><ion-icon class="chat-icon" name="chatbubble-ellipses-outline"></ion-icon></div>

                        <p>
                                Chat With Us
                           </p>
                    </div>
                    <div className="contact">
                        <div> <ion-icon class="mail-icon" name="mail-sharp"></ion-icon> </div>

                        <p>
                           
                                Contact Us
                        
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Useful Links</h3>
                <p>
                  
                        QR Scanner
                    
                </p>
                <p>
               
                        QR Code Generator
                
                </p>
                <p>
           
                        Detail Analysis
             
                </p>
                <p>
         
                        Dynamic QR Code
             
                </p>

            </div>
            <div>
                <h3>About</h3>
                <p>
                
                        About Us
                  
                </p>
                <p>
            
                        Contact
         
                </p>
                <p>
             
                        Blog
            
                </p>
            </div>
            <div className="socialmedia">
                <h3>Social-Media</h3>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-github"></ion-icon>
                
            </div>
        </footer>
    </div>
  )
}

export default Footer