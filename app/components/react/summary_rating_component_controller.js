import { Controller } from "@hotwired/stimulus";

const starHTML = `<svg data-react--summary-rating-component-target="star" class="w-4 h-4 stroke-gray-400 text-white cursor-pointer mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>`
const starNode = document.createRange().createContextualFragment(starHTML)

const barHTML = `<div class="flex items-center mt-4">
                  <p data-react--summary-rating-component-target="barLabel" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Loading...</p>
                  <div class="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                    <div data-react--summary-rating-component-target="bar" class="h-5 bg-yellow-300 rounded" style="width: 50%"></div>
                  </div>
                  <span data-react--summary-rating-component-target="barPercent" class="text-sm font-medium text-gray-500 dark:text-gray-400">Loading...</span>
                 </div>`
const barNode = document.createRange().createContextualFragment(barHTML)
export default class extends Controller {
  static targets = ["star", "bar", "barPercent", "barLabel", "starGroup", "summaryRate", "barGroup", "summaryTime"]
  static values = {
    detailRateTime: { type: Array, default: [0, 0, 0, 0, 0] },
    baseRateRatio: { type: Number, default: 5 },
    rateRatio: { type: Number, default: 0 },
    totalRateTime: { type: Number, default: 0 },
    detailPercent: { type: Array, default: [0 ,0 ,0 ,0 ,0] }
  }
  connect() {
  }
  initialize() {
    this.totalRateTimeValue = this.detailRateTimeValue.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

    const arrayPoint = [0, 0, 0, 0, 0]
    this.detailPercentValue.forEach((percent, index) => {
      this.detailPercentValue[index] = ((this.detailRateTimeValue[index]/this.totalRateTimeValue)*100).toFixed();
      arrayPoint[index] = (1 + index)*this.detailRateTimeValue[index]
    })

    const sumPoint = arrayPoint.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    this.rateRatioValue = ((sumPoint/(this.totalRateTimeValue*5))*5).toFixed(1)

    for (let i = 0; i < this.baseRateRatioValue; i++) {
      this.starGroupTarget.appendChild(starNode.cloneNode(true))
      this.barGroupTarget.appendChild(barNode.cloneNode(true))
    }
    this.starTargets.forEach((star, index) => {
      if (index + 1 < this.rateRatioValue) {
        star.classList.replace('text-white', 'text-yellow-300')
      }
    })

    this.summaryRateTarget.innerText = `${this.rateRatioValue} out of ${this.baseRateRatioValue}`

    this.barLabelTargets.forEach((label, index) => {
      label.innerText = `${index + 1} star`
    })

    this.barTargets.forEach((bar, index) => {
      bar.style.width = `${this.detailPercentValue[index]}%`
    })

    this.barPercentTargets.forEach((percent, index) => {
      percent.innerText = `${this.detailPercentValue[index]}%`
    })

    this.summaryTimeTarget.innerText = `${this.totalRateTimeValue} globval ratings`
  }

}
