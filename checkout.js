const params = new URLSearchParams(window.location.search);

const rank = (params.get("rank") || "PRIME").toUpperCase();
const price = params.get("price") || "0";
const color = (params.get("color") || "prime").toLowerCase();

document.getElementById("rankName").textContent = rank;
document.getElementById("rankNameInline").textContent = rank;
document.getElementById("rankPrice").textContent = `₹${price}`;
document.title = `Checkout — ${rank} — PrimeMC`;

const panel = document.getElementById("checkoutPanel");
panel.setAttribute("data-rank", color);

// Swap this for your real QR code image whenever it's ready,
// or point it at a per-rank image if you want a different QR per rank.
// document.getElementById("qrImage").src = "assets/your-qr-code.png";
