import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  Check,
  Mic,
  Moon,
  Sparkles,
  Users,
  Wallet,
  X,
} from "lucide-react";
import {
  parseVoice,
  toman,
  useTata,
  type Role,
} from "@/lib/tata-store";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  { id: "home", label: "نگاه امروز" },
  { id: "work", label: "کارگاه‌ها" },
  { id: "events", label: "ایونت و کنسرت" },
  { id: "money", label: "حسابداری" },
  { id: "people", label: "کارکنان" },
  { id: "night", label: "پیام شب" },
] as const;

type Tab = (typeof NAV)[number]["id"];

const ROLES: { id: Role; label: string; hint: string }[] = [
  { id: "hamzeh", label: "حمزه", hint: "اشراف کامل" },
  { id: "me", label: "مربی دیجیتال", hint: "محتوا و آموزش" },
  { id: "staff", label: "کارمند", hint: "دسترسی محدود" },
];

function Home() {
  const role = useTata((s) => s.role);
  const setRole = useTata((s) => s.setRole);
  const [tab, setTab] = useState<Tab>("home");
  const visible = NAV.filter((n) => (role === "staff" ? n.id !== "money" && n.id !== "people" : true));

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-palm text-sand">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-lg font-bold leading-tight">تاتا</p>
              <p className="text-sm text-muted">کافه فرهنگ گاچو · ایجنت‌ها کار را پیش می‌برند</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <button
                key={r.id}
                onClick={() => {
                  setRole(r.id);
                  if (r.id === "staff" && (tab === "money" || tab === "people")) setTab("home");
                }}
                className={`rounded-full px-3 py-2 text-sm ${
                  role === r.id ? "bg-palm text-sand" : "bg-sand text-ink"
                }`}
              >
                {r.label}
                <span className="mr-1 opacity-70">· {r.hint}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-4 md:grid-cols-[180px_1fr]">
        <nav className="flex gap-2 overflow-x-auto md:flex-col">
          {visible.map((n) => (
            <button
              key={n.id}
              onClick={() => setTab(n.id)}
              className={`shrink-0 rounded-xl px-3 py-3 text-right text-sm ${
                tab === n.id ? "bg-palm text-sand" : "bg-surface text-ink"
              }`}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <main className="min-w-0 pb-10">
          {tab === "home" && <HomePanel />}
          {tab === "work" && <WorkPanel />}
          {tab === "events" && <EventsPanel />}
          {tab === "money" && role !== "staff" && <MoneyPanel limited={role === "me"} />}
          {tab === "people" && role !== "staff" && <PeoplePanel full={role === "hamzeh"} />}
          {tab === "night" && <NightPanel />}
        </main>
      </div>
    </div>
  );
}

function HomePanel() {
  const agents = useTata((s) => s.agents);
  const logs = useTata((s) => s.logs);
  const runAgents = useTata((s) => s.runAgents);
  const approvals = useTata((s) => s.approvals);
  const role = useTata((s) => s.role);
  const workshops = useTata((s) => s.workshops);
  const txs = useTata((s) => s.txs);
  const income = txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
  const cost = txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);
  const filled = workshops.reduce((a, w) => a + w.enrolled, 0);
  const cap = workshops.reduce((a, w) => a + w.capacity, 0);

  return (
    <div className="space-y-4">
      <section className="grid gap-3 sm:grid-cols-3">
        <Stat label="صندلی کودک" value={`${filled} از ${cap}`} />
        <Stat label="خالص صندوق" value={role === "staff" ? "پنهان" : toman(income - cost)} />
        <Stat
          label="منتظر تأیید حمزه"
          value={String(approvals.filter((a) => a.status === "pending").length)}
        />
      </section>

      <section className="rounded-2xl border border-line bg-surface p-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="font-semibold">ایجنت‌های فعال</h2>
          <button onClick={runAgents} className="rounded-full bg-clay px-4 py-2 text-sm text-surface">
            اجرای چرخه امروز
          </button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {agents.map((a) => (
            <article key={a.id} className="rounded-xl bg-sand p-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold">{a.name}</p>
                <span className="text-xs text-palm">
                  {a.status === "waiting" ? "منتظر شب" : "آماده"}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{a.duty}</p>
              <p className="mt-2 text-sm">{a.lastAction}</p>
            </article>
          ))}
        </div>
      </section>

      {role === "hamzeh" && <Approvals />}

      <section className="rounded-2xl border border-line bg-surface p-4">
        <h2 className="mb-2 font-semibold">دفتر ایجنت‌ها</h2>
        <ul className="space-y-2 text-sm">
          {logs.map((l) => (
            <li key={l.id} className="flex justify-between gap-3 border-b border-line pb-2 last:border-0">
              <span>{l.text}</span>
              <span className="shrink-0 text-muted">{l.at}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
    </div>
  );
}

function Approvals() {
  const approvals = useTata((s) => s.approvals);
  const decide = useTata((s) => s.decide);
  const pending = approvals.filter((a) => a.status === "pending");
  if (!pending.length) {
    return (
      <p className="rounded-2xl bg-palm-soft p-4 text-sm text-palm">
        تصمیم حساسی روی میز حمزه نیست. ایجنت‌ها بقیه کار را خودشان جلو می‌برند.
      </p>
    );
  }
  return (
    <section className="space-y-2">
      {pending.map((a) => (
        <article key={a.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-clay-soft p-4">
          <div>
            <p className="font-semibold">{a.title}</p>
            <p className="text-sm text-muted">
              {a.detail}
              {a.amount ? ` · ${toman(a.amount)}` : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => decide(a.id, "approved")} className="inline-flex items-center gap-1 rounded-full bg-palm px-3 py-2 text-sm text-sand">
              <Check size={16} /> تأیید
            </button>
            <button onClick={() => decide(a.id, "rejected")} className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-2 text-sm">
              <X size={16} /> رد
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

function WorkPanel() {
  const workshops = useTata((s) => s.workshops);
  const bump = useTata((s) => s.bumpEnroll);
  return (
    <div className="grid gap-3">
      <p className="text-sm text-muted">سقف هر نوبت ۱۰ نفر. ایجنت ثبت‌نام جای خالی را خودش پیگیری می‌کند.</p>
      {workshops.map((w) => (
        <article key={w.id} className="rounded-2xl border border-line bg-surface p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold">{w.title}</h3>
              <p className="text-sm text-muted">{w.when} · {toman(w.price)} برای هر کودک</p>
            </div>
            <p className="text-sm font-semibold text-palm">{w.enrolled} / {w.capacity}</p>
          </div>
          <p className="mt-2 text-sm text-muted">{(w.kids ?? []).join("، ") || "هنوز اسمی ثبت نشده"}</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-sand">
            <div className="h-full bg-palm" style={{ width: `${(w.enrolled / w.capacity) * 100}%` }} />
          </div>
          <button
            disabled={w.enrolled >= w.capacity}
            onClick={() => bump(w.id)}
            className="mt-3 rounded-full bg-sand px-3 py-2 text-sm disabled:opacity-40"
          >
            ثبت یک کودک
          </button>
        </article>
      ))}
    </div>
  );
}

function EventsPanel() {
  const events = useTata((s) => s.events);
  return (
    <div className="grid gap-3">
      {events.map((e) => (
        <article key={e.id} className="rounded-2xl border border-line bg-surface p-4">
          <div className="flex items-center gap-2 text-palm">
            <CalendarDays size={16} />
            <span className="text-sm">{e.when}</span>
          </div>
          <h3 className="mt-1 font-semibold">{e.title}</h3>
          <p className="mt-2 text-sm text-muted">{e.booked} از {e.seats} جا گرفته شده</p>
        </article>
      ))}
    </div>
  );
}

function MoneyPanel({ limited }: { limited: boolean }) {
  const txs = useTata((s) => s.txs);
  const addTx = useTata((s) => s.addTx);
  const [text, setText] = useState("درآمد ۷۰۰ هزار کارگاه جمعه");
  const [heard, setHeard] = useState("");
  const [err, setErr] = useState("");

  const income = txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
  const cost = txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);

  const submit = (raw: string) => {
    const parsed = parseVoice(raw);
    if (!parsed) {
      setErr("بگو مثلاً: هزینه ۸۰۰ هزار برگ نخل  یا  درآمد ۷۰۰ هزار کارگاه");
      return;
    }
    setErr("");
    addTx(parsed.kind, parsed.amount, parsed.note);
  };

  const listen = () => {
    const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Ctor) {
      setErr("این مرورگر صدا را نمی‌شنود. جمله را بنویس.");
      return;
    }
    const rec = new Ctor();
    rec.lang = "fa-IR";
    rec.onresult = (ev) => {
      const said = ev.results[0]?.[0]?.transcript ?? "";
      setHeard(said);
      setText(said);
      submit(said);
    };
    rec.onerror = () => setErr("صدا قطع شد. دوباره بگو یا تایپ کن.");
    rec.start();
  };

  return (
    <div className="space-y-4">
      {limited && (
        <p className="rounded-xl bg-sand p-3 text-sm">نمای مربی دیجیتال: دفتر را می‌بینی، تأیید خرج‌های بزرگ با حمزه است.</p>
      )}
      <section className="grid gap-3 sm:grid-cols-3">
        <Stat label="درآمد" value={toman(income)} />
        <Stat label="هزینه" value={toman(cost)} />
        <Stat label="خالص" value={toman(income - cost)} />
      </section>
      <section className="rounded-2xl border border-line bg-surface p-4">
        <h2 className="mb-2 flex items-center gap-2 font-semibold">
          <Wallet size={18} /> فرمان صوتی دفتر
        </h2>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-w-0 flex-1 rounded-xl border border-line bg-bg px-3 py-3"
          />
          <button onClick={() => submit(text)} className="rounded-xl bg-palm px-4 py-3 text-sand">ثبت</button>
          <button onClick={listen} className="inline-flex items-center justify-center gap-2 rounded-xl bg-clay px-4 py-3 text-surface">
            <Mic size={16} /> بگو
          </button>
        </div>
        {heard && <p className="mt-2 text-sm text-muted">شنیدم: {heard}</p>}
        {err && <p className="mt-2 text-sm text-clay">{err}</p>}
      </section>
      <ul className="space-y-2">
        {txs.map((t) => (
          <li key={t.id} className="flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm">
            <span>{t.note}</span>
            <span className={t.kind === "in" ? "text-palm" : "text-clay"}>
              {t.kind === "in" ? "+" : "−"} {toman(t.amount)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PeoplePanel({ full }: { full: boolean }) {
  const staff = useTata((s) => s.staff);
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-sm text-muted">
        <Users size={16} />
        {full ? "حمزه همه را می‌بیند. ایجنت عملیات کار باز را می‌بندد." : "خلاصه تیم، بدون جزئیات حساس."}
      </p>
      {staff.map((p) => (
        <article key={p.id} className="rounded-2xl border border-line bg-surface p-4">
          <div className="flex justify-between gap-2">
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-muted">{p.role}</p>
            </div>
            <p className="text-sm">{p.done} انجام · {p.open} باز</p>
          </div>
          {full && <p className="mt-2 text-sm">{p.note}</p>}
        </article>
      ))}
    </div>
  );
}

function NightPanel() {
  const nightly = useTata((s) => s.nightly);
  const build = useTata((s) => s.buildNightly);
  const lines = useMemo(
    () =>
      nightly
        ? [
            { t: "درست انجام شد", d: nightly.good },
            { t: "ایراد داشت", d: nightly.bad },
            { t: "فردا چه کنیم", d: nightly.next },
          ]
        : [],
    [nightly],
  );

  return (
    <section className="rounded-2xl border border-line bg-ink p-5 text-sand">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 font-semibold">
          <Moon size={18} /> سه پیام قبل از خواب
        </h2>
        <button onClick={build} className="rounded-full bg-clay px-4 py-2 text-sm text-surface">
          بستن امروز
        </button>
      </div>
      {!nightly && (
        <p className="text-sm text-sand/80">
          ایجنت شب هنوز روز را نبسته. دکمه را بزن تا از داده واقعی کارگاه، صندوق و کارهای باز سه جمله بسازد.
        </p>
      )}
      <ol className="space-y-3">
        {lines.map((l, i) => (
          <li key={l.t} className="rounded-xl bg-white/10 p-4">
            <p className="text-xs text-sand/70">{i + 1}. {l.t}</p>
            <p className="mt-1">{l.d}</p>
          </li>
        ))}
      </ol>
      {nightly && <p className="mt-3 text-xs text-sand/60">نوشته‌شده ساعت {nightly.at}</p>}
    </section>
  );
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  }
}

type SpeechRec = {
  lang: string;
  start: () => void;
  onresult: ((ev: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: (() => void) | null;
};
