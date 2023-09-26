import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.parentNode.classList.add('relative')
  }
  click(event) {
    // event.preventDefault()
  }
}
