import Player from '@vimeo/player';
import  throttle  from 'lodash.throttle';




const iframe = document.querySelector('iframe')

const player = new Player(iframe);
const time = 'videoplayer-current-time';




    player.on('play', function() {
        console.log('played the video!');
    });

player.pause('pause', function () {
    console.log('video stop ');
    
})


    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



    const currentTime = function ({seconds}) {
        localStorage.setItem(time, seconds)
        
    }

    player.on('timeupdate', throttle(currentTime,1000))
    
    
    const timeStart = localStorage.getItem(time)


    if(timeStart){
        player.setCurrentTime(timeStart).catch(function (error) {
            console.log('Error setting time:', error.name);
            
        })
    }

