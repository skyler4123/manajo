# frozen_string_literal: true

class Table::RowComponent < ViewComponent::Base
  def initialize(id: ,klass: nil, data: nil)
    @id = id
    @klass = klass
    @data = data
  end
end
