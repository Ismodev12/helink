import { useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { cn } from '../../utils/cn';

export const needOptions = [
  { value: 'telecoms-reseaux', label: 'Télécoms & réseaux' },
  { value: 'surete', label: 'Sûreté' },
  { value: 'domotique-gteb', label: 'Domotique & GTEB' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'autre', label: 'Autre demande' },
];

const empty = { name: '', company: '', email: '', phone: '', need: '', message: '', consent: false };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Veuillez indiquer votre nom et prénom.';
  if (!v.email.trim()) e.email = 'Veuillez indiquer votre adresse e-mail.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Cette adresse e-mail ne semble pas valide (ex. nom@entreprise.fr).';
  if (v.phone.trim() && !/^[+\d][\d\s.\-()]{7,}$/.test(v.phone.trim())) e.phone = 'Ce numéro de téléphone ne semble pas valide.';
  if (!v.need) e.need = 'Veuillez choisir un type de besoin.';
  if (v.message.trim().length < 20) e.message = 'Décrivez votre projet en quelques phrases (20 caractères minimum).';
  if (!v.consent) e.consent = 'Votre accord est nécessaire pour traiter votre demande.';
  return e;
}

function Field({ id, label, optional, error, children, hint }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-display text-sm font-semibold text-ink">
        {label} {optional ? <span className="font-normal text-ink-mute">(facultatif)</span> : <span className="text-electric" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs text-ink-mute">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (err) =>
  cn(
    'block w-full rounded-lg border bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-mute/70 transition-colors',
    'focus:border-electric focus:outline-none focus:ring-4 focus:ring-electric/15',
    err ? 'border-red-400' : 'border-line hover:border-night/30'
  );

export default function ContactForm() {
  const [params] = useSearchParams();
  const initialNeed = useMemo(() => {
    const p = params.get('besoin');
    return needOptions.some((o) => o.value === p) ? p : '';
  }, [params]);

  const [values, setValues] = useState({ ...empty, need: initialNeed });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | done
  const formRef = useRef(null);

  const set = (k) => (e) => {
    const v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const next = { ...values, [k]: v };
    setValues(next);
    if (touched[k]) setErrors(validate(next));
  };
  const blur = (k) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    setErrors(validate(values));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, phone: true, need: true, message: true, consent: true });
    if (Object.keys(errs).length) {
      const first = formRef.current?.querySelector(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }
    setStatus('submitting');
    // Frontend uniquement : aucune donnée n'est transmise. À relier à un service d'envoi (Netlify Forms, API…).
    setTimeout(() => setStatus('done'), 700);
  };

  const err = (k) => (touched[k] ? errors[k] : undefined);
  const describedBy = (k, hint) => (err(k) ? `${k}-error` : hint ? `${k}-hint` : undefined);

  if (status === 'done') {
    const needLabel = needOptions.find((o) => o.value === values.need)?.label;
    return (
      <div role="status" className="rounded-2xl border border-line bg-white p-8 sm:p-10">
        <CheckCircle2 className="h-10 w-10 text-electric" aria-hidden="true" />
        <h2 className="mt-5 text-2xl font-bold">Votre demande est prête</h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          Merci {values.name.split(' ')[0]}. Votre message ({needLabel}) a bien été validé sur cette page.
        </p>
        <p className="mt-3 rounded-lg bg-paper p-4 text-sm leading-relaxed text-ink-soft">
          Cette version du site ne transmet pas encore les formulaires. Pour être certain que votre demande nous parvienne, écrivez-nous à{' '}
          <a className="font-semibold text-electric underline-offset-2 hover:underline" href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent('Demande de projet — ' + needLabel)}&body=${encodeURIComponent(values.message)}`}>
            {siteConfig.contact.email}
          </a>{' '}
          ou appelez le <a className="font-semibold text-electric" href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phone}</a>.
        </p>
        <button type="button" onClick={() => { setValues(empty); setTouched({}); setErrors({}); setStatus('idle'); }} className="mt-6 font-display text-sm font-semibold text-night underline underline-offset-4 hover:text-electric">
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-8" aria-describedby="form-required">
      <p id="form-required" className="mb-6 text-sm text-ink-mute">Les champs marqués d'un <span className="text-electric">*</span> sont obligatoires.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Nom et prénom" error={err('name')}>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={set('name')} onBlur={blur('name')} aria-invalid={!!err('name')} aria-describedby={describedBy('name')} className={inputCls(err('name'))} />
        </Field>
        <Field id="company" label="Entreprise" optional>
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={set('company')} className={inputCls()} />
        </Field>
        <Field id="email" label="Adresse e-mail" error={err('email')}>
          <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={set('email')} onBlur={blur('email')} aria-invalid={!!err('email')} aria-describedby={describedBy('email')} className={inputCls(err('email'))} />
        </Field>
        <Field id="phone" label="Téléphone" optional error={err('phone')}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={set('phone')} onBlur={blur('phone')} aria-invalid={!!err('phone')} aria-describedby={describedBy('phone')} className={inputCls(err('phone'))} />
        </Field>
        <div className="sm:col-span-2">
          <Field id="need" label="Type de besoin" error={err('need')}>
            <select id="need" name="need" value={values.need} onChange={set('need')} onBlur={blur('need')} aria-invalid={!!err('need')} aria-describedby={describedBy('need')} className={cn(inputCls(err('need')), 'appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%2344526A%27 stroke-width=%272%27%3E%3Cpath d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10', !values.need && 'text-ink-mute')}>
              <option value="">Sélectionnez un type de besoin</option>
              {needOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id="message" label="Description du projet" error={err('message')} hint="Type de bâtiment, surface, équipements existants, échéance…">
            <textarea id="message" name="message" rows={6} value={values.message} onChange={set('message')} onBlur={blur('message')} aria-invalid={!!err('message')} aria-describedby={describedBy('message', true)} className={cn(inputCls(err('message')), 'resize-y')} />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <div className="flex gap-3">
            <input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={set('consent')} onBlur={blur('consent')} aria-invalid={!!err('consent')} aria-describedby={err('consent') ? 'consent-error' : undefined} className="mt-0.5 h-5 w-5 shrink-0 rounded border-line accent-electric" />
            <label htmlFor="consent" className="text-sm leading-relaxed text-ink-soft">
              J'accepte que les informations saisies soient utilisées pour répondre à ma demande, conformément à la{' '}
              <Link to="/confidentialite" className="font-medium text-electric underline-offset-2 hover:underline">politique de confidentialité</Link>. <span className="text-electric" aria-hidden="true">*</span>
            </label>
          </div>
          {err('consent') && (
            <p id="consent-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700"><AlertCircle className="h-4 w-4" aria-hidden="true" /> {errors.consent}</p>
          )}
        </div>
      </div>
      <div className="mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-mute">Formulaire en version de démonstration : aucune donnée n'est envoyée.</p>
        <button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-lg bg-electric px-7 font-display font-semibold text-white transition-colors hover:bg-electric-600 disabled:opacity-70">
          {status === 'submitting' ? <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Vérification…</> : <>Envoyer ma demande <Send className="h-4 w-4" aria-hidden="true" /></>}
        </button>
      </div>
    </form>
  );
}
