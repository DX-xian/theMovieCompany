window.onload = function () {
   // 信息中心轮播图
//    let the_new=document.querySelector(".the_new");
//    let img3=the_new.querySelectorAll("img");

//     let one_two=document.querySelector(".one_two");
//     let the_box =one_two.querySelectorAll(".the_box")
//    console.log(the_box)
//    let now3=0;
//    let next3=0;
//    let widths3=230;
//    let fn3=  function (){
//     next3++;
//     if(next3>=img3.length){
//         next3=0;
//     }
//     img3[next3].style.left=widths3+"px";
//     animate(img3[now3],{left:-widths3});
//     animate(img3[next3],{left:0});
//     the_box[next3].classList.add("hot");
//     the_box[now3].classList.remove("hot")

    
//     now3=next3;

// }
// let t3=setInterval(fn3,2000);
// the_new.onmouseenter = function () {
//     clearInterval(t3);
// }
// the_new.onmouseleave = function () {
//     t3= setInterval(fn3, 2000);

// }
// the_box.forEach(function (Element,index) {
//     Element.onclick=function () {
//         if(now3==index3){
//             return;
//         }
//         if(now3>index3){
//             img3[index].style.left=-widths3+"px";
//             animate(img3[now3],{left:widths3});
//             animate(img3[index3],{left:0});
//             the_box[index3].classList.add("hot");
//             the_box[now3].classList.remove("hot")
//             now3=next3=index3;
//         }
//         if(now3<index3){
//             img3[index3].style.left=widths3+"px";
//             animate(img3[now3],{left:-widths3});
//             animate(img3[index3],{left:0});
//             the_box[index].classList.add("hot");
//             the_box[now].classList.remove("hot");
//             now3=next3=index3;
//         }
//     }

// })








   
   
   
    // 头部开始
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

    // 轮播图
    let banner=document.querySelector(".banner");
    // let taga=
    let img=banner.querySelectorAll("img")
    let dot=document.querySelector(".dot");
    let in_dot=dot.querySelectorAll(".in_dot")

    let now=0;
    let next=0;
    let widths=950;
    
  let fn=  function (){
        next++;
        if(next>=img.length){
            next=0;
        }
        img[next].style.left=widths+"px";
        animate(img[now],{left:-widths});
        animate(img[next],{left:0});
        in_dot[next].classList.add("hot");
        in_dot[now].classList.remove("hot")

        
        now=next;

    }
    let t=setInterval(fn,2000);
    banner.onmouseenter = function () {
        clearInterval(t);
    }
   banner.onmouseleave = function () {
        t= setInterval(fn, 2000);

    }
    in_dot.forEach(function (Element,index) {
        Element.onclick=function () {
            if(now==index){
                return;
            }
            if(now>index){
                img[index].style.left=-widths+"px";
                animate(img[now],{left:widths});
                animate(img[index],{left:0});
                in_dot[index].classList.add("hot");
                in_dot[now].classList.remove("hot")
                now=next=index;
            }
            if(now<index){
                img[index].style.left=widths+"px";
                animate(img[now],{left:-widths});
                animate(img[index],{left:0});
                in_dot[index].classList.add("hot");
                in_dot[now].classList.remove("hot");
                now=next=index;
            }
        }

    })



    // 轮播图2
    let message_leftTop=this.document.querySelector(".message_leftTop");
    let img2=message_leftTop.querySelectorAll("img")
    let message_leftdown=document.querySelectorAll(".message_leftdown")
    console.log(message_leftdown);
    let num=0;
    let fn1=function(){
        for(let i=0;i<img2.length;i++){
            img2[i].style.zIndex="5";
            message_leftdown[i].style.display="none";
        }
        img2[num].style.zIndex="10";
        message_leftdown[num].style.display="block";
        num++;
        if(num==img2.length){
            num=0;
        }
    }
    let t1 = setInterval(fn1, 1500);
    message_leftTop.onmouseenter = function () {
        clearInterval(t1)
    }
    message_leftTop.onmouseleave = function () {
        t1 = setInterval(fn1, 1500);
    
    }

    



}
