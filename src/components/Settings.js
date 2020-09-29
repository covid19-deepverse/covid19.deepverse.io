import React from 'react'

function Settings() {
    return (
        <div className="header__settings">
          <div className="header__setting__title">Preferences</div>
          <div className="header__setting__el">
            <div className="header__setting__el__title" >Theme</div>
            <div className="dark__mode__toggle">Theme</div>
          </div>
          <div className="header__setting__el">
            <div className="header__setting__el__title">Language</div>
            <div className="language__selector__button">English</div>
          </div>
          <div className="header__setting__el">
            <div className="header__setting__el__title">Flags</div>
            <div className="backdrop">USA</div>
          </div>
        </div>
    );
}

export default Settings
