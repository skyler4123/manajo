# frozen_string_literal: true

class Toast::ToastComponent < ViewComponent::Base
  def initialize(position: :bottom_center)
    @position = position.to_sym
  end
end
