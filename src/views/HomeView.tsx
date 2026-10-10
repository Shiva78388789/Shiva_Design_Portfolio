// Ported from design-reference/design/Portfolio v2.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomeView({ v }: { v: any }) {
  return (
    <>
      <div
        data-screen-label="Homepage v2"
        style={{ minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", padding: "0 clamp(20px,5vw,40px) clamp(80px,10vw,140px)" }}
      >
        {" "}
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          {" "}
          <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", paddingTop: "clamp(24px,5vw,56px)" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {" "}
              <span
                style={{ display: "inline-flex", alignItems: "center", height: "36px", padding: "0 16px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
              >
                Version 1.1
              </span>
              {" "}
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "4px", height: "36px", padding: "0 16px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
              >
                Tokens Used:{" "}
                <span ref={v.tokRef} style={{ fontWeight: "600", color: "#ffffff", fontVariantNumeric: "tabular-nums" }}>
                  —
                </span>
              </span>
              {" "}
            </div>
            {" "}
            <button
              type="button"
              aria-label="Open menu"
              onClick={v.openNav}
              style={{ flex: "none", width: "56px", height: "56px", borderRadius: "50%", background: "#2a2a2a", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0", transition: "background .2s" }}
              className="home-hover-0"
            >
              {" "}
              <svg width="24" height="14" viewBox="0 0 24 14" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M1 2h22M1 12h22" />
              </svg>
              {" "}
            </button>
            {" "}
          </header>
          {" "}
          <section id="top" style={{ paddingTop: "clamp(12px,2vw,24px)" }}>
            {" "}
            <h1
              style={{ margin: "0", display: "flex", alignItems: "center", gap: "14px", fontSize: "clamp(32px,4.2vw,50px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff" }}
            >
              <span aria-hidden="true">
                👋
              </span>
              <span>
                Hi, I'm Shiva
              </span>
            </h1>
            {" "}
            <div
              style={{ marginTop: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", gap: "clamp(20px,2.6vw,32px)", fontSize: "clamp(24px,3.6vw,46px)", lineHeight: "1.25", fontWeight: "500", color: "#8c8c8c", textWrap: "pretty" }}
            >
              {" "}
              <p style={{ margin: "0" }}>
                I design for the messy middle, where business, tech and people collide.
              </p>
              {" "}
              <p style={{ margin: "0" }}>
                8 years in, I now lead experience design at{" "}
                <span style={{ color: "#ffffff" }}>
                  Airtel
                </span>
                {" "}(Gurugram) and{" "}
                <span
                  style={{ background: "linear-gradient(100deg,#8c8c8c 0%,#8c8c8c 40%,#f5f5f5 50%,#8c8c8c 60%,#8c8c8c 100%)", backgroundSize: "250% 100%", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent", WebkitTextFillColor: "transparent", animation: "v2-shimmer 3.2s linear infinite" }}
                >
                  use AI to explore, test and ship faster without losing the craft.
                </span>
              </p>
              {" "}
              <p style={{ margin: "0" }}>
                Before Airtel:{" "}
                <span style={{ color: "#ffffff" }}>
                  {"Bijak, Toffee Insurance & Byo."}
                </span>
              </p>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="work" style={{ paddingTop: "clamp(96px,13vw,160px)" }}>
            {" "}
            <h2 style={{ margin: "0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff" }}>
              Selected Projects
            </h2>
            {" "}
            <div style={{ marginTop: "clamp(28px,3.5vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,400px),1fr))", gap: "20px" }}>
              {" "}
              <a
                href={href("/work/engage-x/")}
                aria-label="Engage X case study"
                style={{ display: "flex", flexDirection: "column", borderRadius: "18px", overflow: "hidden", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1)" }}
                className="home-hover-1"
              >
                {" "}
                <div style={{ position: "relative", aspectRatio: "510/250", background: "#4a4a4a" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/proj-engagex.svg")}
                    alt=""
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 20px 22px" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/logo-xtelify.png")}
                    alt="Xtelify"
                    style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                  <div style={{ minWidth: "0" }}>
                    {" "}
                    <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,24px)", lineHeight: "1.25", fontWeight: "600" }}>
                      Engage X
                    </h3>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", fontWeight: "400", color: "#c9c9c9" }}>
                      A unified campaign lifecycle manager
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a
                href={href("/work/dth-price-simplification/")}
                aria-label="DTH Price Simplification case study"
                style={{ display: "flex", flexDirection: "column", borderRadius: "18px", overflow: "hidden", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1)" }}
                className="home-hover-1"
              >
                {" "}
                <div style={{ position: "relative", aspectRatio: "510/250", background: "#4a4a4a" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/proj-dth.svg")}
                    alt=""
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 20px 22px" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/logo-airtel.png")}
                    alt="Airtel"
                    style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                  <div style={{ minWidth: "0" }}>
                    {" "}
                    <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,24px)", lineHeight: "1.25", fontWeight: "600" }}>
                      DTH Price Simplification
                    </h3>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", fontWeight: "400", color: "#c9c9c9" }}>
                      Simplified DTH packs, Add Ons and VAS
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a
                href={href("/work/bijak-design-system/")}
                aria-label="Bijak Web Design System case study"
                style={{ display: "flex", flexDirection: "column", borderRadius: "18px", overflow: "hidden", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1)" }}
                className="home-hover-1"
              >
                {" "}
                <div style={{ position: "relative", aspectRatio: "510/250", background: "#4a4a4a" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/proj-bijak.svg")}
                    alt=""
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 20px 22px" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/logo-bijak.png")}
                    alt="Bijak"
                    style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                  <div style={{ minWidth: "0" }}>
                    {" "}
                    <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,24px)", lineHeight: "1.25", fontWeight: "600" }}>
                      Bijak Web Design System
                    </h3>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", fontWeight: "400", color: "#c9c9c9" }}>
                      UI Foundations for Bijak on the web
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
              <a
                href={href("/work/toffee-seller-app/")}
                aria-label="Toffee Seller App case study"
                style={{ display: "flex", flexDirection: "column", borderRadius: "18px", overflow: "hidden", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1)" }}
                className="home-hover-1"
              >
                {" "}
                <div style={{ position: "relative", aspectRatio: "510/250", background: "#4a4a4a" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/proj-toffee.svg")}
                    alt=""
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px 20px 22px" }}>
                  {" "}
                  <img
                    src={asset("/assets/v2/logo-toffee.png")}
                    alt="Toffee Insurance"
                    style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                  />
                  {" "}
                  <div style={{ minWidth: "0" }}>
                    {" "}
                    <h3 style={{ margin: "0", fontSize: "clamp(20px,1.9vw,24px)", lineHeight: "1.25", fontWeight: "600" }}>
                      Toffee Seller App
                    </h3>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", fontWeight: "400", color: "#c9c9c9" }}>
                      Insurance App for cycle insurance
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="claude" style={{ paddingTop: "clamp(80px,10vw,120px)" }}>
            {" "}
            <h2 aria-label="Claude Code" style={{ margin: "0", lineHeight: "0" }}>
              <img
                src={asset("/assets/v2/claude-code-title.png")}
                alt="Claude Code"
                style={{ display: "block", height: "clamp(34px,3.8vw,46px)", width: "auto", maxWidth: "100%" }}
              />
            </h2>
            {" "}
            <div style={{ marginTop: "clamp(28px,3.5vw,44px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,400px),1fr))", gap: "20px" }}>
              {" "}
              <a
                href={href("/work/akhbar-bash/")}
                aria-label="Akhbar Bash case study"
                style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1),background .3s" }}
                className="home-hover-2"
              >
                {" "}
                <div style={{ flex: "1", minWidth: "0" }}>
                  {" "}
                  <span
                    style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                  >
                    Game
                  </span>
                  {" "}
                  <h3 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600" }}>
                    Akhbar Bash
                  </h3>
                  {" "}
                  <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9" }}>
                    A 16-bit game about our childhood paperboy.
                  </p>
                  {" "}
                </div>
                {" "}
                <img
                  src={asset("/assets/v2/akhbar.png")}
                  alt=""
                  style={{ flex: "none", width: "clamp(88px,10vw,116px)", height: "clamp(88px,10vw,116px)", objectFit: "contain", display: "block" }}
                />
                {" "}
              </a>
              {" "}
              <a
                href={href("/work/jugnu/")}
                aria-label="Jugnu case study"
                style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e", color: "#ffffff", transition: "transform .3s cubic-bezier(.2,.7,.2,1),background .3s" }}
                className="home-hover-2"
              >
                {" "}
                <div style={{ flex: "1", minWidth: "0" }}>
                  {" "}
                  <span
                    style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                  >
                    Bot
                  </span>
                  {" "}
                  <h3 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600" }}>
                    Jugnu
                  </h3>
                  {" "}
                  <p style={{ margin: "4px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9" }}>
                    A personal assistant that get things done.
                  </p>
                  {" "}
                </div>
                {" "}
                <img
                  src={asset("/assets/v2/jugnu.png")}
                  alt=""
                  style={{ flex: "none", width: "clamp(88px,10vw,116px)", height: "clamp(88px,10vw,116px)", objectFit: "contain", display: "block" }}
                />
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
        </div>
      </div>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={v.navHidden}
        style={css(`position:fixed;inset:0;z-index:100;background:#1c1c1c;overflow-y:auto;opacity:${v.navOpacity ?? ""};visibility:${v.navVis ?? ""};transition:opacity .35s ease,visibility .35s;padding:0 clamp(20px,5vw,40px) 64px`)}
      >
        {" "}
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "clamp(24px,5vw,56px)" }}>
            {" "}
            <button
              type="button"
              aria-label="Close menu"
              onClick={v.closeNav}
              style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#2a2a2a", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0", transition: "background .2s" }}
              className="home-hover-0"
            >
              {" "}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2l18 18M20 2 2 20" />
              </svg>
              {" "}
            </button>
            {" "}
          </div>
          {" "}
          <nav
            style={css(`margin-top:clamp(24px,5vw,64px);display:flex;flex-direction:column;align-items:flex-start;gap:clamp(18px,2.6vw,32px);transform:${v.navShift ?? ""};transition:transform .45s cubic-bezier(.2,.7,.2,1)`)}
          >
            {" "}
            <a
              href={href("/tools/")}
              style={{ fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff", transition: "color .2s" }}
              className="home-hover-3"
            >
              Tools I use
            </a>
            {" "}
            <a
              href={href("/side-hustle/")}
              style={{ fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff", transition: "color .2s" }}
              className="home-hover-3"
            >
              Side hustle
            </a>
            {" "}
            <a
              href={href("/failed-startups/")}
              style={{ fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff", transition: "color .2s" }}
              className="home-hover-3"
            >
              Failed startups
            </a>
            {" "}
            <span
              aria-disabled="true"
              title="Coming soon"
              style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#4a4a4a", cursor: "not-allowed" }}
            >
              {" "}
              <svg width="36" height="40" viewBox="0 0 24 26" fill="none" stroke="#4a4a4a" strokeWidth="2.4" aria-hidden="true" style={{ width: ".62em", height: "auto" }}>
                <rect x="2" y="11" width="20" height="13" rx="3" />
                <path d="M6.5 11V7.5a5.5 5.5 0 0 1 11 0V11" />
              </svg>
              {" "}My thoughts{" "}
            </span>
            {" "}
            <a
              href={asset("/assets/Shiva_Kumar_Resume.pdf")}
              download=""
              style={{ marginTop: "clamp(16px,2.5vw,32px)", display: "inline-flex", alignItems: "center", gap: "12px", height: "48px", padding: "0 22px", borderRadius: "999px", background: "#2a2a2a", border: "1.5px solid #4a4a4a", fontSize: "17px", fontWeight: "600", color: "#ffffff", transition: "background .2s" }}
              className="home-hover-0"
            >
              {" "}Download Resume{" "}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12M7 10l5 5 5-5M4 17v3h16v-3" />
              </svg>
              {" "}
            </a>
            {" "}
            <div style={{ marginTop: "clamp(28px,4.5vw,64px)", display: "flex", flexWrap: "wrap", gap: "14px" }}>
              {" "}
              <a
                href="https://www.linkedin.com/in/shiva-kumar-10106b143/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", transition: "opacity .2s" }}
                className="home-hover-4"
              >
                <img src={asset("/assets/v2/s-linkedin.svg")} alt="" style={{ width: "56px", height: "56px", display: "block" }} />
              </a>
              {" "}
              <a
                href="https://dribbble.com/shivakumar"
                target="_blank"
                rel="noopener"
                aria-label="Dribbble"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", transition: "opacity .2s" }}
                className="home-hover-4"
              >
                <img src={asset("/assets/v2/s-dribbble.svg")} alt="" style={{ width: "56px", height: "56px", display: "block" }} />
              </a>
              {" "}
              <a
                href="https://x.com/shiva_pdf"
                target="_blank"
                rel="noopener"
                aria-label="X"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", transition: "opacity .2s" }}
                className="home-hover-4"
              >
                <img src={asset("/assets/v2/s-x.svg")} alt="" style={{ width: "56px", height: "56px", display: "block" }} />
              </a>
              {" "}
              <a
                href="https://github.com/Shiva78388789"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                style={{ width: "56px", height: "56px", borderRadius: "50%", display: "flex", transition: "opacity .2s" }}
                className="home-hover-4"
              >
                <img src={asset("/assets/v2/s-github.svg")} alt="" style={{ width: "56px", height: "56px", display: "block" }} />
              </a>
              {" "}
              <a
                href="mailto:kumarshiva1990@gmail.com"
                aria-label="Email"
                style={{ marginLeft: "10px", width: "56px", height: "56px", borderRadius: "50%", display: "flex", transition: "opacity .2s" }}
                className="home-hover-4"
              >
                <img src={asset("/assets/v2/s-mail.svg")} alt="" style={{ width: "56px", height: "56px", display: "block" }} />
              </a>
              {" "}
            </div>
            {" "}
          </nav>
          {" "}
        </div>
      </div>
    </>
  );
}
