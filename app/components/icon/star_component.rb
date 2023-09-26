# frozen_string_literal: true

class Icon::StarComponent < ViewComponent::Base
  def initialize(svg_class: "w-4 h-4 text-gray-300")
    @svg_class = svg_class
  end
end
