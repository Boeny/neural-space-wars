'use strict';

import Canvas from 'canvas';

Canvas.ready(
	[
		require('./ship'),
		require('./star')
	],
	0.5
);
