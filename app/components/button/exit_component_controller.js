import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    exitType: String
  }

  connect() {
    // console.log(this.exitTypeValue)
  }

  exit() {
    switch(this.exitTypeValue) {
      case "modal":
        this.element.closest('[data-controller="modal--modal-component"]')?.classList.add('hidden')
        this.element.closest('[data-controller="modal--modal-component"]')?.setAttribute('style', "display: none")
        break;
      case "card":
        this.element.closest('[data-controller="card--card-component"]')?.classList.add('hidden')
        break;
      case "boxchat":
        this.element.closest('[data-controller="boxchat--form-component"]')?.classList.add('hidden')
        break;
      default:
        this.element.parentNode.closest("[data-controller]")?.classList.add('hidden')
    }
  }
}
