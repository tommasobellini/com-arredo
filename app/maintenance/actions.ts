'use server'

import { cookies } from 'next/headers'
import { createMaintenanceBypassToken, resolveMaintenancePassword } from '@/lib/maintenance-token'

export async function loginToMaintenance(password: string) {
  const correctPassword = resolveMaintenancePassword()

  if (!correctPassword) {
    return { success: false, error: 'Manutenzione non configurata.' }
  }

  if (password === correctPassword) {
    const token = await createMaintenanceBypassToken(correctPassword)
    ;(await cookies()).set('maintenance_bypass', token, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    return { success: true }
  }

  return { success: false, error: 'Password non corretta' }
}
