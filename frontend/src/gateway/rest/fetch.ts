const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export const getFetch = async (url: string) => {
  const response = await fetch(url);
  return handleResponse(response);
};

export const postFetch = async (url: string, body: unknown) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

export const putFetch = async (url: string, body: unknown) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return handleResponse(response);
};

export const deleteFetch = async (url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  return handleResponse(response);
};
