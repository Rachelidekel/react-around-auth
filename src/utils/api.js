class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _customFetch = (url, headers) => {
    return fetch(url, headers).then((res) =>
      res.ok ? res.json() : Promise.reject(res.statusText)
    );
  };

  getInitialCards() {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    });
  }

  getUserInfo() {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    });
  }

  setUserInfo({ name, about }) {
    return this._customFetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    });
  }

  createCard(data) {
    return this._customFetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._customFetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    });
  }

  changeLikeCardStatus(cardId, isLiked) {
    return this._customFetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: isLiked ? "DELETE" : "PUT",
    });
  }

  setUserAvatar({ avatar }) {
    return this._customFetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-1",
  headers: {
    authorization: "a0dd5829-1b51-4f9b-93c7-6d4f8e85cb31",
    "Content-Type": "application/json",
  },
});

export default api;
