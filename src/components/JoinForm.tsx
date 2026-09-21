'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GOALS, INTERESTS } from '@/lib/content';
import { Button } from './UI';

type Status = 'idle' | 'sending' | 'success' | 'error';

const field =
  'w-full border-b border-forest-700/20 bg-transparent px-0 py-3 text-sm text-forest-800 outline-none transition-colors duration-300 placeholder:text-forest-700/40 focus:border-gold-500';
const label = 'block text-[11px] font-semibold uppercase tracking-widest2 text-forest-700/60';

export function JoinForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [interests, setInterests] = useState<string[]>([]);

  function toggleInterest(value: string) {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('sending');
    setMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          phone: String(data.get('phone') ?? ''),
          goal: String(data.get('goal') ?? ''),
          message: String(data.get('message') ?? ''),
          interests,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error ?? 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setMessage("You're in. Watch your inbox — we'll confirm your first session shortly.");
      form.reset();
      setInterests([]);
    } catch (error) {
      setStatus('error');
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again, or email us directly.',
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Full name *
          </label>
          <input id="name" name="name" required className={field} placeholder="Jordan Reeves" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className={field} placeholder="Optional" />
        </div>
        <div>
          <label className={label} htmlFor="goal">
            What are you building toward?
          </label>
          <select id="goal" name="goal" defaultValue="" className={`${field} cursor-pointer`}>
            <option value="">Select a starting point</option>
            {GOALS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <span className={label}>I&apos;m interested in</span>
        <div className="mt-4 flex flex-wrap gap-3">
          {INTERESTS.map((item) => {
            const active = interests.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                aria-pressed={active}
                className={`border px-4 py-2 text-[11px] font-semibold uppercase tracking-widest2 transition-all duration-300 ${
                  active
                    ? 'border-gold-500 bg-gold-400 text-forest-900'
                    : 'border-forest-700/20 text-forest-700/70 hover:border-gold-400 hover:text-forest-800'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Anything you want us to know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${field} resize-none`}
          placeholder="Where you are now, and where you want to be."
        />
      </div>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Button type="submit" variant="cream" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Become A Member'}
        </Button>
        <p className="text-xs leading-relaxed text-forest-700/55">
          No spam, no pressure. We reply personally within one business day.
        </p>
      </div>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className={`border-l-2 pl-5 text-sm ${
              status === 'success'
                ? 'border-gold-500 text-forest-800'
                : 'border-red-500 text-red-700'
            }`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
