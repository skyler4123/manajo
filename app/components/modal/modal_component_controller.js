import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  exit() {
    // console.log(this.element.classList)
    this.element.setAttribute('style', "display: none")
    this.element.classList.remove('flex')
    this.element.classList.add('hidden')

  }

}
