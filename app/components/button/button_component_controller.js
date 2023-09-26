import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    hasModal: { type: Boolean, default: false }
  }

  initialize() {
    if (this.element.querySelector('[data-controller="modal--modal-component"]')) {
      this.hasModalValue = true
      this.element.setAttribute('data-action', "click->button--button-component#openModal")
    }
  }
  connect() {
    // console.log(this.element)
  }

  openModal() {
    const modalElement = this.element.querySelector('[data-controller="modal--modal-component"]')
    modalElement.classList.remove('hidden')
    modalElement.classList.add('flex')

  }
}
