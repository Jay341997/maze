function alwaysRightAlgorithm(walker, solution) {
	this.walker = walker,
	this.direction = 0,
	this.solution = solution,
	
	this.step = function() {
		var startingDirection = this.direction;
		
		while (!this.walker.move(this.direction)) {
			// Hit a wall. Turn to the right.		
			this.direction++;
			
			if (this.direction > 3) {
				this.direction = 0;
			}
			
			if (this.direction == startingDirection) {
				// We've turned in a complete circle with no new path available. Time to backtrack.
				walker.red = 100;
				
				while (!this.walker.move(this.direction, true)) {
					// Hit a wall. Turn to the right.		
					this.direction++;
					
					if (this.direction > 3) {
						this.direction = 0;
					}
				}

				break;
			}
		}
		
		this.walker.draw();
	},
	
	this.isDone = function() {
		return (walker.x == solution.x && walker.y == solution.y);
	}
};