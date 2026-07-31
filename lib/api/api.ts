import axios from 'axios';
import {
  CamperListResponseDto,
  CamperDetailsEntity,
  CampersFetchParams,
  BookingRequestDto,
  BookingResponseDto,
} from '@/types/camper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: BASE_URL,
});

/**
 * Отримання списку кемперів для каталогу.
 * Підтримує пагінацію (page, perPage) та фільтрацію за параметрами.
 */
export const fetchCampers = async (
  params: CampersFetchParams
): Promise<CamperListResponseDto> => {
  const { data } = await api.get<CamperListResponseDto>('/campers', { params });
  return data;
};

/**
 * Отримання детальної інформації про конкретний кемпер за його camperId.
 */
export const fetchCamperById = async (
  camperId: string
): Promise<CamperDetailsEntity> => {
  const { data } = await api.get<CamperDetailsEntity>(`/campers/${camperId}`);
  return data;
};

/**
 * Відправка даних форми бронювання для обраного кемпера.
 */
export const bookCamper = async (
  camperId: string,
  bookingData: BookingRequestDto
): Promise<BookingResponseDto> => {
  const { data } = await api.post<BookingResponseDto>(
    `/campers/${camperId}/booking-requests`,
    bookingData
  );
  return data;
};
