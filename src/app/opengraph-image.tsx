import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Essential Block - Strategic Marketing & Premium Corporate Gifts'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(147, 112, 219, 0.1), transparent 50%), radial-gradient(circle at 70% 50%, rgba(244, 162, 97, 0.1), transparent 50%)',
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #9370DB 0%, #F4A261 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            textAlign: 'center',
          }}
        >
          {/* Logo placeholder - using text since we can't load external images easily */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #9370DB 0%, #7B52D3 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                boxShadow: '0 10px 30px rgba(147, 112, 219, 0.3)',
              }}
            >
              <span style={{ color: 'white', fontSize: '40px', fontWeight: 'bold' }}>EB</span>
            </div>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#171717',
              }}
            >
              Essential Block
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#171717',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <span>Where</span>
            <span style={{ color: '#9370DB' }}>Strategic Marketing</span>
            <span>Meets</span>
            <span style={{ color: '#F4A261' }}>Memorable Gifting</span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#666666',
              maxWidth: '800px',
              lineHeight: 1.5,
              marginBottom: '40px',
            }}
          >
            Transform your brand with data-driven marketing strategies and premium corporate gifts
          </p>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '60px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#9370DB' }}>500+</span>
              <span style={{ fontSize: '18px', color: '#666666' }}>Projects</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#9370DB' }}>98%</span>
              <span style={{ fontSize: '18px', color: '#666666' }}>Satisfaction</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '42px', fontWeight: 'bold', color: '#9370DB' }}>10+</span>
              <span style={{ fontSize: '18px', color: '#666666' }}>Years</span>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <span style={{ fontSize: '18px', color: '#9370DB', fontWeight: '500' }}>essentialblock.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
