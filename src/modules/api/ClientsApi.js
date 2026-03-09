export class ClientsApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
  }

  async getAll() {
    return this.#request('');
  }

  async search(query) {
    const params = new URLSearchParams({ search: query });
    return this.#request(`?${params.toString()}`);
  }

  async create(client) {
    return this.#request('', {
      method: 'POST',
      body: JSON.stringify(client),
    });
  }

  async update(id, client) {
    return this.#request(`/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(client),
    });
  }

  async delete(id) {
    return this.#request(`/${id}`, {
      method: 'DELETE',
    });
  }

  async #request(path, options = {}) {
    const url = `${this.baseUrl}${path}`;

    const fetchOptions = {
      method: options.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: options.body,
    };

    try {
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        // Try to parse error body for debugging in dev
        let details = null;
        try {
          details = await response.json();
        } catch {
          // ignore
        }

        const error = new Error(`API error: ${response.status}`);
        error.status = response.status;
        error.details = details;
        throw error;
      }

      // No content
      if (response.status === 204 || response.headers.get('Content-Length') === '0') {
        return null;
      }

      const contentType = response.headers.get('Content-Type') || '';
      if (contentType.includes('application/json')) {
        return response.json();
      }

      return response.text();
    } catch (error) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.error('ClientsApi request failed', error);
      }
      throw error;
    }
  }
}

