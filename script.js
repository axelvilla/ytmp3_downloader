const convertButton = document.getElementById('convert-button');
const convertInput = document.getElementById('convert-input');
const result = document.querySelector('.result');

convertButton.addEventListener('click', () => {
    getaudio();
})

async function getaudio() {
    let link = convertInput.value;
    let parts = link.split('=');
    let videoId = "";

    if (parts.length === 2){
        videoId = parts[1];
        console.log(videoId);
    }else{
        console.log('Error! Invalid video Link')
    }

    const url = `https://youtube-mp3-downloader2.p.rapidapi.com/dl?id=${videoId}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ab04fb2d23mshd8f5cda38c1aed8p1c0311jsn3220afa70ae4',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    result.innerHTML = `<p class='title'>Title: ${result.title}</p>`

    setTimeout(() => {
        window.open(result.link, "_blank")
    },0);
}