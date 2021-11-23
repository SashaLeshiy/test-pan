export default class TableApi {
    constructor(config) {
        this.url = config.url;
    }
    getList() {
        return fetch(`${this.url}`, {
            headers: {
                // authorization: '',
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkResponse)
            .then(data => {
                return data;
            })

    };
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

const config = {
    url: `http://www.filltext.com/?rows=160&fname={firstName}&lname={lastName}&email={email}`,
}

export const api = new TableApi(config);