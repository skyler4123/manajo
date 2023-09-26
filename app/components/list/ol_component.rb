# frozen_string_literal: true

class List::OlComponent < ViewComponent::Base
  def initialize(sortable: false)
    @sortable = sortable
  end
end
