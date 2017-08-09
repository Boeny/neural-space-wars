import Vector2 from 'vector2';
import Figure from 'figure';

const PI = Math.PI;
const PI_2 = PI / 2;
const PIm2 = PI * 2;

export class Ship
{
	constructor(){
		this.figure = new Figure([0, 10], [-5, -10], [5, -10]);
		this.radius = 10;// for collisions
		
		this.velocity = new Vector2();
		this.acceleration = Vector2.up.mult(0.1);
		this.angularVelocity = PI / 40;
	}
	
	Start(objects){
		this.controls.enabled = true;
		
		this.position = new Vector2(this.renderer.width / 2 - 100, this.renderer.height / 2);
		this.rotation = -PI;
		
		this.figure.setPoints(this.position, this.rotation);
	}
	
	Update(){
		if (this.isDestroyed) return;
		this.position.add(this.velocity);
	}
	
	render(){
		if (this.isDestroyed) return;
		this.renderer.setColor('white');
		this.renderer.drawPoly(this.figure.getPoints(this.position, this.rotation));
	}
	
	destroy(){
		this.isDestroyed = true;
	}
	
	//------------------------------------- EVENTS
	
	onKeyDown(key){
		switch (key) {
			case this.controls.keys.UP:
			case this.controls.keys.W:
				this.velocity.add(this.acceleration.setAngle(this.rotation));
				break;
			
			case this.controls.keys.LEFT:
			case this.controls.keys.A:
				this.rotation -= this.angularVelocity;
				if (this.rotation < -PI) this.rotation += PIm2;
				break;
			
			case this.controls.keys.RIGHT:
			case this.controls.keys.D:
				this.rotation += this.angularVelocity;
				if (this.rotation > PI) this.rotation -= PIm2;
				break;
		}
	}
}
