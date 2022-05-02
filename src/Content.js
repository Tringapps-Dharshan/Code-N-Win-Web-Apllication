import React from 'react'
import Dashboard from './Component/Dashboard'
import './Content.css'
import notification from './ic_notification-icon_notification_off.svg'
import profile from './profile.png'
function Content() {

  return (
    <div className=''>
        <header className='header bg-white'>
            <div className='row'>
                <div className='col-sm-8'>
                    <input type='search' className='form-control m-4' placeholder='Search your product here'/>
                </div>
                <div className='col-sm-4'>
                    <button className='btn btngreen'>+ Add project</button>
                    <img src={notification} className='ic-notification-icon-notification' alt='notofication-icon'/>
                    <img src={profile} className='profile' alt='profilepic'/>
                </div>
            </div>
        </header>
        <footer className='bg-light p-3 m-0'>
            <Dashboard/>
        </footer>
    </div>
  )
}

export default Content