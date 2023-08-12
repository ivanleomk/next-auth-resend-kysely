import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Account = {
    id: string;
    userId: string;
    type: string;
    provider: string;
    providerAccountId: string;
    refresh_token: string | null;
    access_token: string | null;
    expires_at: number | null;
    token_type: string | null;
    scope: string | null;
    id_token: string | null;
    session_state: string | null;
};
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
export type Session = {
    id: string;
    sessionToken: string;
    userId: string;
    expires: Timestamp;
};
export type Tag = {
    id: Generated<number>;
    name: string;
    noteId: number | null;
};
export type User = {
    id: string;
    name: string | null;
    email: string | null;
    emailVerified: Timestamp | null;
    image: string | null;
};
export type VerificationToken = {
    identifier: string;
    token: string;
    expires: Timestamp;
};
export type DB = {
    Account: Account;
    AudioTranscript: AudioTranscript;
    Note: Note;
    Session: Session;
    Tag: Tag;
    User: User;
    VerificationToken: VerificationToken;
};
