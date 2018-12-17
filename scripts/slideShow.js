var slideContent=[
  {name:'Celebration Cakes', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 1', imageUrl:'./images/celebrationCake.jpg',linkPage:'#' },
  {name:'Children Cakes', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 2', imageUrl:'./images/mermaid.jpg',linkPage:'#' },
  {name:'Desserts', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 3', imageUrl:'./images/cheeseCake.jpg',linkPage:'#' },
  {name:'Savouries', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 4', imageUrl:'./images/sausageRoll.jpg',linkPage:'#' },
  {name:'Cupcakes', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 5', imageUrl:'./images/pink-cupcake.jpg',linkPage:'#' },
  {name:'Muffins', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 6', imageUrl:'./images/muffins.jpg',linkPage:'#' },
  {name:'Macarons', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 7', imageUrl:'./images/frenchMacaron.jpg',linkPage:'#' },
  {name:'Catering', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 8', imageUrl:'./images/catering.jpg',linkPage:'#' }
]

var slide = document.getElementById('slide');
var slideIndex=0;

function slideRender(index){
  return slide.innerHTML=` 
    <div class='photo'>
      <img src='${slideContent[index].imageUrl}'/>
    </div>          
    <div class='info'>
      <h3>${slideContent[index].name}</h3>
      <p>${slideContent[index].info}</p>
      <a href='${slideContent[index].linkPage}'><i class="fas fa-angle-double-right"></i></a>
    </div>
     
    
`
}

function changeSlide(){
  slideRender(slideIndex);
  slideIndex++
  if(slideIndex >= slideContent.length){slideIndex=0};
  setTimeout(changeSlide,10000);
}

window.addEventListener('load',changeSlide);

 
