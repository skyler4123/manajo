# frozen_string_literal: true

class Alert::DarkComponent < ViewComponent::Base
  def initialize(label: "Dark alert! Change a few things up and try submitting again.", closable: true)
    @label = label
    @closable = closable
  end

end
