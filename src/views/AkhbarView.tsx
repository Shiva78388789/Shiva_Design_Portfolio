// Ported from design-reference/design/Akhbar Bash Case Study.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AkhbarView({ v }: { v: any }) {
  return (
    <>
      <div data-screen-label="Akhbar Bash case study" style={{ background: "#1c1c1c", minHeight: "100vh" }}>
        <div
          data-vp={v.vp}
          style={{ position: "relative", minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", overflow: "clip", paddingBottom: "40px", containerType: "inline-size", containerName: "ak" }}
        >
          {" "}
          <nav
            aria-label="Page"
            data-colw="1"
            style={{ width: "calc(100% - 64px)", maxWidth: "1200px", margin: "0 auto", paddingTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            {" "}
            <a
              href={href("/")}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", color: "#f5f5f5", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textDecoration: "none" }}
              className="akhbar-hover-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m12 19-7-7 7-7" />
              </svg>
              BACK TO PORTFOLIO
            </a>
            {" "}
            <span data-desk-only="1" style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", color: "#d97757" }}>
              BUILT WITH CLAUDE
            </span>
            {" "}
          </nav>
          {" "}
          <section
            id="hero"
            data-reveal="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "96px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              a claude code project
            </span>
            {" "}
            <div data-fh="1" style={{ position: "relative", marginTop: "58px", border: "2px solid #63c4ec", padding: "7px 34px" }}>
              <h1 data-h1="1" style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                Akhbar Bash
              </h1>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div
              data-colw="1"
              style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "48px auto 0", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
                <span
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 12px 0", boxSizing: "border-box", background: "#0f1d24", color: "#63c4ec", fontSize: "10px", fontWeight: "600", letterSpacing: "0.1em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                >
                  CASE STUDY
                </span>
                <span
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 12px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f6dfa6", fontSize: "10px", fontWeight: "600", letterSpacing: "0.1em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                >
                  GAME DESIGN
                </span>
                <span
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 12px 0", boxSizing: "border-box", background: "#0f1d24", color: "#f26667", fontSize: "10px", fontWeight: "600", letterSpacing: "0.1em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                >
                  PIXEL ART
                </span>
                <span
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 12px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "10px", fontWeight: "600", letterSpacing: "0.1em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                >
                  MOBILE WEB
                </span>
              </div>
              {" "}
              <p
                data-lead="1"
                style={{ margin: "40px auto 0", maxWidth: "880px", fontSize: "32px", lineHeight: "44px", fontWeight: "500", textAlign: "center", color: "#f5f5f5", textWrap: "balance" }}
              >
                A 16-bit paper round through India's galis. I designed it, art-directed it and shipped it as a mobile browser game in one afternoon, using Claude as my build partner.
              </p>
              {" "}
              <p data-desk-only="1" style={{ margin: "16px 0 0", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", textAlign: "center" }}>
                “Akhbaar Rush”, the name on the logo and screens, was the working title.
              </p>
              {" "}
              <div style={{ alignSelf: "stretch", marginTop: "48px" }}>
                {" "}
                <div data-desk-only="1">
                  <figure style={{ margin: "0" }}>
                    <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "1688 / 780" }}>
                      {" "}
                      <video
                        data-auto="1"
                        muted
                        loop
                        preload="metadata"
                        playsInline
                        poster={asset("/assets/akhbar/video/posters/hero-loop.jpg")}
                        aria-label="Gameplay: the paperboy rides his red cycle through a Delhi gali, collecting coins and dodging a cow while papers fly to subscriber houses."
                        style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                      >
                        <source src={asset("/assets/akhbar/video/hero-loop.mp4")} type="video/mp4" />
                      </video>
                      {" "}
                      <button
                        type="button"
                        data-vtoggle="1"
                        aria-label="Pause video"
                        style={{ position: "absolute", right: "10px", bottom: "10px", width: "44px", height: "44px", border: "0", background: "rgba(15,29,36,0.8)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-pause="1">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-play="1" style={{ display: "none" }}>
                          <path d="M7 4v16l13-8z" />
                        </svg>
                      </button>
                      {" "}
                    </div>
                  </figure>
                </div>
                {" "}
                <div data-mob-only="1">
                  <figure style={{ margin: "0" }}>
                    <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "1 / 1" }}>
                      {" "}
                      <video
                        data-auto="1"
                        muted
                        loop
                        preload="metadata"
                        playsInline
                        poster={asset("/assets/akhbar/video/posters/hero-loop-square.jpg")}
                        aria-label="Gameplay: the paperboy rides his red cycle through a Delhi gali, collecting coins and dodging a cow while papers fly to subscriber houses."
                        style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                      >
                        <source src={asset("/assets/akhbar/video/hero-loop-square.mp4")} type="video/mp4" />
                      </video>
                      {" "}
                      <button
                        type="button"
                        data-vtoggle="1"
                        aria-label="Pause video"
                        style={{ position: "absolute", right: "10px", bottom: "10px", width: "44px", height: "44px", border: "0", background: "rgba(15,29,36,0.8)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-pause="1">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-play="1" style={{ display: "none" }}>
                          <path d="M7 4v16l13-8z" />
                        </svg>
                      </button>
                      {" "}
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      “Akhbaar Rush”, the name on the logo and screens, was the working title.
                    </figcaption>
                  </figure>
                </div>
                {" "}
              </div>
              {" "}
              <dl
                data-meta5="1"
                style={{ alignSelf: "stretch", margin: "40px 0 0", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", borderTop: "1px solid rgba(245,245,245,0.14)", borderBottom: "1px solid rgba(245,245,245,0.14)" }}
              >
                {" "}
                <div style={{ padding: "24px 20px 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <dt>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      MY ROLE
                    </span>
                  </dt>
                  <dd style={{ margin: "0", fontSize: "15px", lineHeight: "22px", color: "#f5f5f5" }}>
                    Concept, game and UX design, art direction, every review call
                  </dd>
                </div>
                <div style={{ padding: "24px 20px 24px 20px", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <dt>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      BUILD PARTNER
                    </span>
                  </dt>
                  <dd style={{ margin: "0", fontSize: "15px", lineHeight: "22px", color: "#f5f5f5" }}>
                    Claude: pixel art as code, engine, music, backend, tests
                  </dd>
                </div>
                <div style={{ padding: "24px 20px 24px 20px", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <dt>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      PLATFORM
                    </span>
                  </dt>
                  <dd style={{ margin: "0", fontSize: "15px", lineHeight: "22px", color: "#f5f5f5" }}>
                    Phone browser, landscape, installable to the home screen
                  </dd>
                </div>
                <div style={{ padding: "24px 20px 24px 20px", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <dt>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      TIMELINE
                    </span>
                  </dt>
                  <dd style={{ margin: "0", fontSize: "15px", lineHeight: "22px", color: "#f5f5f5" }}>
                    One afternoon, about 4½ hours, September 2026
                  </dd>
                </div>
                <div style={{ padding: "24px 0 24px 20px", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <dt>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      STACK
                    </span>
                  </dt>
                  <dd style={{ margin: "0", fontSize: "15px", lineHeight: "22px", color: "#f5f5f5" }}>
                    HTML, CSS, JavaScript, Canvas, Web Audio, Supabase
                  </dd>
                </div>
                {" "}
              </dl>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section id="numbers" aria-label="By the numbers" style={{ marginTop: "120px", background: "#0f1d24", padding: "56px 0" }}>
            {" "}
            <div
              data-colw="1"
              data-stats6="1"
              style={{ width: "calc(100% - 64px)", maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))", gap: "32px 24px" }}
            >
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="6"
                  data-suffix=""
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  6
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  cities, each with its own landmarks
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="60"
                  data-suffix=""
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  60
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  levels, each the same every time you play
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="15"
                  data-suffix=""
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  15
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  screens, from studio splash to route complete
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="28"
                  data-suffix=""
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  28
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  rider animation frames across 5 moves
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="0"
                  data-suffix=""
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  0
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  audio files. All 3 music tracks are synthesised live.
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span
                  data-count="256"
                  data-suffix=" KB"
                  style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "28px", lineHeight: "1.2", color: "#f7d158", whiteSpace: "nowrap" }}
                >
                  256 KB
                </span>
                <span style={{ fontSize: "14px", lineHeight: "20px", color: "#d6d6d6" }}>
                  for all 46 sprites and city backdrops
                </span>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="spark"
            data-reveal="1"
            data-sec="1"
            data-railsec="01"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              01 — the spark
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Every gali has a morning soundtrack.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  The cycle bell. A rolled newspaper slapping a gate. A cow that will not move. A dog that takes the whole thing personally. I grew up with that routine, and I had never seen it in a game.
                </p>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Akhbar Bash started as a portfolio question: how far can one designer take an idea, end to end, when the production work is shared with an AI? I gave myself a constraint to keep it honest. It had to be a real game that real friends would play on their phones, not a concept board.
                </p>
              </div>
              {" "}
              <div data-g4="1" data-goals="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "16px" }}>
                {" "}
                <div style={{ background: "#262626", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "14px", alignContent: "start" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#63c4ec" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <path d="M18 12h.01" />
                  </svg>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Phone held sideways
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Landscape gives a side-scroller room to show the street coming at you.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "14px", alignContent: "start" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#63c4ec" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
                    <path d="M14 10V4a2 2 0 0 0-4 0v6" />
                    <path d="M10 10.5V6a2 2 0 0 0-4 0v8" />
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.3l-3.6-3.6a2 2 0 0 1 2.8-2.8L7 15" />
                  </svg>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    One thumb, three gestures
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Swipe up, swipe down, tap. Anyone should be playing within five seconds.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "14px", alignContent: "start" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#63c4ec" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    A link, not an app store
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Runs in the browser, so I can share it on WhatsApp and push updates whenever I want.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: "14px", alignContent: "start" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#63c4ec" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 5-5.5 10.2-7.4 11.8a1 1 0 0 1-1.2 0C9.5 20.2 4 15 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Gali No. 4, not “a city”
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    It should feel local enough that a Delhi player spots Karol Bagh at a glance.
                  </p>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="process"
            data-reveal="1"
            data-sec="1"
            data-railsec="02"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              02 — process
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Twelve design decisions, made in the order a studio would make them.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  I worked in short loops. I set direction, Claude produced it, I reviewed it, and I decided what changed. Each step below was its own brief, and nothing moved forward until the previous step looked right.
                </p>
              </div>
              {" "}
              <ol
                data-steps="1"
                style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", columnGap: "24px" }}
              >
                {" "}
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    01
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Character
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    A paperboy and his cycle, inspired by classic arcade run-and-gun sprites.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    02
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Detail pass
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    I locked 16-bit as the style and asked for more detail on the boy and the cycle.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    03
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    World strip
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    A stretched street with homes, shops, cows, potholes, dogs, parked cars and autos.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    04
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Sprite sheets
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    Every character and obstacle cut into game-ready frames.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    05
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Organic motion
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    Lane changes and jumps animated so the boy and the cycle feel physical.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    06
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Start screen
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    A landscape title screen with all of its states.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    07
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Studio and cities
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    The Shiva Games brand, an app icon, plus Garage, Missions, Ranks and six local cities.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    08
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    In-game HUD
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    Score, papers left and pause, readable at a glance mid-swipe.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    09
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Player identity
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    A name step on first launch so the leaderboard means something.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    10
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Build
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    The designs turned into a playable game, screen by screen.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    11
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Music
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    Chiptune tracks with a dholak groove, plus a bell for every delivery.
                  </p>
                </li>
                <li
                  style={{ position: "relative", padding: "28px 0 32px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <span data-ctr="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "12px", lineHeight: "1", color: "#f7d158" }}>
                    12
                  </span>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Ship
                  </h3>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "22px", color: "#dcdcdc" }}>
                    A package I can keep building in Claude Code and share with a link.
                  </p>
                </li>
                {" "}
              </ol>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="character"
            data-reveal="1"
            data-sec="1"
            data-railsec="03"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              03 — character
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                A hero who reads at 60 pixels tall.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "48px", alignItems: "center" }}>
                {" "}
                <div
                  data-charpanel="1"
                  style={{ background: "#63c4ec", minHeight: "420px", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}
                >
                  <img
                    src={asset("/assets/akhbar/images/character-rider@8x.png")}
                    alt="The paperboy sprite: blue cap, orange kurta, satchel, a wire basket of rolled newspapers and a red cycle"
                    loading="lazy"
                    data-rider="1"
                    style={{ display: "block", width: "400px", maxWidth: "100%", height: "auto", imageRendering: "pixelated" }}
                  />
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {" "}
                  <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                      The first pass gave me the right silhouette but felt generic. In the second pass I directed the detail that makes him Indian and makes him a paperboy: a cap, a cross-body satchel, a front basket of rolled papers, a bundle strapped to the carrier and a red roadster with real spokes.
                    </p>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                      Then came the hard part, which was keeping all of that legible in a 60×66 frame. Dark brown outlines instead of black, flat shading, no anti-aliasing, and a palette small enough to recolour later.
                    </p>
                  </div>
                  {" "}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      60 × 66 px frame
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      Outline #241610
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      Flat 16-bit shading
                    </span>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      8 caps × 5 cycles
                    </span>
                  </div>
                  {" "}
                  <button
                    type="button"
                    data-open={asset("/assets/akhbar/images/sheet-all-sprites.png")}
                    data-open-alt="Every sprite in the game: rider animations, obstacles, vehicles, pickups and UI icons"
                    style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", height: "44px", padding: "0 14px", border: "1px solid #63c4ec", background: "transparent", color: "#f5f5f5", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", cursor: "pointer" }}
                    className="akhbar-hover-1"
                  >
                    VIEW THE FULL SPRITE SHEET{" "}
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
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="world"
            data-reveal="1"
            data-sec="1"
            data-railsec="04"
            style={{ paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              04 — world building
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                The street is the level designer.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Before any rules existed, I asked for one long strip of the route: numbered gates, a medical store, a sweet shop, overhead wires, water tanks on the roofs. The obstacles came straight out of that street, and each one turned into a rule.
                </p>
              </div>
            </div>
            {" "}
            <div style={{ alignSelf: "stretch", marginTop: "56px", position: "relative" }}>
              {" "}
              <div data-street="1" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
                <img
                  src={asset("/assets/akhbar/images/street-strip@3x.png")}
                  alt="A long pixel-art Indian street with pastel houses, shops, a cow, a parked car, an oncoming auto-rickshaw and the paperboy"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                />
              </div>
              {" "}
              <span
                data-mob-only="1"
                aria-hidden="true"
                style={{ position: "absolute", right: "0", top: "0", bottom: "0", width: "64px", background: "linear-gradient(90deg,rgba(28,28,28,0),#1c1c1c)", pointerEvents: "none" }}
              />
              {" "}
              <span
                data-mob-only="1"
                style={{ position: "absolute", right: "12px", bottom: "10px", padding: "4px 8px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em" }}
              >
                SWIPE →
              </span>
              {" "}
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "48px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              <div data-cast="1" style={{ background: "#f5f5f5", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "32px" }}>
                {" "}
                <div style={{ overflowX: "auto" }}>
                  <img
                    src={asset("/assets/akhbar/images/obstacle-cast@5x.png")}
                    alt="The obstacle cast: cow, parked car, auto-rickshaw, dog and pothole"
                    loading="lazy"
                    data-castimg="1"
                    style={{ display: "block", width: "100%", maxWidth: "940px", height: "auto", margin: "0 auto", imageRendering: "pixelated" }}
                  />
                </div>
                {" "}
                <ul data-g5="1" style={{ margin: "0", padding: "0", listStyle: "none", display: "grid", gridTemplateColumns: "repeat(5,minmax(0,1fr))", gap: "16px 20px" }}>
                  <li style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(28,28,28,0.2)", paddingTop: "12px" }}>
                    <strong style={{ fontSize: "15px", fontWeight: "700", color: "#1c1c1c" }}>
                      Cow
                    </strong>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#1c1c1c" }}>
                      Tall. Both lanes. Never in a hurry.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(28,28,28,0.2)", paddingTop: "12px" }}>
                    <strong style={{ fontSize: "15px", fontWeight: "700", color: "#1c1c1c" }}>
                      Parked car
                    </strong>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#1c1c1c" }}>
                      Tall. Blocks the house lane.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(28,28,28,0.2)", paddingTop: "12px" }}>
                    <strong style={{ fontSize: "15px", fontWeight: "700", color: "#1c1c1c" }}>
                      Auto
                    </strong>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#1c1c1c" }}>
                      Tall. Comes at you in the traffic lane.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(28,28,28,0.2)", paddingTop: "12px" }}>
                    <strong style={{ fontSize: "15px", fontWeight: "700", color: "#1c1c1c" }}>
                      Dog
                    </strong>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#1c1c1c" }}>
                      Low. Barks first, then runs. Jump it.
                    </span>
                  </li>
                  <li style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid rgba(28,28,28,0.2)", paddingTop: "12px" }}>
                    <strong style={{ fontSize: "15px", fontWeight: "700", color: "#1c1c1c" }}>
                      Pothole
                    </strong>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#1c1c1c" }}>
                      Low. Everywhere. Jump it.
                    </span>
                  </li>
                </ul>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="motion"
            data-reveal="1"
            data-sec="1"
            data-railsec="05"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              05 — motion
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Making a swipe feel like steering.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  My brief was “organic”. A sprite that just slides between lanes feels like a cursor. So every move was animated the way a real rider would do it, using classic animation principles at 16-bit scale.
                </p>
              </div>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px" }}>
                {" "}
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f6dfa6" }}>
                    Anticipation
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    He leans into the swipe before the cycle moves, so the lane change reads as a decision.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f6dfa6" }}>
                    Arc and overshoot
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Lane changes travel on a curve and settle past the line, then back.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f6dfa6" }}>
                    Squash on landing
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    An 8-frame jump: crouch, pop, hang, then land heavy and recover.
                  </p>
                </div>
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#f6dfa6" }}>
                    Clean rotation
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Tilts are baked with a RotSprite-style method: upscale ×8 with Scale2x, rotate, then sample back down. Pixels stay crisp.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "28px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    JUMP · 8 FRAMES
                  </span>
                  <div data-stripbox="1" style={{ overflowX: "auto", background: "#ffffff" }}>
                    <img
                      src={asset("/assets/akhbar/images/sprite-jump-8-frames@4x.png")}
                      alt="Eight-frame jump animation strip."
                      loading="lazy"
                      data-strip="960"
                      style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                    />
                  </div>
                  <span data-mob-only="1" style={{ fontSize: "12px", color: "#b5b5b5" }}>
                    Swipe to see all frames
                  </span>
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    LANE UP · 6 FRAMES
                  </span>
                  <div data-stripbox="1" style={{ overflowX: "auto", background: "#ffffff" }}>
                    <img
                      src={asset("/assets/akhbar/images/sprite-lane-up-6-frames@4x.png")}
                      alt="Six-frame lane change animation strip."
                      loading="lazy"
                      data-strip="720"
                      style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                    />
                  </div>
                  <span data-mob-only="1" style={{ fontSize: "12px", color: "#b5b5b5" }}>
                    Swipe to see all frames
                  </span>
                </div>
                {" "}
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                  One shared anchor holds it together. Every frame puts the rear wheel's ground contact at the same pixel, (18, 60), so the engine can swap frames at any moment without the rider jittering.
                </p>
                {" "}
              </div>
              {" "}
              <div data-g57="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,5fr) minmax(0,7fr)", gap: "24px", alignItems: "start" }}>
                {" "}
                <figure style={{ margin: "0" }}>
                  <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "2 / 1" }}>
                    {" "}
                    <video
                      data-auto="1"
                      muted
                      loop
                      preload="metadata"
                      playsInline
                      poster={asset("/assets/akhbar/video/posters/controls-demo.jpg")}
                      aria-label="The rider switching lanes and jumping in response to swipe and tap inputs."
                      style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                    >
                      <source src={asset("/assets/akhbar/video/controls-demo.mp4")} type="video/mp4" />
                    </video>
                    {" "}
                    <button
                      type="button"
                      data-vtoggle="1"
                      aria-label="Pause video"
                      style={{ position: "absolute", right: "10px", bottom: "10px", width: "44px", height: "44px", border: "0", background: "rgba(15,29,36,0.8)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-pause="1">
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-play="1" style={{ display: "none" }}>
                        <path d="M7 4v16l13-8z" />
                      </svg>
                    </button>
                    {" "}
                  </div>
                  <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                    <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                      See it move.
                    </strong>
                    {" "}Swipe up, swipe down and tap, recorded from the shipped build.
                  </figcaption>
                </figure>
                {" "}
                <figure style={{ margin: "0" }}>
                  <div style={{ border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden" }}>
                    <img
                      src={asset("/assets/akhbar/images/sheet-movement.png")}
                      alt="The full movement sheet: ride, lane down, lane up, jump and throw animations."
                      loading="lazy"
                      data-zoom="1"
                      role="button"
                      tabIndex={0}
                      style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated", cursor: "zoom-in" }}
                    />
                  </div>
                  <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                    <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                      The movement sheet.
                    </strong>
                    {" "}Ride, lane down, lane up, jump and throw: 28 frames in total.
                  </figcaption>
                </figure>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="game-design"
            data-reveal="1"
            data-sec="1"
            data-railsec="06"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              06 — game design
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                The best decision was the button I took away.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "20px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#63c4ec", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    THE PROBLEM
                  </span>
                  <div data-blk="1" style={{ flex: "1", background: "#63c4ec", padding: "31px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "1.3", fontWeight: "600", color: "#0f1d24" }}>
                      The problem
                    </h3>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#0f1d24" }}>
                      Three gestures on one thumb is already the limit. The obvious fourth action was “throw”. That would mean dodging a cow, timing a jump and aiming a paper all at once, which turns the fun part into homework.
                    </p>
                  </div>
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    THE DECISION
                  </span>
                  <div data-blk="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "1.3", fontWeight: "600", color: "#0f1d24" }}>
                      The decision
                    </h3>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#0f1d24" }}>
                      Throwing became positional. Be in the house lane when a subscriber's gate passes and the paper flies on its own. Throw mid-jump and it counts as{" "}
                      <strong>
                        AIR MAIL
                      </strong>
                      {" "}for a bonus.
                    </p>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden" }}>
                  <img
                    src={asset("/assets/akhbar/images/screen-how-to-play.png")}
                    alt="How to ride screen explaining swipe up, swipe down and tap."
                    loading="lazy"
                    style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                  />
                </div>
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                  <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                    Proof it fits on one screen.
                  </strong>
                  {" "}The whole rule set, as the player first sees it.
                </figcaption>
              </figure>
              {" "}
              <p data-lead="1" style={{ margin: "0", maxWidth: "900px", fontSize: "24px", lineHeight: "36px", fontWeight: "500", color: "#f5f5f5", textWrap: "pretty" }}>
                That one change created the core tension of the game. The house lane is where the points are, and it is also where the parked cars and dogs are. The traffic lane is safer for weaving, but you deliver nothing there. Every second, the player is choosing between greed and safety, without a single extra control.
              </p>
              {" "}
              <div
                role="img"
                aria-label="Lane model: the house lane on top holds deliveries, parked cars, cows, dogs and potholes, and earns points. The traffic lane below has no deliveries, with oncoming autos, cows and potholes, and is safer."
                style={{ display: "flex", flexDirection: "column", gap: "0", border: "2px solid #3a3a3a" }}
              >
                {" "}
                <div style={{ height: "10px", backgroundImage: "repeating-linear-gradient(90deg,#f7d158 0 24px,#1c1c1c 24px 48px)" }} />
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "16px", alignItems: "center", padding: "20px 24px", background: "#5f5f5f" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", color: "#ffffff" }}>
                      HOUSE LANE (TOP)
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#ffffff" }}>
                      Deliveries happen here
                    </span>
                    <span style={{ fontSize: "13px", lineHeight: "19px", color: "#f0f0f0" }}>
                      Parked cars · cows · dogs · potholes
                    </span>
                  </div>
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", background: "#0f1d24", color: "#f7d158", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", whiteSpace: "nowrap" }}
                  >
                    ← POINTS
                  </span>
                </div>
                {" "}
                <div style={{ height: "2px", backgroundImage: "repeating-linear-gradient(90deg,#ffffff 0 28px,transparent 28px 52px)", backgroundColor: "#5f5f5f" }} />
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: "16px", alignItems: "center", padding: "20px 24px", background: "#5f5f5f" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", color: "#ffffff" }}>
                      TRAFFIC LANE (BOTTOM)
                    </span>
                    <span style={{ fontSize: "14px", lineHeight: "20px", color: "#ffffff" }}>
                      No deliveries
                    </span>
                    <span style={{ fontSize: "13px", lineHeight: "19px", color: "#f0f0f0" }}>
                      Oncoming autos · cows · potholes
                    </span>
                  </div>
                  <span
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", height: "36px", padding: "0 12px", background: "#0f1d24", color: "#a3e4c1", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", whiteSpace: "nowrap" }}
                  >
                    ← SAFETY
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div data-g4="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "16px" }}>
                {" "}
                <div style={{ border: "1px solid #3a3a3a", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    CONTROLS
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#f5f5f5" }}>
                    <strong>
                      Swipe up
                    </strong>
                    {" "}to the house lane ·{" "}
                    <strong>
                      Swipe down
                    </strong>
                    {" "}to the traffic lane ·{" "}
                    <strong>
                      Tap
                    </strong>
                    {" "}to jump
                  </p>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", fontStyle: "italic" }}>
                    On-screen buttons and keyboard as alternatives
                  </p>
                </div>
                <div style={{ border: "1px solid #3a3a3a", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    ONE RULE TO LEARN
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#f5f5f5" }}>
                    <strong>
                      Tall
                    </strong>
                    {" "}things (cow, car, auto): change lane.{" "}
                    <strong>
                      Low
                    </strong>
                    {" "}things (pothole, dog): jump.
                  </p>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", fontStyle: "italic" }}>
                    Three hearts. A bump costs one, gives a moment of invulnerability and breaks your combo.
                  </p>
                </div>
                <div style={{ border: "1px solid #3a3a3a", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    SCORING
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Delivery: 10 × combo, up to{" "}
                    <strong>
                      x5
                    </strong>
                    {" "}· AIR MAIL:{" "}
                    <strong>
                      +25
                    </strong>
                    {" "}· Stars: target met · 85% served · no crashes
                  </p>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", fontStyle: "italic" }}>
                    Stars unlock the next city
                  </p>
                </div>
                <div style={{ border: "1px solid #3a3a3a", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    FAIR BY CONSTRUCTION
                  </span>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Levels are generated from a fixed seed, so a level plays the same every time and can be learned.
                  </p>
                  <p style={{ margin: "0", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", fontStyle: "italic" }}>
                    A hard rule: never tall obstacles in both lanes within 120 px. There is always a way through.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "16px" }}>
                {" "}
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Difficulty curve
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    One new idea per level: potholes and cows, then parked cars, then oncoming autos, then dogs. Level 5 is a city event, and level 10 is a finale with everything at speed.
                  </p>
                </div>
                {" "}
                <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "600", color: "#f5f5f5" }}>
                    Reasons to come back
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Coins buy cycles with real stat trade-offs (speed, handling, jump, basket) and caps that recolour your rider. A 7-day bonus streak rewards daily play, and a weekly leaderboard resets every Monday.
                  </p>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="experience"
            data-reveal="1"
            data-sec="1"
            data-railsec="07"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              07 — experience design
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Two journeys: the first ride and the hundredth.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "24px", alignItems: "start" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      FIRST LAUNCH
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Studio splash
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Loading
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Title
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Player name
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        How to play
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Get ready
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Level 1
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                      No menus between a new player and the road. You are riding within about four taps.
                    </p>
                  </div>
                  <figure style={{ margin: "0" }}>
                    <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "1688 / 780" }}>
                      {" "}
                      <video
                        data-auto="1"
                        muted
                        loop
                        preload="metadata"
                        playsInline
                        poster={asset("/assets/akhbar/video/posters/first-launch-flow.jpg")}
                        aria-label="A first launch: Shiva Games splash, the title screen, typing the name “CHOTU”, the how-to-ride cards and the 3-2-1 countdown."
                        style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                      >
                        <source src={asset("/assets/akhbar/video/first-launch-flow.mp4")} type="video/mp4" />
                      </video>
                      {" "}
                      <button
                        type="button"
                        data-vtoggle="1"
                        aria-label="Pause video"
                        style={{ position: "absolute", right: "10px", bottom: "10px", width: "44px", height: "44px", border: "0", background: "rgba(15,29,36,0.8)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-pause="1">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-play="1" style={{ display: "none" }}>
                          <path d="M7 4v16l13-8z" />
                        </svg>
                      </button>
                      {" "}
                    </div>
                  </figure>
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "#262626", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#f6dfa6" }}>
                      RETURNING
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Title
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Daily bonus (once a day)
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Menu
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Start delivery
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Get ready
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Ride
                      </span>
                      <span aria-hidden="true" style={{ color: "#63c4ec" }}>
                        →
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", border: "1px solid #3a3a3a", fontSize: "13px", color: "#f5f5f5", whiteSpace: "nowrap" }}
                      >
                        Route complete
                      </span>
                    </div>
                    <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                      Missions, Garage, Ranks and Settings sit one tap off the menu.
                    </p>
                  </div>
                  <figure style={{ margin: "0" }}>
                    <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "1688 / 780" }}>
                      {" "}
                      <video
                        data-auto="1"
                        muted
                        loop
                        preload="metadata"
                        playsInline
                        poster={asset("/assets/akhbar/video/posters/menus-tour.jpg")}
                        aria-label="Pausing a ride, then visiting the menu, Missions, Garage and Ranks."
                        style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                      >
                        <source src={asset("/assets/akhbar/video/menus-tour.mp4")} type="video/mp4" />
                      </video>
                      {" "}
                      <button
                        type="button"
                        data-vtoggle="1"
                        aria-label="Pause video"
                        style={{ position: "absolute", right: "10px", bottom: "10px", width: "44px", height: "44px", border: "0", background: "rgba(15,29,36,0.8)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "0" }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-pause="1">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" data-i-play="1" style={{ display: "none" }}>
                          <path d="M7 4v16l13-8z" />
                        </svg>
                      </button>
                      {" "}
                    </div>
                  </figure>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {" "}
                <div data-rail="1" tabIndex={0} aria-label="Screen gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "32px 20px" }}>
                  {" "}
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-title.png")}
                        alt="Title screen with the logo over a Delhi street and the paperboy below"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Title.
                      </strong>
                      {" "}Karol Bagh's Hanuman statue and a row of shops set the scene before the first tap.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-player-name.png")}
                        alt="Player name screen showing a validation message"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Player name.
                      </strong>
                      {" "}3–12 letters, a cap colour and a home city. It asks for a nickname, not a real name, because the leaderboard is public.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-how-to-play.png")}
                        alt="How to ride screen with three illustrated cards"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        How to play.
                      </strong>
                      {" "}Three gestures and one rule, shown once, then out of the way.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-daily-bonus.png")}
                        alt="Daily bonus screen with a seven-day streak"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Daily bonus.
                      </strong>
                      {" "}A 7-day streak that grows from 50 to 500 coins.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-menu.png")}
                        alt="Main menu with a large Start delivery button"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Menu.
                      </strong>
                      {" "}One primary action, Start delivery. Everything else is secondary.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-missions-delhi.png")}
                        alt="Missions screen showing Delhi levels and locked cities"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Missions.
                      </strong>
                      {" "}Each city is a route with ten levels, and stars show mastery at a glance.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-garage.png")}
                        alt="Garage screen with cycles and stat bars"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Garage.
                      </strong>
                      {" "}Five cycles with honest trade-offs, so there is no single best bike.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-ranks.png")}
                        alt="Weekly leaderboard podium"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Ranks.
                      </strong>
                      {" "}This week, in your city and across India. Your own rank is always shown.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-pause.png")}
                        alt="Pause overlay during a ride"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Pause.
                      </strong>
                      {" "}The game pauses itself when the phone rings or the tab hides.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-route-complete.png")}
                        alt="Route complete card with two of three stars and score"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Route complete.
                      </strong>
                      {" "}Stars, score and coins, with Next level as the biggest tap target.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-settings-hindi.png")}
                        alt="Settings screen shown in Hindi"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        Settings in{" "}
                        <span lang="hi">
                          हिंदी
                        </span>
                        .
                      </strong>
                      {" "}Full Hindi UI, swipe or button controls, music, sound and vibration.
                    </figcaption>
                  </figure>
                  <figure data-slide="1" style={{ margin: "0" }}>
                    <div style={{ border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", aspectRatio: "1688 / 780", background: "#222222" }}>
                      <img
                        src={asset("/assets/akhbar/images/screen-missions-mumbai.png")}
                        alt="Missions screen for Mumbai with the monsoon event level"
                        loading="lazy"
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }}
                      />
                    </div>
                    <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                      <strong style={{ fontWeight: "600", color: "#f5f5f5" }}>
                        City events.
                      </strong>
                      {" "}Mumbai's level 5 is the monsoon, with rain and waterlogged potholes.
                    </figcaption>
                  </figure>
                  {" "}
                </div>
                {" "}
                <div data-mob-only="1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  {" "}
                  <span data-rail-pos="1" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "11px", color: "#f7d158" }}>
                    1 / 12
                  </span>
                  {" "}
                  <div data-rail-btns="1" style={{ display: "flex", gap: "8px" }}>
                    <button
                      type="button"
                      data-rail-prev="1"
                      aria-label="Previous screen"
                      style={{ width: "44px", height: "44px", border: "1px solid #3a3a3a", background: "transparent", color: "#f5f5f5", cursor: "pointer", fontSize: "18px" }}
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      data-rail-next="1"
                      aria-label="Next screen"
                      style={{ width: "44px", height: "44px", border: "1px solid #3a3a3a", background: "transparent", color: "#f5f5f5", cursor: "pointer", fontSize: "18px" }}
                    >
                      →
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden" }}>
                  <img
                    src={asset("/assets/akhbar/images/board-start-flow.png")}
                    alt="The start flow board: studio splash, loading, title, daily bonus, menu, settings, how to play and get ready, designed on the canvas."
                    loading="lazy"
                    data-zoom="1"
                    role="button"
                    tabIndex={0}
                    style={{ display: "block", width: "100%", height: "auto", cursor: "zoom-in" }}
                  />
                </div>
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                  The start flow as designed on the canvas, before a line of game code existed. The built screens follow it closely.
                </figcaption>
              </figure>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="cities"
            data-reveal="1"
            data-sec="1"
            data-railsec="08"
            style={{ paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              08 — local, not generic
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Six cities you can recognise from the skyline.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Every route is a real kind of street with a real address on the card: Gali No. 4, Karol Bagh. Landmarks sit in the backdrop as houses roll past, and each city's level 5 is an event a local would recognise.
                </p>
              </div>
              {" "}
              <div data-desk-only="1" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {" "}
                <div role="tablist" aria-label="Cities" style={{ display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))", gap: "8px" }}>
                  {" "}
                  {((v.cityTabs ?? []) as any[]).map((t: any, i0: number) => (
                    <Fragment key={i0}>
                      {" "}
                      <button
                        type="button"
                        role="tab"
                        aria-selected={t?.sel}
                        onClick={t?.pick}
                        style={css(`display:flex;flex-direction:column;align-items:flex-start;gap:8px;min-height:64px;padding:12px;border:0;border-top:2px solid ${t?.bc ?? ""};background:${t?.bg ?? ""};color:#f5f5f5;cursor:pointer;text-align:left`)}
                      >
                        <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "11px", color: "#f7d158" }}>
                          {t?.num}
                        </span>
                        <span style={{ fontSize: "14px", fontWeight: "600" }}>
                          {t?.name}
                        </span>
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
                <div style={{ position: "relative", aspectRatio: "6 / 1", border: "2px solid rgba(245,245,245,0.14)", overflow: "hidden", background: "#222222" }}>
                  {" "}
                  <img
                    data-cityimg="0"
                    src={asset("/assets/akhbar/images/city-delhi@3x.png")}
                    alt="Delhi backdrop with Hanuman statue, Blue Line metro, India Gate"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "1", transition: "opacity 200ms linear" }}
                  />
                  <img
                    data-cityimg="1"
                    src={asset("/assets/akhbar/images/city-mumbai@3x.png")}
                    alt="Mumbai backdrop with Gateway of India, Bandra–Worli Sea Link, chawls"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "0", transition: "opacity 200ms linear" }}
                  />
                  <img
                    data-cityimg="2"
                    src={asset("/assets/akhbar/images/city-pune@3x.png")}
                    alt="Pune backdrop with Shaniwar Wada, Parvati hill"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "0", transition: "opacity 200ms linear" }}
                  />
                  <img
                    data-cityimg="3"
                    src={asset("/assets/akhbar/images/city-bengaluru@3x.png")}
                    alt="Bengaluru backdrop with Vidhana Soudha, Namma Metro, tech parks"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "0", transition: "opacity 200ms linear" }}
                  />
                  <img
                    data-cityimg="4"
                    src={asset("/assets/akhbar/images/city-gurugram@3x.png")}
                    alt="Gurugram backdrop with Cyber City towers, Rapid Metro, cranes"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "0", transition: "opacity 200ms linear" }}
                  />
                  <img
                    data-cityimg="5"
                    src={asset("/assets/akhbar/images/city-noida@3x.png")}
                    alt="Noida backdrop with DND Flyway, Aqua Line metro, Sector 18 mall"
                    loading="lazy"
                    style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", opacity: "0", transition: "opacity 200ms linear" }}
                  />
                  {" "}
                </div>
                {" "}
                <div data-citycapd="0" style={{ display: "block" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Delhi
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 4, Karol Bagh · 0 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Hanuman statue, Blue Line metro, India Gate
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Wedding season traffic
                      </span>
                    </div>
                  </div>
                </div>
                <div data-citycapd="1" style={{ display: "none" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Mumbai
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 10, Colaba · 8 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Gateway of India, Bandra–Worli Sea Link, chawls
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Monsoon
                      </span>
                    </div>
                  </div>
                </div>
                <div data-citycapd="2" style={{ display: "none" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Pune
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 7, Shaniwar Peth · 24 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Shaniwar Wada, Parvati hill
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Street dogs at every gate
                      </span>
                    </div>
                  </div>
                </div>
                <div data-citycapd="3" style={{ display: "none" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Bengaluru
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Cross No. 3, Malleshwaram · 40 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Vidhana Soudha, Namma Metro, tech parks
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Silk Board jam
                      </span>
                    </div>
                  </div>
                </div>
                <div data-citycapd="4" style={{ display: "none" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Gurugram
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 5, Cyber City · 60 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Cyber City towers, Rapid Metro, cranes
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Office cab rush
                      </span>
                    </div>
                  </div>
                </div>
                <div data-citycapd="5" style={{ display: "none" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Noida
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 8, Sector 18 · 80 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        DND Flyway, Aqua Line metro, Sector 18 mall
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Winter fog
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
              </div>
            </div>
            {" "}
            <div data-mob-only="1" style={{ alignSelf: "stretch", marginTop: "40px", flexDirection: "column", gap: "40px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-delhi@3x.png")}
                      alt="Delhi backdrop with Hanuman statue, Blue Line metro, India Gate"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-delhi@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Delhi
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 4, Karol Bagh · 0 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Hanuman statue, Blue Line metro, India Gate
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Wedding season traffic
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-mumbai@3x.png")}
                      alt="Mumbai backdrop with Gateway of India, Bandra–Worli Sea Link, chawls"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-mumbai@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Mumbai
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 10, Colaba · 8 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Gateway of India, Bandra–Worli Sea Link, chawls
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Monsoon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-pune@3x.png")}
                      alt="Pune backdrop with Shaniwar Wada, Parvati hill"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-pune@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Pune
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 7, Shaniwar Peth · 24 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Shaniwar Wada, Parvati hill
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Street dogs at every gate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-bengaluru@3x.png")}
                      alt="Bengaluru backdrop with Vidhana Soudha, Namma Metro, tech parks"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-bengaluru@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Bengaluru
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Cross No. 3, Malleshwaram · 40 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Vidhana Soudha, Namma Metro, tech parks
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Silk Board jam
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-gurugram@3x.png")}
                      alt="Gurugram backdrop with Cyber City towers, Rapid Metro, cranes"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-gurugram@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Gurugram
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 5, Cyber City · 60 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        Cyber City towers, Rapid Metro, cranes
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Office cab rush
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div data-pan="1" style={{ height: "180px", overflowX: "auto", overflowY: "hidden", scrollbarWidth: "none" }}>
                  <div data-pantrack="1" style={{ display: "flex", width: "max-content", height: "180px" }}>
                    <img
                      src={asset("/assets/akhbar/images/city-noida@3x.png")}
                      alt="Noida backdrop with DND Flyway, Aqua Line metro, Sector 18 mall"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                    <img
                      src={asset("/assets/akhbar/images/city-noida@3x.png")}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{ display: "block", height: "180px", width: "1080px", imageRendering: "pixelated" }}
                    />
                  </div>
                </div>
                <div style={{ padding: "0 20px" }}>
                  <div data-citycap="1" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px 32px", paddingTop: "16px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <strong style={{ fontSize: "20px", fontWeight: "600", color: "#f5f5f5" }}>
                        Noida
                      </strong>
                      <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                        Gali No. 8, Sector 18 · 80 stars to unlock
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                        DND Flyway, Aqua Line metro, Sector 18 mall
                      </span>
                      <span style={{ fontSize: "14px", lineHeight: "21px", color: "#f6dfa6" }}>
                        Level 5: Winter fog
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="brand"
            data-reveal="1"
            data-sec="1"
            data-railsec="09"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              09 — brand
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                A studio, a logo and an icon that survive at 20 pixels.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "16px" }}>
                {" "}
                <figure style={{ margin: "0", background: "#0f1d24", display: "flex", flexDirection: "column" }}>
                  <div data-art="1" style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
                    <img
                      src={asset("/assets/akhbar/images/logo-shiva-games.png")}
                      alt="Shiva Games studio logo in pixel art"
                      loading="lazy"
                      style={{ display: "block", width: "236px", maxWidth: "100%", height: "auto", imageRendering: "pixelated" }}
                    />
                  </div>
                  <figcaption style={{ padding: "0 24px 24px", fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                    <strong style={{ color: "#f5f5f5", fontWeight: "600" }}>
                      Shiva Games, the studio splash.
                    </strong>
                    {" "}I removed the drop shadow because it showed through the letter counters at small sizes.
                  </figcaption>
                </figure>
                {" "}
                <figure style={{ margin: "0", background: "#63c4ec", display: "flex", flexDirection: "column" }}>
                  <div data-art="1" style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
                    <img
                      src={asset("/assets/akhbar/images/logo-akhbaar-rush@6x.png")}
                      alt="Akhbaar Rush game logo in pixel art"
                      loading="lazy"
                      style={{ display: "block", width: "300px", maxWidth: "100%", height: "auto", imageRendering: "pixelated" }}
                    />
                  </div>
                  <figcaption style={{ padding: "0 24px 24px", fontSize: "14px", lineHeight: "21px", color: "#0f1d24" }}>
                    <strong style={{ fontWeight: "700" }}>
                      Game logo, under the working title.
                    </strong>
                    {" "}The italic is a per-row pixel offset, not a shear, so every letter keeps clean edges.
                  </figcaption>
                </figure>
                {" "}
                <figure style={{ margin: "0", background: "#262626", display: "flex", flexDirection: "column" }}>
                  <div data-art="1" style={{ height: "200px", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon: the paperboy on a blue background"
                      loading="lazy"
                      style={{ display: "block", width: "160px", height: "160px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                  </div>
                  <figcaption style={{ padding: "0 24px 24px", fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                    <strong style={{ color: "#f5f5f5", fontWeight: "600" }}>
                      App icon.
                    </strong>
                    {" "}The first version cropped the boy and the next one shrank him. It is redrawn on a 256 grid at 3×, so it holds from 1024 down to 20 px.
                  </figcaption>
                </figure>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                  ICON AT EVERY SIZE
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "24px", padding: "28px", background: "#262626" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon at 180 pixels"
                      loading="lazy"
                      style={{ display: "block", width: "180px", height: "180px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#f7d158" }}>
                      180
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon at 120 pixels"
                      loading="lazy"
                      style={{ display: "block", width: "120px", height: "120px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#f7d158" }}>
                      120
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon at 60 pixels"
                      loading="lazy"
                      style={{ display: "block", width: "60px", height: "60px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#f7d158" }}>
                      60
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon at 40 pixels"
                      loading="lazy"
                      style={{ display: "block", width: "40px", height: "40px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#f7d158" }}>
                      40
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                    <img
                      src={asset("/assets/akhbar/images/app-icon-1024.png")}
                      alt="App icon at 20 pixels"
                      loading="lazy"
                      style={{ display: "block", width: "20px", height: "20px", borderRadius: "22%", imageRendering: "pixelated" }}
                    />
                    <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "10px", color: "#f7d158" }}>
                      20
                    </span>
                  </div>
                </div>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden" }}>
                  <img
                    src={asset("/assets/akhbar/images/board-brand-and-cities.png")}
                    alt="Brand board: city backdrops, app icon sizes, studio logos, avatars and cycle colours."
                    loading="lazy"
                    data-zoom="1"
                    role="button"
                    tabIndex={0}
                    style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated", cursor: "zoom-in" }}
                  />
                </div>
              </figure>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="engineering"
            data-reveal="1"
            data-sec="1"
            data-railsec="10"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              10 — under the hood
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Engineering choices made for a designer who wants to keep shipping.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  I am not an engineer, so every technical decision was judged by one test: can I change this next month without breaking it? Claude proposed the options, and I picked the ones that kept the game simple to own.
                </p>
              </div>
              {" "}
              <div
                data-g3="1"
                data-hair="1"
                style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "1px", background: "#333333", border: "1px solid #333333" }}
              >
                {" "}
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    No build step
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Plain HTML, CSS and JavaScript with no framework. Deploying is a git push, and the host redeploys in about a minute.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    True pixel canvas
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    The world renders at 380×176 game pixels on whole-number positions, then scales to any phone with smoothing off. No blurry sprites.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    Art as code
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Every sprite and city strip is drawn by scripts that live in the repo. Changing a colour or adding a city means re-running a script, not redrawing.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    Recolour at runtime
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Cycle and cap colours are swapped pixel by pixel when the game loads, so 8 caps × 5 cycles need no extra art.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    Music without files
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    A Web Audio synth plays three chiptune loops (menu at 104 bpm, the ride at 138 bpm with a dholak pattern, events at 152 bpm) and every sound effect.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    Installable and offline
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    A PWA with full-screen landscape install. Code loads network-first so updates land fast, and players see a “New version ready” toast.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    A leaderboard without logins
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    Supabase with row-level security. Browsers only read a public view and write through one function that checks a per-device secret, so nobody can overwrite someone else's score.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    An automated play-through
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    A headless phone-sized browser plays the whole flow (name validation, riding, pause, every menu) and saves screenshots for review.
                  </p>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    Ready for Claude Code
                  </h3>
                  <p style={{ margin: "0", fontSize: "15px", lineHeight: "24px", color: "#dcdcdc" }}>
                    The package ships with a guide for Claude Code covering coordinates, how to add a city or cycle, and a release checklist, so the next feature is one request away.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                  ARCHITECTURE
                </span>
                {" "}
                <div
                  role="img"
                  aria-label="Architecture: a phone browser PWA made of index.html and style.css for 15 screens, a 380 by 176 canvas for the engine, a Web Audio synth, a service worker, and an optional Supabase backend with a public read view and a submit_score write function. Deploys by git push to a static host."
                  style={{ border: "1px solid #3a3a3a", borderTop: "0", background: "#262626" }}
                >
                  {" "}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 16px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#63c4ec" }}>
                      Phone browser (PWA)
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }} />
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 44px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      index.html + style.css
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      15 screens
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 44px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      Canvas 380×176 → scaled
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      engine, levels, sprites
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 44px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      Web Audio synth
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      3 tracks + sound effects
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 44px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      Service worker
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      offline + update toast
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 44px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      Supabase (optional)
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }} />
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 72px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      public view
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      ← read
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 72px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f5f5f5" }}>
                      <span aria-hidden="true" style={{ color: "#7a7a7a" }}>
                        └{" "}
                      </span>
                      submit_score()
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      ← write, checks device secret
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px 24px", padding: "12px 16px 12px 16px", borderTop: "1px solid #3a3a3a" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#f6dfa6" }}>
                      Deploy
                    </span>
                    <span style={{ fontSize: "14px", color: "#b5b5b5" }}>
                      git push → static host (Cloudflare Pages / Netlify / GitHub Pages)
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ position: "relative", border: "2px solid rgba(245,245,245,0.14)", background: "#222222", overflow: "hidden", aspectRatio: "1688 / 780" }}>
                  {" "}
                  <video
                    controls
                    preload="none"
                    playsInline
                    poster={asset("/assets/akhbar/video/posters/gameplay-full-level.jpg")}
                    aria-label="A complete ride through Delhi level 1, ending on the Route Complete screen."
                    style={{ display: "block", width: "100%", height: "auto", imageRendering: "pixelated" }}
                  >
                    <source src={asset("/assets/akhbar/video/gameplay-full-level.mp4")} type="video/mp4" />
                  </video>
                  {" "}
                  <span
                    style={{ position: "absolute", right: "12px", top: "12px", padding: "6px 8px", background: "rgba(15,29,36,0.8)", color: "#ffffff", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", pointerEvents: "none" }}
                  >
                    0:43
                  </span>
                  {" "}
                </div>
                <figcaption style={{ marginTop: "12px", fontSize: "14px", lineHeight: "21px", color: "#b5b5b5", maxWidth: "720px" }}>
                  A full run of Delhi level 1, recorded from the shipped build: no crashes, 7 papers delivered, two stars.
                </figcaption>
              </figure>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="craft"
            data-reveal="1"
            data-sec="1"
            data-railsec="11"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              11 — craft
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                What broke, and what I learned from it.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Speed hides mistakes, so I reviewed every screen as a set of previews before it counted as done. These are the issues that review caught.
                </p>
              </div>
              {" "}
              <ul style={{ margin: "0", padding: "0", listStyle: "none", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                {" "}
                <li
                  data-g2="1"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: "8px 32px", padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "600", color: "#f5f5f5" }}>
                    Whites rendered red
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "26px", color: "#dcdcdc" }}>
                    The colour parser only understood 6-digit hex. Short codes like #fff now expand correctly.
                  </span>
                </li>
                <li
                  data-g2="1"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: "8px 32px", padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "600", color: "#f5f5f5" }}>
                    The loading screen never left
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "26px", color: "#dcdcdc" }}>
                    A layout style beat the hidden state and covered the whole game. One global rule fixed every screen.
                  </span>
                </li>
                <li
                  data-g2="1"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: "8px 32px", padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "600", color: "#f5f5f5" }}>
                    A surprise reload on first visit
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "26px", color: "#dcdcdc" }}>
                    The offline worker refreshed the page mid-splash. It now reloads only when replacing an older version.
                  </span>
                </li>
                <li
                  data-g2="1"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: "8px 32px", padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "600", color: "#f5f5f5" }}>
                    Crowded HUD and cards
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "26px", color: "#dcdcdc" }}>
                    The progress bar hit the papers chip, “GET READY” sat on the HUD and garage names overlapped the bikes. All were re-spaced and given the right type.
                  </span>
                </li>
                <li
                  data-g2="1"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.5fr)", gap: "8px 32px", padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "18px", lineHeight: "27px", fontWeight: "600", color: "#f5f5f5" }}>
                    Broken letterforms
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "26px", color: "#dcdcdc" }}>
                    Shearing pixel letters for an italic tore them apart. A per-row offset with wider spacing kept them whole.
                  </span>
                </li>
                {" "}
              </ul>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="claude"
            data-reveal="1"
            data-railsec="12"
            style={{ marginTop: "180px", background: "#d97757", padding: "120px 0", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              12 — working with claude
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #1c1c1c", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#1c1c1c", textAlign: "center", textWrap: "balance" }}>
                Production got cheap. Judgement became the job.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #1c1c1c", background: "#d97757", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #1c1c1c", background: "#d97757", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #1c1c1c", background: "#d97757", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #1c1c1c", background: "#d97757", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "20px" }}>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "600", color: "#f6dfa6" }}>
                    What I decided
                  </h3>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                    <li style={{ padding: "12px 0", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      The concept, the audience and the platform: phone, landscape, browser
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Art direction: 16-bit arcade, and how much detail the hero carries
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      One-thumb controls: swipe up, swipe down, tap to jump
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Making it local, from city by city down to which landmarks
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      A player name for the leaderboard, with privacy-safe nicknames
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Sign-off on every screen, and what had to be fixed
                    </li>
                  </ul>
                </div>
                <div style={{ background: "#1c1c1c", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "600", color: "#63c4ec" }}>
                    What Claude executed
                  </h3>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
                    <li style={{ padding: "12px 0", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Pixel art, sprite sheets and animation, written as code
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Screen designs as canvas artboards, then the working UI
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      The game engine, level generator and balance tables
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Synthesised music and sound effects
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      The leaderboard backend, tested against a real database
                    </li>
                    <li style={{ padding: "12px 0", borderTop: "1px solid #3a3a3a", fontSize: "15px", lineHeight: "23px", color: "#dcdcdc" }}>
                      Automated tests, bug fixes and the shareable package
                    </li>
                  </ul>
                </div>
              </div>
              {" "}
              <p
                data-lead="1"
                style={{ margin: "0 auto", maxWidth: "900px", fontSize: "28px", lineHeight: "40px", fontWeight: "500", color: "#1c1c1c", textAlign: "center", textWrap: "balance" }}
              >
                When making things is nearly free, the scarce skill is knowing what to make and when it is good enough. That was what I spent my afternoon on, and it is the part of this project I am proudest of.
              </p>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="outcome"
            data-reveal="1"
            data-sec="1"
            data-railsec="13"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "180px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              13 — outcome
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "12px 34px", maxWidth: "min(1040px,calc(100% - 64px))", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "48px", lineHeight: "58px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                From a nostalgic thought to a link I can send.
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
            </div>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "80px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "48px" }}>
                {" "}
                <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "30px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                    Version 1.0 is a complete, installable game. It has six cities, sixty levels, a garage, a daily bonus, a weekly leaderboard, two languages, original music, and a codebase I can keep growing.
                  </p>
                </div>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    WHAT'S NEXT
                  </span>
                  <ul style={{ margin: "0", padding: "0", listStyle: "none", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                    <li style={{ padding: "16px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "16px", lineHeight: "25px", color: "#f5f5f5" }}>
                      Share it with friends and watch where they crash
                    </li>
                    <li style={{ padding: "16px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "16px", lineHeight: "25px", color: "#f5f5f5" }}>
                      Tune the difficulty curve from real play
                    </li>
                    <li style={{ padding: "16px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "16px", lineHeight: "25px", color: "#f5f5f5" }}>
                      A Kolkata route with Howrah Bridge in the backdrop
                    </li>
                    <li style={{ padding: "16px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "16px", lineHeight: "25px", color: "#f5f5f5" }}>
                      Power-ups, like a coin magnet for the morning rush
                    </li>
                  </ul>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section id="footer" data-reveal="1" style={{ paddingTop: "160px" }}>
            {" "}
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "0 auto" }}>
              {" "}
              <div
                data-cta="1"
                style={{ background: "#0f1d24", padding: "40px 48px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "32px" }}
              >
                {" "}
                <div data-ctaid="1" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                  <img
                    src={asset("/assets/akhbar/images/app-icon-1024.png")}
                    alt=""
                    style={{ display: "block", width: "88px", height: "88px", borderRadius: "20px", imageRendering: "pixelated" }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "38px", fontWeight: "600", color: "#f5f5f5" }}>
                      Akhbar Bash
                    </h2>
                    <span style={{ fontSize: "14px", lineHeight: "21px", color: "#dcdcdc" }}>
                      A Shiva Games production · Designed by Shiva, built with Claude
                    </span>
                  </div>
                </div>
                {" "}
                <div data-ctabtns="1" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  {" "}
                  <a
                    href="https://claude.ai/artifact/4dQjfkABaJHkov8M3SbbHr"
                    target="_blank"
                    rel="noopener"
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", height: "48px", padding: "0 24px", background: "#63c4ec", color: "#0f1d24", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none" }}
                    className="akhbar-hover-2"
                  >
                    PLAY THE GAME{" "}
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
                  </a>
                  {" "}
                  <a
                    href={href("/#work")}
                    style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", height: "48px", padding: "0 24px", border: "1px solid #63c4ec", color: "#f5f5f5", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", boxSizing: "border-box" }}
                    className="akhbar-hover-1"
                  >
                    ALL PROJECTS
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "160px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              keep exploring
            </span>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <a
                href={href("/")}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "44px", padding: "0 14px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", boxSizing: "border-box" }}
                className="akhbar-hover-3"
              >
                BACK TO HOME{" "}
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
              </a>
              <a
                href={href("/work/jugnu/")}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "44px", padding: "0 14px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", boxSizing: "border-box" }}
                className="akhbar-hover-3"
              >
                NEXT PROJECT: JUGNU{" "}
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
              </a>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="contact"
            data-contact="1"
            style={{ maxWidth: "1440px", margin: "0 auto", padding: "244px 0 224px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <div data-fh="1" style={{ position: "relative", border: "2px solid #63c4ec", padding: "23px 47px" }}>
              {" "}
              <h2 data-h2big="1" style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                Let’s Talk
              </h2>
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", top: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-11px", bottom: "-11px", width: "20px", height: "20px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
              />
              {" "}
            </div>
            {" "}
            <div
              data-cgrid="1"
              style={{ width: "calc(100% - 64px)", maxWidth: "1040px", marginTop: "102px", display: "grid", gridTemplateColumns: "minmax(0,530fr) minmax(0,510fr)" }}
            >
              {" "}
              <div data-cdeco="1" style={{ padding: "256px 0 0 88px" }}>
                {" "}
                <div
                  data-cflower="1"
                  aria-hidden="true"
                  style={{ width: "333px", height: "333px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}
                >
                  {" "}
                  <span style={{ background: "#f7d158", borderBottomLeftRadius: "100%" }} />
                  <span style={{ background: "#f7d158", borderTopLeftRadius: "100%" }} />
                  <span style={{ background: "#f7d158", borderBottomRightRadius: "100%" }} />
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
                  <label htmlFor="cf-name" style={{ fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                    YOUR NAME
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    style={{ marginTop: "13px", height: "50px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                    className="akhbar-focus-4"
                  />
                  <label htmlFor="cf-email" style={{ marginTop: "27px", fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                    YOUR EMAIL
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    style={{ marginTop: "13px", height: "50px", padding: "0 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", outline: "none" }}
                    className="akhbar-focus-4"
                  />
                  <label htmlFor="cf-msg" style={{ marginTop: "27px", fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                    IDEAS/PROJECTS DESCRIPTION
                  </label>
                  <textarea
                    id="cf-msg"
                    name="message"
                    style={{ marginTop: "13px", height: "197px", padding: "12px 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", lineHeight: "1.4", resize: "none", outline: "none" }}
                    className="akhbar-focus-4"
                  />
                  {" "}
                  <button
                    type="submit"
                    style={{ marginTop: "42px", height: "45px", border: "0", borderRadius: "4px", background: "#ffffff", color: "#1c1c1c", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", cursor: "pointer" }}
                    className="akhbar-hover-5"
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
        {v.showRail ? (
          <>
          {" "}
          <nav
            aria-label="Sections"
            style={{ position: "fixed", left: "20px", top: "50%", transform: "translateY(-50%)", zIndex: "50", display: "flex", flexDirection: "column", gap: "2px" }}
          >
            {" "}
            {((v.rail ?? []) as any[]).map((r: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <a href={r?.href} aria-label={r?.label} style={css(`display:flex;align-items:center;gap:8px;height:24px;text-decoration:none;color:${r?.c ?? ""}`)}>
                  <span style={css(`width:${r?.w ?? ""};height:2px;background:${r?.c ?? ""}`)} />
                  <span style={{ fontFamily: "'Press Start 2P',monospace", fontSize: "8px" }}>
                    {r?.n}
                  </span>
                </a>
                {" "}
              </Fragment>
            ))}
            {" "}
          </nav>
          </>
        ) : null}
        {v.showBar ? (
          <>
          {" "}
          <a
            href="https://claude.ai/artifact/4dQjfkABaJHkov8M3SbbHr"
            target="_blank"
            rel="noopener"
            style={{ position: "fixed", left: "20px", right: "20px", bottom: "calc(max(12px, env(safe-area-inset-bottom)) + 76px)", zIndex: "899", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", height: "48px", background: "#63c4ec", color: "#0f1d24", fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", maxWidth: "362px", margin: "0 auto" }}
          >
            PLAY THE GAME{" "}
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
          </a>
          </>
        ) : null}
        {v.hasLb ? (
          <>
          {" "}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={v.lbAlt}
            style={{ position: "fixed", inset: "0", zIndex: "1000", background: "rgba(10,12,14,0.94)", display: "flex", flexDirection: "column" }}
          >
            {" "}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "12px" }}>
              <button
                type="button"
                onClick={v.closeLb}
                aria-label="Close"
                style={{ width: "44px", height: "44px", border: "1px solid #3a3a3a", background: "#1c1c1c", color: "#f5f5f5", fontSize: "20px", cursor: "pointer" }}
              >
                ×
              </button>
            </div>
            {" "}
            <div style={{ flex: "1", overflow: "auto", padding: "0 16px 24px", touchAction: "pinch-zoom pan-x pan-y" }}>
              <img
                src={v.lbSrc}
                alt={v.lbAlt}
                style={{ display: "block", maxWidth: "none", width: "max(100%, 1200px)", height: "auto", margin: "0 auto", imageRendering: "pixelated" }}
              />
            </div>
            {" "}
          </div>
          </>
        ) : null}
        <DockNav />
      </div>
    </>
  );
}
