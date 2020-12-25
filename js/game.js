class Game
{
constructor()
{


}
 
getState()
{
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val();
})

}
updateState(state)
{
database.ref("/").update({
gameState:state
})
}
start()
{
if(gameState===0)
{
player=new Player();
player.getCount();
form=new Form();
form.display();
}
car1=createSprite(100,200);
car1.addImage(car1Image);
car2=createSprite(300,200);
car2.addImage(car2Image);
car3=createSprite(500,200);
car3.addImage(car3Image);
car4=createSprite(700,200);
car4.addImage(car4Image);
cars=[car1,car2,car3,car4]
console.log(cars)
}

play()
{
form.hide();
//textSize(20)
//text("gameStarted",120,100)
Player.GetPlayerInfo();
if(allPlayers!==undefined)
{
background(groundImage)
image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
//index of the array 
var index=0;
//x and y position of the cars
var x=200;
var y
//var displayPosition=130;

for(var i in allPlayers)
{
//add 1 to the index of every loop
index+=1;
//position of the cars increasing in x direction
x+=200;
//we are using the database to display the cars in y direction
y=displayHeight-allPlayers[i].distance
cars[index-1].x=x
cars[index-1].y=y
if(index===player.index) {
cars[index-1].shapeColor="red"
camera.position.x=displayWidth/2
camera.position.y=cars[index-1].y
}
/*if(i==="player"+player.index)
{
fill("brown")
} else{
fill("black")
}

displayPosition+=20;
textSize(15)
//name:0
text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition)
}*/
}

if(keyWentDown(UP_ARROW) && player.index!==null)
{
player.distance+=50;
player.updateName();
}
if(player.distance>3500)
{
gameState=2;
}
}
drawSprites();
}
end()
{
console.log("game ended")

}
}