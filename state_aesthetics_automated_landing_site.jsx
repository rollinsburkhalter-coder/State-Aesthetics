export default function StateAestheticsSite() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl space-y-6">
            <div className="inline-block rounded-full border border-white/30 px-4 py-1 text-sm tracking-wide uppercase">
              Starkville Medical Aesthetics
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Natural Results.
              <br />
              Premium Aesthetic Care.
            </h1>
            <p className="text-lg text-neutral-200 leading-relaxed">
              Botox, fillers, facials, skin rejuvenation, and wellness treatments designed to help you look refreshed and confident.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#booking"
                className="rounded-2xl bg-white text-black px-6 py-3 font-semibold shadow-lg hover:scale-105 transition"
              >
                Book Consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-neutral-500">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Top Rated</div>
            <div className="text-sm text-neutral-500">Local Med Spa</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Custom</div>
            <div className="text-sm text-neutral-500">Treatment Plans</div>
          </div>
          <div>
            <div className="text-2xl font-bold">Modern</div>
            <div className="text-sm text-neutral-500">Technology</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Popular Services</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Personalized aesthetic treatments tailored to your goals and skin type.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Botox & Injectables',
              desc: 'Smooth fine lines and create a refreshed natural appearance.',
            },
            {
              title: 'Facials & Skin Care',
              desc: 'Hydrating and rejuvenating treatments for glowing skin.',
            },
            {
              title: 'Laser & Rejuvenation',
              desc: 'Advanced technology to improve texture and tone.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white shadow-xl border p-8 hover:-translate-y-1 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Automated Features */}
      <section className="bg-neutral-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built-In Automation</h2>
            <p className="text-neutral-600">
              Designed to automatically bring in and manage new clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Online booking integration',
              'Automatic text/email reminders',
              'Lead capture forms',
              'Instagram DM automation',
              'Google review requests',
              'CRM integration',
              'Before & after galleries',
              'Mobile optimized design',
            ].map((feature) => (
              <div
                key={feature}
                className="rounded-2xl bg-white p-6 shadow-md font-medium"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            'The staff was amazing and the results were natural and beautiful.',
            'Best experience I have had at a med spa. Highly recommend.',
            'Very professional and the online booking process was super easy.',
          ].map((review, index) => (
            <div
              key={index}
              className="rounded-3xl border bg-white p-8 shadow-lg"
            >
              <p className="text-neutral-700 leading-relaxed">“{review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Book Your Consultation</h2>
          <p className="text-neutral-300 mb-10">
            Fill out the form and an automated confirmation will be sent instantly.
          </p>

          <form className="grid gap-4 text-left">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-2xl px-5 py-4 bg-neutral-900 border border-neutral-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-2xl px-5 py-4 bg-neutral-900 border border-neutral-700"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-2xl px-5 py-4 bg-neutral-900 border border-neutral-700"
            />
            <textarea
              rows="4"
              placeholder="What service are you interested in?"
              className="rounded-2xl px-5 py-4 bg-neutral-900 border border-neutral-700"
            />
            <button
              type="submit"
              className="rounded-2xl bg-white text-black py-4 font-semibold hover:scale-[1.02] transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-xl mb-2">State Aesthetics</h3>
            <p>Modern wellness and aesthetic care in Starkville, Mississippi.</p>
          </div>

          <div className="space-y-1 text-sm">
            <p>📍 Starkville, MS</p>
            <p>📞 (662) 000-0000</p>
            <p>✉️ hello@stateaesthetics.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
