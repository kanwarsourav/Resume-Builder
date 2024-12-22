import React from 'react'
import { FileEarmarkTextFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import Logo from './Images/JOBHUB_lOGO.svg'
// D:\Training\Resume Builder\New folder\Resume-Builder\src\App.css
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
  return (

    <div style={{ backgroundColor: '#bfe9db', color: '#07588a', zIndex: 10 }}>
      <nav className="navbar navbar-expand-xl navbar-light p-0 m-0 " >
        <div className="container-fluid w-75" >

          <div className="navbar-brand d-flex align-items-center" style={{ color: '#07588a', fontSize: '30px', fontWeight: "600" }}>
            <div className='me-3 mb-2 '>
              <img src={Logo} alt="" width={120} />
            </div>
            <div className=' flex-grow-1'></div>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <div className='flex-grow-1'></div>
            <div className="navbar-nav mb-2 ms-5 ">
              <li className="nav-item ">
                {/* /*this link will show the Home page */}
                <Link to='/' className="nav-link active me-4" style={{ textDecoration: 'none', color: '#07588a', fontSize: "20px"}} onMouseEnter={(e) =>{ e.currentTarget.style.color = '#ff5733'; e.currentTarget.style.border = '2px solid rgb(0, 0, 0)';}} // Change color on hover
                  onMouseLeave={(e) =>{ e.currentTarget.style.color = '#07588a'; e.currentTarget.style.border = '2px solid transparent';}} 
                >Resume Templates</Link>
              </li>
              <li className="nav-item">
                {/* this link will show the MyResume page displaying the preview of the resume created by the user. */}
                <Link to='/myresume' className="nav-link active me-4" style={{ textDecoration: 'none', color: '#07588a', fontSize: "20px" }} onMouseEnter={(e) =>{ e.currentTarget.style.color = '#ff5733'; e.currentTarget.style.border = '2px solid rgb(0, 0, 0)';}} // Change color on hover
                  onMouseLeave={(e) =>{ e.currentTarget.style.color = '#07588a'; e.currentTarget.style.border = '2px solid transparent';}} >My Resume</Link>
              </li>
              <li className="nav-item">
                {/* this link will show the About Us page. */}
                <Link to='/about' className="aboutbtn nav-link active " style={{ textDecoration: 'none', color: '#07588a', fontSize: "20px" }} onMouseEnter={(e) =>{ e.currentTarget.style.color = '#ff5733'; e.currentTarget.style.border = '2px solid rgb(0, 0, 0)';}} // Change color on hover
                  onMouseLeave={(e) =>{ e.currentTarget.style.color = '#07588a'; e.currentTarget.style.border = '2px solid transparent';}}>About Us</Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
