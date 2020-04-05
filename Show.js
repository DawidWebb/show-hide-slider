class Show {
  constructor() {
    this.imgs = [
      { img: "img/1.jpg" },
      { img: "img/2.jpg" },
      { img: "img/3.jpg" },
    ];
    this.wrapper = document.querySelector(".wrapper");
    this.slide = document.querySelector(".slide");
    this.left = document.querySelector(".slide__left");
    this.right = document.querySelector(".slide__right");
    this.exit = document.querySelector(".slide__exit");
    this.wrapperImg = document
      .querySelector(".wrapper__img")
      .addEventListener("click", this.slideShow.bind(this));
  }
  slideShow() {
    console.log("OK");
    this.wrapper.style.opacity = 0.4;
    this.slide.style.display = "block";
    this.exit.addEventListener("click", this.exitShow);
    this.right.addEventListener("click", this.rightShow);
    this.left.addEventListener("click", this.leftShow);
  }
  exitShow = () => {
    this.slide.style.display = "none";
    this.wrapper.style.opacity = 1;
  };
  rightShow = () => {};
  leftShow = () => {};
}
const show = new Show();
