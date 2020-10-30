import React from 'react';
import { IconContext } from 'react-icons';
import * as FiIcons from 'react-icons/fi';

function Filters() {
  return (
    <div className="left__container">
      <div className="header__left">
        <div className="header__logo">DEEPVERSE.IO</div>
        <div className="header__title__wrapper">TOP 10 Country</div>
      </div>
      <div className="commodities__list">
        <div className="commodities__list_filter">
          <IconContext.Provider
            value={{ color: '#EA5771', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--total--case">Total Case</div>
        </div>
        <div className="commodities__list_filter">
          <IconContext.Provider
            value={{ color: '#50E3C2', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--active--case">Active Case</div>
        </div>
        <div className="commodities__list_filter">
          <IconContext.Provider
            value={{ color: '#D22D36', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--deaths--case">Deaths Cases</div>
        </div>
        <div className="commodities__list_filter">
          <IconContext.Provider
            value={{ color: '#039245', className: 'global-class-name' }}
          >
            <div>
              <FiIcons.FiHexagon size="1.7em" />
            </div>
          </IconContext.Provider>

          <div className="commodities_check--recovered--case">Recovered</div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
