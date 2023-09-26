import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["header", "head", "contents", "content"]
  static values = {
    initTabIndex: { type: Number, default: 0 },
    currentTabIndex: Number
  }
  connect() {
    // console.log(this.initTabIndexValue)
  }
  initialize() {
    this.headTarget.querySelector('details').open = true
    this.contentTarget.classList.remove('hidden')
  }
  openContent(event) {
    // hide current content to open another one
    this.contentTargets[this.currentTabIndexValue].classList.add('hidden')
    // dis-open current head
    this.headTargets[this.currentTabIndexValue].querySelector('details').removeAttribute('open')
    const currentHead = event.target.closest('[data-controller]')
    this.currentTabIndexValue = this.headTargets.indexOf(currentHead)
    this.contentTargets[this.currentTabIndexValue].classList.remove('hidden')
  }
}
