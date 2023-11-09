const url = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
  const res = await fetch(url);
  const result = await res.json();

  return Object.values(result);
};
