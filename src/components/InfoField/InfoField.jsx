import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

const defaultProps = {
  label: 'Образ диска',
  disabled: false,
};

const InfoField = ({ label, children, disabled }) => (
  <div className={`info-field ${disabled ? 'info-field--disabled' : ''}`}>
    <div className="info-field__label">{label}</div>
    <div className="info-field__description">{children}</div>

    {/* language=SCSS */}
    <style jsx>
      {`
        .info-field {
          &--disabled {
            opacity: 0.7;
            pointer-events: none;
          }
        }
      `}
    </style>
  </div>
);

InfoField.propTypes = propTypes;
InfoField.defaultProps = defaultProps;

export default InfoField;
