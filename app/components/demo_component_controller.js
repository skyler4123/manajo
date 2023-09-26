import Sortable from "sortablejs"
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static values = {
    demo: {type: String, default: "hahahah"}
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    // console.log(this.demoValue)
    var sortable = Sortable.create(this.element)
  }
}
