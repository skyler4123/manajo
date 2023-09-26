# frozen_string_literal: true

class RichText::TrixComponent < ViewComponent::Base
  def initialize(id: 'trix-editor', name: nil, editor_class: nil)
    @id = id
    @name = name
    @editor_class = editor_class
  end
end
