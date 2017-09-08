class CreateArts < ActiveRecord::Migration[5.1]
  def change
    create_table :arts do |t|
      t.string :name
      t.string :photo_url
      t.string :description
      t.string :location
      t.references :artist, foreign_key: true

      t.timestamps
    end
  end
end
