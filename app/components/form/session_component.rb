# frozen_string_literal: true

class Form::SessionComponent < ViewComponent::Base
  def initialize(**kwargs)
    @kwargs = kwargs
  end
end
