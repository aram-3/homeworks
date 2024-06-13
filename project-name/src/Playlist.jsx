import { Song } from "./Song";

export const Playlist = ({ items, onDelete, onMoveDown }) => {
    return (
      <div className="playlist">
        <h1>Playlist</h1>
        {items.map(elm => (
          <Song
            key={elm.id}
            {...elm}
            onDelete={onDelete}
            onMoveDown={onMoveDown}
            isInPlaylist={true}
          />
        ))}
      </div>
    );
  };
  
