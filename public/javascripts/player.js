/**
 * Created by joe12 on 5/1/2017.
 */


class Player
{
    constructor(spriteName,contorlled,x,y)
    {
        this.spritename = spriteName;
        if(!contorlled)
        {
            player.contorlled.push(this);
        }
        this.pos = new Vector(x,y);
        this.vel = new Vector(0,0);
        this.acc = new Vector(0,0);
        this.ang = 0;
        this.angVel = 0;
        this.angAcc = 0;
    }
    update()
    {
        this.calcForces();
        this.calcAngle();
        this.updateSprite();
    }
    calcForces()
    {
        if(movement[0])
        {
            this.acc.add(Vector.fromAngMag(this.ang,.1));
        }
        if(movement[1])
        {
            this.acc.add(Vector.fromAngMag(this.ang,.1));
        }
        this.acc.add(new Vector(this.vel.x*.1,this.vel.y*.9));
        this.vel.add(this.acc);
        if(this.vel.getMag() < .001 && this.vel.getMag() > .001 )
            this.vel.mult(0);
        this.pos.add(this.vel);
        this.acc.mult(0)
    }
    calcAngle()
    {
        if(movement[2])
        {
            this.angAcc += Math.PI/32;
        }
        if(movement[3])
        {
            this.angAcc += Math.PI/32;
        }
        this.acc += this.angVel*-.9;
        this.angVel += this.angAcc;
        if(this.angVel < .001 && this.angVel > .001 )
            this.angVel = 0;
        this.ang += this.angVel;
    }
    updateSprite()
    {

    }
}
Player.contorlled = [];

let movement = [0,0,0,0];

console.log("here");
document.onkeydown = function(e)
{

    let charCode = event.keyCode;
    console.log(e.which +" : "+e.keyCode);
    switch(e.keyCode)
    {
        case 119://w
            movement[0] = 1;
            break;
        case 115://s
            movement[1] = 1;
            break;
        case 97://a
            movement[2] = 1;
            break;
        case 100://d
            movement[3] = 1;
            break;
    }

};

document.onkeyup = function(e)
{

    let charCode = event.keyCode;
    console.log(e.which +" : "+e.keyCode);
    switch(e.keyCode)
    {
        case 119://w
            movement[0] = 0;
            break;
        case 115://s
            movement[1] = 0;
            break;
        case 97://a
            movement[2] = 0;
            break;
        case 100://d
            movement[3] = 0;
            break;
    }

};