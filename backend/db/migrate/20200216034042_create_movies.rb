class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :length
      t.boolean :is_watched, default: false
      t.integer :genre_id

      t.timestamps
    end
  end
end
