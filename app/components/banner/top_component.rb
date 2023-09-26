# frozen_string_literal: true

class Banner::TopComponent < ViewComponent::Base
  def initialize(klass: nil, content_class: nil)
    @klass = klass
    @content_class = content_class
  end
end
