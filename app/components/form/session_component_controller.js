import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["form", "nav"]
  static values = {
    currentSigninOrSignup: Boolean
  }
  connect() {
    console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.querySelector('form').setAttribute('data-form--session-component-target', 'form')
    this.element.querySelector('nav').setAttribute('data-form--session-component-target', 'nav')
  }
}
