import { Api } from "./config";

export const getAllRooms = async () => {
  let response = await Api.get("/getAllRooms");

  if (response.data) {
    return response.data;
  }
  return null;
};

export const addRoom = async (payload) => {
  const response = {
    data: null,
    err: null,
  };
  await Api.post("/addRoom", payload)
    .then((res) => {
      response.data = res;
    })
    .catch((err) => {
      response.err = err;
    });

  return response;
};

export const deleteRoom = async (id) => {
  let response = await Api.delete(`/deleteRoom/${id}`);

  if (response.data) {
    return response.data;
  }
  return null;
};
export const updateRoom = async (id, payload) => {
  const response = {
    data: null,
    err: null,
  };

  try {
    const res = await Api.put(`/updateRoom/${id}`, payload);
    response.data = res.data;
  } catch (err) {
    response.err = err.response ? err.response.data : err.message;
  }

  return response;
};
