# frozen_string_literal: true

class Icon::XComponent < ViewComponent::Base
  def initialize(x_class: "w-3 h-3")
    @x_class = x_class
  end
end
