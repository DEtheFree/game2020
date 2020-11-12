
class Player {
	constructor(){
		this.r = 60;//radius/size is
		this.x = w / 2; //players x pos
		this.y = h - this.r; //players y position
		this,speed = 2;
		this.direction = 'still';
	}

	display(){
		rect(this.x, this.y, this.r, this.r)
	}

	move(){

		switch (this.direction){
			case 'still': 
			//don't move
			break;
			case 'up':
			//decrease y pos
			this.y -= this.speed;
			break;
			case 'down':
			// increase y pos
			this.y += this.speed;
			break;
			case 'left':
			//decrease x pos
			this.x -= this.speed;
			break;
			case 'right':
			// increase x pos
			break;
			this.x += this.speed;
			break;
			default;
			break;
		}
	}
}