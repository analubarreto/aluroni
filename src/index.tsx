import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/styles/normalize.scss';
import './index.scss';
import Start from 'pages/Start';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Start />
	</React.StrictMode>
);
