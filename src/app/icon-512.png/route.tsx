import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 272,
          background: '#1f1b16',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 102,
        }}
      >
        <span
          style={{
            color: '#f7f2ec',
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-6px',
          }}
        >
          EB
        </span>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  )
}
