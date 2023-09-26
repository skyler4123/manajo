# frozen_string_literal: true

class ButtonComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer
  renders_one :modal
  renders_one :popover
  renders_one :indicator
  def initialize(label: 'Button', klass: "flex justify-center item-center", button_class: "text-white bg-blue-700 active:bg-blue-800 font-medium rounded-md text-lg px-5 py-2.5 dark:bg-blue-600 dark:active:bg-blue-700")
    @label = label
    @klass = klass
    @button_class = button_class
  end
end
