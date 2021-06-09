class Ground {
    constructor(x, y, width, height) {
        //passing options to make a static rectangular body
        var ground_options = {
            isStatic : true
        }

        //creating ground physics body and adding it to the world
        this.groundBody = Bodies.rectangle(x, y, width, height, ground_options);
        this.w = width;
        this.h = height;
        World.add(myWorld, this.groundBody);
    }

    //function to render the physics body on canvas 
    display() {
        var pos = this.groundBody.position;

        push();
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
} //just for the heck of it