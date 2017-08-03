import React from 'react';

import './style.scss';

const AppCard = ({ app }) => (
  <a
    className="AppCard"
    href={app.url}
  >
    <div className="content">
      <h3>
        {app.title}
      </h3>
      <p>
        {app.copy}
      </p>
    </div>
  </a>
);

export default AppCard;
