import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

const defaultProps = {
  isActive: false,
};

const Tab = ({ children, isActive }) => {
  return (
    <li className={`tab ${isActive ? 'tab--active' : ''}`}>
      {children}

      {/* language=SCSS */}
      <style jsx>
        {`
          .tab {
            min-height: 40px;
            text-transform: uppercase;
            margin-left: 10px;
            opacity: 0.4;
            color: #3b3b3b;
            font-size: 1.075rem;
            padding: 0 2%;

            &--active {
              opacity: 1;
              border-bottom: 2px green solid;
            }

            @media screen and (min-width: 480px) {
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </li>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
