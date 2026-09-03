export class MongoDbRepository {
  async saveRecords(records: any[]): Promise<void> {
    console.log(`Saved ${records.length} records to MongoDB`);
  }
}