import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  toggle() {
    document.querySelector('[data-controller="main--right-sidebar-component"]').classList.toggle("hidden")
  }
}
