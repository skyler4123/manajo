# frozen_string_literal: true

class Tab::HeadComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  def initialize(label: "Label")
    @label = label
  end
end
