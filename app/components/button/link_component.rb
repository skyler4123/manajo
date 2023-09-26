# frozen_string_literal: true

class Button::LinkComponent < ViewComponent::Base
  def initialize(label: 'Link', url: "#", button_class: nil, link_class: nil, klass: nil)
    @label = label
    @url = url
    @link_class = link_class
    @klass = klass
    @button_class = button_class
  end
end
