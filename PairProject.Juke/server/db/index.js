const { Album, Artist, Song, db } = require('./db')

Artist.hasMany(Album)
Album.belongsTo(Artist)
Artist.hasMany(Song)
Song.belongsTo(Artist)
Album.hasMany(Song)
Song.belongsTo(Album)

module.exports = {
  db,
  Album,
  Artist,
  Song
}
