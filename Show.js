class Show {
  constructor() {
    this.imgs = [
      { img: "img/1.jpg" },
      { img: "img/2.jpg" },
      { img: "img/3.jpg" },
    ];
    this.activeSlide = 0;
    this.wrapper = document.querySelector(".wrapper");
    this.slide = document.querySelector(".slide");
    this.sliderImg = document.querySelector(".sliderImg");
    this.left = document.querySelector(".slide__left");
    this.right = document.querySelector(".slide__right");
    this.exit = document.querySelector(".slide__exit");
    this.wrapperImg = document
      .querySelector(".wrapper__img")
      .addEventListener("click", this.slideShow.bind(this));
  }
  slideShow() {
    this.wrapper.style.filter = "blur(8px)";
    this.slide.style.display = "block";
    this.right.addEventListener("click", this.rightShow);
    this.left.addEventListener("click", this.leftShow);
    this.exit.addEventListener("click", this.exitShow);
  }
  rightShow = () => {
    this.activeSlide++;
    this.sliderImg.src = this.imgs[this.activeSlide].img;
  };
  leftShow = () => {
    this.activeSlide--;
    this.sliderImg.src = this.imgs[this.activeSlide].img;
  };
  exitShow = () => {
    this.slide.style.display = "none";
    this.wrapper.style.filter = "none";
  };
}
const show = new Show();
