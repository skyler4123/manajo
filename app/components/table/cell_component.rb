# frozen_string_literal: true

class Table::CellComponent < ViewComponent::Base
  def initialize(cell_value: nil, klass: nil, data: nil)
    @cell_value = cell_value
    @klass = klass
    @data = data
  end
end
