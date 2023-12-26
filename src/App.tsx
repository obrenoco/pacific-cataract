import "./App.css";
import { Header } from "./components/Header";
import HeroBanner from "./assets/hero-banner.png";
import { Footer } from "./components/Footer";
import BannerWoman from "./assets/banner-woman.png";
import CheckIcon from "./assets/icons/check.png";
import { QuotationMarkIcon } from "./assets/icons/icon-quote.tsx";
import Institute from "./assets/institute.png";
import BorderLeft from "./assets/card-border-left.png";
import BorderRight from "./assets/card-border-right.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="relative">
          <img src={HeroBanner} alt="" className="min-w-full pt-1" />
          <section className="absolute  top-[35%] left-[52%] w-[550px] -translate-x-1/2 -translate-y-1/2 ml-14">
            <h1 className="max-w-[850px] leading-10">
              Enjoy the freedom of vision restored.
            </h1>
            <p className="pt-6 pl-32 text-xl">
              Having performed over 700,000 micro surgeries, PCLI is one of
              North America’s most trusted eyecare facilities.
            </p>
          </section>
        </div>

        <div>
          <ul className="relative flex justify-center px-10 text-sm z-20 [&>li]:bg-transparent [&>*:nth-child(even)]:-mt-6 [&>*:nth-child(even)]:w-[300px] [&>li>div]:px-4 [&>li]:w-[250px] [&>li>div]:bg-white [&>li>div>h3]:mb-2  [&>li>div>div>button]:bg-primary [&>li>div>div>button]:text-white [&>li>div>div>button]:uppercase [&>li>div>div>button]:px-4 [&>li>div>div>button]:py-1 [&>li>div>div>button]:rounded-[3px] [&>li>div>div>button]:text-nowrap [&>li>div>div>button]:mt-4 [&>*>img]:h-[380px] [&>li>div>div]:ml-6">
            <li className="flex">
              <div className="pt-14">
                <h3>Cataract Correction</h3>
                <div>
                  <p>See how we can help reclaim your good vision.</p>
                  <button>Learn more</button>
                </div>
              </div>
            </li>
            <li className="flex">
              <img src={BorderLeft} alt="" />
              <div className="pt-14">
                <h3>Laser Vision Correction</h3>
                <div>
                  <p>Discover how LASIK can change your life forever.</p>
                  <button>Learn more</button>{" "}
                </div>
              </div>
              <img src={BorderRight} alt="" />
            </li>
            <li className="flex">
              <div className="pt-14">
                <h3>LASIK Alternatives</h3>
                <div>
                  <p>
                    Explore other options if you are not a LASIK candidate.{" "}
                  </p>
                  <button>Learn more</button>
                </div>
              </div>
            </li>
            <li className="flex">
              <img src={BorderLeft} alt="" />

              <div className="pt-14">
                <h3>
                  Clear Lens Exchange
                  <span className="text-nowrap text-[18px] ml-2">(or RLE)</span>
                </h3>
                <div>
                  <p>See how tiny lens implants can provide visual freedom.</p>
                  <button>Learn more</button>
                </div>
              </div>
              <img src={BorderRight} alt="" />
            </li>
          </ul>
        </div>

        <section>
          <div className="m-[0 auto] flex items-center flex-col -mb-28 z-20 relative">
            <h2 className="text-primary">Why choose PLCI?</h2>
            <ul className="mt-8 flex gap-3 text-[10px] [&>li]:w-40 [&>li>b]:uppercase  [&>li]:text-center [&>li>p]:mt-2 [&>li>b]:text-[18px] [&>li]:flex [&>li]:flex-col [&>li]:items-center [&>li]:gap-1 [&>li>img]:w-10">
              <li>
                <img src={CheckIcon} alt="" />
                <b>Expertise</b>
                <p>
                  Our highly skilled specialists have a track record of success.
                  They draw on the combined experience of more than 100,000
                  LASIK procedures and 500,000 cataract-related surgeries.
                </p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <b>Trusted</b>
                <p>
                  97% of our patients say they are very likely to recommend us
                  to friends and colleagues.
                </p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <b>NFL Players</b>
                <p>
                  Numerous NFL players, spouses, and coaches have turned to PCLI
                  surgeons for LASIK vision correction.
                </p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <b>Reputation</b>
                <p>
                  More than 1,700 healthcare providers refer patients to us for
                  vision correction surgery.
                </p>
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                <b>Our care</b>
                <p>
                  When you entrust the care of your vision to PCLI, our team of
                  experts concentrates their skills on giving you the best
                  possible outcome.
                </p>
              </li>
            </ul>
          </div>
          <img src={BannerWoman} className="z-10" alt="" />
        </section>

        <section className="bg-dark-grey text-white p-16">
          <h3 className="text-primary text-center mb-6">Grateful patients</h3>
          <ul className="flex justify-center gap-4 [&>li]:flex [&>li]:w-[300px]  [&>li>div]:w-fit [&>li>div>b]:uppercase [&>li>div>b]:text-[13px]">
            <li>
              <QuotationMarkIcon />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed elit sit amet tellus.
                </p>
                <b>Location, HR</b>
              </div>
            </li>
            <li>
              <QuotationMarkIcon />

              <div>
                <p>
                  Lorem ipsum dolor sit aamet, consectetur adipiscing elit.
                  Quisque semet, consectetur adipiscing elit. Quisque sed elit
                  sit amet tellus.
                </p>
                <b>Location, HR</b>
              </div>
            </li>
            <li>
              <QuotationMarkIcon />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque sed elit sit amet tellus.
                </p>
                <b>Location, HR</b>
              </div>
            </li>
          </ul>
        </section>

        <div className="relative">
          <img src={Institute} alt="" className="min-w-full pt-40 mt-12" />
          <section className="absolute  top-[5%] left-[10%] w-[700px]  ml-14">
            <h1 className="max-w-[850px] leading-10">
              Let us help you see clearly.
            </h1>
            <p className="pt-6 pl-24 text-xl">
              From small-town roots in western Washington, PCLI has become one
              of the nation’s most trusted eye surgery providers. With 17
              locations in 6 states, we specialize in cataract surgery and LASIK
              laser vision correction. But we haven’t lost our small-town care.{" "}
              <br />
              We look forward to serving you.
            </p>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
