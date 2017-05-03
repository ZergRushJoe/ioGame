/**
 * Created by joe12 on 5/2/2017.
 */
class Vector
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    getMag()
    {
        this.lastCalMag = Math.sqrt(this.x*this.x+this.y*this.y);
        return this.lastCalMag;
    }
    setMag(length)
    {
        this.lastCalMag = Math.sqrt(this.x*this.x+this.y*this.y);
        this.x = (this.x*length) / this.lastCalMag;
        this.y = (this.y*length) / this.lastCalMag;
    }
    add(vector)
    {
        this.x += vector.x;
        this.y += vector.y;
    }
    sub(vector)
    {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    div(num)
    {
        this.x = this.x/num;
        this.y = this.y/num;
    }
    mult(num)
    {
        this.x *= num;
        this.y *= num;
    }
    calRotation()
    {
        this.lastCalAngel = Math.atan2(this.x,this.y);
        return this.lastCalAngel
    }
    setRotation(angel)
    {
        if(this.lastCalAngel)
        {
            
        }
        else
        {
            this.calRotation();
            this.setRotation(angle);
        }
    }

}