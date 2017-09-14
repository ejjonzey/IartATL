class Artist < ApplicationRecord
    belongs_to :location, dependent: :destroy
end
