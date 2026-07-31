import {
  LuWind,
  LuShowerHead,
  LuUtensils,
  LuTv,
  LuRadio,
  LuFlame,
  LuDroplet
} from "react-icons/lu";

export const AMENITIES_MAP: Record<string, { label: string, icon: React.ElementType }> = {
  ac: {label: 'AC', icon: LuWind},
  bathroom: {label: 'Bathroom', icon: LuShowerHead},
  kitchen: {label: 'Kitchen', icon: LuUtensils},
  tv: {label: 'TV', icon: LuTv},
  radio: {label: 'Radio', icon: LuRadio},
  refrigerator: {label: 'Refrigerator', icon: LuWind},
  microwave: {label: 'Microware', icon: LuWind},
  gas: {label: 'Gas', icon: LuFlame},
  water: {label: 'Water', icon: LuDroplet},
}
export const CAMPER_FORMS = [
  { value: 'panel_van', label: 'Panel Van' },
  { value: 'integrated', label: 'Integrated' }, 
  { value: 'alcove', label: 'Alcove' },
  { value: 'semi_integrated', label: 'Semi Integrated'},
];

export const ENGINE_TYPES = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
];

export const TRANSMISSION_TYPES = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
];