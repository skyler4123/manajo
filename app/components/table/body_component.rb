# frozen_string_literal: true

class Table::BodyComponent < ViewComponent::Base
  def initialize(klass: nil, data: nil)
    @klass = klass
    @data = data
  end
end
