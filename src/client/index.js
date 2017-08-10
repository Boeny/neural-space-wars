'use strict';

import Canvas from 'canvas';

Canvas.ready(
	[
		require('./ship'),
		require('./star')
	],
	0.5,
	true// use decart system with (0,0) in the middle of the screen
);
