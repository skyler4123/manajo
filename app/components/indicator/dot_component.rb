# frozen_string_literal: true

class Indicator::DotComponent < ViewComponent::Base
  def initialize(color: :green, number: 12)
    @color = color.to_s
    @number = number.to_i
  end
end
