class Tomagotchi {
    constructor (name){ //the user can choose
    this.name = name;
    // this.hunger = 0;
    // this.sleepiness = 0;
    // this.boredom = 0;
    // this.age = 0;
    }
    greet(){
        console.log('Kon-nichiwa')
    }
    // getHunger(){
    //     // if($timer > 10){
    //     //    return this.hunger++
    //     // }else{
    //     //    return this.hunger--
    //     // }
       
    // }
    // getSleepiness(){

    // }
    // getBoredom(){

    // }
};
const henry = new Tomagotchi();//instantiate your tomagotchi
henry.greet();


$('#gameTimer').on('click', ()=>{
    console.log('button works');
    game.setGameTimer();
    game.getHunger();
    game.getSleepiness();
    game.getBoredom();
})




const game = {
    player: 'henry',
    time: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    setGameTimer(){
        const $timer = $('#timer');
        setInterval(()=>{
                this.time++
            $timer.text(`timer: ${this.time}s`)
            
        }, 1000)
    },
    getHunger(){
        const $hunger = $('#hunger');
        setInterval(()=>{
                this.hunger++
               $hunger.text(`Hunger: ${this.hunger}`)
        }, 5000)
     },
     getSleepiness(){
         const $sleepiness = $('#sleep');
         setInterval(()=>{
             this.sleepiness++
             $sleepiness.text(`Sleep: ${this.sleepiness}`)
         }, 5000)
     },
     getBoredom(){
         const $boredom = $('#bored');
         setInterval(()=>{
             this.boredom++
             $boredom.text(`Boredom:${this.boredom}`)
         }, 5000)
     }

    
    
    


}

