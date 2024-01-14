import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer } from '../../types/index.js';
import { argv } from 'node:process';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }
    console.log(argv);
    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([country, city, adress, hotelName, price, webSite, phone,rentType]) => ({
        country,
        city,
        adress,
        hotelName,
        price: Number.parseInt(price, 10),
        webSite,
        phone,
        rentType: rentType.trim(),
      }));
  }
}
