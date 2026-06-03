import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: 'indoor',
    icon: 'CameraIndoor',
    features: ['HD/4K Resolution', 'Night Vision', 'Motion Detection', 'Two-Way Audio', 'Wide-Angle Lens'],
  },
  {
    id: 'outdoor',
    icon: 'CameraOutdoor',
    features: ['Weatherproof IP66/IP67', 'Infrared Night Vision', 'Vandal-Resistant', 'Long-Range View', 'Color Night Vision'],
  },
  {
    id: 'dvr',
    icon: 'Server',
    features: ['Multi-Channel Support', 'Remote Access', 'Large Storage', 'Smart Analytics', 'Backup & Export'],
  },
  {
    id: 'mobile',
    icon: 'Smartphone',
    features: ['Live View', 'Push Notifications', 'Playback', 'Cloud Storage', 'Multi-Device Access'],
  },
  {
    id: 'maintenance',
    icon: 'Wrench',
    features: ['Regular Inspections', 'System Updates', 'Cleaning & Adjustment', 'Emergency Repairs', 'Performance Reports'],
  },
  {
    id: 'security',
    icon: 'Shield',
    features: ['Alarm Systems', 'Access Control', 'Perimeter Protection', 'Fire Detection', 'Integration'],
  },
];
