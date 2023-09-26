# frozen_string_literal: true

class Table::HeaderComponent < ViewComponent::Base
  def initialize(klass: nil, data: nil)
    @klass = klass
    @data = data
  end
end
