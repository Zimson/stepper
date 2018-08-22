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
            opacity: 0.4;
            color: #3b3b3b;

            &--active {
              opacity: 1;
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
