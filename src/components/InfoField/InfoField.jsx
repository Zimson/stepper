import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

const defaultProps = {
  label: 'Образ диска:',
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
          width: 100%;
          display: flex;
          font-size: 1.3rem;
          color: #525252;
          min-height: 35px;
          justify-content: stretch;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 10px;

          &__label {
            font-size: 1.15rem;
            min-width: 200px;
            color: #a0a0a0;
            margin-bottom: 5px;
          }

          &--disabled {
            opacity: 0.7;
            pointer-events: none;
          }

          @media screen and (min-width: 480px) {
            margin-bottom: 20px;

            &__label {
              font-size: 1rem;
            }
          }
        }
      `}
    </style>
  </div>
);

InfoField.propTypes = propTypes;
InfoField.defaultProps = defaultProps;

export default InfoField;
