export type Token = string;

export type State = {
  token: Token | null;
};

export type Actions = {
  updateToken: (token: Token | null) => void;
};

export type SessionState = State & Actions;
