export const Song = ({ title, duration, artist, id, onDelete, onAdd, isInPlaylist, onMoveDown, isAdded }) => {
    const audioId = `audio${id}`;
    
    const play = () => {
      const audio = document.getElementById(audioId);
      if (audio) {
        audio.play();
      }
    };
  
    const pause = () => {
      const audio = document.getElementById(audioId);
      if (audio) {
        audio.pause();
      }
    };
  
    return (
      <div className="song">
        <p>{title}</p>
        <strong>By {artist}</strong>
        <small>{duration} mins</small>
        <button onClick={() => onDelete(id)}>x</button>
        {!isInPlaylist && !isAdded && (
          <button onClick={() => onAdd(id)}>
            +
          </button>
        )}
        {isInPlaylist && <button onClick={() => onMoveDown(id)}>↓</button>}
        <button onClick={play}>▶ </button>
        <button onClick={pause}>| |</button>
        <audio id={audioId} src={`./audio/${id}.mp3`}></audio>
      </div>
    );
  };
  