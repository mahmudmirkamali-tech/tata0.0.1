import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Sparkles, c as Check, l as CalendarDays, n as Wallet, o as Moon, r as Users, s as Mic, t as X } from "../_libs/lucide-react.mjs";
import { n as toman, r as useTata, t as parseVoice } from "./tata-store-D_je3YFC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CORXYuo9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
		id: "review",
		label: "ارزیابی"
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
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/site",
						className: "rounded-full bg-clay px-3 py-2 text-sm text-surface",
						children: "سایت مشتری"
					}), ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setRole(r.id);
							if (r.id === "staff" && (tab === "money" || tab === "people")) setTab("home");
						},
						className: `rounded-full px-3 py-2 text-sm ${role === r.id ? "bg-palm text-sand" : "bg-sand text-ink"}`,
						children: [r.label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mr-1 opacity-70",
							children: ["· ", r.hint]
						})]
					}, r.id))]
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
					tab === "review" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewPanel, { hideMoney: role === "staff" }),
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
function ReviewPanel({ hideMoney }) {
	const workshops = useTata((s) => s.workshops);
	const events = useTata((s) => s.events);
	const txs = useTata((s) => s.txs);
	const staff = useTata((s) => s.staff);
	const approvals = useTata((s) => s.approvals);
	const nightly = useTata((s) => s.nightly);
	const filled = workshops.reduce((a, w) => a + w.enrolled, 0);
	const cap = workshops.reduce((a, w) => a + w.capacity, 0);
	const fill = cap ? filled / cap : 0;
	const income = txs.filter((t) => t.kind === "in").reduce((a, t) => a + t.amount, 0);
	const cost = txs.filter((t) => t.kind === "out").reduce((a, t) => a + t.amount, 0);
	const openTasks = staff.reduce((a, p) => a + p.open, 0);
	const pending = approvals.filter((a) => a.status === "pending").length;
	const booked = events.reduce((a, e) => a + e.booked, 0);
	const seats = events.reduce((a, e) => a + e.seats, 0);
	const rows = [
		fill >= .6 ? {
			tone: "good",
			title: "جذب کودک",
			detail: `${filled} از ${cap} صندلی کارگاه پر است.`
		} : {
			tone: "bad",
			title: "جذب کودک",
			detail: `فقط ${filled} از ${cap} صندلی پر شده. جای خالی جمعه باید پیگیری شود.`
		},
		hideMoney ? income > cost ? {
			tone: "good",
			title: "صندوق",
			detail: "دخل از خرج جلوتر است."
		} : {
			tone: "bad",
			title: "صندوق",
			detail: "خرج از دخل جلو زده."
		} : income > cost ? {
			tone: "good",
			title: "صندوق",
			detail: `خالص ${toman(income - cost)} مثبت است.`
		} : {
			tone: "bad",
			title: "صندوق",
			detail: `خالص ${toman(cost - income)} منفی است.`
		},
		openTasks === 0 ? {
			tone: "good",
			title: "کار تیم",
			detail: "کار باز روی میز کارکنان نمانده."
		} : {
			tone: "bad",
			title: "کار تیم",
			detail: `${openTasks} کار هنوز باز است.`
		},
		pending === 0 ? {
			tone: "good",
			title: "تصمیم‌ها",
			detail: "چیزی منتظر تأیید حمزه نیست."
		} : {
			tone: "bad",
			title: "تصمیم‌ها",
			detail: `${pending} مورد حساس معطل مانده و اجرا را کند می‌کند.`
		},
		booked / seats >= .4 ? {
			tone: "good",
			title: "صحنه و ایونت",
			detail: `${booked} جا از ${seats} گرفته شده.`
		} : {
			tone: "bad",
			title: "صحنه و ایونت",
			detail: "کنسرت و بازارچه هنوز خلوت‌اند."
		},
		nightly ? {
			tone: "good",
			title: "بستن روز",
			detail: "پیام شب نوشته شده و روند ارزیابی شده."
		} : {
			tone: "bad",
			title: "بستن روز",
			detail: "هنوز روز بسته نشده؛ سه پیام شب جا مانده."
		}
	];
	const score = Math.round(rows.filter((r) => r.tone === "good").length / rows.length * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "rounded-2xl bg-palm p-5 text-sand",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-sand/80",
					children: "امتیاز روند امروز"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-3xl font-bold",
					children: score
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-sand/80",
					children: "از ۱۰۰، بر اساس ظرفیت، صندوق، تیم، تصمیم‌ها و صحنه"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: `rounded-2xl border border-line p-4 ${r.tone === "good" ? "bg-palm-soft" : "bg-clay-soft"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: `text-sm font-semibold ${r.tone === "good" ? "text-palm" : "text-clay"}`,
					children: [
						r.tone === "good" ? "قوت" : "ضعف",
						" · ",
						r.title
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					children: r.detail
				})]
			}, r.title))
		})]
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
