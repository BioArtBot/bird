import React from 'react';

class Nav extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img
                    src="./BiRD_logo.png"
                    style={{'maxHeight':80}}
                    alt="BiRD" />
            </a>
            <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-md-3{{ about_tag }}">
                        <a className="nav-link" rel="noopener"
                            href="/about">
                            About
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center ml-auto flex-row justify-content-center">
                    <li className="nav-item ml-md-3">
                        <a className="nav-link p-2" href="https://github.com/bioartbot"
                                target="_blank" rel="noopener">
                            <i className="fab fa-github-alt fa-lg"></i>
                        </a>
                    </li>
                    <li className="nav-item ml-md-3">
                        <a className="nav-link p-2"
                            href="https://www.youtube.com/channel/UCRUJB_S3yMINT7hvwFord6Q"
                            target="_blank" rel="noopener">
                            <i className="fab fa-youtube fa-lg"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Nav;