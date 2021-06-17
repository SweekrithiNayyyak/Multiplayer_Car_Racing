class Form{
    constructor(){
        this.input= createInput('Name');
       this.button=createButton('play');
       this.greeting= createElement('h3');
       this.title=createElement('h2');
       this.reset=createButton('Reset')
    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();

        
    }
display(){
  
    this.title.html('Car Racing Game');
    this.title.position(displayWidth/2-50,0);

  
   this.input.position(displayWidth/2-40,displayHeight/2-80);
   this.button.position(displayWidth/2+30,displayHeight/2);
    this.reset.position(displayWidth/2+100,displayHeight/2)

   this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
       player.name= this.input.value();
       
       this.greeting.html("Welcome "+player.name);
       
       
       this.greeting.position(displayWidth/2-70,displayHeight/4);
       playerCount+=1;
       player.index=playerCount;

       player.update();
       
       player.updateCount(playerCount);
   })

   this.reset.mousePressed(()=>{
       game.updateState(0);
       player.updateCount(0)

   })
}
}