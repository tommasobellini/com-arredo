'use server'

import { cookies } from 'next/headers'

export async function loginToMaintenance(password: string) {
  const correctPassword = process.env.MAINTENANCE_PASSWORD || 'admin'
  
  if (password === correctPassword) {
    (await cookies()).set('maintenance_bypass', 'true', {
      maxAge: 60 * 60 * 24 * 7, // 1 settimana
      path: '/',
    })
    return { success: true }
  }
  
  return { success: false, error: 'Password non corretta' }
}
