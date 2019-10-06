import React from "react"
import './Header.css'

const Header = () => <div className="i-dashboard-header" >
    <div className="header-content">
        <div className="logo">
            <a href="/panel">
                <img className="camera" src="https://img.icons8.com/pastel-glyph/128/000000/old-time-camera--v2.png" />
                <p>Cinema App</p>
            </a>
        </div>
        <img className="card" src="https://img.icons8.com/pastel-glyph/64/000000/bank-card-front-side--v2.png" />
    </div>
</div>

export default Header