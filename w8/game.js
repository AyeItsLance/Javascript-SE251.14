var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)



var timer = requestAnimationFrame(main)

class Car
{
    constructor()
    {
        this.x=100
        this.y=100
        this.w=100
        this.h=100
        this.vx=1
        this.vy=0
        this.color=`hotpink`
    }

    draw()
    {
        ctx.fillStyle=this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
    }
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }
}

car = []

var currentState = 'race'

var states=[]

states['start'] = function(){
    
    var y = 100
    for(let i=0; i<3; i++)
    {

        car[i] = new Car()

        car[i].y=y
        y+=150

        car[i].vx = Math.round(Math.random()*(10-5)+5)

        var r = Math.round(Math.random()*(255-0)+0)
        var g = Math.round(Math.random()*(255-0)+0)
        var b = Math.round(Math.random()*(255-0)+0)

        car[i].color = `rgb(${r},${g},${b})`
    }


}



var line = new Car()
line.color = 'black'
line.x = 900
line.y = 0
line.w = 10
linw.h = c.height





function main()
{
    ctx.clearRect(0,0, c.width, c.height);

    line.draw()

    for(i in car)
    {
        car[i].move()
        car[i].draw()

        if(car[i].x+car[i].w >= line.x)
        {
            ctx.font = `30px Arial`
            ctx.fillText(`Car ${car.indexOf(car[i])} Wins`, 20, 30)
        }
    }
    timer = requestAnimationFrame(main)
}
