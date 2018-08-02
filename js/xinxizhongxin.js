window.onload = function () {
   
  //banner渐变
  let topmenu = document.querySelector(".topmenu");
  let lis = topmenu.querySelectorAll("li");
  let disappear = topmenu.querySelectorAll(".disappear");

  // console.log(topmenu,lis,disappear)

  lis.forEach(function (item, index) {
      item.onmouseenter = function () {
          animate(disappear[index], {
              height: 30
          });

      }
      item.onmouseleave = function () {
          animate(disappear[index], {
              height: 0
          });
      }
  })

  // banner下拉
  let a1 = topmenu.querySelectorAll('.a1');
  let jieshaoDown = topmenu.querySelectorAll(".jieshaoDown");

  a1.forEach(function (item, index) {
      item.onmouseenter = function () {
          animate(jieshaoDown[index], {
              height: 127
          })
      }
      item.onmouseleave = function () {
          animate(jieshaoDown[index], {
              height: 0
          })


      }
  })


   // 信息中心轮播图
   let the_new=document.querySelector(".the_new");
   let img3=the_new.querySelectorAll("img");

    let one_two=document.querySelector(".one_two");
    let the_box =one_two.querySelectorAll(".the_box")
   console.log(the_box)
   let now3=0;
   let next3=0;
   let widths3=230;
   let fn3=  function (){
    next3++;
    if(next3>=img3.length){
        next3=0;
    }
    img3[next3].style.left=widths3+"px";
    animate(img3[now3],{left:-widths3});
    animate(img3[next3],{left:0});
    the_box[next3].classList.add("hot");
    the_box[now3].classList.remove("hot")

    
    now3=next3;

}
let t3=setInterval(fn3,2000);
the_new.onmouseenter = function () {
    clearInterval(t3);
}
the_new.onmouseleave = function () {
    t3= setInterval(fn3, 2000);

}
the_box.forEach(function (Element,index) {
    Element.onclick=function () {
        if(now3==index){
            return;
        }
        if(now3>index){
            img3[index].style.left=-widths3+"px";
            animate(img3[now3],{left:widths3});
            animate(img3[index],{left:0});
            the_box[index].classList.add("hot");
            the_box[now3].classList.remove("hot")
            now3=next3=index;
        }
        if(now3<index){
            img3[index].style.left=widths3+"px";
            animate(img3[now3],{left:-widths3});
            animate(img3[index],{left:0});
            the_box[index].classList.add("hot");
            the_box[now3].classList.remove("hot");
            now3=next3=index;
        }
    }

})
 
} 