export type ServiceId =
  | 'indoor'
  | 'outdoor'
  | 'dvr'
  | 'mobile'
  | 'maintenance'
  | 'security';

export interface Service {
  id: ServiceId;
  icon: string;
}

export const services: Service[] = [
  { id: 'indoor', icon: 'CameraIndoor' },
  { id: 'outdoor', icon: 'CameraOutdoor' },
  { id: 'dvr', icon: 'Server' },
  { id: 'mobile', icon: 'Smartphone' },
  { id: 'maintenance', icon: 'Wrench' },
  { id: 'security', icon: 'Shield' },
];

export const serviceIds = services.map((s) => s.id);

export function isServiceId(value: string): value is ServiceId {
  return serviceIds.includes(value as ServiceId);
}
