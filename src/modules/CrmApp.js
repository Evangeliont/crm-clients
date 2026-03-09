import { ClientsApi } from './api/ClientsApi.js';
import { Header } from './ui/Header.js';
import { ClientsSection } from './ui/ClientsSection.js';

export class CrmApp {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.api = new ClientsApi('http://localhost:3000/api/clients');
    this.header = null;
    this.clientsSection = null;
  }

  async init() {
    const clients = await this.api.getAll();

    this.header = new Header(clients, {
      onSearch: (query) => this.handleSearch(query),
      onReset: () => this.reloadClients(),
    });

    this.clientsSection = new ClientsSection({
      clients,
      api: this.api,
      onChange: () => this.reloadClients(),
    });

    const headerEl = this.header.render();
    const mainEl = this.clientsSection.render();

    this.rootElement.append(headerEl, mainEl);
  }

  async handleSearch(query) {
    if (!query) {
      await this.reloadClients();
      return;
    }

    const found = await this.api.search(query);
    this.clientsSection.updateClients(found);
  }

  async reloadClients() {
    const clients = await this.api.getAll();
    this.header.updateClients(clients);
    this.clientsSection.updateClients(clients);
  }
}

