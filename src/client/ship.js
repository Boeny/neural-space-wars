export class Ship
{
	constructor(){
		this.radius = 10;// for collisions
		
		this.oldPos = null;
		this.oldAng = null;
		
		this.points = [];
		this.velocity = new Vector2();
		this.angularVelocity = Math.PI / 90;
	}
	
	Start(objects){
		this.position = new Vector2(this.renderer.width / 2 - 100, this.renderer.height / 2);
		this.rotation = 0;
		this.getPoints();
		this.controls.enabled = true;
	}
	
	getPoints(){
		let samePos = this.oldPos !== null && this.position.equals(this.oldPos);
		let sameAng = this.oldAng !== null && this.rotation == this.oldAng;
		
		if (samePos && sameAng) return this.points;
		
		if (!samePos){
			this.points = [
				this.position.clone().add([0, -10]),
				this.position.clone().add([-5, 10]),
				this.position.clone().add([5, 10])
			];
			
			this.oldPos = this.position.clone();
			
		}
		
		if (!sameAng){
			for (var i = 0; i < this.points.length; i++){
				this.points[i].rotate(this.position, this.rotation - this.oldAng);
			}
			
			this.oldAng = this.rotation;
		}
		
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
				this.velocity.y += 0.5;
				break;
			
			case this.controls.keys.LEFT:
			case this.controls.keys.A:
				this.rotation -= this.angularVelocity;
				break;
			
			case this.controls.keys.RIGHT:
			case this.controls.keys.D:
				this.rotation += this.angularVelocity;
				break;
		}
	}
}
