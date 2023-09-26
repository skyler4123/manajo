import Sortable from "sortablejs"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    sortable: { type: Boolean, default: false }
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    if (this.sortableValue) {
      var sortElement = Sortable.create(this.element)
    }
  }
}