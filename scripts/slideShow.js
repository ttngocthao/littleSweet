var slideContent=[
  {name:'Celebration Cakes', info:'Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message.', imageUrl:'./images/celebrationCake.jpg',linkPage:'ourRange.html' },
  {name:'Children Cakes', info:'Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl', imageUrl:'./images/mermaid.jpg',linkPage:'ourRange.html' },
  {name:'Desserts', info:'Make your get-together an occasion to remember with one of our amazing dessert cake selections', imageUrl:'./images/cheeseCake.jpg',linkPage:'ourRange.html' },
  {name:'Savouries', info:'Sometimes we all need a quick snack to keep us going through the day, and our collection of savoury snacks will not make you disappointed', imageUrl:'./images/sausageRoll.jpg',linkPage:'ourRange.html' },
  {name:'Cupcakes', info:'For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion', imageUrl:'./images/pink-cupcake.jpg',linkPage:'ourRange.html' },
  {name:'Muffins', info:'Muffins are a lunch box favourite and perfect for afternoon tea. Get out the muffin tray and explore our range of savoury, decadent, sweet and healthy muffins.', imageUrl:'./images/muffins.jpg',linkPage:'ourRange.html' },
  {name:'Macarons', info:'Macarons embody traditional recipes and original pastrymaking know-how expressed in the French art of meringue. Made using a high-quality recipe, these macarons will whisk you off to a moment of pure gourmet pleasure.', imageUrl:'./images/frenchMacaron.jpg',linkPage:'ourRange.html' },
  {name:'Catering', info:'When it comes to keeping your event fuss-free, there is no better choice than a selection of our freshly-made catering meal options', imageUrl:'./images/catering.jpg',linkPage:'./ourRange.html' }
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

 
