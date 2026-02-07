import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#1f1b16',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
        }}
      >
        <span
          style={{
            color: '#f7f2ec',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-2px',
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
