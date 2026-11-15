import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toman, useTata } from "@/lib/tata-store";

export const Route = createFileRoute("/site")({ component: Site });

function Site() {
  const workshops = useTata((s) => s.workshops);
  const events = useTata((s) => s.events);
  const reserve = useTata((s) => s.reserve);
  const [pick, setPick] = useState(workshops[0]?.id ?? "");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const send = () => {
    const ok = reserve(pick, name);
    setMsg(ok ? `${name.trim()} ثبت شد. جا برایش نگه داشته می‌شود.` : "این نام تکراری است یا ظرفیت پر شده.");
    if (ok) setName("");
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-lg font-bold">تاتا</p>
            <p className="text-sm text-muted">کافه فرهنگ گاچو · قشم</p>
          </div>
          <Link to="/" className="rounded-full bg-sand px-3 py-2 text-sm">
            میز کار تیم
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl space-y-6 px-4 py-8">
        <section className="rounded-2xl bg-palm p-6 text-sand">
          <p className="text-sm text-sand/80">زیر سقف حصیر نخل</p>
          <h1 className="mt-1 text-2xl font-bold">کارگاه کودک، شیرینی بومی و حصیربافی</h1>
          <p className="mt-3 text-sm leading-relaxed text-sand/90">
            برای بچه‌های ۷ تا ۱۲ سال. هر نوبت حداکثر ۱۰ نفر. بازی‌های دیروز جزیره، بازارچه خوراک بومی، و دست‌هایی که حصیر می‌بافند.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold">نوبت‌های باز</h2>
          {workshops.map((w) => {
            const left = w.capacity - w.enrolled;
            return (
              <article key={w.id} className="rounded-2xl border border-line bg-surface p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="text-sm text-muted">{w.when}</p>
                  </div>
                  <p className="text-sm font-semibold text-palm">{left > 0 ? `${left} جا` : "پر"}</p>
                </div>
                <p className="mt-2 text-sm">{toman(w.price)} برای هر کودک</p>
              </article>
            );
          })}
        </section>

        <section className="rounded-2xl border border-line bg-surface p-4">
          <h2 className="font-semibold">رزرو یک جا</h2>
          <div className="mt-3 grid gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="نام کودک"
              className="rounded-xl border border-line bg-bg px-3 py-3"
            />
            <select
              value={pick}
              onChange={(e) => setPick(e.target.value)}
              className="rounded-xl border border-line bg-bg px-3 py-3"
            >
              {workshops.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.title}
                </option>
              ))}
            </select>
            <button onClick={send} className="rounded-xl bg-clay px-4 py-3 text-surface">
              ثبت رزرو
            </button>
            {msg && <p className="text-sm text-palm">{msg}</p>}
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold">روی صحنه</h2>
          {events.map((e) => (
            <article key={e.id} className="rounded-2xl bg-sand p-4">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-muted">{e.when} · {e.seats - e.booked} جا مانده</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
