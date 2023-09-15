import { useState } from "react";
import Note from "./Note";

function NoteAdd() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSaveClick = () => {
    if (title.trim() === "" || text.trim() === "") {
      return;
    }

    const newNote = { title, text };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);

    setTitle("");
    setText("");
  };

  const handleNoteDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="p-4  flex ">
      <div className="w-1/2 px-3">
        <h2 className="text-xl font-semibold mb-2">Not ekle </h2>
        <div className="mb-4">
          <label htmlFor="baslik" className="block font-medium mb-1">
            Başlık :
          </label>
          <input
            type="text"
            id="baslik"
            name="baslik"
            value={title}
            onChange={handleTitleChange}
            className="border border-gray-300 rounded-md p-2 w-3/4 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metin" className="block font-medium">
            Metin Ekle
          </label>
          <textarea
            name="metin"
            id="metin"
            cols="30"
            rows="10"
            value={text}
            onChange={handleTextChange}
            className="border rounded-md p-2 w-3/4 text-black"
          ></textarea>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          onClick={handleSaveClick}
        >
          Kaydet
        </button>
      </div>
      <div className="w-1/2 pr-3  rounded-md">
        <h2 className="text-xl font-semibold mt-4 mx-4">Notlarınız</h2>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <Note
                title={note.title}
                text={note.text}
                onDelete={() => handleNoteDelete(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoteAdd;
