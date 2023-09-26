# frozen_string_literal: true

class LinkComponent < ViewComponent::Base
  def initialize(label: 'Link', url: "#", button_class: "text-black dark:text-white hover:text-sky-800 font-medium text-lg text-center", link_class: nil, klass: "inline group flex justify-center item-center")
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
