# frozen_string_literal: true

class Input::SubmitComponent < ViewComponent::Base
  def initialize(label: 'Submit')
    @label = label
  end
end
