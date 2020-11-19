

class Player {

	constructor(){
		this.r = 60;//radius/size is
		this.x = w / 2; //players x pos
		this.y = h - this.r; //players y position
		this.speed = 2;
		this.direction = 'still';

	}

	display(){
		image(playerImg, this.x, this.y, this.r, this.r);
	}

	move(){

		switch (this.direction){
			case 'still': 
			//don't move
				break;
			case 'up':
			//decrease y pos
				if (this.y > 0){
					this.y -= this.speed;
				}
				break;
			case 'down':
			// increase y pos
				if (this.y < h - this.r){
				this.y += this.speed;
				}
				break;
			case 'right':
			//increase x pos
				if (this.x < w - this.r){
				this.x += this.speed;
				}
				break;
			case 'left':
			// decrease x pos
				if (this.x > 0){
				this.x -= this.speed;
				}
				break;
				default:
				break;
		}