import React, {useEffect, useState} from 'react'
import "./style/Navbar.scss"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [navBlock, setNavBlock] = useState(false);

    useEffect(() => {
        document.addEventListener('click', () => {
            setNavBlock(false);
        })
    }, [navBlock]);

    return (
        <div className="container-fluid section-header">
            <div className="container">
                <div className="navs">
                    <div className="navBrand">
                        <a href="">
                            <h2>Tutor</h2>
                        </a>
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li className="nav-link-item active">
                                <a href="/home">Home</a>
                            </li>
                            <li className="nav-link-item">
                                <a href="/tutorials">Tutorials</a>
                            </li>
                            <li className="nav-link-item">
                                <a href="/testimonials">Testimonials</a>
                            </li>
                            <li className="nav-link-item">
                                <a href="/blog">Blog</a>
                            </li>
                            <li className="nav-link-item">
                                <a href="/blogs">About</a>
                            </li>
                            <li className="nav-link-item">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown-ItemToggle">
                        <button onClick={(e) => {
                            e.stopPropagation();
                            setNavBlock(true)
                        }} className="item-Toggler fas fa-bars">
                        </button>

                        {/*// sidebar*/}
                        <div id="nav-block-section" onClick={(e) => e.stopPropagation()} className={navBlock ? "navBlock" : "navBlock hide"}>
                            <button onClick={(e) => {
                                    e.stopPropagation();
                                    setNavBlock(false)
                                }} className="side-closeButton fas fa-times">
                                
                            </button>

                            <div className="navLink-side">
                                <ul>
                                    <li>
                                        <a className="active" href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Tutorials</a>
                                    </li>
                                    <li>
                                        <a href="">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}