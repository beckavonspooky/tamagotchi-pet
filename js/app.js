class Tomagotchi {
    constructor (name){ //the user can choose
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    }
    
    
};

let interval = null
$('#gameTimer').on('click', ()=>{
    // console.log('button works');

    const setName = prompt('Give Pet Name');
    game.player = setName; 
    const henry = new Tomagotchi(game.player);//instantiate your tomagotchi
    $tama = $('#tamaName')
    $tama.text(henry.name)

    // henry.greet();
    // console.log(henry)

    game.petAge();
    interval = game.setGameTimer();
    game.getHunger();
    game.getSleepiness();
    game.getBoredom();
    game.petDies();
})
$('#feed').on('click', (e)=>{
    if(this.hunger > 0){
        this.hunger--
        $('#hunger').text(`Hunger: ${this.hunger}`)
    }
    game.feedPet()
    
})
$('#feed').on('mousedown', () => {
    $('.child').attr('src', 'https://i.imgur.com/T3TOMSd.png')
    $('#teen').attr('src', 'https://i.imgur.com/T3TOMSd.png')
})

$('#feed').on('mouseup', () => {
    $('.child').attr('src', 'https://i.imgur.com/gNjStD3.png')
    $('#teen').attr('src', 'https://i.imgur.com/Qups4qA.png')
})

$('#light').on('click', (e)=>{
    if(this.sleepiness > 0){
        this.sleepiness--
         $('#sleep').text(`Sleepiness: ${this.sleepiness}`)
    }
    game.sleepPet()
})
$('#light').on('mousedown', () => {
    $('.child').attr('src', 'https://i.imgur.com/AoUo0Ry.png')
    $('#teen').attr('src', 'https://i.imgur.com/NtSzy6m.png')
    
})
$('#light').on('mouseup', () => {
    $('.child').attr('src', 'https://i.imgur.com/gNjStD3.png')
    $('#teen').attr('src', 'https://i.imgur.com/Qups4qA.png')
    
})

$('#play').on('click', (e)=>{
    console.log(e.target)
    if(this.boredom > 0){
        this.boredom--
         $('#bored').text(`Boredom:${this.boredom}`)
    }
    game.playPet()
})

$('#play').on('mousedown', () => {
    $('.child').attr('src', 'https://i.imgur.com/1tXoZ1X.png')
    $('#teen').attr('src', 'https://i.imgur.com/1tXoZ1X.png')
    
})
$('#play').on('mouseup', () => {
    $('.child').attr('src', 'https://i.imgur.com/gNjStD3.png')
    $('#teen').attr('src', 'https://i.imgur.com/Qups4qA.png')
    
})

const game = {
    player: 'henry',
    time: 0,
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0,
    isDead: false,
    ageInterval:null,
    setGameTimer(){
        const $timer = $('#timer');
        const interval = setInterval(()=>{
            this.time++
            this.petDies()
            $timer.text(`timer: ${this.time}s`);
            if(this.isDead){
                clearInterval(interval);
                clearInterval(this.ageInterval);
            }
        }, 1000)
        
    },
    petAge(){
        const $age = $('#tamaAge');
        this.ageInterval = setInterval(()=>{
            if(this.age === 5){
                $('.child').css('display','none')
                $('#teen').css('display','block')
                this.age++
            }else if(this.age === 10){
                $('.child').css('display','none')
                // $('#teen').css('display','none')
                $('#dead').css('display','block')
                clearInterval(this.ageInterval);
            }else{
                this.age++
            }
            $age.text(`Age: ${this.age}`)
        }, 5000)

    },
    getHunger(){
        const $hunger = $('#hunger');
        const interval = setInterval(()=>{
            if(this.hunger === 10 || this.sleepiness === 10 || this.boredom === 10 || this.age === 10){
                $('.child').css('display','none')
                $('#teen').css('display','none')
                $('#dead').css('display','block')
                clearInterval(interval);
                clearInterval(this.ageInterval);

            }else{
                this.hunger++
            }
            $hunger.text(`Hunger: ${this.hunger}`)
        }, 7000)
     },
     getSleepiness(){
         const $sleepiness = $('#sleep');
         const interval = setInterval(()=>{
             if(this.sleepiness === 10 || this.hunger === 10 || this.boredom === 10 || this.age === 10){
                //  this.petDies()
                $('.child').css('display','none')
                $('#teen').css('display','none')
                $('#dead').css('display','block')
                 clearInterval(interval);
                 clearInterval(this.ageInterval);
             }else{
                this.sleepiness++
             }
             $sleepiness.text(`Sleepiness: ${this.sleepiness}`)
         }, 6000)
     },
     getBoredom(){
         const $boredom = $('#bored');
         const interval = setInterval(()=>{
             if(this.boredom === 10 || this.hunger === 10 || this.sleepiness === 10 || this.age === 10){
                $('.child').css('display','none')
                $('#teen').css('display','none')
                $('#dead').css('display','block')
                 clearInterval(interval);
                 clearInterval(this.ageInterval);
             }else{
                 this.boredom++
             }
             $boredom.text(`Boredom:${this.boredom}`)
         }, 5000)
     },
     petDies(){
         if(this.hunger === 10 && !this.isDead){
             alert('Lil homie starved to death');
             this.isDead = true;
        }else if(this.sleepiness === 10 && !this.isDead){
            alert('Lil homie is dead from sleep deprivation')
            this.isDead = true;
        }else if(this.boredom === 10 && !this.isDead){
            alert('Lil homie bored to death')
            this.isDead = true;
        }else if(this.age === 20 && !this.isDead){
            alert('Lil homies time to go. RIP')
            this.isDead = true;
         }else{
         }
     },
     feedPet(){
         if(this.hunger > 0){
             this.hunger--
             $('#hunger').text(`Hunger: ${this.hunger}`)
         }
     },
     sleepPet(){
         if(this.sleepiness > 0){
             this.sleepiness--
             $('#sleep').text(`Sleepiness: ${this.sleepiness}`)
         }

     },
     playPet(){
         if(this.boredom > 0){
             this.boredom--
             $('#bored').text(`Boredom:${this.boredom}`)
         }
     },
     timerStop(){
        clearInterval(interval)
     }

    
}

