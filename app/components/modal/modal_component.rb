# frozen_string_literal: true

class Modal::ModalComponent < ViewComponent::Base
  renders_one :header
  renders_one :footer

  def initialize(controller_class: "fixed inset-0 z-50 h-screen w-screen flex justify-center items-center bg-slate-400 opacity-50 cursor-pointer hidden group-open:block")
    @controller_class = controller_class
  end
end
