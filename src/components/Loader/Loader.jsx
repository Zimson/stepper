import React, { Fragment } from 'react';
import LoaderSvg from './Loader.svg';

const Loader = () => (
  <Fragment>
    <img className="loader" src={LoaderSvg} alt="loader" />

    {/* language=SCSS */}
    <style jsx>
      {`
        .loader {
          margin: 50px auto;
        }
      `}
    </style>
  </Fragment>
);

export default Loader;
