class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.date :due_date
      t.boolean :completed
      t.string :priority

      t.timestamps
    end
  end
end
