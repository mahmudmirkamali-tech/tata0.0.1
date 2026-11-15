import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tata-store-D_je3YFC.js
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
	reserve: (id, name) => {
		const clean = name.trim();
		const w = get().workshops.find((x) => x.id === id);
		if (!w || !clean || w.enrolled >= w.capacity) return false;
		if ((w.kids ?? []).includes(clean)) return false;
		set((s) => ({
			workshops: s.workshops.map((item) => item.id === id ? {
				...item,
				enrolled: item.enrolled + 1,
				kids: [...item.kids ?? [], clean]
			} : item),
			txs: [{
				id: uid(),
				kind: "in",
				amount: w.price,
				note: `رزرو سایت: ${clean} · ${w.title}`,
				at: `امروز ${nowLabel()}`
			}, ...s.txs],
			logs: [{
				id: uid(),
				text: `${clean} از سایت مشتری برای «${w.title}» رزرو کرد.`,
				at: nowLabel()
			}, ...s.logs].slice(0, 12)
		}));
		return true;
	},
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
//#endregion
export { toman as n, useTata as r, parseVoice as t };
