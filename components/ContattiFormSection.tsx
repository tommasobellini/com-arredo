'use client'

import { useSearchParams } from 'next/navigation'
import PreventivoForm from '@/components/PreventivoForm'
import { buildMaterialPrefillMessage } from '@/lib/material-prefill'

export default function ContattiFormSection() {
  const searchParams = useSearchParams()
  const essenza = searchParams.get('essenza')
  const finitura = searchParams.get('finitura')
  const defaultMessaggio = buildMaterialPrefillMessage(essenza, finitura)

  return (
    <PreventivoForm
      defaultMessaggio={defaultMessaggio}
      defaultEssenza={essenza || undefined}
      defaultFinitura={finitura || undefined}
    />
  )
}
