import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 102,
          background: '#1f1b16',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 38,
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
      width: 192,
      height: 192,
    }
  )
}
