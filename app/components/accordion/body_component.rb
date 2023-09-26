# frozen_string_literal: true

class Accordion::BodyComponent < ViewComponent::Base
  def initialize(text: 'Deatils of this header')
    @text = text
  end
end
