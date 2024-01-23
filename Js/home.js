document.getElementById('dark').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('dark-theme');
    if(document.querySelector('body').classList.contains('dark-theme')){
        document.getElementById('DarkText').textContent = 'Light';
        document.getElementById('DarkIcon').src = 'Img/light.png';
        document.getElementById('doodle').src = 'Img/MainPictureDark.png';

        // Portfolio
        document.getElementById('web1').src = 'Img/web/DarkStore.jpg';
        document.getElementById('web2').src = 'Img/web/DarkVerse.jpg';
        document.getElementById('web3').src = 'Img/web/DarkFolio.jpg';
        updateColor('theme-color', getComputedStyle(document.documentElement).getPropertyValue('theme-color'));

    }else{
        document.querySelector('#dark span').textContent = 'Dark';
        document.getElementById('DarkIcon').src = 'Img/moon.png';
        document.getElementById('logo').src = 'Img/WhiteName.png';
        document.getElementById('doodle').src = 'Img/MainPicture.png';
        
        // Portfolio
        document.getElementById('web1').src = 'Img/web/LightStore.jpg';
        document.getElementById('web2').src = 'Img/web/LightVerse.jpg';
        document.getElementById('web3').src = 'Img/web/LightFolio.jpg';
        updateColor('theme-color', getComputedStyle(document.documentElement).getPropertyValue('theme-color'));
    }
    
});

    
function updateColor(variable, value) {
    document.documentElement.style.setProperty(variable, value);    
}

document.getElementById('web-btn').addEventListener('click',()=>{
    var graphicsdivs = document.querySelectorAll('.item.graphics');
    var socialsdivs = document.querySelectorAll('.item.social');
    var webdivs = document.querySelectorAll('.item.web');

    graphicsdivs.forEach(function(div) { div.style.display = 'none'; });
    webdivs.forEach(function(div) { div.style.display = 'block'; });
    socialsdivs.forEach(function(div) { div.style.display = 'none'; });
    });

document.getElementById('graphics-btn').addEventListener('click',()=>{
    var graphicsdivs = document.querySelectorAll('.item.graphics');
    var socialsdivs = document.querySelectorAll('.item.social');
    var webdivs = document.querySelectorAll('.item.web');

    webdivs.forEach(function(div) { div.style.display = 'none'; });
    graphicsdivs.forEach(function(div) { div.style.display = 'block'; });
    socialsdivs.forEach(function(div) { div.style.display = 'none'; });
    });

document.getElementById('social-btn').addEventListener('click',()=>{
    var graphicsdivs = document.querySelectorAll('.item.graphics');
    var socialsdivs = document.querySelectorAll('.item.social');
    var webdivs = document.querySelectorAll('.item.web');
    
    graphicsdivs.forEach(function(div) { div.style.display = 'none'; });
    socialsdivs.forEach(function(div) { div.style.display = 'block'; });
    webdivs.forEach(function(div) { div.style.display = 'none'; });
    });

document.getElementById('all-btn').addEventListener('click',()=>{
    var graphicsdivs = document.querySelectorAll('.item.graphics');
    var socialsdivs = document.querySelectorAll('.item.social');
    var webdivs = document.querySelectorAll('.item.web');

    graphicsdivs.forEach(function(div) { div.style.display = 'block'; });
    socialsdivs.forEach(function(div) { div.style.display = 'block'; });
    webdivs.forEach(function(div) { div.style.display = 'block'; });
    });