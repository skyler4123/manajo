import flatpickr from "flatpickr";
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input"]
  static values = {
    options: { type: Object, default: {} }
  }
  connect() {
    flatpickr(this.inputTarget, this.optionsValue)
  }
}
