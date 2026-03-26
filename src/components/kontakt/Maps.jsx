"use client";

export default function Maps() {
  return (
    <section className="bg-white  px-3 ">
      <div className="">
        <div className="w-full h-[670px] relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.2384976767513!2d8.81068667688!3d47.1935867711499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ab69b7f207b2f%3A0x840fd2334cd57e2a!2sTalstrasse%2024c%2C%208852%20Altendorf%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1711444983944!5m2!1sen!2sch"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Coreberg Location"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
