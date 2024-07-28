const video = document.getElementById('video');
const audio = document.getElementById('audio');

const screenVideo = document.querySelector('.video');
const screenAudio = document.querySelector('.audio');



video.addEventListener('click', e => {

    screenVideo.style.display = 'block';
    screenAudio.style.display = 'none'; 
})

audio.addEventListener('click', e => {
    screenAudio.style.display = 'block';
    screenVideo.style.display = 'none';
})