/* BETTER Sleep — interaction layer.
   Vanilla JS. No dependencies. */

(() => {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Scroll reveal
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  // Sticky mobile CTA
  const sticky = document.getElementById("sticky-cta");
  const onScroll = () => {
    if (!sticky) return;
    if (window.scrollY > 800) sticky.classList.add("visible");
    else sticky.classList.remove("visible");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Plan picker
  const plans = document.querySelectorAll("#plans .plan");
  const cta = document.getElementById("add-to-cart");
  const perDay = document.getElementById("per-day");
  const sub = document.getElementById("plan-sub");
  const qtyVal = document.getElementById("qty-val");
  const qtyDec = document.getElementById("qty-dec");
  const qtyInc = document.getElementById("qty-inc");

  let selected = { price: 127, sub: "One-time · 90-day supply", per: "$1.41/day" };
  let qty = 1;

  function render() {
    const total = selected.price * qty;
    if (cta) cta.textContent = `Add to cart · $${total}`;
    if (perDay) perDay.textContent = selected.per;
    if (sub) sub.textContent = `${selected.sub} · Free shipping · 90-day happiness guarantee`;
    if (qtyVal) qtyVal.textContent = String(qty);
    if (sticky) sticky.textContent = `Start My 90-Day Challenge · $${selected.price}`;
  }

  plans.forEach((btn) => {
    btn.addEventListener("click", () => {
      plans.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selected = {
        price: Number(btn.getAttribute("data-price")),
        sub: btn.getAttribute("data-sub") || "",
        per: btn.getAttribute("data-per") || "",
      };
      render();
    });
  });

  if (qtyDec) qtyDec.addEventListener("click", () => { qty = Math.max(1, qty - 1); render(); });
  if (qtyInc) qtyInc.addEventListener("click", () => { qty += 1; render(); });

  render();

  // Add-to-cart micro feedback
  if (cta) {
    cta.addEventListener("click", () => {
      const original = cta.textContent;
      cta.textContent = "Added ✓";
      cta.style.background = "var(--lavender-deep)";
      setTimeout(() => {
        cta.textContent = original;
        cta.style.background = "";
      }, 1400);
    });
  }
})();
