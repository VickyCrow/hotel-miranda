
const swiper = new Swiper('.swiper', {
    // autoplay:{
    //   delay: 5000
    // },
    loop: true,
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: "custom",
      clickable: true,
      // renderBullet: function(index, className){
      //   return `<div class='${className}'>${index + 1}</div>`;
      // },
      renderCustom: function (swiper, current, total) {
        
        var text = "<ul>";
        var leftdots = false;
        var rightdots = false;

        var tripledotsHTML = `<li class="dots">...</li>`;
        for (let i = 1; i <= total; i++) {
          if (current == i) {
            text += `<li class="swiper-pagination-bullet active">${i}</li>`;
          } else if(i == current + 1 || i == current -1 || i == 1 || i == total){
            text += `<li class="swiper-pagination-bullet">${i}</li>`;
          }
          else{
            
            if(i < current && !leftdots){
              text += tripledotsHTML;
              leftdots = true;
            }else if(i > current && !rightdots){
              text += tripledotsHTML
              rightdots = true;
            }else{
              text += `<li class="swiper-pagination-bullet hidden"></li>`;
            }
          }
        }
        text += "</ul>";
        return text;
      },
      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
      
    }
});

