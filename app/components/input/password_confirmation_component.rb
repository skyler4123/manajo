# frozen_string_literal: true

class Input::PasswordConfirmationComponent < ViewComponent::Base
  def initialize(label: 'Password Confirmation', name: nil)
    @label = label
    @name = name
  end
end
