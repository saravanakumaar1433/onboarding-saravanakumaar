import { PublicApiClient } from "../infrastructure/public-api.client";
import { MongoDbRepository } from "../infrastructure/mongodb.repository";

export class DataRefreshService {
  private apiClient = new PublicApiClient();
  private repository = new MongoDbRepository();

  async refreshData(): Promise<string> {
    const data = await this.apiClient.fetchData();

    await this.repository.saveRecords(data);

    return "Data refresh completed successfully";
  }
}