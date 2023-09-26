# frozen_string_literal: true

class Alert::WarningComponent < ViewComponent::Base
  def initialize(label: "Warning alert! Change a few things up and try submitting again.", closable: true)
    @label = label
    @closable = closable
  end

end
