class BrokerClient {
  private _client: any = null;
  private static _instance: BrokerClient;

  private constructor() {}
  static get instance() {
    if (!BrokerClient._instance) {
      BrokerClient._instance = new BrokerClient();
    }

    return BrokerClient._instance;
  }

  connect() {
    return "connected to broker";
  }

  publish() {}

  subscribe() {}
}
