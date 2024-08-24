import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <>
        <MDBFooter  className='text-center w-100 text-lg-left'>
      <div className='text-center p-3'>
        
        <a className='text-decoration-none fw-bolder footerDiv' href='/'>
        © Ashwin Joseph - 2024 | All rights reserved.
        </a>
      </div>
    </MDBFooter>
    </>
  )
}

export default Footer