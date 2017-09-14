class Location < ApplicationRecord
    has_many :artists, dependent: :destroy
end
