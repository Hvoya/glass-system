import React from 'react';
import { render } from 'react-dom';

import { App } from './App';
import { withProviders } from 'hoc/withProviders';

const BoostedApp = withProviders(App);

render(<BoostedApp />, document.getElementById('app'));
