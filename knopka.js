//АНИМАЦИЯ



let mas = ['Веб-проект: "Knopka"',`Добро пожаловать!`,'😁'];




let myInterval = setInterval(myTimer, 1000);



function myTimer() {

    let ai3 = Math.floor(Math.random()*3)+0;

    console.log(ai3);
  
    let timer1 = document.getElementById("timer1").innerHTML = mas[`${ai3}`];

    console.log(timer1);
  
};

var acc = document.getElementsByClassName("accordion");
var i;
let div0 = document.getElementById("div0");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
 div0.innerHTML = `<hr />
    <iframe id="iframeW"
    title="Inline Frame Example"
    width="300"
    height="400"
    src="https://andrey-berlin.github.io/weather-presently/">
</iframe>
<hr />`;
 
div1.innerHTML = `<hr />
    <iframe id="iframe"
    title="Inline Frame Example"
    width="300"
    height="400"
    src="https://andrey-berlin.github.io/weather/">
</iframe>
<hr />`;  

div2.innerHTML = ` <hr />
<iframe id="iframeN"
    title="Inline Frame Example"
    width="300"
    height="400"
    src="https://news.startpage.co.il/russian/#">
</iframe>
 <hr />`; 
 
 div3.innerHTML = ` <hr />
<ul>Это приложение от веб-проекта: "Knopka". Автор проекта Берлин Андрей. Ниже есть ссылка на дополнительную информацию:
 <hr />
<li><a href = "https://button-knopka.github.io/" target="_blank">Веб-проект: "Knopka"</a></li>
<!--li><a href = "https://visualstudio.microsoft.com/ru/" target="_blank">Microsoft Visual Studio</a></li-->
</ul>
 <hr />`;
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      
    } else {
      panel.style.display = "block";
    }
  });
}

function timer() {



  

  const interval_time = setInterval(clock, 1000);
  
  function clock() {
    
    const clock = new Date ();
    
   let date = document.getElementById("date");
   date.innerHTML = clock.toLocaleDateString();
   let timer = document.getElementById('timer');
   timer.innerHTML = 
    clock.toLocaleTimeString();
    
    
  }
  
}
timer();