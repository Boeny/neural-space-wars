import Canvas from 'canvas';
import Vector2 from 'vector2';

require('tester')({
	'ship': {
		'must shift to the right if pos = (0,0), angle = 0 and velocity = (1,0)': () => {
			let objects = Canvas.createObjects([require('./ship')]);
			Canvas.setObjectsEnv(objects);
			
			let ship = objects.ship;
			ship.position = Vector2.zero;
			ship.rotation = 0;
			ship.acceleration = Vector2.up;
			ship.incVelocity();
			ship.Update();
			
			return [ship.position, Vector2.right];
		}
	}
});