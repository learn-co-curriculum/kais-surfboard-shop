class CreateSurfboards < ActiveRecord::Migration[5.0]
  def change
    create_table :surfboards do |t|
      t.string :name
      t.integer :length
      t.integer :price
      t.integer :quantity

      t.timestamps
    end
  end
end
