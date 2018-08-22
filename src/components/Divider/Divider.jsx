import React, { Fragment } from 'react';

const Divider = () => (
  <Fragment>
    <hr className="stepper-app__underscore" />

    {/* language=SCSS */}
    <style jsx>
      {`
        .stepper-app__underscore {
          border-bottom: 1px solid #f3f3f3;
          margin-bottom: 10px;
        }
      `}
    </style>
  </Fragment>
);

export default Divider;
