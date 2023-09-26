import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  copy() {
    switch (this.sourceElementName) {
      case "INPUT":
        navigator.clipboard.writeText(this.element.previousElementSibling.value);
        break;
      default:
        navigator.clipboard.writeText(this.element.previousElementSibling.innerText);
        break;
    }
    setTimeout(() => this.element.removeAttribute('open'), 5000)
  }
}
