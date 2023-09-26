# frozen_string_literal: true

class Input::PasswordComponent < ViewComponent::Base
  def initialize(label: 'Password', name: nil)
    @label = label
    @name = name
  end
end
