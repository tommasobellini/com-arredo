const BYPASS_SALT = 'comarredo-maintenance-v1'

async function hmacSha256Hex(key: string, message: string): Promise<string> {
  const enc = new TextEncoder()
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(message))
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function timingSafeEqualStrings(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let result = 0
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  return result === 0
}

export async function createMaintenanceBypassToken(password: string): Promise<string> {
  return hmacSha256Hex(password, BYPASS_SALT)
}

export async function verifyMaintenanceBypassToken(
  password: string,
  token: string | undefined,
): Promise<boolean> {
  if (!password || !token) return false
  const expected = await createMaintenanceBypassToken(password)
  return timingSafeEqualStrings(expected, token)
}

export function resolveMaintenancePassword(): string | null {
  const password = process.env.MAINTENANCE_PASSWORD
  if (process.env.NODE_ENV === 'production' && !password) return null
  return password || 'admin'
}
