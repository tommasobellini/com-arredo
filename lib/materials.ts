import { images } from '@/lib/images'

export type WoodEssence = 'rovere' | 'noce' | 'frassino' | 'castagno'
export type WoodFinish = 'olio' | 'cerato' | 'naturale' | 'ebano' | 'sbiancato'

export interface MaterialSample {
  id: string
  essence: WoodEssence
  finish: WoodFinish
  label: string
  description: string
  maintenance: string
  image: string
  hue: string
}

export const essenceLabels: Record<WoodEssence, string> = {
  rovere: 'Rovere',
  noce: 'Noce',
  frassino: 'Frassino',
  castagno: 'Castagno',
}

export const finishLabels: Record<WoodFinish, string> = {
  olio: 'Olio naturale',
  cerato: 'Cerato',
  naturale: 'Naturale',
  ebano: 'Tinto ebano',
  sbiancato: 'Sbiancato',
}

export const materialSamples: MaterialSample[] = [
  {
    id: 'rovere-olio',
    essence: 'rovere',
    finish: 'olio',
    label: 'Rovere — Olio naturale',
    description:
      'Rovere europeo a venatura marcata, finitura olio di lino e cera. Tonalità calda e materica, ideale per cucine e tavoli ad alto utilizzo.',
    maintenance: 'Rinnovo olio ogni 12–18 mesi con panno asciutto e detergente neutro.',
    image: images.materials.rovereOlio,
    hue: '#9A7B4F',
  },
  {
    id: 'rovere-cerato',
    essence: 'rovere',
    finish: 'cerato',
    label: 'Rovere — Cerato',
    description:
      'Superficie setosa al tatto con leggera patina. Perfetta per soggiorni e librerie dove si desidera un aspetto vissuto ma curato.',
    maintenance: 'Spolverare con panno in microfibra; evitare prodotti siliconici.',
    image: images.materials.rovereCerato,
    hue: '#A68B5B',
  },
  {
    id: 'rovere-sbiancato',
    essence: 'rovere',
    finish: 'sbiancato',
    label: 'Rovere — Sbiancato',
    description:
      'Rovere decapato e trattato con finitura limata. Ambienti luminosi e contemporanei senza perdere la texture del legno.',
    maintenance: 'Pulizia con panno umido e sapone di Marsiglia diluito.',
    image: images.materials.rovereSbiancato,
    hue: '#D4C4A8',
  },
  {
    id: 'noce-olio',
    essence: 'noce',
    finish: 'olio',
    label: 'Noce — Olio naturale',
    description:
      'Noce canaletto o americano con profondità cromatica. Scelta classica per cucine di pregio e arredi su misura di carattere.',
    maintenance: 'Olio di manutenzione annuale; asciugare subito i liquidi.',
    image: images.materials.noceOlio,
    hue: '#5C3D2E',
  },
  {
    id: 'noce-naturale',
    essence: 'noce',
    finish: 'naturale',
    label: 'Noce — Naturale',
    description:
      'Noce levigato senza tinte, venature scure in evidenza. Per chi ama il legno nella sua espressione più autentica.',
    maintenance: 'Evitare esposizione diretta al sole prolungata; cera neutra occasionale.',
    image: images.materials.noceNaturale,
    hue: '#4A3228',
  },
  {
    id: 'frassino-ebano',
    essence: 'frassino',
    finish: 'ebano',
    label: 'Frassino — Tinto ebano',
    description:
      'Frassino con tintura profonda che esalta il disegno del legno. Elegante per camere e zone notte dal carattere deciso.',
    maintenance: 'Panno leggermente umido; non usare alcool o ammoniaca.',
    image: images.materials.frassinoEbano,
    hue: '#2A2420',
  },
  {
    id: 'castagno-olio',
    essence: 'castagno',
    finish: 'olio',
    label: 'Castagno — Olio naturale',
    description:
      'Castagno italiano dal tono caldo-rossiccio, ottima stabilità dimensionale. Ideale per infissi interni e boiserie.',
    maintenance: 'Controllo annuale della finitura; ventilare gli ambienti.',
    image: images.materials.castagnoOlio,
    hue: '#7A4F35',
  },
  {
    id: 'castagno-cerato',
    essence: 'castagno',
    finish: 'cerato',
    label: 'Castagno — Cerato',
    description:
      'Finitura cerata che protegge senza appesantire la venatura. Adatta a complementi e arredi d\'interni di pregio.',
    maintenance: 'Rigenerare la cera ogni 2–3 anni con prodotto specifico per legno.',
    image: images.materials.castagnoCerato,
    hue: '#8B5E42',
  },
]

export const allEssences: WoodEssence[] = ['rovere', 'noce', 'frassino', 'castagno']
