# frozen_string_literal: true

class Dropdown::HoverComponent < ViewComponent::Base
  renders_one :header
  def initialize(label: "Dropdown")
    @label = label
  end
end
