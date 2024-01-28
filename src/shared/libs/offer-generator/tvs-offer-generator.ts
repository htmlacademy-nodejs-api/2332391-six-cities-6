import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData } from '../../types/index.js';
import { generateRandomValue, getRandomItem } from '../../helpers/index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;


export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const country = getRandomItem<string>(this.mockData.country);
    const city = getRandomItem<string>(this.mockData.city);
    const adress = getRandomItem<string>(this.mockData.adress);
    const hotelName = getRandomItem<string>(this.mockData.hotelName);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const webSite = getRandomItem(this.mockData.website);
    const phone = getRandomItem(this.mockData.phone);
    const rentType = getRandomItem(this.mockData.rentType);

    return [
      country, city, adress,
      hotelName, price, webSite,
      phone, rentType,
    ].join('\t');
  }
}
