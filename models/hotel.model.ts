import { Prisma } from '@prisma/client';

export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  price: number;
  numberOfRooms: number;
  website: string;
}

export interface CreateHotelInput extends Omit<Prisma.HotelCreateInput, 'id'> {}

export interface UpdateHotelInput extends Prisma.HotelUpdateInput {}

export interface Review {
  id: number;
  hotelId: number;
  username: string;
  rating: number;
  comment: string;
}

export type HotelWithReviews = Hotel & { reviews: Review[] };
