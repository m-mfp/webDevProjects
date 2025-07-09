const drumPad = document.querySelectorAll(".drum-pad")
const songText = document.getElementById("display")
const audio = new Audio()

drumPad.forEach((tag) => {
    const song = tag.firstElementChild
    tag.addEventListener("click", () => {
        playSound(song)
        addText(song)
    })
    window.addEventListener("keydown", (e) => {
        if(song.id == e.key.toUpperCase()){
            playSound(song)
            addText(song)
            tag.classList.add('scale'); 
            setTimeout(() => {
                tag.classList.remove('scale');
            }, 200); 
        }

    })
})

function playSound(song) {
    const audio = new Audio(song.src);
    // song.play();
}

function addText(song) {
    let drumName = song.src.split("/")[5]
    songText.innerText = drumName.split(".")[0]
}
//--------------------------------------------------------------

// const audioClips = {
//   Q: 'Heater 1',
//   W: 'Heater 2',
//   E: 'Heater 3',
//   A: 'Heater 4',
//   S: 'Clap',
//   D: 'Open HH',
//   Z: 'Kick n Hat',
//   X: 'Kick',
//   C: 'Closed HH'
// };

// const playSound = (key) => {
//   const audio = document.getElementById(key);
//   if (audio) {
//     audio.currentTime = 0;
//     audio.play().catch(error => console.error('Audio play failed:', error));    document.getElementById('display').innerText = audioClips[key];
//   }
// };

// document.querySelectorAll('.drum-pad').forEach(pad => {
//   pad.addEventListener('click', () => {
//     const key = pad.firstElementChild.id;
//     playSound(key);
//   });
// });

// document.addEventListener('keydown', (e) => {
//   const key = e.key.toUpperCase();
//   if (audioClips[key]) {
//     playSound(key);
//   }
// });

// //--------------------------------
// const html = document.querySelector("html");
// const drumpad = document.querySelectorAll(".drum-pad");
// const display = document.getElementById("display");
// const drumKeys = ['Q','W','E','A','S','D','Z','X','C'];

// window.addEventListener("keydown",(event)=>{playKey(event)});
// drumpad.forEach((pad)=>{pad.addEventListener("click",()=>{playClick(pad)})});

// //test 8 failed
// function playKey(event) {
//   const eventKey = event.key.toUpperCase();
//   if (drumKeys.includes(eventKey)){
//     const key = document.getElementById(eventKey)
//     key.play();
//     display.innerText = key.parentElement.id
//   }
// }

// //test 7 passed
// function playClick(pad){
//   pad.children[0].play();
//   display.innerText = pad.id;
// }


// //---------
