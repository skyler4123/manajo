import { Controller } from "@hotwired/stimulus";

const starHTML = `<svg class="w-4 h-4 stroke-gray-400 text-white cursor-pointer mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>`
const starNode = document.createRange().createContextualFragment(starHTML)
export default class extends Controller {
  static targets = ["input", "rate"]
  static values = {
    numberOfStar: { type: Number, default: 5 },
    ratePoint: { type: Number, default: 0 }
  }

  initialize() {
    this.element.querySelector('input').setAttribute('data-react--rating-component-target', 'input')
    this.ratePointValue = this.inputTarget.value
    for (let i = 0; i < this.numberOfStarValue; i++) {
      this.element.appendChild(starNode.cloneNode(true))
    }
    this.element.querySelectorAll('svg').forEach((svgNode, index) => {
      svgNode.setAttribute('data-react--rating-component-target', 'rate')
      svgNode.setAttribute('data-action', "click->react--rating-component#rate")
      svgNode.setAttribute('data-react--rating-component-rate-param', index + 1)
    })
  }

  rate(event) {
    this.ratePointValue = event.params.rate
  }

  ratePointValueChanged() {
    this.inputTarget.value = this.ratePointValue
    this.rateTargets.forEach((rate, index) => {
      if (index < this.ratePointValue) {
        rate.classList.replace('text-white', 'text-yellow-300')
      } else {
        rate.classList.replace('text-yellow-300', 'text-white')
      }
    })
  }
}
