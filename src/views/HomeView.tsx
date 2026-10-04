// Ported from design-reference/design/Portfolio.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import ImageSlot from '@/components/ImageSlot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomeView({ v }: { v: any }) {
  return (
    <>
      <div data-screen-label="Homepage" style={{ position: "relative", minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", overflow: "clip" }}>
        {v.isDesk ? (
          <>
          <div data-view="desktop" style={{ position: "relative" }}>
            {" "}
            {v.showRuler ? (
              <>
              {" "}
              <div
                aria-hidden="true"
                style={{ position: "sticky", top: "0", zIndex: "60", height: "24px", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(to right,#c8c8c8 0 1px,transparent 1px 10px)", backgroundSize: "100% 5px", backgroundRepeat: "repeat-x", backgroundPosition: "0 100%", overflow: "hidden" }}
              >
                {" "}
                <div style={{ position: "relative", maxWidth: "1440px", height: "100%", margin: "0 auto" }}>
                  {" "}
                  {((v.rulerDesk ?? []) as any[]).map((r: any, i0: number) => (
                    <Fragment key={i0}>
                      {" "}
                      <span style={css(`position:absolute;top:5px;left:${r?.x ?? ""}px;font-size:8px;line-height:10px;color:#7a7a7a;transform:translateX(-50%)`)}>
                        {r?.n}
                      </span>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                  <div
                    data-rmark=""
                    style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "0", opacity: "0", pointerEvents: "none", transition: "opacity 0.15s ease" }}
                  >
                    {" "}
                    <span style={{ position: "absolute", left: "-0.5px", bottom: "0", width: "1px", height: "10px", background: "#0d99ff" }} />
                    {" "}
                    <span
                      data-rmark-label=""
                      style={{ position: "absolute", top: "4px", left: "0", transform: "translateX(-50%)", padding: "1px 4px", borderRadius: "2px", background: "#0d99ff", color: "#ffffff", fontSize: "8px", lineHeight: "10px", fontWeight: "600", whiteSpace: "nowrap" }}
                    >
                      0
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              </>
            ) : null}
            {" "}
            <section
              id="top"
              style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", paddingTop: "140px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "20px", lineHeight: "24px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
              >
                my name is
              </span>
              {" "}
              <div style={{ position: "relative", marginTop: "58px", border: "2px solid #63c4ec", padding: "7px 26px" }}>
                {" "}
                <h1 style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", letterSpacing: "-0.005em", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  Shiva Kumar
                </h1>
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div
                style={{ marginTop: "21px", display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", lineHeight: "16px", fontWeight: "500", letterSpacing: "0.08em", color: "#f5f5f5" }}
              >
                {" "}
                <span data-blip="" style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", background: "#2fd46f" }}>
                  <span data-blip-ring="" style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "#2fd46f", opacity: "0" }} />
                </span>
                {" "}
                <span>
                  AVAILABLE FOR THOUGHTFUL PROJECTS
                </span>
                {" "}
              </div>
              {" "}
              <p style={{ margin: "78px 0 0", fontSize: "40px", lineHeight: "50px", fontWeight: "300", textAlign: "center", whiteSpace: "nowrap", color: "#f5f5f5" }}>
                I design{" "}
                <img
                  src={asset("/assets/home/pinwheel-green.png")}
                  alt=""
                  style={{ display: "inline-block", maxWidth: "none", width: "46px", height: "46px", verticalAlign: "-10px", margin: "0 -2px" }}
                />
                {" "}outstanding
                <br />
                digital products{" "}
                <img
                  data-spin=""
                  src={asset("/assets/home/flower-pink.png")}
                  alt=""
                  style={{ display: "inline-block", maxWidth: "none", width: "58px", height: "58px", verticalAlign: "-18px", marginLeft: "-4px" }}
                />
              </p>
              {" "}
              <a
                data-shimmer=""
                data-lmbtn=""
                href="#contact"
                style={{ position: "relative", overflow: "hidden", marginTop: "43px", display: "flex", padding: "2px", boxSizing: "border-box", height: "45px", borderRadius: "999px", background: "#bdbdbd", textDecoration: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.5),0 8px 24px rgba(255,255,255,0.08)" }}
                className="home-hover-0"
              >
                <span
                  data-lm=""
                  aria-hidden="true"
                  style={{ position: "absolute", left: "50%", top: "50%", width: "300px", height: "300px", margin: "-150px 0 0 -150px", background: "conic-gradient(from 0deg,#ffffff,#7d7d82,#f4f4f6,#4a4a4f,#e2e2e6,#9b9ba0,#ffffff,#6a6a70,#ffffff)", filter: "blur(3px)", pointerEvents: "none" }}
                />
                <span
                  style={{ position: "relative", overflow: "hidden", flex: "1", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", padding: "0 20px", borderRadius: "999px", background: "linear-gradient(180deg,#ffffff 0%,#f1f1f3 55%,#dedee2 100%)", color: "#1c1c1c", fontSize: "13px", fontWeight: "700", letterSpacing: "0.06em", boxShadow: "inset 0 1px 0 rgba(255,255,255,1),inset 0 -1px 2px rgba(0,0,0,0.18)" }}
                >
                  <span
                    data-shine=""
                    aria-hidden="true"
                    style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                  />
                  <span style={{ position: "relative" }}>
                    CONTACT ME
                  </span>
                  <svg data-ring="" style={{ position: "relative" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
                    />
                  </svg>
                </span>
              </a>
              {" "}
              <div data-float="1" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% - 336px)", top: "296px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 4 4 10.5l6.5 2.9L13.4 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% - 500px)", top: "314px", height: "37px", padding: "0 18px", display: "flex", alignItems: "center", background: "#f7d158", color: "#1c1c1c", fontSize: "14px", fontWeight: "500", borderRadius: "999px 0 999px 999px", boxShadow: "0 0 14px rgba(247,209,88,0.45)" }}
                  >
                    Currently in Airtel
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
              <div data-float="2" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% + 187px)", top: "339px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l16 6.5-6.5 2.9L10.6 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% + 201px)", top: "357px", height: "39px", padding: "0 18px", display: "flex", alignItems: "center", background: "#e0258f", color: "#ffffff", fontSize: "14px", fontWeight: "500", borderRadius: "0 999px 999px 999px", boxShadow: "0 0 14px rgba(224,37,143,0.45)" }}
                  >
                    Product Designer
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
              <div data-float="3" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% + 215px)", top: "513px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l16 6.5-6.5 2.9L10.6 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% + 228px)", top: "529px", height: "39px", padding: "0 18px", display: "flex", alignItems: "center", background: "#51ac65", color: "#ffffff", fontSize: "14px", fontWeight: "500", borderRadius: "0 999px 999px 999px", boxShadow: "0 0 14px rgba(81,172,101,0.45)" }}
                  >
                    Gurugram
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
            </section>
            {" "}
            <section
              id="about"
              style={{ position: "relative", maxWidth: "1440px", margin: "302px auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <div
                style={{ position: "absolute", left: "calc(50% - 621px)", top: "131px", width: "256px", height: "349px", transform: "rotate(-12deg)", borderRadius: "14px", overflow: "hidden", boxShadow: "0 18px 40px rgba(0,0,0,0.45)", background: "#f0f0f0" }}
              >
                {" "}
                <ImageSlot id="home-about-1" shape="rounded" radius="14" placeholder="Drop a photo" style={{ width: "100%", height: "100%" }} />
                {" "}
              </div>
              {" "}
              <div
                style={{ position: "absolute", left: "calc(50% + 393px)", top: "161px", width: "254px", height: "350px", transform: "rotate(4deg)", borderRadius: "14px", overflow: "hidden", boxShadow: "0 18px 40px rgba(0,0,0,0.45)", background: "#f0f0f0" }}
              >
                {" "}
                <ImageSlot id="home-about-2" shape="rounded" radius="14" placeholder="Drop a photo" style={{ width: "100%", height: "100%" }} />
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "23px 31px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "36px", lineHeight: "44px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  what’s up
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-10px", top: "-10px", width: "18px", height: "18px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-10px", top: "-10px", width: "18px", height: "18px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-10px", bottom: "-10px", width: "18px", height: "18px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-10px", bottom: "-10px", width: "18px", height: "18px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <p
                style={{ position: "relative", margin: "42px 0 0", fontSize: "56px", lineHeight: "73px", fontWeight: "500", textAlign: "center", color: "#f5f5f5" }}
                data-line-reveal="1"
              >
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    I am Shiva a Product
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    Designer in Gurugram
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    who gets excited
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    about making
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    complicated things
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    simple
                  </span>
                </span>
              </p>
              {" "}
            </section>
            {" "}
            <section id="work" style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "325px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
              >
                explore my work
              </span>
              {" "}
              <div style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  Featured Works
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div data-stack="60,22" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", marginTop: "125px", display: "flex", flexDirection: "column", gap: "80px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "104px", paddingLeft: "16px", boxSizing: "border-box", background: "#22bde8", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 01
                  </span>
                  {" "}
                  <div style={{ position: "relative", alignSelf: "stretch", background: "#22bde8", padding: "31px 30px 154px" }}>
                    {" "}
                    <div style={{ maxWidth: "min(460px,calc(51% - 40px))", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "60px", lineHeight: "72px", fontWeight: "400", letterSpacing: "-0.01em", color: "#0f1d24" }}>
                        Engage X
                      </h3>
                      {" "}
                      <p style={{ margin: "13px 0 0", fontSize: "20px", lineHeight: "24px", fontWeight: "400", color: "#0f1d24" }}>
                        A unified campaign lifecycle manager
                      </p>
                      {" "}
                      <a
                        href={href("/work/engage-x/")}
                        style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#22bde8", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "19px", bottom: "19px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#22bde8", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        MARTECH
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#22bde8", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        CPAAS
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div
                      style={{ position: "absolute", top: "17px", right: "11px", bottom: "17px", width: "48.85%", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <img
                        src={asset("/assets/home/engage.jpg")}
                        alt="Engage X dashboard on a laptop"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "104px", paddingLeft: "16px", boxSizing: "border-box", background: "#dd3732", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 02
                  </span>
                  {" "}
                  <div style={{ position: "relative", alignSelf: "stretch", background: "#dd3732", padding: "31px 30px 154px" }}>
                    {" "}
                    <div style={{ maxWidth: "min(460px,calc(51% - 40px))", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "60px", lineHeight: "72px", fontWeight: "400", letterSpacing: "-0.01em", color: "#0f1d24" }}>
                        DTH Price Simplification
                      </h3>
                      {" "}
                      <p style={{ margin: "13px 0 0", fontSize: "20px", lineHeight: "24px", fontWeight: "400", color: "#0f1d24" }}>
                        Clearer DTH packs, priced so they compare
                      </p>
                      {" "}
                      <a
                        href={href("/work/dth-price-simplification/")}
                        style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#dd3732", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "19px", bottom: "19px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#dd3732", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        TELCO
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#dd3732", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        B2C
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div
                      style={{ position: "absolute", top: "17px", right: "11px", bottom: "17px", width: "48.85%", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <img
                        src={asset("/assets/home/dth.jpg")}
                        alt="TV showing Netflix in a dark room"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "104px", paddingLeft: "16px", boxSizing: "border-box", background: "#51ac65", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 03
                  </span>
                  {" "}
                  <div style={{ position: "relative", alignSelf: "stretch", background: "#51ac65", padding: "31px 30px 154px" }}>
                    {" "}
                    <div style={{ maxWidth: "min(460px,calc(51% - 40px))", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "60px", lineHeight: "72px", fontWeight: "400", letterSpacing: "-0.01em", color: "#0f1d24" }}>
                        Bijak Web Design System
                      </h3>
                      {" "}
                      <p style={{ margin: "13px 0 0", fontSize: "20px", lineHeight: "24px", fontWeight: "400", color: "#0f1d24" }}>
                        Foundations and components for Bijak on the web
                      </p>
                      {" "}
                      <a
                        href={href("/work/bijak-design-system/")}
                        style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#51ac65", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "19px", bottom: "19px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#51ac65", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        DESIGN SYSTEM
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#51ac65", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        AGRITECH
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div
                      style={{ position: "absolute", top: "17px", right: "11px", bottom: "17px", width: "48.85%", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <img
                        src={asset("/assets/home/bijak.jpg")}
                        alt="Design system components on a tablet and monitor"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "104px", paddingLeft: "16px", boxSizing: "border-box", background: "#f26667", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 04
                  </span>
                  {" "}
                  <div style={{ position: "relative", alignSelf: "stretch", background: "#f26667", padding: "31px 30px 154px" }}>
                    {" "}
                    <div style={{ maxWidth: "min(460px,calc(51% - 40px))", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "60px", lineHeight: "72px", fontWeight: "400", letterSpacing: "-0.01em", color: "#0f1d24" }}>
                        Toffee Seller App
                      </h3>
                      {" "}
                      <p style={{ margin: "13px 0 0", fontSize: "20px", lineHeight: "24px", fontWeight: "400", color: "#0f1d24" }}>
                        Insurance App for cycle insurance
                      </p>
                      {" "}
                      <a
                        href={href("/work/toffee-seller-app/")}
                        style={{ marginTop: "24px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#f26667", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ position: "absolute", left: "19px", bottom: "19px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f26667", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        REVAMP
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f26667", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        INSURETECH
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div
                      style={{ position: "absolute", top: "17px", right: "11px", bottom: "17px", width: "48.85%", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}
                    >
                      <img
                        src={asset("/assets/home/toffee.jpg")}
                        alt="Toffee seller app on a phone"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="claude" style={{ position: "relative", marginTop: "290px", background: "#d97757", padding: "52px 0 44px" }}>
              {" "}
              <div
                data-mascot=""
                aria-label="Claude mascot waving hello"
                role="img"
                style={{ position: "absolute", bottom: "100%", left: "min(calc(50% + 300px), calc(100% - 260px))", zIndex: "2", flex: "none", width: "170px", paddingTop: "48px" }}
              >
                {" "}
                <div
                  data-bubble=""
                  style={{ position: "absolute", top: "0", left: "105px", background: "#ffffff", color: "#1c1c1c", border: "2px solid #1c1c1c", padding: "6px 12px", fontSize: "15px", lineHeight: "1.2", fontWeight: "700", whiteSpace: "nowrap", transformOrigin: "0% 100%", boxShadow: "3px 3px 0 #1c1c1c" }}
                >
                  Hello!
                  <span
                    style={{ position: "absolute", left: "8px", bottom: "-8px", width: "8px", height: "8px", background: "#ffffff", borderLeft: "2px solid #1c1c1c", borderBottom: "2px solid #1c1c1c", boxSizing: "content-box", transform: "translateY(-3px) skewY(-45deg)" }}
                  />
                </div>
                {" "}
                <svg data-bob="" viewBox="0 0 18 11" width="170" height="104" shapeRendering="crispEdges" style={{ display: "block", overflow: "visible" }}>
                  {" "}
                  <rect x="2" y="0" width="12" height="8" fill="#c15f3c" />
                  {" "}
                  <rect x="0" y="3" width="2" height="2" fill="#c15f3c" />
                  {" "}
                  <g data-wave="" style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}>
                    <rect x="14" y="3" width="2.4" height="2" fill="#c15f3c" />
                  </g>
                  {" "}
                  <rect x="5" y="2" width="1" height="2" fill="#1c1c1c" />
                  {" "}
                  <rect x="10" y="2" width="1" height="2" fill="#1c1c1c" />
                  {" "}
                  <rect x="3" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="5" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="10" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="12" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <div style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "0 auto" }}>
                {" "}
                <img src={asset("/assets/home/claude-code-logo.png")} alt="Claude Code" style={{ display: "block", width: "437px", height: "auto" }} />
                {" "}
                <p style={{ margin: "29px 0 0", fontSize: "14px", lineHeight: "18px", fontWeight: "600", color: "#ffffff" }}>
                  Tools and Prototypes I build with Claude Code
                </p>
                {" "}
                <div style={{ marginTop: "67px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "19px" }}>
                  {" "}
                  <a
                    href={href("/work/akhbar-bash/")}
                    aria-label="Akhbar Bash — case study"
                    data-shimmer=""
                    style={{ position: "relative", display: "block", height: "290px", borderRadius: "8px", overflow: "hidden" }}
                  >
                    <img
                      src={asset("/assets/home/claude-1.jpg")}
                      alt="Hands playing a game on a phone"
                      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      data-shine=""
                      aria-hidden="true"
                      style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                    />
                    <span
                      data-hover-label=""
                      aria-hidden="true"
                      style={{ position: "absolute", left: "16px", bottom: "16px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", opacity: "0", transform: "translateY(6px)", transition: "opacity .25s ease,transform .25s ease", pointerEvents: "none" }}
                    >
                      VIEW PROJECT{" "}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  {" "}
                  <a
                    href={href("/work/jugnu/")}
                    aria-label="Jugnu — case study"
                    data-shimmer=""
                    style={{ position: "relative", display: "block", height: "290px", borderRadius: "8px", overflow: "hidden" }}
                  >
                    <img
                      src={asset("/assets/home/claude-2.jpg")}
                      alt="Toy robot in front of an orange light"
                      style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      data-shine=""
                      aria-hidden="true"
                      style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                    />
                    <span
                      data-hover-label=""
                      aria-hidden="true"
                      style={{ position: "absolute", left: "16px", bottom: "16px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", opacity: "0", transform: "translateY(6px)", transition: "opacity .25s ease,transform .25s ease", pointerEvents: "none" }}
                    >
                      VIEW PROJECT{" "}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="experience" style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
              >
                Where I have been
              </span>
              {" "}
              <div style={{ position: "relative", marginTop: "50px", border: "2px solid #63c4ec", padding: "21px 60px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", whiteSpace: "nowrap" }}>
                  9 Years Of
                  <br />
                  Shipped Work
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ width: "calc(100% - 64px)", maxWidth: "1040px", marginTop: "123px", display: "flex", flexDirection: "column" }}>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 265px 122px", columnGap: "40px", alignItems: "center", height: "122px" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <span style={{ fontSize: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Airtel
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      5 Projects
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5" }}>
                    Lead Experience Designer
                  </span>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5", textAlign: "right" }}>
                    2021 — Now
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 265px 122px", columnGap: "40px", alignItems: "center", height: "122px", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <span style={{ fontSize: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Bijak
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      3 Projects
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5" }}>
                    Senior Product Designer
                  </span>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5", textAlign: "right" }}>
                    2019 — 2021
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 265px 122px", columnGap: "40px", alignItems: "center", height: "122px", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <span style={{ fontSize: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Toffee Insurance
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      2 Projects
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5" }}>
                    Senior UI/UX Designer
                  </span>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5", textAlign: "right" }}>
                    2018 — 2019
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 265px 122px", columnGap: "40px", alignItems: "center", height: "122px", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <span style={{ fontSize: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      BYO
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      1 Projects
                    </span>
                  </div>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5" }}>
                    Senior UI/UX Designer
                  </span>
                  {" "}
                  <span style={{ fontSize: "16px", fontWeight: "500", color: "#f5f5f5", textAlign: "right" }}>
                    2018 — 2019
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section
              id="contact"
              style={{ maxWidth: "1440px", margin: "0 auto", padding: "244px 0 224px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "23px 47px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  Let’s Talk
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ width: "calc(100% - 64px)", maxWidth: "1040px", marginTop: "102px", display: "grid", gridTemplateColumns: "minmax(0,530fr) minmax(0,510fr)" }}>
                {" "}
                <div style={{ padding: "256px 0 0 88px" }}>
                  {" "}
                  <div aria-hidden="true" style={{ width: "333px", height: "333px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
                    {" "}
                    <span style={{ background: "#f7d158", borderBottomLeftRadius: "100%" }} />
                    {" "}
                    <span style={{ background: "#f7d158", borderTopLeftRadius: "100%" }} />
                    {" "}
                    <span style={{ background: "#f7d158", borderBottomRightRadius: "100%" }} />
                    {" "}
                    <span style={{ background: "#f7d158", borderTopRightRadius: "100%" }} />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <p style={{ margin: "0", fontSize: "20px", lineHeight: "27px", fontWeight: "500", color: "#f5f5f5" }}>
                    I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
                  </p>
                  {" "}
                  <form
                    onSubmit={v.onSubmit}
                    noValidate
                    style={{ marginTop: "36px", background: "#51ac65", borderRadius: "8px", padding: "34px 32px 32px", display: "flex", flexDirection: "column" }}
                  >
                    {" "}
                    <label htmlFor="cf-name-d" style={{ fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                      YOUR NAME
                    </label>
                    {" "}
                    <input
                      id="cf-name-d"
                      name="name"
                      type="text"
                      autoComplete="name"
                      style={{ marginTop: "13px", height: "50px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                      className="home-focus-1"
                    />
                    {" "}
                    <label htmlFor="cf-email-d" style={{ marginTop: "27px", fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                      YOUR EMAIL
                    </label>
                    {" "}
                    <input
                      id="cf-email-d"
                      name="email"
                      type="email"
                      autoComplete="email"
                      style={{ marginTop: "13px", height: "50px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                      className="home-focus-1"
                    />
                    {" "}
                    <label htmlFor="cf-msg-d" style={{ marginTop: "27px", fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                      IDEAS/PROJECTS DESCRIPTION
                    </label>
                    {" "}
                    <textarea
                      id="cf-msg-d"
                      name="message"
                      style={{ marginTop: "13px", height: "197px", padding: "12px 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", lineHeight: "1.4", resize: "none", outline: "none" }}
                      className="home-focus-1"
                    />
                    {" "}
                    <button
                      type="submit"
                      style={{ marginTop: "42px", height: "45px", border: "0", borderRadius: "4px", background: "#ffffff", color: "#1c1c1c", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", cursor: "pointer" }}
                      className="home-hover-2"
                    >
                      SUBMIT
                    </button>
                    {" "}
                    {v.hasNote ? (
                      <>
                      <p style={{ margin: "14px 0 0", fontSize: "13px", lineHeight: "18px", color: "#ffffff" }}>
                        {v.cfNote}
                      </p>
                      </>
                    ) : null}
                    {" "}
                  </form>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
          </div>
          </>
        ) : null}
        {v.isMob ? (
          <>
          <div data-view="mobile" style={{ position: "relative" }}>
            {" "}
            {v.showRuler ? (
              <>
              {" "}
              <div
                aria-hidden="true"
                style={{ position: "sticky", top: "0", zIndex: "60", height: "24px", backgroundColor: "#ffffff", backgroundImage: "repeating-linear-gradient(to right,#c8c8c8 0 1px,transparent 1px 10px)", backgroundSize: "100% 5px", backgroundRepeat: "repeat-x", backgroundPosition: "0 100%", overflow: "hidden" }}
              >
                {" "}
                {((v.rulerMob ?? []) as any[]).map((r: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <span style={css(`position:absolute;top:6px;left:${r?.x ?? ""};font-size:8px;line-height:10px;color:#7a7a7a;transform:translateX(-50%)`)}>
                      {r?.n}
                    </span>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              </>
            ) : null}
            {" "}
            <section id="top" style={{ position: "relative", paddingTop: "86px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "14px", lineHeight: "18px", fontWeight: "500", padding: "4px 9px", transform: "rotate(-4deg)" }}
              >
                my name is
              </span>
              {" "}
              <div style={{ position: "relative", marginTop: "23px", border: "2px solid #63c4ec", padding: "15px 24px" }}>
                {" "}
                <h1 style={{ margin: "0", fontSize: "42px", lineHeight: "49px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  Shiva Kumar
                </h1>
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div
                style={{ marginTop: "23px", display: "flex", alignItems: "center", gap: "8px", fontSize: "10.5px", lineHeight: "14px", fontWeight: "500", letterSpacing: "0.08em", color: "#f5f5f5" }}
              >
                {" "}
                <span data-blip="" style={{ position: "relative", width: "8px", height: "8px", borderRadius: "50%", background: "#2fd46f" }}>
                  <span data-blip-ring="" style={{ position: "absolute", inset: "0", borderRadius: "50%", background: "#2fd46f", opacity: "0" }} />
                </span>
                {" "}
                <span>
                  AVAILABLE FOR THOUGHTFUL PROJECTS
                </span>
                {" "}
              </div>
              {" "}
              <p style={{ margin: "57px 0 0", fontSize: "28px", lineHeight: "38px", fontWeight: "300", textAlign: "center", whiteSpace: "nowrap", color: "#f5f5f5" }}>
                I design{" "}
                <img
                  src={asset("/assets/home/pinwheel-green.png")}
                  alt=""
                  style={{ display: "inline-block", maxWidth: "none", width: "36px", height: "36px", verticalAlign: "-9px", margin: "0 -2px" }}
                />
                {" "}outstanding
                <br />
                digital products{" "}
                <img
                  data-spin=""
                  src={asset("/assets/home/flower-pink.png")}
                  alt=""
                  style={{ display: "inline-block", maxWidth: "none", width: "46px", height: "46px", verticalAlign: "-15px", marginLeft: "-3px" }}
                />
              </p>
              {" "}
              <a
                data-shimmer=""
                data-lmbtn=""
                href="#contact"
                style={{ position: "relative", overflow: "hidden", marginTop: "43px", display: "flex", padding: "2px", boxSizing: "border-box", height: "45px", borderRadius: "999px", background: "#bdbdbd", textDecoration: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.5),0 8px 24px rgba(255,255,255,0.08)" }}
                className="home-hover-0"
              >
                <span
                  data-lm=""
                  aria-hidden="true"
                  style={{ position: "absolute", left: "50%", top: "50%", width: "300px", height: "300px", margin: "-150px 0 0 -150px", background: "conic-gradient(from 0deg,#ffffff,#7d7d82,#f4f4f6,#4a4a4f,#e2e2e6,#9b9ba0,#ffffff,#6a6a70,#ffffff)", filter: "blur(3px)", pointerEvents: "none" }}
                />
                <span
                  style={{ position: "relative", overflow: "hidden", flex: "1", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", padding: "0 20px", borderRadius: "999px", background: "linear-gradient(180deg,#ffffff 0%,#f1f1f3 55%,#dedee2 100%)", color: "#1c1c1c", fontSize: "13px", fontWeight: "700", letterSpacing: "0.06em", boxShadow: "inset 0 1px 0 rgba(255,255,255,1),inset 0 -1px 2px rgba(0,0,0,0.18)" }}
                >
                  <span
                    data-shine=""
                    aria-hidden="true"
                    style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                  />
                  <span style={{ position: "relative" }}>
                    CONTACT ME
                  </span>
                  <svg data-ring="" style={{ position: "relative" }} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path
                      d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
                    />
                  </svg>
                </span>
              </a>
              {" "}
              <div data-float="4" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% - 57px)", top: "263px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l16 6.5-6.5 2.9L10.6 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% - 191px)", top: "273px", height: "39px", padding: "0 14px", display: "flex", alignItems: "center", background: "#f7d158", color: "#1c1c1c", fontSize: "13px", fontWeight: "500", borderRadius: "999px 0 999px 999px", boxShadow: "0 0 14px rgba(247,209,88,0.45)" }}
                  >
                    Currently in Airtel
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
              <div data-float="5" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% + 49px)", top: "393px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l16 6.5-6.5 2.9L10.6 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% + 64px)", top: "409px", height: "39px", padding: "0 16px", display: "flex", alignItems: "center", background: "#51ac65", color: "#ffffff", fontSize: "13px", fontWeight: "500", borderRadius: "0 999px 999px 999px", boxShadow: "0 0 14px rgba(81,172,101,0.45)" }}
                  >
                    Gurugram
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
              <div data-float="6" style={{ position: "absolute", inset: "0", pointerEvents: "none" }}>
                <div data-repel="" style={{ position: "absolute", inset: "0", willChange: "transform" }}>
                  {" "}
                  <svg
                    style={{ position: "absolute", left: "calc(50% - 10px)", top: "520px" }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1c1c1c"
                    stroke="#f5f5f5"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4l16 6.5-6.5 2.9L10.6 20z" />
                  </svg>
                  {" "}
                  <span
                    style={{ position: "absolute", left: "calc(50% + 5px)", top: "536px", height: "39px", padding: "0 16px", display: "flex", alignItems: "center", background: "#e0258f", color: "#ffffff", fontSize: "13px", fontWeight: "500", borderRadius: "0 999px 999px 999px", boxShadow: "0 0 14px rgba(224,37,143,0.45)" }}
                  >
                    Product Designer
                  </span>
                  {" "}
                </div>
              </div>
              {" "}
            </section>
            {" "}
            <section id="about" style={{ position: "relative", marginTop: "162px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "17px 26px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  what’s up
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <p
                style={{ margin: "35px 0 0", padding: "0 20px", fontSize: "38px", lineHeight: "49px", fontWeight: "500", textAlign: "center", color: "#f5f5f5" }}
                data-line-reveal="1"
              >
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    I am Shiva a
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    Product
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    Designer in
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    Gurugram
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    who gets excited
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    about making
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    complicated
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    things
                  </span>
                </span>
                <span style={{ display: "block", overflow: "hidden" }}>
                  <span data-line="1" style={{ display: "block" }}>
                    simple
                  </span>
                </span>
              </p>
              {" "}
              <div style={{ position: "relative", alignSelf: "stretch", height: "280px", marginTop: "17px" }}>
                {" "}
                <div
                  style={{ position: "absolute", left: "calc(50% - 206px)", top: "10px", width: "180px", height: "252px", transform: "rotate(-6deg)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 14px 30px rgba(0,0,0,0.45)", background: "#f0f0f0" }}
                >
                  {" "}
                  <ImageSlot id="home-about-1" shape="rounded" radius="12" placeholder="Drop a photo" style={{ width: "100%", height: "100%" }} />
                  {" "}
                </div>
                {" "}
                <div
                  style={{ position: "absolute", left: "calc(50% + 22px)", top: "10px", width: "180px", height: "252px", transform: "rotate(5deg)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 14px 30px rgba(0,0,0,0.45)", background: "#f0f0f0" }}
                >
                  {" "}
                  <ImageSlot id="home-about-2" shape="rounded" radius="12" placeholder="Drop a photo" style={{ width: "100%", height: "100%" }} />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="work" style={{ paddingTop: "167px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "16px", lineHeight: "20px", fontWeight: "500", padding: "3px 10px", transform: "rotate(5deg)" }}
              >
                explore my work
              </span>
              {" "}
              <div style={{ position: "relative", marginTop: "17px", border: "2px solid #63c4ec", padding: "22px 32px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "42px", lineHeight: "49px", fontWeight: "600", color: "#f5f5f5", textAlign: "center" }}>
                  Featured
                  <br />
                  Works
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div data-stack="40,12" style={{ alignSelf: "stretch", margin: "82px 20px 0", display: "flex", flexDirection: "column", gap: "61px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "102px", paddingLeft: "16px", boxSizing: "border-box", background: "#22bde8", color: "#0f1d24", fontSize: "8px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 01
                  </span>
                  {" "}
                  <div style={{ alignSelf: "stretch", background: "#22bde8", padding: "30px 11px 11px" }}>
                    {" "}
                    <div style={{ paddingLeft: "19px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "32px", lineHeight: "40px", fontWeight: "400", color: "#0f1d24" }}>
                        Engage X
                      </h3>
                      {" "}
                      <p style={{ margin: "11px 0 0", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#0f1d24" }}>
                        A unified campaign lifecycle manager
                      </p>
                      {" "}
                      <a
                        href={href("/work/engage-x/")}
                        style={{ marginTop: "23px", display: "inline-flex", alignItems: "center", gap: "10px", height: "41px", padding: "0 12px", background: "#0f1d24", color: "#22bde8", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ margin: "70px 0 0 9px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#22bde8", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        MARTECH
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#22bde8", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        CPAAS
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ marginTop: "37px", height: "180px", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}>
                      <img
                        src={asset("/assets/home/engage.jpg")}
                        alt="Engage X dashboard on a laptop"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "102px", paddingLeft: "16px", boxSizing: "border-box", background: "#dd3732", color: "#0f1d24", fontSize: "8px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 02
                  </span>
                  {" "}
                  <div style={{ alignSelf: "stretch", background: "#dd3732", padding: "30px 11px 11px" }}>
                    {" "}
                    <div style={{ paddingLeft: "19px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "32px", lineHeight: "40px", fontWeight: "400", color: "#0f1d24" }}>
                        DTH Price
                        <br />
                        Simplification
                      </h3>
                      {" "}
                      <p style={{ margin: "11px 0 0", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#0f1d24" }}>
                        Clearer DTH packs, priced so they compare
                      </p>
                      {" "}
                      <a
                        href={href("/work/dth-price-simplification/")}
                        style={{ marginTop: "23px", display: "inline-flex", alignItems: "center", gap: "10px", height: "41px", padding: "0 12px", background: "#0f1d24", color: "#dd3732", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ margin: "70px 0 0 9px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#dd3732", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        TELCO
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#dd3732", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        B2C
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ marginTop: "37px", height: "180px", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}>
                      <img
                        src={asset("/assets/home/dth.jpg")}
                        alt="TV showing Netflix in a dark room"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "102px", paddingLeft: "16px", boxSizing: "border-box", background: "#51ac65", color: "#0f1d24", fontSize: "8px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 03
                  </span>
                  {" "}
                  <div style={{ alignSelf: "stretch", background: "#51ac65", padding: "30px 11px 11px" }}>
                    {" "}
                    <div style={{ paddingLeft: "19px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "32px", lineHeight: "40px", fontWeight: "400", color: "#0f1d24" }}>
                        Bijak Web Design
                        <br />
                        System
                      </h3>
                      {" "}
                      <p style={{ margin: "11px 0 0", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#0f1d24" }}>
                        Foundations and components for Bijak on the web
                      </p>
                      {" "}
                      <a
                        href={href("/work/bijak-design-system/")}
                        style={{ marginTop: "23px", display: "inline-flex", alignItems: "center", gap: "10px", height: "41px", padding: "0 12px", background: "#0f1d24", color: "#51ac65", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ margin: "70px 0 0 9px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#51ac65", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        DESIGN SYSTEM
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#51ac65", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        AGRITECH
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ marginTop: "37px", height: "180px", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}>
                      <img
                        src={asset("/assets/home/bijak.jpg")}
                        alt="Design system components on a tablet and monitor"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  {" "}
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", width: "102px", paddingLeft: "16px", boxSizing: "border-box", background: "#f26667", color: "#0f1d24", fontSize: "8px", fontWeight: "700", letterSpacing: "0.08em" }}
                  >
                    PROJECT 04
                  </span>
                  {" "}
                  <div style={{ alignSelf: "stretch", background: "#f26667", padding: "30px 11px 11px" }}>
                    {" "}
                    <div style={{ paddingLeft: "19px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      {" "}
                      <h3 style={{ margin: "0", fontSize: "32px", lineHeight: "40px", fontWeight: "400", color: "#0f1d24" }}>
                        Toffee Seller App
                      </h3>
                      {" "}
                      <p style={{ margin: "11px 0 0", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#0f1d24" }}>
                        Insurance App for cycle insurance
                      </p>
                      {" "}
                      <a
                        href={href("/work/toffee-seller-app/")}
                        style={{ marginTop: "23px", display: "inline-flex", alignItems: "center", gap: "10px", height: "41px", padding: "0 12px", background: "#0f1d24", color: "#f26667", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                      >
                        VIEW PROJECT{" "}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ margin: "70px 0 0 9px", display: "flex", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f26667", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        REVAMP
                      </span>
                      {" "}
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 8px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f26667", fontSize: "9px", fontWeight: "500", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        INSURETECH
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ marginTop: "37px", height: "180px", border: "2px solid #0f1d24", boxSizing: "border-box", overflow: "hidden" }}>
                      <img
                        src={asset("/assets/home/toffee.jpg")}
                        alt="Toffee seller app on a phone"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="claude" style={{ position: "relative", marginTop: "161px", background: "#d97757", padding: "47px 20px 42px" }}>
              {" "}
              <div
                data-mascot=""
                aria-label="Claude mascot waving hello"
                role="img"
                style={{ position: "absolute", bottom: "100%", right: "28px", zIndex: "2", flex: "none", width: "96px", paddingTop: "34px" }}
              >
                {" "}
                <div
                  data-bubble=""
                  style={{ position: "absolute", top: "0", left: "60px", background: "#ffffff", color: "#1c1c1c", border: "2px solid #1c1c1c", padding: "4px 8px", fontSize: "12px", lineHeight: "1.2", fontWeight: "700", whiteSpace: "nowrap", transformOrigin: "0% 100%", boxShadow: "3px 3px 0 #1c1c1c" }}
                >
                  Hello!
                  <span
                    style={{ position: "absolute", left: "8px", bottom: "-8px", width: "8px", height: "8px", background: "#ffffff", borderLeft: "2px solid #1c1c1c", borderBottom: "2px solid #1c1c1c", boxSizing: "content-box", transform: "translateY(-3px) skewY(-45deg)" }}
                  />
                </div>
                {" "}
                <svg data-bob="" viewBox="0 0 18 11" width="96" height="59" shapeRendering="crispEdges" style={{ display: "block", overflow: "visible" }}>
                  {" "}
                  <rect x="2" y="0" width="12" height="8" fill="#c15f3c" />
                  {" "}
                  <rect x="0" y="3" width="2" height="2" fill="#c15f3c" />
                  {" "}
                  <g data-wave="" style={{ transformBox: "fill-box", transformOrigin: "0% 50%" }}>
                    <rect x="14" y="3" width="2.4" height="2" fill="#c15f3c" />
                  </g>
                  {" "}
                  <rect x="5" y="2" width="1" height="2" fill="#1c1c1c" />
                  {" "}
                  <rect x="10" y="2" width="1" height="2" fill="#1c1c1c" />
                  {" "}
                  <rect x="3" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="5" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="10" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                  <rect x="12" y="8" width="1" height="3" fill="#c15f3c" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <img src={asset("/assets/home/claude-code-logo.png")} alt="Claude Code" style={{ display: "block", width: "205px", height: "auto" }} />
              {" "}
              <p style={{ margin: "25px 0 0", fontSize: "13px", lineHeight: "18px", fontWeight: "600", color: "#ffffff" }}>
                Tools and Prototypes I build with Claude Code
              </p>
              {" "}
              <div style={{ marginTop: "39px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {" "}
                <a
                  href={href("/work/akhbar-bash/")}
                  aria-label="Akhbar Bash — case study"
                  data-shimmer=""
                  style={{ position: "relative", display: "block", height: "298px", borderRadius: "8px", overflow: "hidden" }}
                >
                  <img
                    src={asset("/assets/home/claude-1.jpg")}
                    alt="Hands playing a game on a phone"
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
                    data-shine=""
                    aria-hidden="true"
                    style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                  />
                  <span
                    data-hover-label=""
                    aria-hidden="true"
                    style={{ position: "absolute", left: "16px", bottom: "16px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", opacity: "1", transform: "translateY(0px)", transition: "opacity .25s ease,transform .25s ease", pointerEvents: "none" }}
                  >
                    VIEW PROJECT{" "}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
                {" "}
                <a
                  href={href("/work/jugnu/")}
                  aria-label="Jugnu — case study"
                  data-shimmer=""
                  style={{ position: "relative", display: "block", height: "298px", borderRadius: "8px", overflow: "hidden" }}
                >
                  <img
                    src={asset("/assets/home/claude-2.jpg")}
                    alt="Toy robot in front of an orange light"
                    style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <span
                    data-shine=""
                    aria-hidden="true"
                    style={{ position: "absolute", top: "0", bottom: "0", left: "0", width: "60%", background: "linear-gradient(100deg,transparent 0%,rgba(99,196,236,0) 20%,rgba(99,196,236,0.55) 50%,rgba(99,196,236,0) 80%,transparent 100%)", transform: "translateX(-120%) skewX(-18deg)", pointerEvents: "none" }}
                  />
                  <span
                    data-hover-label=""
                    aria-hidden="true"
                    style={{ position: "absolute", left: "16px", bottom: "16px", display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", opacity: "1", transform: "translateY(0px)", transition: "opacity .25s ease,transform .25s ease", pointerEvents: "none" }}
                  >
                    VIEW PROJECT{" "}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="experience" style={{ padding: "169px 20px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "16px", lineHeight: "20px", fontWeight: "500", padding: "4px 10px", transform: "rotate(2deg)" }}
              >
                Where I have been
              </span>
              {" "}
              <div style={{ position: "relative", alignSelf: "stretch", marginTop: "17px", border: "2px solid #63c4ec", padding: "20px 12px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "42px", lineHeight: "49px", fontWeight: "600", color: "#f5f5f5", textAlign: "center" }}>
                  9 Years of
                  <br />
                  Shipped Work
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ alignSelf: "stretch", marginTop: "36px", display: "flex", flexDirection: "column" }}>
                {" "}
                <div style={{ padding: "34px 0 33px", display: "flex", flexDirection: "column" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
                    <span style={{ fontSize: "26px", lineHeight: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Airtel
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "11px", fontWeight: "600" }}
                    >
                      5 PROJECTS
                    </span>
                  </div>
                  {" "}
                  <span style={{ marginTop: "14px", fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5" }}>
                    Lead Experience Designer
                  </span>
                  {" "}
                  <span style={{ marginTop: "8px", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#f5f5f5" }}>
                    2021 — Now
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ padding: "34px 0 33px", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(245,245,245,0.14)" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
                    <span style={{ fontSize: "26px", lineHeight: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Bijak
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "11px", fontWeight: "600" }}
                    >
                      3 PROJECTS
                    </span>
                  </div>
                  {" "}
                  <span style={{ marginTop: "14px", fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5" }}>
                    Senior Product Designer
                  </span>
                  {" "}
                  <span style={{ marginTop: "8px", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#f5f5f5" }}>
                    2019 — 2021
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ padding: "34px 0 33px", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(245,245,245,0.14)" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
                    <span style={{ fontSize: "26px", lineHeight: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      Toffee Insurance
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "11px", fontWeight: "600" }}
                    >
                      2 PROJECTS
                    </span>
                  </div>
                  {" "}
                  <span style={{ marginTop: "14px", fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5" }}>
                    Senior UI/UX Designer
                  </span>
                  {" "}
                  <span style={{ marginTop: "8px", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#f5f5f5" }}>
                    2018 — 2019
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{ padding: "34px 0 33px", display: "flex", flexDirection: "column", borderTop: "1px solid rgba(245,245,245,0.14)" }}>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", gap: "17px" }}>
                    <span style={{ fontSize: "26px", lineHeight: "34px", fontWeight: "500", color: "#f5f5f5" }}>
                      BYO
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "26px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "11px", fontWeight: "600" }}
                    >
                      1 PROJECT
                    </span>
                  </div>
                  {" "}
                  <span style={{ marginTop: "14px", fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5" }}>
                    UI/UX Designer
                  </span>
                  {" "}
                  <span style={{ marginTop: "8px", fontSize: "16px", lineHeight: "22px", fontWeight: "400", color: "#f5f5f5" }}>
                    2018 — 2019
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <a
                href={asset("/assets/Shiva_Kumar_Resume.pdf")}
                download=""
                style={{ marginTop: "27px", width: "225px", height: "47px", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", boxSizing: "border-box", background: "#ffffff", color: "#1c1c1c", borderRadius: "4px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
              >
                DOWNLOAD RESUME{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 15V3" />
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="m7 10 5 5 5-5" />
                </svg>
                {" "}
              </a>
              {" "}
            </section>
            {" "}
            <section id="contact" style={{ padding: "162px 20px 89px", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {" "}
              <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "21px 18px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "42px", lineHeight: "49px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                  Lets Talk
                </h2>
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", top: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", left: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
                <span
                  style={{ position: "absolute", right: "-8px", bottom: "-8px", width: "14px", height: "14px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c" }}
                />
                {" "}
              </div>
              {" "}
              <div
                aria-hidden="true"
                style={{ marginTop: "31px", width: "111px", height: "111px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
              >
                {" "}
                <span style={{ background: "#f7d158", borderBottomLeftRadius: "100%" }} />
                {" "}
                <span style={{ background: "#f7d158", borderTopLeftRadius: "100%" }} />
                {" "}
                <span style={{ background: "#f7d158", borderBottomRightRadius: "100%" }} />
                {" "}
                <span style={{ background: "#f7d158", borderTopRightRadius: "100%" }} />
                {" "}
              </div>
              {" "}
              <p style={{ alignSelf: "stretch", margin: "41px 0 0", fontSize: "15px", lineHeight: "19.5px", fontWeight: "500", color: "#f5f5f5" }}>
                I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
              </p>
              {" "}
              <form
                onSubmit={v.onSubmit}
                noValidate
                style={{ alignSelf: "stretch", marginTop: "24px", background: "#51ac65", borderRadius: "8px", padding: "30px 20px 27px", display: "flex", flexDirection: "column" }}
              >
                {" "}
                <label htmlFor="cf-name-m" style={{ fontSize: "11px", lineHeight: "13px", fontWeight: "600", letterSpacing: "0.15em", color: "#ffffff" }}>
                  YOUR NAME
                </label>
                {" "}
                <input
                  id="cf-name-m"
                  name="name"
                  type="text"
                  autoComplete="name"
                  style={{ marginTop: "12px", height: "49px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                  className="home-focus-1"
                />
                {" "}
                <label htmlFor="cf-email-m" style={{ marginTop: "28px", fontSize: "11px", lineHeight: "13px", fontWeight: "600", letterSpacing: "0.15em", color: "#ffffff" }}>
                  YOUR EMAIL
                </label>
                {" "}
                <input
                  id="cf-email-m"
                  name="email"
                  type="email"
                  autoComplete="email"
                  style={{ marginTop: "12px", height: "49px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                  className="home-focus-1"
                />
                {" "}
                <label htmlFor="cf-msg-m" style={{ marginTop: "28px", fontSize: "11px", lineHeight: "13px", fontWeight: "600", letterSpacing: "0.15em", color: "#ffffff" }}>
                  IDEAS/PROJECTS DESCRIPTION
                </label>
                {" "}
                <textarea
                  id="cf-msg-m"
                  name="message"
                  style={{ marginTop: "12px", height: "198px", padding: "12px 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", lineHeight: "1.4", resize: "none", outline: "none" }}
                  className="home-focus-1"
                />
                {" "}
                <button
                  type="submit"
                  style={{ marginTop: "41px", height: "45px", border: "0", borderRadius: "4px", background: "#ffffff", color: "#1c1c1c", fontSize: "13px", fontWeight: "700", letterSpacing: "0.1em", cursor: "pointer" }}
                  className="home-hover-2"
                >
                  SUBMIT
                </button>
                {" "}
                {v.hasNote ? (
                  <>
                  <p style={{ margin: "14px 0 0", fontSize: "13px", lineHeight: "18px", color: "#ffffff" }}>
                    {v.cfNote}
                  </p>
                  </>
                ) : null}
                {" "}
              </form>
              {" "}
            </section>
          </div>
          </>
        ) : null}
        {v.showDock ? (
          <>
          {" "}
          <DockNav />
          </>
        ) : null}
      </div>
    </>
  );
}
