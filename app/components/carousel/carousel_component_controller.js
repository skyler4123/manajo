import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["carousel"]

  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    // this.element.querySelectorAll("")
  }

  previous() {
    this.carouselTarget.scrollBy(-1, 0)
  }

  next() {
    this.carouselTarget.scrollBy(1, 0)
  }
}
