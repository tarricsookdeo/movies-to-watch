# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create seed genres
genres = Genre.create([
    { name: 'Horror' },
    { name: 'Action' },
    { name: 'Comedy' },
    { name: 'animation' }
])

# Create seed movies
movies = Movie.create([
    { title: 'The Grudge', length: 96, is_watched: false, genre_id: 1 },
    { title: 'John Wick', length: 101, is_watched: true, genre_id: 2 },
    { title: 'Zombie Land', length: 99, is_watched: false, genre_id: 3 },
    { title: 'Toy Story', length: 81, is_watched: true, genre_id: 4 },
    { title: 'Good Boys', length: 90, is_watched: false, genre_id: 3 }
])