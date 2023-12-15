import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <nav className="down-footer">
                <div className="container-fluid icons">
                    <div>
                        <h3>Follow us on :-</h3>
                        <a href="https://www.instagram.com/anshu__paliwal" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://github.com/ANSHU-PALIWAL" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/priyanshu-paliwal-017a6a262/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>

                    </div>
                    <span className="r-cont f-right">
                        <h3>Copyright Ⓒ 2023:- <a href="https://www.linkedin.com/in/priyanshu-paliwal-017a6a262/" target="_blank">Priyanshu Paliwal</a></h3>
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Footer