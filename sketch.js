var movingrect, fixedrect, rect3,rec4

function setup(){
  createCanvas(1200,800)
  fixedrect = createSprite(400,200,50,80)
  fixedrect.shapeColor = "blue"
  fixedrect.debug = true
  movingrect = createSprite(200,200,30,80)
  movingrect.shapeColor = "blue"
  movingrect.debug = true
  rect3 = createSprite(300,300,40,60)
  rect3.shapeColor = "red"
  rect4 = createSprite(500,300,80,100)
  rect4.shapeColor = "red"
}
function draw(){
  background("black")
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY


  if(isTouching(movingrect,rect4)){
    movingrect.shapeColor = "white"
    rect4.shapeColor = "white" 
  }
  else{
    movingrect.shapeColor = "blue"
    rect4.shapeColor = "blue" 
  }

  drawSprites();
}
function isTouching(ob1, ob2){
  if(ob1.x-ob2.x < ob1.width/2+ob2.width/2 && 
    ob2.x-ob1.x < ob2.width/2+ob1.width/2 &&
    ob1.y-ob2.y < ob2.height/2 + ob1.height/2 &&
    ob2.y-ob1.y < ob2.height/2 + ob1.height/2){
      return true
  }
  else {
    return false
  }
}