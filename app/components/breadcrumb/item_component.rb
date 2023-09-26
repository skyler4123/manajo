# frozen_string_literal: true

class Breadcrumb::ItemComponent < ViewComponent::Base
  def initialize(url: "#", label: "Label")
    @url = url
    @label = label
  end
end
