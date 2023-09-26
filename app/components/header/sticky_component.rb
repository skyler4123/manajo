# frozen_string_literal: true

class Header::StickyComponent < ViewComponent::Base
  def initialize(klass: "sticky top-0 shadow-xl")
    @klass = klass
  end
end
