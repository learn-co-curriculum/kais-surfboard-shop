class Category < ApplicationRecord
    has_many :surfboard_categories 
    has_many :surfboards, through: :surfboard_categories
end

