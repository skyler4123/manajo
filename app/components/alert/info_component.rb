# frozen_string_literal: true

class Alert::InfoComponent < ViewComponent::Base
  def initialize(label: "Info alert! Change a few things up and try submitting again.", closable: true)
    @label = label
    @closable = closable
  end

end
