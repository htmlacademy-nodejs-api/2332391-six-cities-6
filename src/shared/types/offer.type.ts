import { RentTypes } from './rent-type.enum.js';

export type Offer = {
    country: string;
    city: string;
    adress: string;
    hotelName: string;
    price: number;
    roomsNumber: number;
    webSite: string;
    phone: string;
    rentType: RentTypes;
    celebrity: string[];
}
