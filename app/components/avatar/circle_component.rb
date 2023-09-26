# frozen_string_literal: true

class Avatar::CircleComponent < ViewComponent::Base
  def initialize(src: nil, status: nil)
    @src = src
    @status = status
  end
end
