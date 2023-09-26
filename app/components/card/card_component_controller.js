import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    // const exitElement = this.element.querySelector('[data-controller="button--exit-component"]')
    // if (exitElement) {
    //   exitElement.setAttribute('data-button--exit-component-exit-type-value', "card")
    // }
  }
}
