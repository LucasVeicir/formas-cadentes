const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
let square;
let circle;
let rectangle;
let ground;
let canvas;

function setup(){
    canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    let groundOptions ={
        isStatic: true
    }
    ground = Bodies.rectangle(600,580,1200,2,groundOptions);
    World.add(world,ground);

    let circleOptions = {
        restitution: 0.5,
        friction: 0.02,
        frictionAir: 0
    }

    let squareOptions = {
        restitution: 0.7,
        friction: 0.01,
        frictionAir: 0.1
    }

    let rectangleOptions = {
        restitution: 0.01,
        friction: 1,
        frictionAir: 0.3
    }

    circle = Bodies.circle(220,10,10,circleOptions);
    World.add(world,circle);

    square = Bodies.rectangle(110,50,10,10,squareOptions);
    World.add(world,square);

    rectangle = Bodies.rectangle(350,50,10,30,rectangleOptions);
    World.add(world,rectangle);

    ellipseMode(RADIUS);
    rectMode(CENTER);

}

function draw(){
    background("purple");
    Engine.update(engine);

    fill("red");
    rect(ground.position.x,ground.position.y,1200,2);

    ellipse(circle.position.x,circle.position.y,30);

    fill("darkBlue");
    rect(square.position.x,square.position.y,50,50);

    fill("cyan");
    rect(rectangle.position.x,rectangle.position.y,100,50);

}