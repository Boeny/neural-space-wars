const PI = Math.PI;
const PI_2 = PI / 2;
const PIm2 = PI * 2;

export class Ship
{
	constructor(){
		this.radius = 10;// for collisions
		
		this.velocity = new Vector2();
		this.acceleration = 0.1;
		this.angularVelocity = PI / 90;
		
		this.points = new Array(3);
		this.offsets = [
			{position: new Vector2(0, 10)},
			{position: new Vector2(-5, -10)},
			{position: new Vector2(5, -10)}
		];
		this.setOffsetsRotation();
	}
	
	setOffsetsRotation(){
		for (var i = 0; i < this.offsets.length; i++)
		{
			let offset = this.offsets[i];
			let pos = offset.position;
			offset.rotation = Math.acos(pos.x / pos.length);
			
			if (pos.x < 0) offset.rotation += PI_2;
			if (pos.y < 0) offset.rotation = -offset.rotation;
		}
	}
	
	Start(objects){
		this.oldPos = this.position = new Vector2(this.renderer.width / 2 - 100, this.renderer.height / 2);
		this.oldAng = this.rotation = -PI_2;
		this.controls.enabled = true;
	}
	
	getPoint(offset){
		let p = this.position.clone().add(offset.position);
		p.rotate(this.rotation + offset.rotation, this.position);
		return p;
	}
	
	getPoints(){
		let samePos = this.position.equals(this.oldPos);
		let sameAng = this.rotation == this.oldAng;
		
		if (samePos && sameAng) return this.points;
		
		for (var i = 0; i < this.offsets.length; i++){
			this.points[i] = this.getPoint(this.offsets[i]);
		}
		
		this.oldPos = this.position.clone();
		this.oldAng = this.rotation;
		
		return this.points;
	}
	
	Update(){
		if (this.isDestroyed) return;
		this.position.add(this.velocity);
	}
	
	render(){
		if (this.isDestroyed) return;
		this.renderer.setColor('white');
		this.renderer.drawPoly(this.getPoints());
	}
	
	destroy(){
		this.isDestroyed = true;
	}
	
	//------------------------------------- EVENTS
	
	onKeyDown(key){
		switch (key) {
			case this.controls.keys.UP:
			case this.controls.keys.W:
				this.velocity.add(Vector2.up.rotate(this.rotation).mult(this.acceleration));
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
