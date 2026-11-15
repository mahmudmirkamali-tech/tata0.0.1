import { i as __toESM } from "../_runtime.mjs";
import { q as require_react, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toman, r as useTata } from "./tata-store-D_je3YFC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-kQDCJDwS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Site() {
	const workshops = useTata((s) => s.workshops);
	const events = useTata((s) => s.events);
	const reserve = useTata((s) => s.reserve);
	const [pick, setPick] = (0, import_react.useState)(workshops[0]?.id ?? "");
	const [name, setName] = (0, import_react.useState)("");
	const [msg, setMsg] = (0, import_react.useState)("");
	const send = () => {
		const ok = reserve(pick, name);
		setMsg(ok ? `${name.trim()} ثبت شد. جا برایش نگه داشته می‌شود.` : "این نام تکراری است یا ظرفیت پر شده.");
		if (ok) setName("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-3xl items-center justify-between px-4 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-bold",
					children: "تاتا"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "کافه فرهنگ گاچو · قشم"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-full bg-sand px-3 py-2 text-sm",
					children: "میز کار تیم"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl space-y-6 px-4 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl bg-palm p-6 text-sand",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-sand/80",
							children: "زیر سقف حصیر نخل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 text-2xl font-bold",
							children: "کارگاه کودک، شیرینی بومی و حصیربافی"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-sand/90",
							children: "برای بچه‌های ۷ تا ۱۲ سال. هر نوبت حداکثر ۱۰ نفر. بازی‌های دیروز جزیره، بازارچه خوراک بومی، و دست‌هایی که حصیر می‌بافند."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "نوبت‌های باز"
					}), workshops.map((w) => {
						const left = w.capacity - w.enrolled;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-2xl border border-line bg-surface p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: w.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted",
									children: w.when
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-palm",
									children: left > 0 ? `${left} جا` : "پر"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: [toman(w.price), " برای هر کودک"]
							})]
						}, w.id);
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-2xl border border-line bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "رزرو یک جا"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: name,
								onChange: (e) => setName(e.target.value),
								placeholder: "نام کودک",
								className: "rounded-xl border border-line bg-bg px-3 py-3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: pick,
								onChange: (e) => setPick(e.target.value),
								className: "rounded-xl border border-line bg-bg px-3 py-3",
								children: workshops.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: w.id,
									children: w.title
								}, w.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: send,
								className: "rounded-xl bg-clay px-4 py-3 text-surface",
								children: "ثبت رزرو"
							}),
							msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-palm",
								children: msg
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "روی صحنه"
					}), events.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-2xl bg-sand p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: e.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								e.when,
								" · ",
								e.seats - e.booked,
								" جا مانده"
							]
						})]
					}, e.id))]
				})
			]
		})]
	});
}
//#endregion
export { Site as component };
