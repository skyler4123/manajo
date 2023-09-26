import { Controller } from "@hotwired/stimulus";

const svg = `<svg data-icon--x-component-target="svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>`
const svgNode = document.createRange().createContextualFragment(svg)
export default class extends Controller {
  static targets = ['svg']
  static values = {
    svgClass: {type: String, default: "w-3 h-3"}
  }
  connect() {
    // console.log("Hello, Stimulus!", this.element);
  }
  initialize() {
    this.element.appendChild(svgNode.cloneNode(true))
    this.svgTarget.classList = this.svgClassValue
  }
}
