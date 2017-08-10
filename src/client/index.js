'use strict';

import Canvas from 'canvas';
import Ship from './ship';
import Star from './star';

Canvas.ready(
	{
		ship: new Ship(),
		star: new Star()
	},
	0.5,
	true// use decart system with (0,0) in the middle of the screen
);
