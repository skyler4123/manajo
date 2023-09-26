# frozen_string_literal: true

class Breadcrumb::BreadcrumbComponent < ViewComponent::Base
  renders_many :items
end
