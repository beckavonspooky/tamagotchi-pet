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


$('#gameTimer').on('click', ()=>{
    // console.log('button works');

    const setName = prompt('Give Pet Name');
    game.player = setName; // where is the name going?
    const henry = new Tomagotchi(game.player);//instantiate your tomagotchi
    $tama = $('#tamaName')
    $tama.text(henry.name)
    henry.greet();
    console.log(henry)

    game.petAge();
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
    age: 0,
    setGameTimer(){
        const $timer = $('#timer');
        setInterval(()=>{
            this.time++
            this.petDies()//how do you get rid of the prompt
            $timer.text(`timer: ${this.time}s`)
            
        }, 1000)

    },
    petAge(){
        const $age = $('#tamaAge');
        setInterval(()=>{
            this.age++
            $age.text(`Age: ${this.age}`)
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
                //  this.petDies()
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
             alert('Lil homie starved to death ');
         }else if(this.sleepiness === 10){
             alert('Lil homie is dead from sleep deprivation')
         }else if(this.boredom === 10){
             alert('Lil homie bored to death')
         }else if(this.age === 20){
             alert('Lil homies time to go. RIP')
         }
     }

    
}

