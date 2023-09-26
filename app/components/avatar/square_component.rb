# frozen_string_literal: true

class Avatar::SquareComponent < ViewComponent::Base
  def initialize(src: nil, status: nil)
    @src = src
    @status = status
  end
end
