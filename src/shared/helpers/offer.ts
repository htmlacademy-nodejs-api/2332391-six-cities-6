import { Offer } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    country,
    city,
    adress,
    hotelName,
    price,
    webSite,
    phone,
    rentType
  ] = offerData.replace('\n', '').split('\t');

  return {
    country,
    city,
    adress,
    hotelName,
    price: Number.parseInt(price, 10),
    webSite,
    phone,
    rentType
  };
}
