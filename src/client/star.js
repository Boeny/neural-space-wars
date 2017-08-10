import Vector2 from 'vector2';

export default class Star
{
	// before components are added
	constructor(){
		this.radius = 10;
		this.mass = 1;
		this.gravity = false;
	}
	
	// after renderer and controls have created but before they are added to the scene
	Start(objects){
		this.position = new Vector2(0, 0);
		this.objects = [];
		
		for (var name in objects){
			if (objects[name].velocity){
				this.objects.push(objects[name]);
			}
		}
	}
	
	// after Start and every frame
	render(){
		this.renderer.setColor('white');
		this.renderer.drawCircle(this.position, this.radius);
	}
	
	// after render
	Update(){
		if (!this.gravity) return;
		
		var toDelete = [];
		var obj, diff, distance, distanceDiff, direction, velocity;
		
		for (var i = 0; i < this.objects.length; i++){
			obj = this.objects[i];
			diff = this.position.clone().sub(obj.position);
			distance = diff.length;
			distanceDiff = distance - (this.radius + (obj.radius || 0));
			
			if (distanceDiff <= 0){
				obj.destroy();
				toDelete.push(i);
				continue;
			}
			
			direction = diff.clone().normalize();
			velocity = direction.clone().mult(this.mass / distance);
			
			if (distanceDiff - velocity.length <= 0){// on the next frame
				velocity = direction.clone().mult(distance - this.radius);
			}
			
			obj.velocity.add(velocity);
		}
		
		for (i = 0; i < toDelete.length; i++){
			this.objects.splice(toDelete[i], 1);
		}
	}
}
