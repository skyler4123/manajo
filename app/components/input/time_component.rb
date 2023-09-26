# frozen_string_literal: true

class Input::TimeComponent < ViewComponent::Base
  def initialize(label: "Time:", id: SecureRandom.hex(4), name: "time", options: {})
    @label = label
    @id = id
    @name = name
    @options = options.to_json
  end
end
