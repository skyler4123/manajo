# frozen_string_literal: true

class Input::TextComponent < ViewComponent::Base
  def initialize(label:, name:, id: nil, placeholder: nil, type: "text")
    @label = label
    @name = name
    @id = id || @name
    @placeholder = placeholder
    @type = type
  end
end
