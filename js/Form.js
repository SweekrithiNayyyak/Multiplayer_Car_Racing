class Form{
    constructor(){

    }
display(){
    var title=createElement('h2');
    title.html('Car Racing Game');
    title.position(130,0);

   var  input= createInput('Name');
   var button=createButton('play');
   input.position(130,160);
   button.position(250,200);

   button.mousePressed(function(){
       input.hide();
       button.hide();

       var greeting= createElement('h3');

       var name= input.value();
       greeting.html("Welcome "+name);
       greeting.position(130,360);

       player.update(name);
       playerCount+=1;
       player.updateCount(playerCount);
   })
}
}