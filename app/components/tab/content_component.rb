# frozen_string_literal: true

class Tab::ContentComponent < ViewComponent::Base
  def initialize(body: 'Tab body')
    @body = body
  end
end
