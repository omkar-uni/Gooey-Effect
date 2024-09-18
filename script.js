var main = document.querySelector(".main");
var first = document.querySelectorAll(".first");


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
