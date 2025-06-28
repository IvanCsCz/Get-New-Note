import { NOTE_DESC, NOTE_DESC_LENGTH, NOTES, type INote } from '../data/notes';

export function getRandomNote(): INote {
  const limit = NOTE_DESC_LENGTH - 1;
  const index = Math.floor(Math.random() * (limit + 1));
  return NOTE_DESC[index];
}

export function getNotes(initialNote: string, sum1: number, sum2: number) {
  let index = NOTES.indexOf(initialNote);
  let output = NOTES[index] + '-';

  index = (index + sum1) % NOTES.length;
  output += NOTES[index] + '-';

  index = (index + sum2) % NOTES.length;
  output += NOTES[index];

  return output;
}
