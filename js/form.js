class Form
{
constructor()
{
this.title=createElement("h2")
this.input=createInput("NAME")
this.button=createButton("Click Here")
this.greeting=createElement("h2")


}
 hide()
 {
 this.greeting.hide();
 this.input.hide();
 this.button.hide();
 }
 display()
 {
 
 this.title.html("car racing game")
 this.title.position(displayWidth/2-50,0)

 this.input.position(displayWidth/2+30,displayHeight/2-30)
 this.button.position(displayWidth/2+70,displayHeight/2+40)

 this.button.mousePressed(()=>{
 this.input.hide();
 this.button.hide();
 player.name=this.input.value();
 playerCount+=1
 player.index=playerCount
 player.updateName(name)
 player.updateCount(playerCount)
 this.greeting.html("hello "+player.name)
 this.greeting.position(displayWidth/2+70,displayHeight/2-70)
 })
 }



}