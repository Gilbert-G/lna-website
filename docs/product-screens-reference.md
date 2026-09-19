# Référence des écrans produit — visuels de la landing /fr

Source : app produit `Gilbert-G/LNA`, extrait du code réel le 19/09/2026.
But : construire les micro-visuels des bandes 1–4 sans ouvrir le dépôt de l'app.
Tout ce qui suit est vérifié dans le code. Ne rien inventer au-delà.

## 1. Les trois libellés exacts de l'assistant

`src/features/rapprochement/RapprochementPage.tsx` (objet i18n `t.steps`) :

| Étape | FR |
|---|---|
| 1 | Choisir un modèle |
| 2 | Déposer les documents |
| 3 | Vérifier & Télécharger |

(EN : Choose a template · Drop documents · Review & Download — non utilisé pour la landing.)

## 2. La grille de fiabilité — deux vues distinctes

### 2a. Grille des enregistrements (`MultiRecordPreviewGrid.tsx`)

Colonnes fixes, dans l'ordre :

1. `#` — index de ligne (mono, grisé).
2. `Row Key` — clé de ligne (ex. garantie « Décès », « ITT ») + badge `DUP` si doublon.
3. `Conf.` — confiance de la ligne en %, pastille `text-xs font-mono px-1.5 py-0.5 rounded`.
4. … une colonne par champ extrait (en-tête = nom du champ).

Cellule de champ = `ConfidenceCell` : point de couleur (8 px) + valeur, bordure colorée,
fond coloré léger. Survol → tooltip noir (`bg-gray-900 text-white` : confiance %, méthode,
document source, page, position, « Double-click to edit »).

### 2b. Résumé de confiance (étape 3 de RapprochementPage)

Trois cartes côte à côte, nombre + libellé :

| Bande | Libellé FR réel | Couleur |
|---|---|---|
| green (≥ 0.8) | Élevée | vert |
| yellow (≥ 0.5) | Moyenne | ambre |
| red (< 0.5) | Faible | rouge |

⚠️ Les libellés FR réels sont « Élevée / Moyenne / Faible ». « Fiable / À confirmer /
À relire » n'existe pas dans l'app — c'est une copy landing, à assumer comme divergence
ou à backporter dans l'app.

## 3. Seuils — attention, trois échelles distinctes dans le code

| Où | Vert / haut | Ambre / moyen | Rouge / bas |
|---|---|---|---|
| `ConfidenceCell` + `MultiRecordPreviewGrid` (grille d'étape 3) | ≥ 0.8 | ≥ 0.5 | < 0.5 |
| `ConfidenceBadge` (pastille isolée, ailleurs) | ≥ 0.9 | ≥ 0.7 | < 0.7 |
| Seuil de relecture / marqueur [REVIEW] (export) | — | — | 0.6 |

Pour la landing, retenir : les trois niveaux visuels = **0.8 / 0.5** (la grille d'étape 3) ;
le « seuil de relecture » = **0.6**, qui déclenche le marqueur `[REVIEW]` écrit dans le
fichier exporté (pas un composant d'UI — voir §4).

## 4. Le marqueur [REVIEW]

`[REVIEW]` est une valeur sentinelle écrite dans la cellule du fichier Excel exporté quand
une donnée échoue à la relecture (backend `template-merge.service.ts`,
`mapping-validation.service.ts`). Ce n'est pas un badge d'UI. Le micro-visuel de la bande 3
doit donc montrer soit la grille de relecture (cellules colorées + %), soit l'Excel final
avec `[REVIEW]` écrit — pas un badge qui n'existe pas.

## 5. Dropzone — états réels (`RapprochementPage.tsx`, composant `DropZone`)

Base : `relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-10 text-center transition-all cursor-pointer select-none`

| État | Classes Tailwind |
|---|---|
| Repos | `border-border bg-card` + hover `hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 dark:bg-blue-950` |
| Survol (fichier au-dessus) | `border-blue-400 bg-blue-50 dark:bg-blue-950` |
| Désactivé | `border-border bg-background cursor-not-allowed` |

Contenu : icône `Upload` (`h-10 w-10`) + « Glissez vos documents ici » (`font-medium
text-foreground`) + « ou cliquez pour sélectionner vos fichiers PDF » (`text-sm`).

Il n'y a **pas** d'état « fichier déposé » sur la dropzone elle-même : après le dépôt, la
dropzone revient à l'état repos et les fichiers s'affichent dans une liste en dessous
(lignes `rounded-lg bg-background px-3 py-2` : icône `FileText` rouge, nom, taille en Ko,
bouton X de retrait).

## 6. Le bouton de téléchargement (bande 4)

« Vérifier & Télécharger » est le nom de l'**étape** (indicateur d'étapes), pas du bouton.
Le bouton réel d'étape 3 est vert :

`rounded-lg bg-green-600 px-7 py-3 text-sm font-semibold text-white hover:bg-green-700`

Libellé FR réel : **« Télécharger Excel »**. (Dans la grille il y a aussi « Accept all
green » et « Export ».)

## 7. Couleurs de fiabilité (valeurs réelles)

| Niveau | Classe | Hex |
|---|---|---|
| Vert | `bg-green-500` | #22C55E |
| Ambre | `bg-yellow-500` | #EAB308 |
| Rouge | `bg-red-500` | #EF4444 |

Fonds légers : `bg-green-50 dark:bg-green-950` / `bg-yellow-50 dark:bg-yellow-950` /
`bg-red-50 dark:bg-red-950`. Bordures : `border-green-200 dark:border-green-800`, idem
jaune/rouge.

Accent produit : `blue-600` (#2563EB), boutons primaires `bg-blue-600 hover:bg-blue-700`.

Note : `ConfidenceBadge` (pastille isolée) utilise `emerald-500`/`amber-500` au lieu de
`green-500`/`yellow-500` — inconsistance interne à l'app ; retenir green/yellow/red de la
grille d'étape 3.

## 8. Templates réels (hero + bande 1)

Le hero propose « Assureur · Taux · Coût total · Quotité » comme en-têtes de grille Excel.
La réalité (seed `backend/prisma/seed/domain-templates.ts`) :

- « Comparatif Assurance Santé » (matrice) : colonnes `Garantie · Assureur 1 … Assureur 5`,
  lignes = garanties (Hospitalisation, Soins courants, Optique, Dentaire, Autres).
- « Régularisation Charges Copropriété » (colonnes) : `N° Lot · Type de charge ·
  Montant à répartir · Base de répartition · Quote-part TTC · TVA · Récupérable`.

→ Pour un hero fidèle au cas assurance emprunteur (ADP), les **assureurs sont les
colonnes** et les **garanties (Taux, Coût total, Quotité) sont les lignes**. En-têtes à
utiliser : `Garantie · Assureur 1 · Assureur 2 · Assureur 3`, lignes = Taux / Coût total /
Quotité. L'orientation « Assureur · Taux · Coût total · Quotité » mélange une colonne et
des lignes — à corriger.
