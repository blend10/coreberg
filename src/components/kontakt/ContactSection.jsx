"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: (
      <Image
        src="/images/icon11.svg"
        alt="Executive Search"
        width={20}
        height={20}
      />
    ),
    title: "Executive & Professional Search",
    description:
      "Gezielte Besetzung von Schlüsselpositionen mit Fach- und Führungskräften.",
  },
  {
    icon: (
      <Image
        src="/images/icon12.svg"
        alt="Talent Advisory"
        width={30}
        height={30}
      />
    ),
    title: "Talent Advisory",
    description:
      "Strategische Unterstützung bei Talentthemen, Karriereentscheidungen und langfristiger Entwicklung.",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">

        {/* LEFT: Info panel */}
        <div className="bg-[#EEF1F3] rounded-xl py-8 px-6 md:px-20 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] md:text-[32px] text-[#091019]">
              Kontakt aufnehmen
            </h2>
            <p className="text-sm text-[#6C6C6C] leading-relaxed">
              Wenn Sie Schlüsselpositionen besetzen, Ihr Recruiting strategisch
              weiterentwickeln oder ein konkretes Anliegen besprechen möchten,
              stehen wir Ihnen persönlich zur Verfügung.
            </p>
            <p className="text-sm text-[#6C6C6C] leading-relaxed">
              Jede Anfrage behandeln wir diskret und mit höchster Sorgfalt.
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-1">
            <p className="text-[18px] md:text-[20px] font-medium text-[#091019] mb-3">
              Wie können wir Sie unterstützen?
            </p>
            {services.map((s, i) => (
              <div key={i} className="flex gap-3 items-start py-3">
                <div className="mt-0.5 flex-shrink-0">{s.icon}</div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-semibold text-[#091019]">
                    {s.title}
                  </p>
                  <p className="text-[14px] text-[#6C6C6C] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <a
              href="tel:+41415472140"
              className="flex flex-col gap-3 bg-[#FFFFFF33] border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <Image
                src="/images/phone.svg"
                alt="Phone"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm underline font-semibold text-[#091019]">
                  Rufen Sie uns an ↗
                </p>
                <p className="text-sm text-[#6C6C6C]">+61 415 472 140</p>
              </div>
            </a>
            <a
              href="mailto:info@coreberg.ch"
              className="flex flex-col gap-3 bg-[#FFFFFF33] border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors"
            >
              <Image
                src="/images/mail.svg"
                alt="Mail"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm underline font-semibold text-[#091019]">
                  E-Mail senden ↗
                </p>
                <p className="text-sm text-[#6C6C6C]">info@coreberg.ch</p>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              E-Mail-Adresse <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="ihre.email@beispiel.ch"
              required
              className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
            />
          </div>

          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ryan"
                required
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Telefonnummer <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(+41) 000 000-00000"
                required
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Company + Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Unternehmen
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Name Ihres Unternehmens"
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-700">
                Serviceinteresse
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-500 outline-none focus:border-gray-400 transition-colors bg-white"
              >
                <option value="">Service</option>
                <option value="executive-search">Executive Search</option>
                <option value="professional-search">Professional Search</option>
                <option value="talent-advisory">Talent Advisory</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">
              Nachricht <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Wie können wir Sie unterstützen?"
              required
              className="border border-gray-200 rounded-md px-4 py-2.5 text-sm text-gray-800 placeholder-gray-300 outline-none focus:border-gray-400 transition-colors resize-none"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              required
              className="mt-0.5 accent-gray-800 flex-shrink-0"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Mit dem Absenden des Formulars bestätige ich, dass ich die
              Datenschutzerklärung gelesen habe und ihr zustimme.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white text-sm font-semibold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200"
          >
            Anfrage senden →
          </button>
        </form>
      </div>
    </section>
  );
}