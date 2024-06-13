import { Song } from "./Song";

export const Songlist = ({ items, onDelete, onAdd, addedSongs }) => {
  return (
    <div className="songlist">
      <h1>Songlist</h1>
      {items.map(elm => (
        <Song
          key={elm.id}
          {...elm}
          onDelete={onDelete}
          onAdd={onAdd}
          isInPlaylist={false}
          isAdded={addedSongs.includes(elm.id)}
        />
      ))}
    </div>
  );
};
