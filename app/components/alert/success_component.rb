# frozen_string_literal: true

class Alert::SuccessComponent < ViewComponent::Base
  def initialize(label: "Success alert! Change a few things up and try submitting again.", closable: true)
    @label = label
    @closable = closable
  end

end
