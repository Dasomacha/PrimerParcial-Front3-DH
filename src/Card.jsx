function Card({ song, artist, name }) {
  return (
    <div>
      <h2>Hola {name}!</h2>
      <p>Tu canción favorita es:</p>
      <p><strong>Canción:</strong> {song}</p>
      <p><strong>Artista:</strong> {artist}</p>
    </div>
  );
}

export default Card;
