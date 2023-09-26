import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  close() {
    const closeTarget = this.element.parentNode.closest("[data-controller]")
    closeTarget.classList.add('hidden')
  }
}
