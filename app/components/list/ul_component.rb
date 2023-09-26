# frozen_string_literal: true

class List::UlComponent < ViewComponent::Base
  def initialize(sortable: false)
    @sortable = sortable
  end
end
