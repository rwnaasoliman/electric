// غيّر رقم الواتساب ورقم الهاتف هنا قبل نشر الموقع.
const WHATSAPP_NUMBER = "201012345678"; // اكتب الرقم بصيغة دولية بدون + أو أصفار البداية
const PHONE_NUMBER = "01012345678";

document.getElementById("year").textContent = new Date().getFullYear();

// إعداد روابط واتساب في الموقع
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن خدمات تأسيس وتشطيبات الكهرباء.")}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

// قائمة الهاتف
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// تجهيز تفاصيل طلب العميل داخل رسالة واتساب
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("clientName").value.trim();
  const phone = document.getElementById("clientPhone").value.trim();
  const service = document.getElementById("serviceType").value;
  const details = document.getElementById("details").value.trim();

  const message = [
    "مرحباً، أريد طلب خدمة كهرباء.",
    `الاسم: ${name}`,
    `رقم الهاتف: ${phone}`,
    `الخدمة المطلوبة: ${service}`,
    `تفاصيل الشغل: ${details || "لم تُذكر تفاصيل إضافية"}`
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

// تنبيه للمطور: يجب تعديل رقم الواتساب ورقم الاتصال ومناطق الخدمة قبل نشر الموقع.
