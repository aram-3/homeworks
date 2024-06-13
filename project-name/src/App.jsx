import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Song } from './Song';
import { Album } from './Album';
import { Songlist } from './Songlist';
import { Playlist } from './Playlist';
import './App.css';

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Like a Rolling Stone", artist: "Bob Dylan", duration: 6.13 },
    { id: 102, title: "Satisfaction", artist: "Rolling Stones", duration: 3.45 },
    { id: 103, title: "Good Vibrations", artist: "The Beach Boys", duration: 3.36 },
    { id: 104, title: "Purple Haze", artist: "Jimi Hendrix", duration: 2.50 },
    { id: 105, title: "Time Of The Season", artist: "The Zombies", duration: 7.11 },
    { id: 106, title: "Light My Fire", artist: "The Doors", duration: 7.06 },
    { id: 107, title: "White Room", artist: "Cream", duration: 4.58 }
  ]);
  const [sngs, setSngs] = useState([]);
  const [addedSongs, setAddedSongs] = useState([]);

  const removeSong = id => {
    setSongs(songs.filter(x => x.id != id));
    setSngs(sngs.filter(x => x.id != id));
    setAddedSongs(addedSongs.filter(songId => songId != id));
  };

  const removeSongFromPlaylist = id => {
    setSngs(sngs.filter(x => x.id != id));
    setAddedSongs(addedSongs.filter(songId => songId != id));
  };

  const addSong = id => {
    const songAdd = songs.find(elm => elm.id == id);
    if (songAdd && !sngs.includes(songAdd)) {
      setSngs([...sngs, songAdd]);
      setAddedSongs([...addedSongs, id]);
    }
  };

  const moveSongDown = id => {
    const index = sngs.findIndex(song => song.id == id);
    if (index != -1 && index < sngs.length - 1) {
      const newSngs = [...sngs];
      const temp = newSngs[index];
      newSngs[index] = newSngs[index + 1];
      newSngs[index + 1] = temp;
      setSngs(newSngs);
    }
  };

  return (
    <div className='app'>
      <Songlist
        items={songs}
        onDelete={removeSong}
        onAdd={addSong}
        addedSongs={addedSongs}
      />
      <Playlist
        items={sngs}
        onDelete={removeSongFromPlaylist}
        onMoveDown={moveSongDown}
      />
    </div>
  );
}

export default App;
