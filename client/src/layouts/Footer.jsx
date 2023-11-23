import React from 'react'
    
function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer bg-dark mt-auto non-printable">
                <p className='text-light text-center py-3 mx-1 mb-0'>&copy; 2022-{year} FreakDevs. All rights reserved.</p>
        </footer>
    )
}

export default Footer