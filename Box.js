class Box {
    constructor(x, y, w, h) {
        var options = {
            restitution : 1
        }

        this.boxBody = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(myWorld, this.boxBody);
    }

    display() {

        //capturing position and angle of the physics body
        var pos = this.boxBody.position;
        var angle = this.boxBody.angle;

        //rotate() and translate() functions change the angle and translation of the entire game space. 
        //Every new object will then be drawn at this new angle and translation.
        //so we store the new translation and rotation setting and then revert back to the old setting after this object is drawn.
        //push() -> captures the new setting.
        //pop() -> reverts to the old setting.
        //translate() -> to change the 0 of the axis to a given x and y position.
        push();

        //changing origin to rectangle's position to change the axiz of rotation
        translate(pos.x, pos.y);
        //angle mode set to radians so that computer doesn't take degrees
        //matter.js takes angle in radians and p5.js takes it in degrees
        angleMode(RADIANS);
        //rect instruction does not allow us to draw a rotated rectangle
        //to make rectangle rotate on the captured angle
        rotate(angle);

        //setting outline color, thickness and color of body
        strokeWeight(4);
        stroke("green");
        fill("white");

        //setting x and y to be at center of the rectangle
        rectMode(CENTER);
        //giving 0,0 as position relative to the translated origin
        rect(0, 0, this.width, this.height);
        pop();
    }
}