import React from 'react';
import AppCard from '../AppCard';

import apps from '../apps';

import './style.scss';

const AppCards = () => (
  <div className="AppCards">
    {apps.map(app => (
      <AppCard
        key={app.title}
        app={app}
      />
    ))}
  </div>
);

export default AppCards;
