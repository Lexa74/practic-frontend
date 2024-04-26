export type responseType<T, N> = {
  data: T | undefined;
  error: N | undefined;
};

export type userRes = {
  email: string;
  password: string;
  __v: string;
  id: string;
};

export type registerProps = {
  email: string;
  password: string;
};

export type tokensRes = {
  access: string;
  refresh: string;
};

export type loginProps = {
  email: string;
  password: string;
};

export type refreshTokenRes = {
  access: string;
};
