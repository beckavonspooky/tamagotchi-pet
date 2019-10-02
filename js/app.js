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
    
};
const henry = new Tomagotchi();//instantiate your tomagotchi
henry.greet();


$('#gameTimer').on('click', ()=>{
    console.log('button works');
    const setName = prompt('Give Pet Name');
        game.player = setName; // where is the name going?

    game.setGameTimer();
    game.getHunger();
    game.getSleepiness();
    game.getBoredom();
    game.petDies();
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
        const interval = setInterval(()=>{
            if(this.hunger === 10){
                clearInterval(interval);
            }else{
                this.hunger++
            }
            $hunger.text(`Hunger: ${this.hunger}`)
        }, 5000)
     },
     getSleepiness(){
         const $sleepiness = $('#sleep');
         const interval = setInterval(()=>{
             if(this.sleepiness === 10){
                 clearInterval(interval);
             }else{
                this.sleepiness++

             }
             $sleepiness.text(`Sleep: ${this.sleepiness}`)
         }, 5000)
     },
     getBoredom(){
         const $boredom = $('#bored');
         const interval = setInterval(()=>{
             if(this.boredom === 10){
                 clearInterval(interval)
             }else{
                 this.boredom++
             }
             $boredom.text(`Boredom:${this.boredom}`)
         }, 5000)
     },
     petDies(){
         if(this.hunger === 10){
             alert('pet is dead');
         }/// What I want to happen: 
         //when the hunger reached 10 the pet dies
     }

    
}

