# frozen_string_literal: true

class Form::SearchComponent < ViewComponent::Base
  renders_one :header
  renders_one :internal_button
  renders_one :external_button

  def initialize(placeholder: "Search ...")
    @placeholder = placeholder
  end
end
