import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'كامتيك — تركيب كاميرات مراقبة في الكويت';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1e40af 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', fontSize: 28, color: 'rgba(255,255,255,0.75)' }}>
            CAMTEK · الكويت
          </div>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700 }}>كامتيك</div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, maxWidth: 900 }}>
            تركيب كاميرات مراقبة وأنظمة أمان
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 26,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          <div style={{ display: 'flex' }}>خدمة في جميع محافظات الكويت</div>
          <div style={{ display: 'flex' }}>camtek.kw</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
