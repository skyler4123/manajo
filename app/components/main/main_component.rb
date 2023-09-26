# frozen_string_literal: true

class Main::MainComponent < ViewComponent::Base
  renders_one :main_content
  renders_one :right_sidebar
  renders_one :left_sidebar
end
