var main = document.querySelector(".main");
var first = document.querySelectorAll(".first");
// var h1 = document.querySelector(".text h1:nth-child(1)");
// var h2 = document.querySelector(".text h1:nth-child(2)");
// var h3 = document.querySelector(".text h1:nth-child(3)");
// var h4 = document.querySelector(".text h1:nth-child(4)");
// var h5 = document.querySelector(".text h1:nth-child(5)");

first.forEach(function (e) {
  var h11 = e.querySelectorAll(".text h1");

  var i = 0;
  main.addEventListener("click", function () {
    h11[i].style.top = "-100%";
    if (h11[i].style.top == "-100%") {
      h11[i].style.top = "400%";
      i == h11.length - 1 ? (i = 0) : i++;
      h11[i].style.top = "0%";
    }
  });
});

// var h1 = [].slice.call(document.querySelectorAll('.text h1'));
// console.log(h1)
// var i = 0;
// console.log(h11[1]);
// h11.forEach(function () {
//   main.addEventListener("click", function () {
//     h11[i].style.top = h11[i].style.top+ "-100%";
//     i++;
//   });
// });

// for (let i = 0; i < h11.length; i++) {
//   main.addEventListener("click", function () {
//     h11[0].style.top = (-i)+"00%";
//     h11[1].style.top = (i)+"00%";
//     h11[2].style.top = (i+1)+"00%";
//     h11[3].style.top = (i+2)+"00%";
//     h11[4].style.top = (i+3)+"00%";

//     console.log("top = ",i, h11[i].style.top);
//     // i++;
//   });
// }

// function fh1() {
//   main.addEventListener("click", function () {
//     h1.style.top = "-100%";
//     //   console.log(h1.style.top);
//     if (h1.style.top == "-100%") {
//       h1.style.top = "400%";
//     } else {
//       h1.style.top = h1.style.top + "-100%";
//     }
//   });
// }

// function fh2(){
//     main.addEventListener("click", function () {
//         h2.style.top = "0";
//         if (h2.style.top == "0") {
//           h2.style.top = "400%";
//         }
//         else{
//           fh2();
//         }
//       });
// }
// function fh3(){
//     main.addEventListener("click", function () {
//         h3.style.top = "100%";
//         if (h3.style.top == "-100%") {
//           h3.style.top = "400%";
//         }
//         else{
//           fh3();
//         }
//       });
// }
// function fh4(){
//     main.addEventListener("click", function () {
//         h4.style.top = "200%";
//         if (h4.style.top == "-100%") {
//           h4.style.top = "400%";
//         }
//         else{
//           fh4();
//         }
//       });
// }
// function fh5(){
//     main.addEventListener("click", function () {
//         h5.style.top = "300%";
//         if (h5.style.top == "-100%") {
//           h5.style.top = "400%";
//         }
//         else{
//           fh5();
//         }
//       });
// }

// fh1();
// fh2()
// fh3()
// fh4()
// fh5()

Shery.imageEffect(".images", {
  style: 5,
  config: {
    a: { value: 0.88, range: [0, 30] },
    b: { value: 0.88, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.9631901227895625 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.16, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.53, range: [0, 1] },
    antialias_threshold: { value: 0.08, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 8.4, range: [0, 100] },
  },
  gooey: true,
});
