import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from '../../components/Button';

const propTypes = {
  switchPage: PropTypes.func.isRequired,
  resultVm: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    startStatus: PropTypes.bool,
  }).isRequired,
};

const defaultProps = {};

const ResultPage = ({ resultVm, switchPage }) => (
  <div className="result-container">
    <h1>Успешно создана виртуальная машина</h1>

    <pre>{JSON.stringify(resultVm, null, 2)}</pre>

    <div className="button-container">
      <Button title="Назад" onClick={switchPage(0)}>
        Назад
      </Button>
    </div>

    {/* language=SCSS */}
    <style jsx>
      {`
        .result-container {
          width: 100%;
          max-width: 630px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;

          pre {
            margin: 20px 0;
          }

          .button-container {
            margin-top: 20px;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;
          }
        }
      `}
    </style>
  </div>
);

ResultPage.propTypes = propTypes;
ResultPage.defaultProps = defaultProps;

export default ResultPage;
