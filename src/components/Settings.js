import React from 'react'

function Settings() {
    return (
      <div>
        <div className="header__settings">
          <div className="header__setting__title">Preferences</div>
          <div className="header__setting__el">
            <div>Theme</div>
            <div>Theme</div>
          </div>
          <div className="header__setting__el">
            <div className="header__setting__el__title">Language</div>
            <div className="language__selector__button">Language</div>
          </div>
          <div className="header__setting__el">
            <div className="header__setting__el__title">Flags</div>
            <div className="backdrop">Flags</div>
          </div>
        </div>
      </div>
    );
}

export default Settings
