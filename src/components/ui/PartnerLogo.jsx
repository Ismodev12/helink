import { withBase } from '../../config/imagePaths';

/** Affiche le logo officiel s'il est fourni, sinon une présentation typographique sobre (pas de faux logo). */
export default function PartnerLogo({ partner }) {
  return (
    <li className="flex min-h-[7rem] flex-col items-center justify-center rounded-xl border border-line bg-white px-4 py-5 text-center transition-colors hover:border-electric/40">
      {partner.logo ? (
        <img src={withBase(partner.logo)} alt={partner.name} loading="lazy" width="150" height="150" className="h-24 w-24 object-contain sm:h-28 sm:w-28" />
      ) : (
        <span className="font-display text-lg font-bold tracking-tight text-night">{partner.name}</span>
      )}
      {partner.domain && <span className="mt-1.5 text-xs text-ink-mute">{partner.domain}</span>}
    </li>
  );
}
