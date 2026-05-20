import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#features', label: 'Specials' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

const showcaseSlides = [
  {
    title: 'Luxury Celebration Cakes',
    text: 'Handcrafted centerpieces for birthdays, anniversaries, and unforgettable moments.',
    image:
      'https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Fresh Cream Delights',
    text: 'Soft sponge, rich cream, and premium ingredients baked fresh every day.',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Festive Dessert Collection',
    text: 'Elegant pastries and cakes curated to make every celebration extra special.',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1600&q=80',
  },
]

const menuItems = [
  { name: 'Butterscotch Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80' },
  { name: 'Blueberry Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1607478900766-efe13248b125?auto=format&fit=crop&w=900&q=80' },
  { name: 'Chocolate Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=900&q=80', bestSeller: true },
  { name: 'Fruit Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80' },
  { name: 'Strawberry Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1461009683693-342af2f2d6ce?auto=format&fit=crop&w=900&q=80' },
  { name: 'Rasmalai Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80', bestSeller: true },
  { name: 'Latte Cake', price: '₹XXX', image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80' },
]

const features = [
  'Custom Birthday Cakes',
  'Anniversary Cakes',
  'Fresh Cream Cakes',
  'Same Day Delivery',
  'Eggless Options Available',
]

const galleryImages = [
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1559628233-100c798642d4?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
]

const testimonials = [
  {
    name: 'Priya S.',
    text: 'The chocolate cake was absolutely divine. Rich, soft, and beautifully decorated.',
  },
  {
    name: 'Arjun M.',
    text: 'Ordered an anniversary cake and it looked premium and tasted even better.',
  },
  {
    name: 'Neha R.',
    text: 'Same-day delivery was super smooth and the cake arrived fresh and perfect.',
  },
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseSlides.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#fff7f0] text-[#4c2f2f] selection:bg-[#f7c6d2] selection:text-[#4c2f2f]">
      <header className="sticky top-0 z-50 border-b border-[#e9d7c9] bg-[#fff7f0]/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="font-serif text-xl font-semibold tracking-wide text-[#6b3f34]">
            De CakeSpot
          </a>
          <div className="hidden gap-5 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-[#cb5d76]">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="tel:+91817858260"
            className="rounded-full bg-[#6b3f34] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4f2c25]"
          >
            Call Us
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 pb-14 pt-8 md:px-6 md:pt-12">
          <div className="pointer-events-none absolute -left-16 top-12 h-32 w-32 animate-float rounded-full bg-[#ffd5e2]/50 blur-2xl" />
          <div className="pointer-events-none absolute bottom-8 right-4 h-40 w-40 animate-float-delayed rounded-full bg-[#d8a47f]/30 blur-2xl" />

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="rounded-3xl border border-white/60 bg-white/45 p-8 backdrop-blur-sm md:p-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#b06f4f]">Premium Bakery in Rajnagar Extension</p>
              <h1 className="font-serif text-4xl leading-tight text-[#4e2b26] md:text-6xl">
                Freshly Baked Happiness at De CakeSpot
              </h1>
              <p className="mt-5 max-w-xl text-base text-[#684444] md:text-lg">
                Handcrafted cakes made with love, fresh cream, and premium ingredients for every celebration.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-full bg-[#cb5d76] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#b84964]">
                  Order Now
                </a>
                <a href="tel:+91817858260" className="rounded-full border border-[#6b3f34] px-6 py-3 text-sm font-semibold text-[#6b3f34] transition hover:scale-105 hover:bg-[#6b3f34] hover:text-white">
                  Call Us
                </a>
              </div>
            </div>

            <div className="relative h-[360px] overflow-hidden rounded-3xl border border-[#ecd8ca] shadow-xl md:h-[430px]">
              {showcaseSlides.map((slide, index) => (
                <article
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#321b17]/65 to-transparent" />
                  <div className="absolute bottom-0 p-6 text-white">
                    <h2 className="font-serif text-2xl">{slide.title}</h2>
                    <p className="mt-2 text-sm text-[#fcefe5]">{slide.text}</p>
                  </div>
                </article>
              ))}
              <div className="absolute bottom-4 right-4 flex gap-2">
                {showcaseSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    aria-label={`View slide ${index + 1}`}
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 w-2.5 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="rounded-3xl border border-[#eddccf] bg-[#fffdfb] p-8 shadow-sm md:p-10">
            <h2 className="font-serif text-3xl text-[#4e2b26] md:text-4xl">About Us</h2>
            <p className="mt-4 text-[#684444]">
              At De CakeSpot, every cake is crafted fresh in-house using quality ingredients and artisanal techniques. From cozy family moments to grand celebrations, we create beautiful cakes that bring warmth, joy, and unforgettable flavors.
            </p>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-[#4e2b26] md:text-4xl">Signature Cake Menu</h2>
            <p className="mt-2 text-[#7a5a52]">Freshly baked favorites with premium finishing</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.map((item) => (
              <article key={item.name} className="group overflow-hidden rounded-3xl border border-[#efdccf] bg-white/60 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-52 overflow-hidden">
                  {item.bestSeller && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#cb5d76] px-3 py-1 text-xs font-semibold tracking-wide text-white">
                      Best Seller
                    </span>
                  )}
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-[#4e2b26]">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#93695f]">Starting at {item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {features.map((feature) => (
              <div key={feature} className="rounded-2xl border border-[#ead4c6] bg-[#fff]/65 p-5 text-center shadow-sm backdrop-blur-sm">
                <p className="font-medium text-[#5f3a33]">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-[#4e2b26] md:text-4xl">Cake Gallery</h2>
            <p className="mt-2 text-[#7a5a52]">Pinterest-inspired festive visuals</p>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <figure key={image} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[#f0ddd1] bg-white/50 p-2">
                <img src={image} alt={`De CakeSpot dessert showcase ${index + 1}`} className="w-full rounded-xl object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl text-[#4e2b26] md:text-4xl">Customer Love</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl border border-[#eedccd] bg-white/65 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-[#674643]">“{testimonial.text}”</p>
                <footer className="mt-4 font-semibold text-[#4e2b26]">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-18 pt-14 md:px-6">
          <div className="grid gap-6 rounded-3xl border border-[#ebd8cb] bg-[#fffdf9] p-6 shadow-sm md:grid-cols-2 md:p-8">
            <div>
              <h2 className="font-serif text-3xl text-[#4e2b26]">Visit & Order</h2>
              <p className="mt-4 text-[#654543]">
                Shop No. 2, Opposite Sangwan Heights, Near Classic Residency, Rajnagar Extension, Ghaziabad, Uttar Pradesh, India
              </p>
              <div className="mt-5 space-y-3 text-[#654543]">
                <p><span className="font-semibold">Phone:</span> <a href="tel:+91817858260" className="text-[#cb5d76]">0817858260</a></p>
                <p><span className="font-semibold">Timings:</span> Mon - Sun: 10:00 AM - 10:00 PM</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+91817858260" className="rounded-full bg-[#6b3f34] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4f2c25]">
                  Click to Call
                </a>
                <a href="https://wa.me/91817858260" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95">
                  WhatsApp Order
                </a>
              </div>
            </div>
            <iframe
              title="De CakeSpot location"
              src="https://www.google.com/maps?q=Shop%20No.%202%2C%20Opposite%20Sangwan%20Heights%2C%20Near%20Classic%20Residency%2C%20Rajnagar%20Extension%2C%20Ghaziabad%2C%20Uttar%20Pradesh%2C%20India&output=embed"
              className="h-72 w-full rounded-2xl border border-[#ecd8ca]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/91817858260"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition hover:scale-110"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
          <path d="M17.6 14.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.8.2c-.2.3-.9 1-.9 1.1s-.2.2-.6 0a8.6 8.6 0 0 1-2.5-1.5 9.4 9.4 0 0 1-1.7-2.1c-.2-.4 0-.6.2-.8.2-.2.3-.4.5-.6l.3-.5c.1-.2 0-.4 0-.6 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.1 1.3 3.3.2.2 2.3 3.5 5.6 4.9.8.3 1.5.5 2 .7.9.3 1.7.2 2.3.1.7-.1 1.8-.8 2.1-1.5.3-.8.3-1.4.2-1.5 0-.2-.2-.3-.5-.4M12 2a10 10 0 0 0-8.8 14.8L2 22l5.3-1.3A10 10 0 1 0 12 2" />
        </svg>
      </a>

      <footer className="border-t border-[#e9d7c9] bg-[#fff6ef] px-4 py-8 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="font-serif text-xl text-[#6b3f34]">De CakeSpot</p>
            <p className="text-sm text-[#7d5f56]">Crafted with love in Rajnagar Extension, Ghaziabad</p>
          </div>
          <div className="flex items-center gap-4 text-[#6b3f34]">
            <a href="#" aria-label="Instagram" className="transition hover:text-[#cb5d76]">Instagram</a>
            <a href="#" aria-label="Facebook" className="transition hover:text-[#cb5d76]">Facebook</a>
            <a href="#" aria-label="YouTube" className="transition hover:text-[#cb5d76]">YouTube</a>
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-center text-xs text-[#9a7a70]">© {new Date().getFullYear()} De CakeSpot. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
