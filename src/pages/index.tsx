import Head from 'next/head';
import '@/styles/global.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>BreakOff - Timeless Clothing</title>
        <meta name="description" content="BreakOff - timeless clothing and everyday essentials, redesigned." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><rect width=%2232%22 height=%2232%22 rx=%224%22 fill=%22%23000%22/><text x=%2216%22 y=%2223%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2220%22 font-weight=%22700%22 fill=%22%23fff%22>BO</text></svg>" />
      </Head>
      <div className="site">
        <header className="header">
          <div className="header-inner">
            <a className="brand" href="/" aria-label="BreakOff home">
              <svg viewBox="0 0 32 32" className="brand-logo" aria-hidden="true">
                <path
                  d="M2 16h4l3-6l3 12l4-8 3 5h5"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              BreakOff
            </a>
            <nav className="nav" aria-label="Primary">
              <a className="nav-link" href="#">New In</a>
              <a className="nav-link" href="#">Men</a>
              <a className="nav-link" href="#">Men</a>
              <a className="nav-link" href="#">Women</a>
              <a className="nav-link" href="#">Essentials</a>
              <a className="nav-link nav-link--sale" href="#">Sale</a>
            </nav>
            <div className="header-actions">
              <div className="search">
                <svg viewBox="0 0 24 24" className="search-icon" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" fill="none" stroke="#000" strokeWidth="2" />
                  <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input className="search-input" type="search" placeholder="Search" />
              </div>
              <a className="cart" href="#" aria-label="Cart">
                <svg viewBox="0 0 24 24" className="cart-icon" aria-hidden="true">
                  <circle cx="9" cy="21" r="1.4" fill="#000" />
                  <circle cx="17" cy="21" r="1.4" fill="#000" />
                  <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                </svg>
                <span className="cart-label">Cart</span>
              </a>
            </div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-inner">
            <div className="hero-text">
              <p className="eyebrow">BreakOff</p>
              <h1 className="hero-title">BreakOff <span>- Timeless Clothing</span></h1>
              <p className="hero-sub">Everyday essentials redefined</p>
              <a className="btn btn--primary" href="#">SHOP NEW IN</a>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-image">
                <div className="hero-figure">
                  <div className="hero-cloak" aria-hidden="true"></div>
                  <div className="hero-head" aria-hidden="true"></div>
                  <div className="hero-torso" aria-hidden="true">
                    <div className="hero-sweater" aria-hidden="true"></div>
                  </div>
                  <div className="hero-arm" aria-hidden="true"></div>
                  <div className="hero-hand" aria-hidden="true"></div>
                  <div className="hero-chain" aria-hidden="true"></div>
                </div>
                <div className="hero-float" aria-hidden="true">
                  <svg viewBox="0 0 48 48" className="hero-swatch" aria-hidden="true">
                    <rect x="2" y="6" width="44" height="36" rx="4" fill="#e9dfd2" stroke="#d8c8b4" strokeWidth="1.5" />
                    <rect x="8" y="10" width="32" height="24" rx="3" fill="#f3e8da" stroke="#d8c8b4" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="filters">
          <div className="filters-inner">
            <a className="filter-tab filter-tab--active" href="#">Shirts &gt;</a>
            <a className="filter-tab" href="#">Trousers &gt;</a>
            <a className="filter-tab" href="#">Accessories &gt;</a>
            <a className="filter-tab filter-tab--selected" href="#">Accessories</a>
          </div>
        </section>

        <section className="products">
          <div className="products-inner">
            <div className="product-grid">
              <article className="product">
                <div className="product-image">
                  <div className="product-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="icon-cart" aria-hidden="true">
                      <circle cx="9" cy="21" r="1.4" fill="#000" />
                      <circle cx="17" cy="21" r="1.4" fill="#000" />
                      <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="product-image__visual" aria-hidden="true">
                    <div className="product-cloak" aria-hidden="true"></div>
                    <div className="product-body" aria-hidden="true">
                      <div className="product-shirt" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
                <div className="product-body-wrap">
                  <h3 className="product-title">Oversized Cotton Shirt</h3>
                  <p className="product-price">AED 149</p>
                </div>
              </article>

              <article className="product">
                <div className="product-image">
                  <div className="product-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="icon-cart" aria-hidden="true">
                      <circle cx="9" cy="21" r="1.4" fill="#000" />
                      <circle cx="17" cy="21" r="1.4" fill="#000" />
                      <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="product-image__visual" aria-hidden="true">
                    <div className="product-cloak" aria-hidden="true"></div>
                    <div className="product-body" aria-hidden="true">
                      <div className="product-jacket" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
                <div className="product-body-wrap">
                  <h3 className="product-title">Straight Fit Trousers</h3>
                  <p className="product-price">AED 199</p>
                </div>
              </article>

              <article className="product">
                <div className="product-image">
                  <div className="product-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="icon-cart" aria-hidden="true">
                      <circle cx="9" cy="21" r="1.4" fill="#000" />
                      <circle cx="17" cy="21" r="1.4" fill="#000" />
                      <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="product-image__visual" aria-hidden="true">
                    <div className="product-cloak" aria-hidden="true"></div>
                    <div className="product-body" aria-hidden="true">
                      <div className="product-jacket product-jacket--cream" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
                <div className="product-body-wrap">
                  <h3 className="product-title">Lightweight Jackets</h3>
                  <p className="product-price">AED 199</p>
                </div>
              </article>

              <article className="product">
                <div className="product-image">
                  <div className="product-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="icon-cart" aria-hidden="true">
                      <circle cx="9" cy="21" r="1.4" fill="#000" />
                      <circle cx="17" cy="21" r="1.4" fill="#000" />
                      <path d="M3 5h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3z" fill="none" stroke="#000" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="product-image__visual" aria-hidden="true">
                    <div className="product-cloak" aria-hidden="true"></div>
                    <div className="product-body" aria-hidden="true">
                      <div className="product-jacket product-jacket--black product-jacket--bomber" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
                <div className="product-body-wrap">
                  <h3 className="product-title">Lightweight Jacket</h3>
                  <p className="product-price">AED 249</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-col">
              <h4 className="footer-heading">Customer Care</h4>
              <a className="footer-link" href="#">Returns</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Stores</h4>
              <a className="footer-link" href="#">Find a Store</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Policies</h4>
              <a className="footer-link" href="#">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
