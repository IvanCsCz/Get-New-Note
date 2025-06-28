import { NOTE_DESC, NOTE_DESC_LENGTH, NOTES, type INote } from '../data/notes';

export function getRandomNote(): INote {
  const limit = NOTE_DESC_LENGTH - 1;
  const index = Math.floor(Math.random() * (limit + 1));
  return NOTE_DESC[index];
}

export function getNotes(initialNote: string, sum1: number, sum2: number) {
  let index = NOTES.indexOf(initialNote);
  let output = NOTES[index] + '-';

  index = updateIndex(index, sum1);
  output += NOTES[index] + '-';

  if (index + sum1 === 11) {
    index = 0;
  }

  index = updateIndex(index, sum2);
  output += NOTES[index];

  return output;
}

function updateIndex(index: number, increment: number) {
  if (index + increment > 11) {
    index = index + increment - 12;
  } else {
    index += increment;
  }

  return index;
}
