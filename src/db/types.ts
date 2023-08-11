import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type AudioTranscript = {
    id: Generated<number>;
    fileUrl: string;
    transcribedText: string | null;
};
export type Note = {
    id: Generated<number>;
    title: string;
    content: string;
    createdAt: Generated<Timestamp>;
    lastModifiedAt: Timestamp;
    audioTranscriptId: number | null;
    userId: string;
};
export type Tag = {
    id: Generated<number>;
    name: string;
    noteId: number | null;
};
export type User = {
    id: string;
};
export type DB = {
    AudioTranscript: AudioTranscript;
    Note: Note;
    Tag: Tag;
    User: User;
};
