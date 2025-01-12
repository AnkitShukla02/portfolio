import React from 'react'
import logo from '../../assets/Images/logo.png'
import '../../assets/Styles/Global.css'
import '../../assets/Styles/Header.css'
import PrimaryBtn from './PrimaryBtn'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header className='py-4'>
      <div className="container">
        <div className="main-header flex items-center justify-between">
          <div className="logo">
            <a href="./">
            <img src={logo} alt="" />
            </a>
          </div>
          <div className="primary-menu flex items-center gap-6">
            <nav>
              <ul className='flex gap-4'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About Us</Link>
                </li>
                <li>
                  <a href="javascript:void(0)">Projects</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blogs</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact Us</a>
                </li>
              </ul>
            </nav>

            <PrimaryBtn/>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header