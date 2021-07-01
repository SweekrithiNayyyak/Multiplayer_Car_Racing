class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
        this.rank=null;

    }
getCount(){
    var loc=database.ref('playerCount')
    loc.on("value",function(data){
        playerCount=data.val();
    })

}
update(){
   var playerIndex="players/player"+this.index;
    database.ref(playerIndex).set({
        'name':this.name,
        'distance':this.distance
    })
}
static getPlayerInfo(){
    var playerInfo=database.ref("players");
    playerInfo.on("value",(data)=>{
        allPlayers=data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })

}

getCarsAtEnd(){
    var refe=database.ref("carsAtEnd");
    refe.on("value",(data)=>{
        this.rank=data.val()
    })
}

static updateCarsAtEnd(rank){
    database.ref('/').update({
        carsAtEnd:rank
    })
}



}