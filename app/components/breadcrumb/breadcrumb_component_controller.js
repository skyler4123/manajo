import { Controller } from "@hotwired/stimulus";

const delimiterHTML = "<svg class='w-3 h-3 mx-1 text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'><path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 9 4-4-4-4'/></svg>"

export default class extends Controller {
  static targets = ["item"]

  connect() {
    // console.log("Hello, Stimulus!", this.delimiter(delimiterHTML));
  }
  initialize() {
    const itemTargets = this.element.querySelectorAll('[data-controller="breadcrumb--item-component"]')
    itemTargets.forEach((item, index) => {
      item.setAttribute('data-breadcrumb--breadcrumb-component-target', 'item')
      if (index != 0) {
        this.element.querySelector('ol').insertBefore(this.delimiter(delimiterHTML), item)
      }
    })
  }
  delimiter(delimiterHTML) {
    const delimiterNode = document.createRange().createContextualFragment(delimiterHTML)
    return delimiterNode
  }
}
