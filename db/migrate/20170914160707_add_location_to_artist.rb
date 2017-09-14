class AddLocationToArtist < ActiveRecord::Migration[5.1]
  def change
    add_reference :artists, :artist, foreign_key: true
  end
end
