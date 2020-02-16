class Genre < ApplicationRecord
    validates :name, uniqueness: true

    has_many :movies, dependent: :destroy
end
