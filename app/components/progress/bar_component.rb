# frozen_string_literal: true

class Progress::BarComponent < ViewComponent::Base
  def initialize(percentage: 45)
    @percentage = percentage.to_i
  end
end
