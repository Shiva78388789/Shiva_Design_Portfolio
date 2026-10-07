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
          <div
            data-view="desktop"
            style={{ position: "relative", zIndex: "2", background: "#1c1c1c", borderRadius: "0 0 clamp(24px,3vw,48px) clamp(24px,3vw,48px)", boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}
          >
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
            <div
              data-notice=""
              role="status"
              aria-label="The website is updated weekly every Sunday"
              style={{ position: "relative", zIndex: "5", overflow: "hidden", background: "#51ac65", color: "#ffffff", borderBottom: "2px solid #1c1c1c" }}
            >
              {" "}
              <div
                data-notice-track=""
                aria-hidden="true"
                style={{ display: "flex", width: "max-content", alignItems: "center", minHeight: "44px", fontSize: "15px", lineHeight: "1.35", fontWeight: "600", whiteSpace: "nowrap" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "28px", paddingRight: "28px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
              </div>
              {" "}
            </div>
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
            <section
              id="tools"
              aria-label="Tools I use"
              style={{ position: "relative", paddingTop: "260px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-3deg)" }}
              >
                tools I use
              </span>
              {" "}
              <div data-vc="desk" style={{ alignSelf: "stretch", marginTop: "64px", overflow: "hidden", cursor: "grab", touchAction: "pan-y" }}>
                {" "}
                <div data-vc-track="" style={{ display: "flex", gap: "16px", width: "max-content", paddingRight: "16px", willChange: "transform" }}>
                  {" "}
                  <div title="Figma" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/figma-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/figma.png")}
                      alt="Figma"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Lottie" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/lottie-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/lottie.png")}
                      alt="Lottie"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Higgsfield" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/higgsfield-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/higgsfield.png")}
                      alt="Higgsfield"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Spline" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/spline-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/spline.png")}
                      alt="Spline"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Claude" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/claude-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/claude.png")}
                      alt="Claude"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Notion" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/notion-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/notion.png")}
                      alt="Notion"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Jira" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/jira-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/jira.png")}
                      alt="Jira"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Figma" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/figma-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/figma.png")}
                      alt="Figma"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Lottie" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/lottie-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/lottie.png")}
                      alt="Lottie"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Higgsfield" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/higgsfield-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/higgsfield.png")}
                      alt="Higgsfield"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Spline" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/spline-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/spline.png")}
                      alt="Spline"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Claude" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/claude-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/claude.png")}
                      alt="Claude"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Notion" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/notion-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/notion.png")}
                      alt="Notion"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                  <div title="Jira" style={{ position: "relative", flex: "none", width: "214px", height: "214px" }}>
                    <img
                      src={asset("/assets/tools/jira-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      src={asset("/assets/tools/jira.png")}
                      alt="Jira"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                      className="home-hover-1"
                    />
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="work" style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "260px", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            <section id="claude" style={{ position: "relative", marginTop: "290px", padding: "52px 0 44px" }}>
              {" "}
              <div style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "0 auto" }}>
                {" "}
                <img
                  src={asset("/assets/home/claude-code-logo-white.png")}
                  alt="Claude Code"
                  style={{ display: "block", width: "min(490px,100%)", height: "auto", marginLeft: "-5px" }}
                />
                {" "}
                <p style={{ margin: "18px 0 0", fontSize: "20px", lineHeight: "24px", fontWeight: "600", color: "#ffffff" }}>
                  Tools and Prototypes I build with Claude Code
                </p>
                {" "}
                <div style={{ marginTop: "65px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "24px" }}>
                  {" "}
                  <a
                    href={href("/work/akhbar-bash/")}
                    aria-label="Akhbar Bash — case study"
                    style={{ display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "20px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", transition: "transform .25s ease" }}
                    className="home-hover-2"
                  >
                    <img
                      src={asset("/assets/home/claude-akhbar.png")}
                      alt="Akhbar Bash pixel game screenshot"
                      style={{ display: "block", width: "100%", aspectRatio: "505 / 256", height: "auto", objectFit: "cover" }}
                    />
                    <span style={{ display: "flex", alignItems: "center", gap: "20px", minHeight: "100px", boxSizing: "border-box", padding: "12px 15px 12px 20px" }}>
                      <img src={asset("/assets/home/claude-icon.png")} alt="" aria-hidden="true" style={{ display: "block", flex: "none", width: "60px", height: "60px" }} />
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                        <span style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: "600", color: "#1c1c1c" }}>
                          Akhbar Bash: Game
                        </span>
                        <span style={{ fontSize: "16px", lineHeight: "1.3", fontWeight: "500", color: "#a3a3a3" }}>
                          Edited 6 days ago
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "none", width: "62px", height: "62px", borderRadius: "50%", background: "#51ac65", color: "#ffffff", fontSize: "24px", fontWeight: "500" }}
                      >
                        SK
                      </span>
                    </span>
                  </a>
                  {" "}
                  <a
                    href={href("/work/jugnu/")}
                    aria-label="Jugnu — case study"
                    style={{ display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "20px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", transition: "transform .25s ease" }}
                    className="home-hover-2"
                  >
                    <img
                      src={asset("/assets/home/claude-jugnu.png")}
                      alt="Jugnu bot floating above a base"
                      style={{ display: "block", width: "100%", aspectRatio: "505 / 256", height: "auto", objectFit: "cover" }}
                    />
                    <span style={{ display: "flex", alignItems: "center", gap: "20px", minHeight: "100px", boxSizing: "border-box", padding: "12px 15px 12px 20px" }}>
                      <img src={asset("/assets/home/claude-icon.png")} alt="" aria-hidden="true" style={{ display: "block", flex: "none", width: "60px", height: "60px" }} />
                      <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                        <span style={{ fontSize: "20px", lineHeight: "1.25", fontWeight: "600", color: "#1c1c1c" }}>
                          Jugnu: Bot
                        </span>
                        <span style={{ fontSize: "16px", lineHeight: "1.3", fontWeight: "500", color: "#a3a3a3" }}>
                          Edited 10 days ago
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "none", width: "62px", height: "62px", borderRadius: "50%", background: "#51ac65", color: "#ffffff", fontSize: "24px", fontWeight: "500" }}
                      >
                        SK
                      </span>
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
              <a
                data-shimmer=""
                data-lmbtn=""
                href={asset("/assets/Shiva_Kumar_Resume.pdf")}
                download=""
                style={{ position: "relative", overflow: "hidden", marginTop: "64px", display: "flex", padding: "2px", boxSizing: "border-box", height: "45px", borderRadius: "999px", background: "#bdbdbd", textDecoration: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.5),0 8px 24px rgba(255,255,255,0.08)" }}
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
                    DOWNLOAD RESUME
                  </span>
                  <svg
                    style={{ position: "relative" }}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                </span>
              </a>
              {" "}
            </section>
          </div>
          </>
        ) : null}
        {v.isMob ? (
          <>
          <div
            data-view="mobile"
            style={{ position: "relative", zIndex: "2", background: "#1c1c1c", borderRadius: "0 0 clamp(24px,3vw,48px) clamp(24px,3vw,48px)", boxShadow: "0 30px 60px rgba(0,0,0,.35)" }}
          >
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
            <div
              data-notice=""
              role="status"
              aria-label="The website is updated weekly every Sunday"
              style={{ position: "relative", zIndex: "5", overflow: "hidden", background: "#51ac65", color: "#ffffff", borderBottom: "2px solid #1c1c1c" }}
            >
              {" "}
              <div
                data-notice-track=""
                aria-hidden="true"
                style={{ display: "flex", width: "max-content", alignItems: "center", minHeight: "38px", fontSize: "13px", lineHeight: "1.35", fontWeight: "600", whiteSpace: "nowrap" }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "20px", paddingRight: "20px", flex: "none" }}>
                  <span>
                    The website is updated weekly every Sunday
                  </span>
                  <span aria-hidden="true" style={{ display: "block", width: "6px", height: "6px", borderRadius: "50%", background: "#ffffff" }} />
                </span>
              </div>
              {" "}
            </div>
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
            <section
              id="tools"
              aria-label="Tools I use"
              style={{ position: "relative", paddingTop: "140px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <span
                style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "16px", lineHeight: "20px", fontWeight: "500", padding: "3px 10px", transform: "rotate(-3deg)" }}
              >
                tools I use
              </span>
              {" "}
              <div data-vc="mob" style={{ alignSelf: "stretch", marginTop: "36px", overflow: "hidden", touchAction: "pan-y" }}>
                {" "}
                <div data-vc-track="" style={{ display: "flex", gap: "12px", width: "max-content", paddingRight: "12px", willChange: "transform" }}>
                  {" "}
                  <div title="Figma" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/figma-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/figma.png")}
                      alt="Figma"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Lottie" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/lottie-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/lottie.png")}
                      alt="Lottie"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Higgsfield" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/higgsfield-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/higgsfield.png")}
                      alt="Higgsfield"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Spline" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/spline-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/spline.png")}
                      alt="Spline"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Claude" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/claude-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/claude.png")}
                      alt="Claude"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Notion" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/notion-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/notion.png")}
                      alt="Notion"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Jira" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/jira-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/jira.png")}
                      alt="Jira"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Figma" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/figma-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/figma.png")}
                      alt="Figma"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Lottie" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/lottie-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/lottie.png")}
                      alt="Lottie"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Higgsfield" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/higgsfield-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/higgsfield.png")}
                      alt="Higgsfield"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Spline" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/spline-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/spline.png")}
                      alt="Spline"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Claude" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/claude-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/claude.png")}
                      alt="Claude"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Notion" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/notion-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/notion.png")}
                      alt="Notion"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                  <div title="Jira" style={{ position: "relative", flex: "none", width: "140px", height: "140px" }}>
                    <img
                      src={asset("/assets/tools/jira-blur.png")}
                      alt=""
                      aria-hidden="true"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block" }}
                    />
                    <img
                      data-vc-sharp=""
                      src={asset("/assets/tools/jira.png")}
                      alt="Jira"
                      draggable="false"
                      style={{ position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", transition: "opacity .35s ease" }}
                    />
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
            {" "}
            <section id="work" style={{ paddingTop: "140px", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
            <section id="claude" style={{ position: "relative", marginTop: "161px", padding: "47px 20px 42px" }}>
              {" "}
              <img
                src={asset("/assets/home/claude-code-logo-white.png")}
                alt="Claude Code"
                style={{ display: "block", width: "213px", height: "auto", marginLeft: "-2px" }}
              />
              {" "}
              <p style={{ margin: "20px 0 0", fontSize: "14px", lineHeight: "18px", fontWeight: "600", color: "#ffffff" }}>
                Tools and Prototypes I build with Claude Code
              </p>
              {" "}
              <div style={{ marginTop: "40px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {" "}
                <a
                  href={href("/work/akhbar-bash/")}
                  aria-label="Akhbar Bash — case study"
                  style={{ display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "20px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", transition: "transform .25s ease" }}
                  className="home-hover-2"
                >
                  <img
                    src={asset("/assets/home/claude-akhbar.png")}
                    alt="Akhbar Bash pixel game screenshot"
                    style={{ display: "block", width: "100%", aspectRatio: "366 / 186", height: "auto", objectFit: "cover" }}
                  />
                  <span style={{ display: "flex", alignItems: "center", gap: "20px", minHeight: "88px", boxSizing: "border-box", padding: "12px 21px 12px 20px" }}>
                    <img src={asset("/assets/home/claude-icon.png")} alt="" aria-hidden="true" style={{ display: "block", flex: "none", width: "40px", height: "40px" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <span style={{ fontSize: "17px", lineHeight: "1.25", fontWeight: "600", color: "#1c1c1c" }}>
                        Akhbar Bash
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.3", fontWeight: "500", color: "#a3a3a3" }}>
                        Edited 7 days ago
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "none", width: "50px", height: "50px", borderRadius: "50%", background: "#51ac65", color: "#ffffff", fontSize: "20px", fontWeight: "500" }}
                    >
                      SK
                    </span>
                  </span>
                </a>
                {" "}
                <a
                  href={href("/work/jugnu/")}
                  aria-label="Jugnu — case study"
                  style={{ display: "flex", flexDirection: "column", background: "#ffffff", borderRadius: "20px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", transition: "transform .25s ease" }}
                  className="home-hover-2"
                >
                  <img
                    src={asset("/assets/home/claude-jugnu.png")}
                    alt="Jugnu bot floating above a base"
                    style={{ display: "block", width: "100%", aspectRatio: "366 / 186", height: "auto", objectFit: "cover" }}
                  />
                  <span style={{ display: "flex", alignItems: "center", gap: "20px", minHeight: "88px", boxSizing: "border-box", padding: "12px 21px 12px 20px" }}>
                    <img src={asset("/assets/home/claude-icon.png")} alt="" aria-hidden="true" style={{ display: "block", flex: "none", width: "40px", height: "40px" }} />
                    <span style={{ display: "flex", flexDirection: "column", gap: "2px", flex: "1", minWidth: "0" }}>
                      <span style={{ fontSize: "17px", lineHeight: "1.25", fontWeight: "600", color: "#1c1c1c" }}>
                        Jugnu: Bot
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "1.3", fontWeight: "500", color: "#a3a3a3" }}>
                        Edited 7 days ago
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: "none", width: "50px", height: "50px", borderRadius: "50%", background: "#51ac65", color: "#ffffff", fontSize: "20px", fontWeight: "500" }}
                    >
                      SK
                    </span>
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
                data-shimmer=""
                data-lmbtn=""
                href={asset("/assets/Shiva_Kumar_Resume.pdf")}
                download=""
                style={{ position: "relative", overflow: "hidden", marginTop: "27px", display: "flex", padding: "2px", boxSizing: "border-box", height: "45px", borderRadius: "999px", background: "#bdbdbd", textDecoration: "none", boxShadow: "0 1px 2px rgba(0,0,0,0.5),0 8px 24px rgba(255,255,255,0.08)" }}
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
                    DOWNLOAD RESUME
                  </span>
                  <svg
                    style={{ position: "relative" }}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <path d="m7 10 5 5 5-5" />
                  </svg>
                </span>
              </a>
              {" "}
            </section>
          </div>
          </>
        ) : null}
        <footer
          id="contact"
          ref={v.ftRef}
          data-ft=""
          data-screen-label="Contact"
          style={{ position: "relative", zIndex: "1", background: "#63c4ec", color: "#1c1c1c", overflow: "hidden" }}
        >
          {" "}
          <div
            style={{ maxWidth: "1600px", margin: "0 auto", padding: "clamp(72px,9vw,140px) clamp(20px,3vw,40px) 20px", display: "flex", flexDirection: "column", gap: "clamp(40px,5vw,72px)" }}
          >
            {" "}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))", gap: "32px clamp(24px,3vw,48px)", alignItems: "end" }}>
              {" "}
              <h2
                data-ft-reveal=""
                style={{ margin: "0", fontWeight: "600", fontSize: "clamp(64px,9vw,168px)", lineHeight: ".9", letterSpacing: "-.05em", color: "#1c1c1c" }}
              >
                Let’s{" "}
                <em style={{ fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: "400", letterSpacing: "-.02em" }}>
                  talk
                </em>
              </h2>
              {" "}
              <div data-ft-reveal="" data-delay="120" style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
                {" "}
                <p style={{ margin: "0", fontSize: "clamp(16px,1.4vw,19px)", lineHeight: "1.45", fontWeight: "500", maxWidth: "38ch", color: "#1c1c1c" }}>
                  I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
                </p>
                {" "}
                <a
                  href="mailto:kumarshiva1990@gmail.com"
                  data-ft-roll=""
                  style={{ display: "flex", alignItems: "center", gap: "14px", height: "64px", padding: "0 8px 0 28px", borderRadius: "999px", background: "#1c1c1c", color: "#f5f5f5", textDecoration: "none", fontWeight: "600", fontSize: "18px" }}
                  className="home-hover-3"
                >
                  {" "}
                  <span style={{ height: "64px", overflow: "hidden" }}>
                    <span data-ft-roll-in="" style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ height: "64px", display: "flex", alignItems: "center" }}>
                        Contact
                      </span>
                      <span style={{ height: "64px", display: "flex", alignItems: "center", color: "#63c4ec" }}>
                        Contact
                      </span>
                    </span>
                  </span>
                  {" "}
                  <span
                    style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#63c4ec", color: "#1c1c1c", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                  {" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(50% - 12px,200px),1fr))", gap: "32px 24px", paddingTop: "28px", borderTop: "1px solid rgba(28,28,28,.22)" }}
            >
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {" "}
                <span style={{ fontFamily: "Montserrat", fontStyle: "normal", fontWeight: "500", fontSize: "14px", opacity: ".7", marginBottom: "6px" }}>
                  Menu
                </span>
                {" "}
                {((v.ftLinks ?? []) as any[]).map((l: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <a
                      href={l?.href}
                      data-ft-roll=""
                      style={{ display: "block", height: "28px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", fontSize: "17px", fontWeight: "500" }}
                      className="home-hover-4"
                    >
                      {" "}
                      <span data-ft-roll-in="" style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ height: "28px", lineHeight: "28px" }}>
                          {l?.label}
                        </span>
                        <span style={{ height: "28px", lineHeight: "28px", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: "400", fontSize: "19px" }}>
                          {l?.label}
                        </span>
                      </span>
                      {" "}
                    </a>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {" "}
                <span style={{ fontFamily: "Montserrat", fontStyle: "normal", fontWeight: "500", fontSize: "14px", opacity: ".7", marginBottom: "6px" }}>
                  Socials
                </span>
                {" "}
                {((v.ftSocials ?? []) as any[]).map((so: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <a
                      href={so?.href}
                      target="_blank"
                      rel="noopener"
                      data-ft-roll=""
                      style={{ display: "flex", alignItems: "center", gap: "6px", height: "28px", overflow: "hidden", color: "#1c1c1c", textDecoration: "none", fontSize: "17px", fontWeight: "500" }}
                      className="home-hover-4"
                    >
                      {" "}
                      <span style={{ height: "28px", overflow: "hidden" }}>
                        <span data-ft-roll-in="" style={{ display: "flex", flexDirection: "column" }}>
                          <span style={{ height: "28px", lineHeight: "28px" }}>
                            {so?.label}
                          </span>
                          <span style={{ height: "28px", lineHeight: "28px", fontFamily: "'Instrument Serif',serif", fontStyle: "italic", fontWeight: "400", fontSize: "19px" }}>
                            {so?.label}
                          </span>
                        </span>
                      </span>
                      {" "}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                      {" "}
                    </a>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {" "}
                <span style={{ fontFamily: "Montserrat", fontStyle: "normal", fontWeight: "500", fontSize: "14px", opacity: ".7", marginBottom: "6px" }}>
                  Contact
                </span>
                {" "}
                <a
                  href="mailto:kumarshiva1990@gmail.com"
                  style={{ color: "#1c1c1c", fontSize: "15px", fontWeight: "500", textDecoration: "underline", textUnderlineOffset: "4px", overflowWrap: "anywhere" }}
                  className="home-hover-5"
                >
                  kumarshiva1990@gmail.com
                </a>
                {" "}
                <span style={{ fontSize: "17px", fontWeight: "500" }}>
                  Gurugram, India
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div
              aria-hidden="true"
              style={{ display: "flex", justifyContent: "space-between", fontSize: "clamp(32px,10.4vw,170px)", fontWeight: "700", letterSpacing: "-.04em", lineHeight: ".85", whiteSpace: "nowrap", overflow: "hidden", paddingBottom: ".04em", color: "#1c1c1c" }}
            >
              {" "}
              {((v.wordmark ?? []) as any[]).map((ch: any, i0: number) => (
                <Fragment key={i0}>
                  <span style={{ display: "block", overflow: "hidden" }}>
                    <span data-ft-reveal="line" data-delay={ch?.d} style={{ display: "block" }}>
                      {ch?.c}
                    </span>
                  </span>
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", paddingTop: "20px", borderTop: "1px solid rgba(28,28,28,.22)", fontSize: "14px", fontWeight: "500" }}
            >
              {" "}
              <span>
                ©2026 Shiva Kumar. All rights reserved
              </span>
              {" "}
              <button
                onClick={v.toTop}
                aria-label="Back to top"
                style={{ width: "56px", height: "56px", borderRadius: "50%", border: "none", background: "#1c1c1c", color: "#63c4ec", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                className="home-hover-6"
              >
                {" "}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25">
                  <path d="M12 19V5" />
                  <path d="m5 12 7-7 7 7" />
                </svg>
                {" "}
              </button>
              {" "}
            </div>
            {" "}
          </div>
        </footer>
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
