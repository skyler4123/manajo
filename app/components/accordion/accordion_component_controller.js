import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  initialize() {
    this.element.querySelector('summary').classList.add('rounded-t-xl')
  }
}
