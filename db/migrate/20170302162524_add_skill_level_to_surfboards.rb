class AddSkillLevelToSurfboards < ActiveRecord::Migration[5.0]
  def change
    add_column :surfboards, :skill_level, :string
  end
end
