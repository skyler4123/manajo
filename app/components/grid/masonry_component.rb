# frozen_string_literal: true

class Grid::MasonryComponent < ViewComponent::Base
  renders_many :items

  def initialize(klass: nil, item_class: nil)
    @klass = klass
    @item_class = item_class
  end
end
