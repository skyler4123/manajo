# frozen_string_literal: true

class Button::ExitComponent < ViewComponent::Base
  def initialize(exit_type: nil)
    @exit_type = exit_type.to_s
  end
end
