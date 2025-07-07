const emojii= document.getElementById('emojii');
const emojiContainer = document.getElementById('emoji-container');

emojii.addEventListener('click',() =>{
    const emojis = ['🎉','💐','🎂','🌸','✨'];
    for (let i = 0; i < 10; i++) {
        const emoji= document.createElement('div')

        emoji.classList.add('emoji-float');
        emoji.innerText =
        emojis[Math.floor(Math.random()* emojis.length)];

        emoji.style.left = Math.random()* 100 + 'vw';
        emoji.style.top = Math.random() * 100 + 'vh';

        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }
})


const player = document.getElementById("music");
function toggleAudio(){
    if (player.paused){
        player.play();
    } else {
        player.pause();
    }
}
