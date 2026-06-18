import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { resolveMaintenancePassword, verifyMaintenanceBypassToken } from '@/lib/maintenance-token'

export async function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
  const maintenancePassword = resolveMaintenancePassword()
  const bypassToken = request.cookies.get('maintenance_bypass')?.value
  const isBypassCookie = await verifyMaintenanceBypassToken(maintenancePassword || '', bypassToken)
  const { pathname } = request.nextUrl

  if (isMaintenanceMode && !isBypassCookie) {
    if (
      pathname.startsWith('/maintenance') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.includes('.')
    ) {
      return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.redirect(url)
  }

  if (!isMaintenanceMode && pathname.startsWith('/maintenance')) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
