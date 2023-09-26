# frozen_string_literal: true

class Tab::TabComponent < ViewComponent::Base
  def initialize(component_class: nil)
    @component_class = component_class
  end
end
