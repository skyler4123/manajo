# frozen_string_literal: true

class Icon::DownloadComponent < ViewComponent::Base
  def initialize(svg_class: "w-6 h-6")
    @svg_class = svg_class
  end
end
