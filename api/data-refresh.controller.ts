import { DataRefreshService } from "../application/data-refresh.service";

export class DataRefreshController {
  private service = new DataRefreshService();

  async refresh() {
    return this.service.refreshData();
  }
}