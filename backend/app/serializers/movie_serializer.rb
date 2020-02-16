class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :length, :is_watched
  belongs_to :genre
end
