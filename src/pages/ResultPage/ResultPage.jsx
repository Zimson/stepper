import React, { Fragment } from 'react';
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
  <Fragment>
    <h1>Успешно создана виртуальная машина</h1>

    <pre>{JSON.stringify(resultVm, null, 2)}</pre>

    <Button title="Назад" onClick={switchPage(0)}>
      Назад
    </Button>

    {/* language=SCSS */}
    {/*<style jsx>{``}</style>*/}
  </Fragment>
);

ResultPage.propTypes = propTypes;
ResultPage.defaultProps = defaultProps;

export default ResultPage;
