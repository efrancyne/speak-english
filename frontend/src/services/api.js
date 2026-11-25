const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

async function request(path, method = "GET", body) {
  const response = await fetch(API_URL + path, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) return null;
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

export const login = (email, password) => request("/auth/login", "POST", { email, password });
export const register = (name, email, password) =>
  request("/auth/register", "POST", { name, email, password });

export const getLevels = () => request("/levels");
export const getContents = (filters) => request("/contents?" + new URLSearchParams(filters));

export const getProgress = (userId) => request(`/progress/${userId}`);
export const getMyContents = (userId) => request(`/progress/${userId}/contents`);
export const saveStatus = (userId, contentId, status) =>
  request("/progress", "PUT", { userId, contentId, status });
export const removeStatus = (userId, contentId) =>
  request(`/progress/${userId}/${contentId}`, "DELETE");
