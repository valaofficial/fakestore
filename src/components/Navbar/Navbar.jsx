import { useState, useEffect } from 'react'
import './navbar.css'

export default function Navbar() {

    const [isSmallScreen, setIsSmallScreen] = useState(false)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

    const screensize = window.innerWidth;

    useEffect(() =>{
        screensize <= 768? setIsSmallScreen(true): setIsSmallScreen(false);
    }, [])

  return (
    <>
    {!isSmallScreen?
    <div className='navbar'>
        <div className='navbarLinks'>
            <div className='navbarLink'>Home</div>
            <div className='navbarLink'>Our Services</div>
            <div className='navbarLink'>Featured Categories</div>
            <div className='navbarLink'>Testimonial</div>
            <div className='navbarLink'>Help</div>
        </div>
        <div className='navberBtns'>
            <div className='navBarIcons'>
                <img src='https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000' alt='Account'/>
            </div>
            <div className='navBarIcons'>
                <img src='https://img.icons8.com/?size=100&id=87&format=png&color=000000' alt='Favourites'/>
            </div>
            <div className='navBarIcons'>
                <img src='https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=000000' alt='Notifications'/>
            </div>
            <div className='navBarIcons'>
                <img src='https://img.icons8.com/?size=100&id=ySRi3OLgoOJX&format=png&color=000000' alt='Cart'/>
            </div>
            <div className='navbarBtn login'>
                Login
            </div>
            <div className='navbarBtn register'>
                Register
            </div>
        </div>
    </div>
    :
   <>
     <div className='mobilenavbarbtn'>
            {!isMobileNavOpen?
            <img onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} src='https://img.icons8.com/?size=100&id=17144&format=png&color=ffffff' alt='Menu'/> 
            :
            <img onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} src='https://img.icons8.com/?size=100&id=3062&format=png&color=ffffff' alt='Menu'/>}
        </div>

        {isMobileNavOpen?
        <div className='mobilenavbar'>
        <div className='navbarLinks'>
            <div className='navbarLink'>Home</div>
            <div className='navbarLink'>Our Services</div>
            <div className='navbarLink'>Featured Categories</div>
            <div className='navbarLink'>Testimonial</div>
            <div className='navbarLink'>Help</div>
        </div>
        <div className='navberBtnsContainer'>
            <div className='navbarIconsDiv'>
                <div className='navBarIcons'>
                    <img src='https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000' alt='Account'/>
                </div>
                <div className='navBarIcons'>
                    <img src='https://img.icons8.com/?size=100&id=87&format=png&color=000000' alt='Favourites'/>
                </div>
                <div className='navBarIcons'>
                    <img src='https://img.icons8.com/?size=100&id=eMfeVHKyTnkc&format=png&color=000000' alt='Notifications'/>
                </div>
                <div className='navBarIcons'>
                    <img src='https://img.icons8.com/?size=100&id=ySRi3OLgoOJX&format=png&color=000000' alt='Cart'/>
                </div>
            </div>
            <div className='navbarBtns'>
                <div className='navbarBtn login'>
                    Login
                </div>
                <div className='navbarBtn register'>
                    Register
                </div>
            </div>
        </div>
        </div>
        :null}
   </>
    }
    </>
  )
}


