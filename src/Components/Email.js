import React from 'react'
import mail from './Images/mail-icon.jpg'


function Email() {
    return (
        <div className='main__email'>
            <div className='email'>
                <h2 >
                    Pick my <span className='brain_cortex'>brain/cortex</span> and let's get
                    </h2>
                <h2>
                    <span className='started'>Started</span> on your project
                    </h2>

            </div>
            <div className='email-pic'>
                <img src={mail} alt="" width='200' />
                <div className='email-para'>
                    <h4>mutahirriaz2@gmail.com</h4>
                </div>
            </div>
        </div>
    )
}

export default Email
