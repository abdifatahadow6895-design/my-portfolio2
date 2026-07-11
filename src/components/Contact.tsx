import { motion } from "framer-motion";
import { send } from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { defaultTransition, fadeInUp, staggerContainer, viewportOnce } from "../lib/animations";

const contactItems = [
  { icon: "✉", text: "abdifatnadow6895@gmail.com", href: "mailto:abdifatnadow6895@gmail.com" },
  { icon: "☎", text: "+254 722381031", href: "tel:+254722381031" },
  { icon: "◉", text: "Garissa, Kenya", href: "https://maps.google.com/?q=Garissa,Kenya" },
];

const initialForm = { name: "", email: "", message: "" };

type Status = { type: "idle" | "success" | "error"; message: string };

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "EmailJS is not configured yet. Please contact me directly at abdifatnadow6895@gmail.com.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      await send(serviceId, templateId, formData, publicKey);
      setStatus({ type: "success", message: "Thanks for reaching out. I will get back to you shortly." });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending the message. Please try again later.",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/70 p-8 shadow-[0_20px_100px_-30px_rgba(34,211,238,0.3)] backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:p-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={defaultTransition}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Let’s build something memorable.</h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Whether you need a new product, a redesign, or engineering support for an existing idea, I would love to hear about it.
          </p>

          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={staggerContainer} className="mt-8 space-y-3">
            {contactItems.map((item, index) => (
              <motion.a
                key={item.text}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                variants={fadeInUp}
                transition={{ ...defaultTransition, delay: index * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 px-4 py-3 text-sm text-slate-300"
              >
                <span className="text-cyan-400">{item.icon}</span>
                <span>{item.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="rounded-[1.5rem] border border-slate-800/70 bg-slate-900/70 p-6"
        >
          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            required
            className="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-cyan-400"
          />

          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            required
            className="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          />

          <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
            required
            className="mb-4 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </button>

          {status.message ? (
            <p
              aria-live="polite"
              className={`mt-4 text-sm ${status.type === "success" ? "text-cyan-300" : "text-rose-300"}`}
            >
              {status.message}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
