"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";

class App {
  constructor() {
    this.navContainer = document.querySelector(".nav__links");
    this.landing = document.querySelector(".landing");
    this.body = document.querySelector("body");
    this.allSection = document.querySelectorAll(".section");
    console.log(this.allSection);

    this.navContainer.addEventListener("click", this.scrollTo);
    this.observer(this.landing);
    this.observerSection(this.allSection);
  }
  scrollTo(e) {
    e.preventDefault();

    console.log(
      document.querySelector(".nav__links__item").classList.remove("selected")
    );

    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }

  observer(obs) {
    const obsHead = function (entries) {
      const [entry] = entries;
      console.log(entry);

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

  observerSection(obs) {
    const obsSec = function (entries, observer) {
      const [entry] = entries;
      console.log(entry);

      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
      }
      observer.unobserve(entry.target);
    };

    const observerSec = new IntersectionObserver(obsSec, {
      root: null,
      threshold: 0.1,
    });

    obs.forEach((section) => {
      section.classList.add("hidden");
      return observerSec.observe(section);
    });
  }
}

const app = new App();
