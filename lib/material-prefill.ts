import type { WoodEssence, WoodFinish } from '@/lib/materials'
import { essenceLabels, finishLabels } from '@/lib/materials'

export function buildMaterialPrefillMessage(
  essence: string | null,
  finish: string | null,
): string | undefined {
  if (!essence || !finish) return undefined

  const essenceLabel = essenceLabels[essence as WoodEssence]
  const finishLabel = finishLabels[finish as WoodFinish]
  if (!essenceLabel || !finishLabel) return undefined

  return `Interessato a campioni: ${essenceLabel} — ${finishLabel}. Vorrei maggiori informazioni su essenza, finitura e tempi di realizzazione.`
}
