class Surfboard < ApplicationRecord
    has_many :surfboard_categories 
    has_many :categories, through: :surfboard_categories
end
