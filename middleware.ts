import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
  const isBypassCookie = request.cookies.get('maintenance_bypass')?.value === 'true'
  const { pathname } = request.nextUrl

  // Se la manutenzione è attiva e l'utente non ha il cookie di bypass
  if (isMaintenanceMode && !isBypassCookie) {
    // Permetti l'accesso alla pagina di manutenzione e alle API/risorse statiche
    if (
      pathname.startsWith('/maintenance') ||
      pathname.startsWith('/api') ||
      pathname.startsWith('/_next') ||
      pathname.includes('.')
    ) {
      return NextResponse.next()
    }

    // Redirect alla pagina di manutenzione
    const url = request.nextUrl.clone()
    url.pathname = '/maintenance'
    return NextResponse.redirect(url)
  }

  // Se la manutenzione non è attiva e l'utente prova ad andare in /maintenance
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
