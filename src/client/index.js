'use strict';

import Canvas from 'canvas';
global.Vector2 = Canvas.Vector2;

Canvas.ready(
	[
		require('./ship'),
		require('./star')
	],
	0.5
);
