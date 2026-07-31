export type CamperForm = 'alcove' | 'panel_van' | 'integrated' | 'semi_integrated';
export type TransmissionType = 'automatic' | 'manual';
export type EngineType = 'diesel' | 'petrol' | 'hybrid' | 'electric';
export type AmenityType = 'ac' | 'bathroom' | 'kitchen' | 'tv' | 'radio' | 'refrigerator' | 'microwave' | 'gas' | 'water';

export interface CamperImageEntity {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface ReviewEntity {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface CamperListItemDto {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: AmenityType[];
  coverImage: string;
  totalReviews: number;
}

export interface CamperDetailsEntity {
  id: string;
  name: string;
  price: number;
  rating: number;
  totalReviews: number;
  location: string;
  description: string;
  form: CamperForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: TransmissionType;
  engine: EngineType;
  amenities: AmenityType[];
  gallery: CamperImageEntity[];
  createAt: string;
  updateAt: string;
  reviews?: ReviewEntity[];
}

export interface CamperListResponseDto {
  page: number;
  perPage: number;
  total: number;
  totalPage: number;
  campers: CamperListItemDto[];
}
 
export interface CampersFetchParams {
  page?: number;
  perPage?: number;
  location?: string;
  form?: CamperForm | string;
  engine?: EngineType | string;
  transmission?: TransmissionType | string;
}

export interface BookingRequestDto {
  name: string;
  email: string;
}

export interface BookingResponseDto {
  message: string;
}
  