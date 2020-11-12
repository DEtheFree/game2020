
class Player {
	constructor(){
		this.r = 60;//radius/size is
		this.x = w / 2; //players x pos
		this.y = h - this.r; //players y position
	}

	display(){
		rect(this.x, this.y, this.r, this.r)
	}
}