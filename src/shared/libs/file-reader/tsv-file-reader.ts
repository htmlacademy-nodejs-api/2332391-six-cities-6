import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, RentTypes } from '../../types/index.js';

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

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([country, city, adress, hotelName, rentType, price, roomsNumber, webSite, phone, celebrity]) => ({
        country,
        city,
        adress,
        hotelName,
        price: Number.parseInt(price, 10),
        roomsNumber: Number.parseInt(roomsNumber, 10),
        webSite,
        phone,
        rentType: RentTypes[rentType as 'Dayly' | 'Monthly' | 'Weekly'],
        celebrity: [celebrity],
      }));
  }
}
