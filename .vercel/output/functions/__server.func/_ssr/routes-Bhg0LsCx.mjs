import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, c as Check, l as CalendarDays, n as Wallet, o as Moon, r as Users, s as Mic, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bhg0LsCx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nowLabel = () => new Intl.DateTimeFormat("fa-IR", {
	hour: "2-digit",
	minute: "2-digit"
}).format(/* @__PURE__ */ new Date());
var uid = () => Math.random().toString(36).slice(2, 9);
var NAMES = [
	"سارا",
	"علی",
	"مریم",
	"حسین",
	"زهرا",
	"یاسین",
	"نرگس",
	"امیر",
	"هستی",
	"کیان",
	"آوا",
	"رادین"
];
function nextKid(used) {
	return NAMES.find((n) => !used.includes(n)) ?? `کودک ${used.length + 1}`;
}
var seedAgents = [
	{
		id: "ops",
		name: "ایجنت عملیات",
		duty: "زمان‌بندی کارگاه، ظرفیت و یادآوری",
		status: "idle",
		lastAction: "ظرفیت جمعه را روی ۱۰ نفر قفل کرد."
	},
	{
		id: "finance",
		name: "ایجنت مالی",
		duty: "ثبت درآمد و هزینه، حتی با صدا",
		status: "idle",
		lastAction: "ورودی ۷۰۰ هزار جمعه را در دفتر نوشت."
	},
	{
		id: "night",
		name: "ایجنت شب",
		duty: "سه پیام قبل از خواب",
		status: "waiting",
		lastAction: "منتظر بستن روز است."
	},
	{
		id: "crm",
		name: "ایجنت ثبت‌نام",
		duty: "پیگیری خانواده‌ها و صندلی‌های خالی",
		status: "idle",
		lastAction: "سه جای خالی کارگاه حصیر را علامت زد."
	},
	{
		id: "plan",
		name: "ایجنت برنامه",
		duty: "جلوگیری از تداخل ایونت و کنسرت",
		status: "idle",
		lastAction: "کنسرت را بعد از کارگاه کودک چید."
	}
];
var useTata = create()(persist((set, get) => ({
	role: "hamzeh",
	agents: seedAgents,
	workshops: [
		{
			id: "w1",
			title: "شیرینی‌پزهای کوچک",
			when: "جمعه ۱۶ تا ۱۸",
			capacity: 10,
			enrolled: 7,
			price: 7e5,
			kids: [
				"سارا",
				"علی",
				"مریم",
				"حسین",
				"زهرا",
				"یاسین",
				"نرگس"
			]
		},
		{
			id: "w2",
			title: "بافت دیروز · حصیر نخل",
			when: "جمعه ۱۶ تا ۱۸",
			capacity: 10,
			enrolled: 6,
			price: 7e5,
			kids: [
				"امیر",
				"هستی",
				"کیان",
				"آوا",
				"رادین",
				"سارا"
			]
		},
		{
			id: "w3",
			title: "بازی‌های دیروز جزیره",
			when: "پنجشنبه ۱۷",
			capacity: 10,
			enrolled: 4,
			price: 5e5,
			kids: [
				"علی",
				"زهرا",
				"یاسین",
				"نرگس"
			]
		},
		{
			id: "w4",
			title: "کلاس برنامه‌نویسی کودک",
			when: "شنبه ۱۰",
			capacity: 8,
			enrolled: 3,
			price: 9e5,
			kids: [
				"حسین",
				"آوا",
				"رادین"
			]
		}
	],
	events: [
		{
			id: "e1",
			title: "کنسرت فضای باز زیر سقف حصیر",
			when: "جمعه ۲۱",
			seats: 40,
			booked: 18,
			kind: "concert"
		},
		{
			id: "e2",
			title: "همنشینی ریش‌سفیدان",
			when: "چهارشنبه عصر",
			seats: 12,
			booked: 9,
			kind: "gathering"
		},
		{
			id: "e3",
			title: "بازارچه کودک · صنایع دستی و خوراک بومی",
			when: "جمعه ۱۸:۳۰",
			seats: 20,
			booked: 11,
			kind: "bazaar"
		}
	],
	txs: [{
		id: "t1",
		kind: "in",
		amount: 49e5,
		note: "پیش‌ثبت‌نام شیرینی و حصیر",
		at: "امروز ۰۹:۲۰"
	}, {
		id: "t2",
		kind: "out",
		amount: 85e4,
		note: "خرید خرما و کنجد کارگاه",
		at: "امروز ۱۱:۰۵"
	}],
	staff: [
		{
			id: "s1",
			name: "لیشو",
			role: "هماهنگی کافه و والدین",
			done: 6,
			open: 1,
			note: "لیست مواد شیرینی آماده است."
		},
		{
			id: "s2",
			name: "پسر ۱۷ ساله",
			role: "فیلم و ریلز",
			done: 3,
			open: 2,
			note: "کاور جمعه هنوز نهایی نشده."
		},
		{
			id: "s3",
			name: "مريم · حصیرباف",
			role: "مربی محلی",
			done: 4,
			open: 0,
			note: "برگ نخل خیس خورده."
		},
		{
			id: "s4",
			name: "فاطمه · شیرینی",
			role: "مربی خوراک بومی",
			done: 5,
			open: 1,
			note: "رنگینک خرما برای ۱۰ نفر."
		}
	],
	approvals: [{
		id: "a1",
		title: "خرید برگ نخل اضافه",
		detail: "برای دو کارگاه پشت‌سرهم",
		amount: 8e5,
		status: "pending"
	}, {
		id: "a2",
		title: "جابه‌جایی ساعت کنسرت",
		detail: "از ۲۰:۳۰ به ۲۱:۰۰ به‌خاطر کارگاه کودک",
		status: "pending"
	}],
	logs: [{
		id: "l1",
		text: "ایجنت برنامه تداخل جمعه را جدا کرد: کارگاه تا ۱۸، بازارچه از ۱۸:۳۰.",
		at: "۰۸:۴۰"
	}],
	nightly: null,
	setRole: (role) => set({ role }),
	addTx: (kind, amount, note) => set((s) => ({
		txs: [{
			id: uid(),
			kind,
			amount,
			note,
			at: `امروز ${nowLabel()}`
		}, ...s.txs],
		logs: [{
			id: uid(),
			text: `ایجنت مالی ${kind === "in" ? "درآمد" : "هزینه"} را ثبت کرد: ${note}`,
			at: nowLabel()
		}, ...s.logs].slice(0, 12)
	})),
	decide: (id, status) => set((s) => ({
		approvals: s.approvals.map((a) => a.id === id ? {
			...a,
			status
		} : a),
		logs: [{
			id: uid(),
			text: status === "approved" ? "حمزه یک تصمیم حساس را تأیید کرد." : "یک درخواست حساس رد شد.",
			at: nowLabel()
		}, ...s.logs].slice(0, 12)
	})),
	bumpEnroll: (id) => set((s) => ({ workshops: s.workshops.map((w) => {
		if (w.id !== id || w.enrolled >= w.capacity) return w;
		const kids = w.kids ?? [];
		const name = nextKid(kids);
		return {
			...w,
			kids: [...kids, name],
			enrolled: w.enrolled + 1
		};
	}) })),
	buildNightly: () => {
		const s = get();
		const income = s.txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
		const cost = s.txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);
		const seatsLeft = s.workshops.reduce((a, w) => a + (w.capacity - w.enrolled), 0);
		const openTasks = s.staff.reduce((a, p) => a + p.open, 0);
		const pending = s.approvals.filter((a) => a.status === "pending").length;
		set({
			nightly: {
				good: income > cost ? `صندوق امروز مثبت است و کارگاه جمعه ${s.workshops[0].enrolled} نفر از ۱۰ را پر کرده.` : "تیم امروز کارگاه را سرپا نگه داشت، حتی اگر حاشیه مالی تنگ بود.",
				bad: seatsLeft > 6 ? `${seatsLeft} صندلی کودک هنوز خالی است و ${openTasks} کار باز روی میز کارکنان مانده.` : pending ? `${pending} تصمیم حساس هنوز منتظر تأیید حمزه است.` : "ضعف جدی ثبت نشده؛ فقط پیگیری جزئیات صحنه مانده.",
				next: seatsLeft > 0 ? "فردا ایجنت ثبت‌نام سه خانواده نزدیک گاچو را برای جای خالی جمعه صدا بزند و بنر را دوباره بفرستد." : "فردا تمرکز روی کیفیت حصیر و شیرینی باشد، نه جذب نفر جدید.",
				at: nowLabel()
			},
			agents: s.agents.map((a) => a.id === "night" ? {
				...a,
				status: "idle",
				lastAction: "سه پیام شب را نوشت."
			} : a),
			logs: [{
				id: uid(),
				text: "ایجنت شب سه پیام قبل از خواب را آماده کرد.",
				at: nowLabel()
			}, ...s.logs].slice(0, 12)
		});
	},
	runAgents: () => {
		const s = get();
		const target = s.workshops.find((w) => w.enrolled < w.capacity);
		const kid = target ? nextKid(target.kids ?? []) : null;
		const workshops = target ? s.workshops.map((w) => w.id === target.id ? {
			...w,
			enrolled: w.enrolled + 1,
			kids: [...w.kids ?? [], kid]
		} : w) : s.workshops;
		const event = s.events.find((e) => e.booked < e.seats);
		const events = event ? s.events.map((e) => e.id === event.id ? {
			...e,
			booked: e.booked + 1
		} : e) : s.events;
		const staff = s.staff.map((p) => p.open > 0 ? {
			...p,
			open: p.open - 1,
			done: p.done + 1
		} : p);
		const txs = target ? [{
			id: uid(),
			kind: "in",
			amount: target.price,
			note: `ثبت‌نام ${kid} در ${target.title}`,
			at: `امروز ${nowLabel()}`
		}, ...s.txs] : s.txs;
		const income = txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
		const cost = txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);
		const seatsLeft = workshops.reduce((a, w) => a + (w.capacity - w.enrolled), 0);
		const openTasks = staff.reduce((a, p) => a + p.open, 0);
		const pending = s.approvals.filter((a) => a.status === "pending").length;
		set({
			workshops,
			events,
			staff,
			txs,
			nightly: {
				good: income > cost ? `صندوق مثبت ماند${kid ? ` و ${kid} به کارگاه اضافه شد` : ""}.` : "کارگاه سرپا ماند، ولی حاشیه مالی تنگ است.",
				bad: seatsLeft > 6 ? `${seatsLeft} صندلی هنوز خالی است و ${openTasks} کار باز مانده.` : pending ? `${pending} تصمیم هنوز منتظر حمزه است.` : "ضعف جدی ثبت نشد.",
				next: seatsLeft > 0 ? "فردا ایجنت ثبت‌نام خانواده‌های گاچو را برای جای خالی صدا بزند." : "فردا تمرکز روی کیفیت حصیر و شیرینی باشد.",
				at: nowLabel()
			},
			agents: s.agents.map((a) => ({
				...a,
				status: "idle",
				lastAction: a.id === "ops" ? kid ? `${kid} در «${target.title}» نشست.` : "ظرفیت کارگاه‌ها پر است." : a.id === "crm" ? event ? `یک جا در «${event.title}» بسته شد.` : "ایونت‌ها پر است." : a.id === "finance" ? kid ? `${toman(target.price)} بابت ${kid} در دفتر نشست.` : "درآمد تازه‌ای نبود." : a.id === "plan" ? "تقویم فردا بدون تداخل ماند." : "سه پیام شب با داده همین چرخه نوشته شد."
			})),
			logs: [{
				id: uid(),
				text: kid ? `چرخه ایجنت‌ها: ${kid} ثبت شد، درآمد نشست، یک کار بسته شد، پیام شب به‌روز شد.` : "چرخه ایجنت‌ها: ظرفیت پر است؛ پیام شب تازه شد.",
				at: nowLabel()
			}, ...s.logs].slice(0, 12)
		});
	}
}), {
	name: "tata-gachu",
	version: 3
}));
function toman(n) {
	return new Intl.NumberFormat("fa-IR").format(n) + " تومان";
}
function parseVoice(raw) {
	const text = raw.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).trim();
	const kind = /هزینه|خرج|خرید/.test(text) ? "out" : /درآمد|واریز|فروش|ثبت.?نام|ورودی/.test(text) ? "in" : null;
	if (!kind) return null;
	const m = text.match(/(\d+(?:[.,]\d+)?)\s*(میلیون|هزار)?/);
	if (!m) return null;
	let amount = Number(m[1].replace(",", "."));
	if (m[2] === "میلیون") amount *= 1e6;
	else if (m[2] === "هزار") amount *= 1e3;
	else if (amount < 1e4) amount *= 1e3;
	const note = text.replace(m[0], "").replace(/هزینه|خرج|خرید|درآمد|واریز|فروش|ثبت نام|ورودی/g, "").trim() || "ثبت صوتی";
	return {
		kind,
		amount: Math.round(amount),
		note
	};
}
var NAV = [
	{
		id: "home",
		label: "نگاه امروز"
	},
	{
		id: "work",
		label: "کارگاه‌ها"
	},
	{
		id: "events",
		label: "ایونت و کنسرت"
	},
	{
		id: "money",
		label: "حسابداری"
	},
	{
		id: "people",
		label: "کارکنان"
	},
	{
		id: "night",
		label: "پیام شب"
	}
];
var ROLES = [
	{
		id: "hamzeh",
		label: "حمزه",
		hint: "اشراف کامل"
	},
	{
		id: "me",
		label: "مربی دیجیتال",
		hint: "محتوا و آموزش"
	},
	{
		id: "staff",
		label: "کارمند",
		hint: "دسترسی محدود"
	}
];
function Home() {
	const role = useTata((s) => s.role);
	const setRole = useTata((s) => s.setRole);
	const [tab, setTab] = (0, import_react.useState)("home");
	const visible = NAV.filter((n) => role === "staff" ? n.id !== "money" && n.id !== "people" : true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 place-items-center rounded-2xl bg-palm text-sand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 18 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg font-bold leading-tight",
						children: "تاتا"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "کافه فرهنگ گاچو · ایجنت‌ها کار را پیش می‌برند"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setRole(r.id);
							if (r.id === "staff" && (tab === "money" || tab === "people")) setTab("home");
						},
						className: `rounded-full px-3 py-2 text-sm ${role === r.id ? "bg-palm text-sand" : "bg-sand text-ink"}`,
						children: [r.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-1 opacity-70",
							children: ["· ", r.hint]
						})]
					}, r.id))
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-4 md:grid-cols-[180px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex gap-2 overflow-x-auto md:flex-col",
				children: visible.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setTab(n.id),
					className: `shrink-0 rounded-xl px-3 py-3 text-right text-sm ${tab === n.id ? "bg-palm text-sand" : "bg-surface text-ink"}`,
					children: n.label
				}, n.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 pb-10",
				children: [
					tab === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePanel, {}),
					tab === "work" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkPanel, {}),
					tab === "events" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsPanel, {}),
					tab === "money" && role !== "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoneyPanel, { limited: role === "me" }),
					tab === "people" && role !== "staff" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeoplePanel, { full: role === "hamzeh" }),
					tab === "night" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NightPanel, {})
				]
			})]
		})]
	});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "صندلی کودک",
						value: `${filled} از ${cap}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "خالص صندوق",
						value: role === "staff" ? "پنهان" : toman(income - cost)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "منتظر تأیید حمزه",
						value: String(approvals.filter((a) => a.status === "pending").length)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "ایجنت‌های فعال"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: runAgents,
						className: "rounded-full bg-clay px-4 py-2 text-sm text-surface",
						children: "اجرای چرخه امروز"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: agents.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-sand p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: a.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-palm",
									children: a.status === "waiting" ? "منتظر شب" : "آماده"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: a.duty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm",
								children: a.lastAction
							})
						]
					}, a.id))
				})]
			}),
			role === "hamzeh" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Approvals, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-line bg-surface p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-2 font-semibold",
					children: "دفتر ایجنت‌ها"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: logs.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3 border-b border-line pb-2 last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-muted",
							children: l.at
						})]
					}, l.id))
				})]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-line bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-xl font-bold",
			children: value
		})]
	});
}
function Approvals() {
	const approvals = useTata((s) => s.approvals);
	const decide = useTata((s) => s.decide);
	const pending = approvals.filter((a) => a.status === "pending");
	if (!pending.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "rounded-2xl bg-palm-soft p-4 text-sm text-palm",
		children: "تصمیم حساسی روی میز حمزه نیست. ایجنت‌ها بقیه کار را خودشان جلو می‌برند."
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "space-y-2",
		children: pending.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-clay-soft p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold",
				children: a.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [a.detail, a.amount ? ` · ${toman(a.amount)}` : ""]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => decide(a.id, "approved"),
					className: "inline-flex items-center gap-1 rounded-full bg-palm px-3 py-2 text-sm text-sand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 16 }), " تأیید"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => decide(a.id, "rejected"),
					className: "inline-flex items-center gap-1 rounded-full bg-surface px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 16 }), " رد"]
				})]
			})]
		}, a.id))
	});
}
function WorkPanel() {
	const workshops = useTata((s) => s.workshops);
	const bump = useTata((s) => s.bumpEnroll);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "سقف هر نوبت ۱۰ نفر. ایجنت ثبت‌نام جای خالی را خودش پیگیری می‌کند."
		}), workshops.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold",
						children: w.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							w.when,
							" · ",
							toman(w.price),
							" برای هر کودک"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm font-semibold text-palm",
						children: [
							w.enrolled,
							" / ",
							w.capacity
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: (w.kids ?? []).join("، ") || "هنوز اسمی ثبت نشده"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 overflow-hidden rounded-full bg-sand",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-palm",
						style: { width: `${w.enrolled / w.capacity * 100}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: w.enrolled >= w.capacity,
					onClick: () => bump(w.id),
					className: "mt-3 rounded-full bg-sand px-3 py-2 text-sm disabled:opacity-40",
					children: "ثبت یک کودک"
				})
			]
		}, w.id))]
	});
}
function EventsPanel() {
	const events = useTata((s) => s.events);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3",
		children: events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-palm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						children: e.when
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-semibold",
					children: e.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-muted",
					children: [
						e.booked,
						" از ",
						e.seats,
						" جا گرفته شده"
					]
				})
			]
		}, e.id))
	});
}
function MoneyPanel({ limited }) {
	const txs = useTata((s) => s.txs);
	const addTx = useTata((s) => s.addTx);
	const [text, setText] = (0, import_react.useState)("درآمد ۷۰۰ هزار کارگاه جمعه");
	const [heard, setHeard] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const income = txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
	const cost = txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);
	const submit = (raw) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			limited && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-sand p-3 text-sm",
				children: "نمای مربی دیجیتال: دفتر را می‌بینی، تأیید خرج‌های بزرگ با حمزه است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "درآمد",
						value: toman(income)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "هزینه",
						value: toman(cost)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "خالص",
						value: toman(income - cost)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl border border-line bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mb-2 flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { size: 18 }), " فرمان صوتی دفتر"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: text,
								onChange: (e) => setText(e.target.value),
								className: "min-w-0 flex-1 rounded-xl border border-line bg-bg px-3 py-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => submit(text),
								className: "rounded-xl bg-palm px-4 py-3 text-sand",
								children: "ثبت"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: listen,
								className: "inline-flex items-center justify-center gap-2 rounded-xl bg-clay px-4 py-3 text-surface",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { size: 16 }), " بگو"]
							})
						]
					}),
					heard && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: ["شنیدم: ", heard]
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-clay",
						children: err
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: txs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-xl bg-surface px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.note }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: t.kind === "in" ? "text-palm" : "text-clay",
						children: [
							t.kind === "in" ? "+" : "−",
							" ",
							toman(t.amount)
						]
					})]
				}, t.id))
			})
		]
	});
}
function PeoplePanel({ full }) {
	const staff = useTata((s) => s.staff);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { size: 16 }), full ? "حمزه همه را می‌بیند. ایجنت عملیات کار باز را می‌بندد." : "خلاصه تیم، بدون جزئیات حساس."]
		}), staff.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-2xl border border-line bg-surface p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold",
					children: p.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: p.role
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm",
					children: [
						p.done,
						" انجام · ",
						p.open,
						" باز"
					]
				})]
			}), full && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm",
				children: p.note
			})]
		}, p.id))]
	});
}
function NightPanel() {
	const nightly = useTata((s) => s.nightly);
	const build = useTata((s) => s.buildNightly);
	const lines = (0, import_react.useMemo)(() => nightly ? [
		{
			t: "درست انجام شد",
			d: nightly.good
		},
		{
			t: "ایراد داشت",
			d: nightly.bad
		},
		{
			t: "فردا چه کنیم",
			d: nightly.next
		}
	] : [], [nightly]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl border border-line bg-ink p-5 text-sand",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "flex items-center gap-2 font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { size: 18 }), " سه پیام قبل از خواب"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: build,
					className: "rounded-full bg-clay px-4 py-2 text-sm text-surface",
					children: "بستن امروز"
				})]
			}),
			!nightly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sand/80",
				children: "ایجنت شب هنوز روز را نبسته. دکمه را بزن تا از داده واقعی کارگاه، صندوق و کارهای باز سه جمله بسازد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: lines.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl bg-white/10 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-sand/70",
						children: [
							i + 1,
							". ",
							l.t
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: l.d
					})]
				}, l.t))
			}),
			nightly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-sand/60",
				children: ["نوشته‌شده ساعت ", nightly.at]
			})
		]
	});
}
//#endregion
export { Home as component };
