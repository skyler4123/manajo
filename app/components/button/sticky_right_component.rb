# frozen_string_literal: true

class Button::StickyRightComponent < ViewComponent::Base
  def initialize(label: 'Button', klass: nil, button_class: nil)
    @label = label
    @klass = klass
    @button_class = button_class
  end
end
