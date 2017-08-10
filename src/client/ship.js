import Vector2 from 'vector2';
import Figure from 'figure';

const PI = Math.PI;
const PI_2 = PI / 2;
const PIm2 = PI * 2;

export class Ship
{
	// before components are added
	constructor(){
		this.figure = new Figure([0, 10], [-5, -10], [5, -10]);
		this.radius = 10;// for collisions
		
		this.velocity = new Vector2();
		this.acceleration = Vector2.up.mult(0.1);
		this.angularVelocity = PI / 20;
		
		this.isDestroyed = false;
	}
	
	// after renderer and controls have created but before they are added to the scene
	Start(objects){
		this.controls.enabled = true;
		
		this.position = new Vector2(- 100, 0);
		this.rotation = 0;
		
		this.figure.setPoints(this.position, this.rotation);
	}
	
	// after Start and every frame
	render(){
		if (this.isDestroyed) return;
		this.renderer.setColor('white');
		this.renderer.drawPoly(this.figure.points);
		
		this.renderer.setColor('yellow');
		this.renderer.drawLine(this.position, this.position.clone().add(this.velocity.clone().mult(50)));
		
		this.renderer.setColor('red');
		this.renderer.drawLine(this.position, this.position.clone().add(Vector2.up.setAngle(this.rotation).mult(10)));
	}
	
	// after render
	Update(){
		if (this.isDestroyed) return;
		
		if (this.target){
			if (this.rotation != this.target.rotation){
				this.rotate(this.rotation > this.target.rotation);
			}
			if (!this.position.inRange(this.target.position, 10)){
				this.velocity.add(this.acceleration.mult( Math.cos(this.target.rotation) ));
			}
		}
		
		this.position.add(this.velocity);
		this.figure.updatePoints(this.position, this.rotation);
	}
	
	//------------------------------------- METHODS
	
	destroy(){
		this.isDestroyed = true;
	}
	
	incVelocity(){
		this.velocity.add(this.acceleration.setAngle(this.rotation));
	}
	
	rotate(clockwise){
		if (clockwise){
			this.rotation -= this.angularVelocity;
			if (this.rotation < -PI) this.rotation += PIm2;
		}
		else{
			this.rotation += this.angularVelocity;
			if (this.rotation > PI) this.rotation -= PIm2;
		}
	}
	
	moveTo(p){
		if (!p) return this.setArrived();
		
		this.target = {
			position: p,
			rotation: p.clone().sub(this.position).getAngle()
		}
	}
	
	setArrived(){
		this.target = null;
	}
	
	//------------------------------------- EVENTS
	
	onKeyDown(key){
		switch (key) {
			case this.controls.keys.UP:
			case this.controls.keys.W:
				this.incVelocity();
				break;
			
			case this.controls.keys.LEFT:
			case this.controls.keys.A:
				this.rotate(false);
				break;
			
			case this.controls.keys.RIGHT:
			case this.controls.keys.D:
				this.rotate(true);
				break;
		}
	}
	
	onTouchStart(points){
		this.moveTo(points[0]);
	}
	
	onTouchMove(points){
		this.moveTo(points[0]);
	}
	
	onTouchEnd(){
		this.setArrived();
	}
}
