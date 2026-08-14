import { Project } from '@/types/project';

const newPublicAsset = (relativePath: string) => encodeURI(`/new public/${relativePath}`);

export const projects: Project[] = [
  {
    id: 'project1',
    image: newPublicAsset('ستاند حائطي يستعرض الكاميرات والاجهزة مثبتة عليه.jpg'),
    category: 'commercial',
  },
  {
    id: 'project2',
    image: newPublicAsset('صورة تظهر شاشة مراقبة الكاميرات للمنزل كاملا داخليا وخارجيا.jpg'),
    category: 'residential',
  },
  {
    id: 'project3',
    image: newPublicAsset('نتيجة كاميرا داخلية لمراقبة المنزل 1.jpg'),
    category: 'residential',
  },
  {
    id: 'project4',
    image: newPublicAsset('نتيجة كاميرا داخلية لمراقبة المنزل 2.jpg'),
    category: 'commercial',
  },
  {
    id: 'project5',
    image: newPublicAsset('outdour garage (1)/نتيجة كاميرا مراقبة خارجية.jpg'),
    category: 'industrial',
  },
  {
    id: 'project6',
    image: newPublicAsset('outdour garage (1)/نتيجة كاميرا مراقبة خارجية2.jpg'),
    category: 'commercial',
  },
];
