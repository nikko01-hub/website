function App() {
  const menuItems = [
    {
      name: 'Butterscotch Cake',
      price: '₹699 onwards',
      image:
        'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Blueberry Cake',
      price: '₹749 onwards',
      image:
        'https://images.unsplash.com/photo-1711987533096-6f00b4674918?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Chocolate Cake',
      price: '₹799 onwards',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
      bestSeller: true,
    },
    {
      name: 'Fruit Cake',
      price: '₹699 onwards',
      image:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Strawberry Cake',
      price: '₹749 onwards',
      image:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Rasmalai Cake',
      price: '₹849 onwards',
      image:
        'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=1200&q=80',
      bestSeller: true,
    },
    {
      name: 'Latte Cake',
      price: '₹779 onwards',
      image:
        'https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1542826438-27eb2e7d2fb5?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1557979619-445218f326b9?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1461009209120-103c1f90d7f1?auto=format&fit=crop&w=900&q=80',
  ]

  const features = [
    'Custom Birthday Cakes',
    'Anniversary Cakes',
    'Fresh Cream Cakes',
    'Same Day Delivery',
    'Eggless Options Available',
  ]

  return (
    <div className="bg-[#fff9f4] text-[#4a2e2a]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-[#fff3ec]/70 shadow-sm backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="text-xl font-semibold tracking-wide text-[#6d3b34]">
            De CakeSpot
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#menu" className="nav-link">
              Menu
            </a>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <a
            href="tel:0817858260"
            className="rounded-full bg-[#8f4f45] px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6d3b34] md:text-sm"
          >
            Call Us
          </a>
        </nav>
      </header>

      <main className="overflow-hidden pt-24">
        <section
          id="home"
          className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 px-4 pb-16 pt-8 md:grid-cols-2 md:px-8"
        >
          <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-[#f4b9c4]/40 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#d9b18f]/35 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <p className="inline-block rounded-full border border-[#d9b18f]/70 bg-white/50 px-4 py-1 text-sm text-[#8f4f45]">
              Rajnagar Extension, Ghaziabad
            </p>
            <h1 className="text-4xl leading-tight font-semibold text-[#6d3b34] md:text-6xl">
              Freshly Baked Happiness at De CakeSpot
            </h1>
            <p className="max-w-xl text-lg text-[#6d524f]">
              Handcrafted cakes made with love, premium ingredients, and cozy bakery magic to make
              every celebration unforgettable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#8f4f45] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#6d3b34]"
              >
                Order Now
              </a>
              <a
                href="tel:0817858260"
                className="rounded-full border border-[#8f4f45] bg-white/70 px-6 py-3 text-sm font-semibold text-[#8f4f45] transition hover:-translate-y-0.5"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="relative z-10 float-gentle">
            <img
              src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80"
              alt="Premium decorated cake"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_rgba(93,48,40,0.25)]"
            />
          </div>
        </section>

        <section className="py-10">
          <div className="carousel-track">
            {[...menuItems, ...menuItems].map((item, index) => (
              <article key={`${item.name}-${index}`} className="showcase-card">
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="showcase-overlay">
                  <p>{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-semibold text-[#6d3b34] md:text-4xl">About Us</h2>
            <p className="mt-4 max-w-4xl leading-relaxed text-[#6d524f]">
              De CakeSpot is your neighborhood premium bakery crafting fresh cakes daily in
              Rajnagar Extension. From rich celebration cakes to soft cream delights, we blend
              quality ingredients, artisanal techniques, and heartfelt service to make every moment
              sweeter.
            </p>
          </div>
        </section>

        <section id="menu" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#6d3b34] md:text-4xl">Our Signature Menu</h2>
            <p className="mt-3 text-[#6d524f]">Elegant cakes handcrafted for every occasion.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuItems.map((item) => (
              <article
                key={item.name}
                className="group relative overflow-hidden rounded-3xl border border-white/50 bg-white/65 shadow-lg backdrop-blur-xl transition hover:-translate-y-1"
              >
                {item.bestSeller && (
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-[#8f4f45] px-3 py-1 text-xs font-semibold text-white">
                    Best Seller
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="space-y-2 p-5">
                  <h3 className="text-lg font-semibold text-[#6d3b34]">{item.name}</h3>
                  <p className="text-[#8f4f45]">{item.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#6d3b34] md:text-4xl">Special Features</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature} className="glass-card rounded-2xl p-5 text-center font-medium">
                {feature}
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#6d3b34] md:text-4xl">Cake Gallery</h2>
            <p className="mt-3 text-[#6d524f]">Pinterest-inspired festive dessert moments.</p>
          </div>
          <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
            {gallery.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Cake gallery ${index + 1}`}
                loading="lazy"
                className="w-full rounded-2xl shadow-md transition hover:-translate-y-1"
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-[#6d3b34] md:text-4xl">Customer Love</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              '“The chocolate cake was rich, fresh, and beautifully finished. Truly premium!”',
              '“Their same-day delivery saved our anniversary celebration. Amazing service.”',
              '“Soft sponge, fresh cream, and lovely presentation. Best bakery in Rajnagar Extension!”',
            ].map((review) => (
              <blockquote key={review} className="glass-card rounded-2xl p-6 leading-relaxed">
                {review}
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass-card rounded-3xl p-8">
              <h2 className="text-3xl font-semibold text-[#6d3b34]">Contact & Orders</h2>
              <p className="mt-5 text-[#6d524f]">
                Shop No. 2, Opposite Sangwan Heights, Near Classic Residency, Rajnagar Extension,
                Ghaziabad, Uttar Pradesh, India
              </p>
              <p className="mt-3 text-[#6d524f]">
                <span className="font-semibold text-[#6d3b34]">Timings:</span> 10:00 AM - 10:00 PM
                (All Days)
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:0817858260"
                  className="rounded-full bg-[#8f4f45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6d3b34]"
                >
                  Click to Call
                </a>
                <a
                  href="https://wa.me/91817858260?text=Hi%20De%20CakeSpot%2C%20I%20want%20to%20order%20a%20cake."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#8f4f45] px-5 py-3 text-sm font-semibold text-[#8f4f45] transition hover:bg-[#fff3ec]"
                >
                  WhatsApp Order
                </a>
              </div>
            </div>
            <iframe
              title="De CakeSpot location map"
              loading="lazy"
              className="h-[380px] w-full rounded-3xl border-0 shadow-lg"
              src="https://www.google.com/maps?q=Shop+No.+2,+Opposite+Sangwan+Heights,+Near+Classic+Residency,+Rajnagar+Extension,+Ghaziabad,+Uttar+Pradesh,+India&output=embed"
            />
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-[#e8d5c5] bg-[#fff1e8]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center md:flex-row md:px-8">
          <p className="font-semibold text-[#6d3b34]">De CakeSpot</p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
              IG
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
              FB
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon">
              YT
            </a>
          </div>
          <p className="text-sm text-[#6d524f]">© {new Date().getFullYear()} De CakeSpot. All rights reserved.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/91817858260?text=Hi%20De%20CakeSpot%2C%20I%20want%20to%20order%20a%20cake."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
