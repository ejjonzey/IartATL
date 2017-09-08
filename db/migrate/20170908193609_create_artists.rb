class CreateArtists < ActiveRecord::Migration[5.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :photo_url
      t.string :description
      t.string :location

      t.timestamps
    end
  end
end
