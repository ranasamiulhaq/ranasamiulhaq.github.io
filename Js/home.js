document.getElementById('dark').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark-theme');
    if(document.querySelector('body').classList.contains('dark-theme')){
        document.getElementById('DarkText').textContent = 'Light';
        document.getElementById('DarkIcon').src = 'Img/light.png';
        document.getElementById('logo').src = 'Img/darkName.png';
        document.getElementById('doodle').src = 'Img/MainPictureDark.png';
    }else{
        document.querySelector('#dark span').textContent = 'Dark';
        document.getElementById('DarkIcon').src = 'Img/moon.png';
        document.getElementById('logo').src = 'Img/WhiteName.png';
        document.getElementById('doodle').src = 'Img/MainPicture.png';


    }
})