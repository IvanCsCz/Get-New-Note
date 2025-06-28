import { useState } from 'react';
import { getRandomNote } from './utils/notes';

function App() {
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');

  const handleGetNote = () => {
    const { note, description } = getRandomNote();
    setDescription(description);
    setNote(note);
  };

  return (
    <>
      <main className="h-screen  flex items-center justify-center bg-[#397097]">
        <div className="py-8 px-12 text-center flex flex-col gap-5 rounded-lg bg-[#FFFFFF1A]">
          <h1 className="text-8xl font-bold text-white">{note}</h1>
          <p className="mb-3 text-3xl font-bold text-white/80 ">
            {description}
          </p>
          <button
            onClick={handleGetNote}
            type="button"
            className=" font-bold px-5 py-2.5 me-2 mb-2 rounded-md text-2xl text-[#397097] bg-white shadow-[0_6px_0_rgb(235,235,235)] active:shadow-none active:translate-y-[6px] cursor-pointer "
          >
            NEW NOTE
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
