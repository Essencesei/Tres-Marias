"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";

class App {
  constructor() {
    this.navContainer = document.querySelector(".nav__links");
    this.landing = document.querySelector(".landing");

    this.navContainer.addEventListener("click", this.scrollTo);
    this.observer(this.landing);
  }
  scrollTo(e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  observer(obs) {
    const obsHead = function (entries) {
      const [entry] = entries;
      console.log(entry.isIntersecting);

      entry.isIntersecting
        ? document.querySelector("header").classList.remove("sticky")
        : document.querySelector("header").classList.add("sticky");
    };
    const observerHeader = new IntersectionObserver(obsHead, {
      root: null,
      threshold: 0,
    });

    observerHeader.observe(obs);
  }
}

const app = new App();
