import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#1f1b16',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <span
          style={{
            color: '#f7f2ec',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.5px',
          }}
        >
          EB
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
