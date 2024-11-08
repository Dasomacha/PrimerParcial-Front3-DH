import { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';
import Card from '../Card';

function Formulario() {
  const [song, setSong] = useState('');
  const [artist, setArtist] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [cards, setCards] = useState([]); // Mantener las cards

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Restablecer el error

    // Validaciones de los campos obligatorios
    if (!name || !song || !artist) {
      setError('Todos los campos son obligatorios.');
    } else if (name.length < 3 || song.length < 6 || name.startsWith(' ') || artist.length < 6) {
      setError('Por favor chequea que la información sea correcta.');
    } else {
      // Si la validación es exitosa, agregar la card
      const newCard = { song, artist, name };
      setCards((prevCards) => [...prevCards, newCard]);

      // Vaciar los inputs después del envío
      setSong('');
      setArtist('');
      setName('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Tu Nombre:"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ingresa tu nombre"
        />
        <InputField
          label="Nombre de la Canción:"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          placeholder="Ingresa la canción"
        />
        <InputField
          label="Artista:"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Ingresa el nombre del artista"
        />
        <SubmitButton label="Enviar" />
      </form>

      {error && <ErrorMessage message={error} />}
      
      {/* Mostrar las Cards ingresadas */}
      {cards.map((card, index) => (
        <Card key={index} song={card.song} artist={card.artist} name={card.name} />
      ))}
    </div>
  );
}

export default Formulario;
