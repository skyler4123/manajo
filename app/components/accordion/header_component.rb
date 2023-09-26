# frozen_string_literal: true

class Accordion::HeaderComponent < ViewComponent::Base
  renders_one :body
  def initialize(text: 'Summary')
    @text = text
  end
end
