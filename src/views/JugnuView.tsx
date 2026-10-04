// Ported from design-reference/design/JugnuCaseStudy.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import ImageSlot from '@/components/ImageSlot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JugnuView({ v }: { v: any }) {
  return (
    <>
      <div data-screen-label="Jugnu case study" style={{ background: "#1c1c1c", minHeight: "100vh" }}>
        <div
          data-vp={v.vp}
          style={{ position: "relative", minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", overflow: "clip", paddingBottom: "40px", containerType: "inline-size", containerName: "jg" }}
        >
          {" "}
          <section
            id="top"
            data-reveal="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "140px", display: "flex", flexDirection: "column", alignItems: "center" }}
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
              <h1 data-h1="1" style={{ margin: "0", fontSize: "82px", lineHeight: "98px", fontWeight: "600", color: "#f5f5f5" }}>
                Jugnu
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "64px auto 0", display: "flex", flexDirection: "column" }}>
              {" "}
              <p
                data-lead="1"
                style={{ margin: "0px auto 0", maxWidth: "880px", fontSize: "40px", lineHeight: "52px", fontWeight: "500", textAlign: "center", color: "#f5f5f5", textWrap: "balance" }}
              >
                A personal assistant with a face. Designed from a blank page to a live 3D character that listens, works and lights up when you need it.
              </p>
              {" "}
              <div
                data-g4="1"
                data-meta="1"
                style={{ marginTop: "96px", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", columnGap: "32px", borderTop: "1px solid rgba(245,245,245,0.14)" }}
              >
                {" "}
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    ROLE
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Concept, character design, motion, 3D, prototype
                  </span>
                </div>
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    TIMELINE
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Sep 2026 · ~1 week
                  </span>
                </div>
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    TOOLS
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Claude Design, Claude Code, Spline 3D, Web Speech API
                  </span>
                </div>
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    DELIVERABLES
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Identity, 20 expressions, motion spec, icon set, live 3D bot
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "88px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {" "}
                  <div data-embedpad="1" style={{ position: "relative", border: "2px solid #63c4ec", padding: "10px" }}>
                    {" "}
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
                    <span
                      data-sticky-live="1"
                      style={{ position: "absolute", left: "-14px", top: "-24px", zIndex: "3", display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "18px", lineHeight: "22px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
                    >
                      live — tap it
                    </span>
                    {" "}
                    <div data-embed="1" style={{ position: "relative", height: "620px", background: "#1c1c1c", overflow: "hidden" }}>
                      {" "}
                      {v.notLoaded1 ? (
                        <>
                        <span
                          style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}
                        >
                          LOADING JUGNU…
                        </span>
                        </>
                      ) : null}
                      {" "}
                      <iframe
                        src="https://my.spline.design/blip-zy9Nv8xMTLVTZGHek8vudPoL/"
                        title="Jugnu — live interactive 3D"
                        loading="lazy"
                        allow="autoplay; microphone; fullscreen"
                        frameBorder="0"
                        onLoad={v.onLoad1}
                        style={{ position: "relative", display: "block", width: "100%", height: "100%", border: "0" }}
                      />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-capline="1" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "32px" }}>
                    {" "}
                    <p style={{ margin: "0", maxWidth: "640px", fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)", fontStyle: "italic" }}>
                      This is the real thing, not a video. Hover and Jugnu follows your cursor. Tap it to get a reaction. Switch states and moods from the controls, or press the mic and ask ‘what time is it?’
                    </p>
                    {" "}
                    <a
                      href="https://my.spline.design/blip-zy9Nv8xMTLVTZGHek8vudPoL/"
                      target="_blank"
                      rel="noopener"
                      style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", alignSelf: "flex-start" }}
                      className="jugnu-hover-0"
                    >
                      OPEN FULL SCREEN{" "}
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
                  </div>
                  {" "}
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="overview"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              the short version
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Overview
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "48px 40px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    THE CHALLENGE
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    An assistant with no face.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    I’m building a personal bot that does tasks for me: emails, reminders, bookings, research. Text logs tell me what it did. They never tell me, at a glance, what it’s doing right now.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    THE APPROACH
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Design the states before the character.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    I defined how the bot behaves first: when it’s idle, listening, working, done or stuck. Then I explored six characters, seven shapes and four finishes against that list until one design read clearly in every state.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    THE OUTCOME
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    A character you can read in half a second.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Jugnu has 8 core states and 12 moods, a full motion and colour spec, an icon set from 1024 to 16px, and a live 3D build with a working voice assistant and an API any app can drive.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-g4="1"
                data-stats="1"
                style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", columnGap: "32px", borderTop: "1px solid rgba(245,245,245,0.14)" }}
              >
                {" "}
                <div style={{ padding: "32px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#f5f5f5" }}>
                    6
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)" }}>
                    character concepts
                  </span>
                </div>
                <div style={{ padding: "32px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#f5f5f5" }}>
                    7
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)" }}>
                    body shapes stress-tested
                  </span>
                </div>
                <div style={{ padding: "32px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#f5f5f5" }}>
                    20
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)" }}>
                    expressions (8 states + 12 moods)
                  </span>
                </div>
                <div style={{ padding: "32px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#f5f5f5" }}>
                    1
                  </span>
                  <span style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)" }}>
                    live 3D bot, voice-enabled
                  </span>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="problem"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              why a face at all
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                The problem
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Agents are getting good at doing things for us. They’re still bad at telling us how it’s going. When a task runs in the background, I keep asking the same three questions:{" "}
                  <em>
                    Is it working? Is it stuck? Is it waiting for me?
                  </em>
                </p>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  A spinner answers one of those, badly. A face can answer all three without a single word, because people read faces faster than they read any interface. The risk is the other direction. A cute mascot that jumps around becomes noise within a day.
                </p>
              </div>
              {" "}
              <blockquote style={{ margin: "24px auto 0", maxWidth: "880px", borderLeft: "2px solid #63c4ec", padding: "8px 0 8px 40px" }}>
                <p data-lead="1" style={{ margin: "0", fontSize: "40px", lineHeight: "52px", fontWeight: "500", textAlign: "center", color: "#f5f5f5", textWrap: "balance" }}>
                  How might I give an assistant that acts on my behalf a face that tells me what it’s doing at a glance, and stays calm enough to live on my screen all day?
                </p>
              </blockquote>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="principles"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              the rules I set first
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Principles
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                {" "}
                <div style={{ padding: "40px 40px 40px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    01
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Readable at a glance.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Every state must be identifiable from shape and motion alone, in greyscale, at 40px.
                  </p>
                </div>
                <div
                  data-cl="1"
                  style={{ padding: "40px 0 40px 40px", borderTop: "1px solid rgba(245,245,245,0.14)", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    02
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Calm by default.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Idle is the state it lives in 90% of the time, so idle has to be the quietest thing on screen.
                  </p>
                </div>
                <div style={{ padding: "40px 40px 40px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    03
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Personality, not noise.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Character comes from small, specific behaviour, like how it blinks, leans and settles, not from more decoration.
                  </p>
                </div>
                <div
                  data-cl="1"
                  style={{ padding: "40px 0 40px 40px", borderTop: "1px solid rgba(245,245,245,0.14)", borderLeft: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "16px" }}
                >
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    04
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    One system, every size.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    The same design must work as a 1024px app icon, a 16px glyph, a flat 2D sticker and a 3D object.
                  </p>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="states"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              behaviour before looks
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Defining the states
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Before drawing anything, I wrote down every moment the bot would need to communicate, what triggers it and how it should feel. This list became the brief for every design decision after it. A concept that couldn’t show all eight states clearly didn’t move forward.
                </p>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  I also looked at the personality I wanted the bot to carry: mine. I’m a product designer in Gurugram who likes making complicated things simple. So the bot should be warm, quick and a little witty, never loud. It should feel rooted in everyday Indian life rather than in sci-fi.
                </p>
              </div>
              {" "}
              <div style={{ overflowX: "auto" }}>
                <div style={{ minWidth: "760px", display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "auto", padding: "20px 0" }}
                  >
                    <span />
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      STATE
                    </span>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      WHEN IT HAPPENS
                    </span>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      HOW IT MOVES
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#5CF2C1" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Idle
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Nothing to do; waiting for you
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Slow breathe, a blink every ~4.6 s, a firefly-like glow
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#FFD166" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Active
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      You call its name, tap it or open the app
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Quick hop, eyes curve into a smile
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#FFB23F" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Working
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Running a task on your behalf
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Orbiting dots, eyes glance sideways, amber pulse
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#8A93A6" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Sleep
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Idle for a while, night mode, Do Not Disturb
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Eyes close to lines, light dims, slow 6.5 s breathe, z’s drift
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#7AB8FF" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Listening
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      You’re speaking or typing to it
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Leans in, eyes widen with a glint, ripples follow your voice
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#5CF2C1" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Talking
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      It replies out loud
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Mouth follows the audio level; natural blinks
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#7CE08A" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Success
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      A task is done: email sent, cab booked
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Happy ^ ^ eyes, a tick draws in, sparkles
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "24px 150px minmax(0,1fr) minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "88px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "24px", height: "24px", background: "#FF6B6B" }} />
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Error
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      It couldn’t finish
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Short shake, X eyes, wavy mouth, a sweat drop
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="directions"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              going wide first
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Six directions
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  I explored six different personalities, each from a different idea of what a helper is. Each one was drawn with its own state set, so they could be compared on behaviour, not just looks.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-01-six-directions"
                    src={asset("/assets/jugnu/jugnu-01-six-directions.png")}
                    placeholder="Six bot concepts side by side: a pixel sidekick, a lamp spirit, a tiffin-box bot, a screen face, a paper messenger and a squishy round buddy."
                    alt="Six bot concepts side by side: a pixel sidekick, a lamp spirit, a tiffin-box bot, a screen face, a paper messenger and a squishy round buddy."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "40px 40px" }}>
                {" "}
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    01
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Bitu
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A pixel sidekick. Nostalgic and playful, but pixel art fights smooth glow and motion.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    02
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Diya
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A lamp spirit. Beautiful and very Indian, but a flame can’t show “error” or “listening” without becoming literal.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    03
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Tiffin
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A dabba bot. Charming “it carries things for you” story, but too many parts at small sizes.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid #63c4ec", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    04
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Screen face
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A head that is a display. Selected: the face carries every state, it scales from icon to 3D, and there are no limbs to animate.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    05
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Parcha
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A paper messenger. Great for “sending”, weak for “thinking” or “sleeping”.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                    06
                  </span>
                  <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                    Laddoo
                  </h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    A squishy buddy. The most lovable, but too soft for an assistant that handles real work.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <span style={{ display: "block", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec", fontSize: "13px", lineHeight: "20px" }}>
                WHY THE SCREEN FACE WON — IT’S THE ONLY DIRECTION WHERE THE STATE IS THE FACE, NOT AN ADD-ON.
              </span>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="shape"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              seven bodies, one face
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Finding the shape
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  With the face settled, I tested seven body shapes: Classic, Pebble, Orb, Bubble, Headset, Totem and Outline. I didn’t pick by eye. I put every shape through every state in a 7 × 8 matrix, 56 combinations, and looked for the one that stayed readable everywhere, especially at small sizes and in the quiet states.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-02-seven-shapes"
                    src={asset("/assets/jugnu/jugnu-02-seven-shapes.png")}
                    placeholder="Seven body shapes for the bot, each wearing the same two-eyed face."
                    alt="Seven body shapes for the bot, each wearing the same two-eyed face."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "7 / 8", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-03-shape-state-matrix"
                    src={asset("/assets/jugnu/jugnu-03-shape-state-matrix.png")}
                    placeholder="A matrix of seven shapes across eight states, 56 small bots in total."
                    alt="A matrix of seven shapes across eight states, 56 small bots in total."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <p style={{ margin: "16px 0 0", maxWidth: "720px", fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)", fontStyle: "italic" }}>
                  The matrix made the decision obvious. Solid shapes got heavy in Sleep and muddy in Error. The Outline, a single line with two eyes, stayed clear in all eight.
                </p>
              </figure>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  <strong style={{ fontWeight: "600" }}>
                    The Outline won.
                  </strong>
                  {" "}A rounded square drawn as one light line, with two glowing eyes. It’s the most minimal option and, it turned out, the most expressive. With no fill, all the emotion lives in the eyes, the line’s colour and the motion.
                </p>
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="finish"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              adding depth without noise
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Finish and light
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Flat colour felt dated next to the products this bot lives beside. I explored four finishes, each with an exact recipe so it could be rebuilt anywhere.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-04-four-finishes"
                    src={asset("/assets/jugnu/jugnu-04-four-finishes.png")}
                    placeholder="The same bot in four finishes: glass, neon, aurora and flat."
                    alt="The same bot in four finishes: glass, neon, aurora and flat."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <div data-g4="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "40px 32px" }}>
                {" "}
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Glass
                    </h3>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", height: "30px", padding: "0 12px", borderRadius: "999px", background: "#a3e4c1", color: "#1c1c1c", fontSize: "13px", fontWeight: "500" }}
                    >
                      chosen
                    </span>
                  </div>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Frosted body, a rim that runs white → state colour, eyes with a hot white core and a two-layer glow. The most depth while staying clean.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Neon
                    </h3>
                  </div>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Pure light and a double glow. The loudest, and too loud to live with all day.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Aurora
                    </h3>
                  </div>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Hue drifts slowly toward violet. Moody, but it muddies the state colours.
                  </p>
                </div>
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Flat
                    </h3>
                  </div>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                    Solid line, solid eyes. Kept as the fallback for 16px, print and low-power mode.
                  </p>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {" "}
                <span
                  style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                >
                  GLASS RECIPE
                </span>
                {" "}
                <div data-recipe="1" style={{ background: "#a3e4c1", padding: "31px 30px" }}>
                  {" "}
                  <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0" }}>
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      EYES
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      radial: white core → primary 38% → secondary
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0", borderTop: "1px solid rgba(15,29,36,0.24)" }}
                  >
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      RIM
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      4-unit stroke, 135°: white → primary → secondary
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0", borderTop: "1px solid rgba(15,29,36,0.24)" }}
                  >
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      BODY FILL
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      white 16% → primary 12%, top-left highlight at 45%
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0", borderTop: "1px solid rgba(15,29,36,0.24)" }}
                  >
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      GLOW
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      two shadows: 0.25× blur solid, plus 0.9× blur at the state’s opacity
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0", borderTop: "1px solid rgba(15,29,36,0.24)" }}
                  >
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      HALO
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      76% circle behind the bot, state colour at ≤ 50%
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "180px minmax(0,1fr)", gap: "8px 32px", padding: "18px 0", borderTop: "1px solid rgba(15,29,36,0.24)" }}
                  >
                    <span style={{ fontSize: "11px", lineHeight: "24px", fontWeight: "700", letterSpacing: "0.1em", color: "#0f1d24" }}>
                      TILE
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "24px", color: "#0f1d24" }}>
                      #2B3350 → #161A28 → #0B0D14 with a 28% state-colour pool
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="expressions"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              20 ways to say how it feels
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Expressions
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  The eight states cover what Jugnu is{" "}
                  <em>
                    doing
                  </em>
                  . People also respond to how something{" "}
                  <em>
                    feels
                  </em>
                  , so I added twelve moods on top. Each mood has a trigger, so it never appears at random.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-05-expression-sheet"
                    src={asset("/assets/jugnu/jugnu-05-expression-sheet.png")}
                    placeholder="An expression sheet with twenty faces: eight core states and twelve moods."
                    alt="An expression sheet with twenty faces: eight core states and twelve moods."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", columnGap: "40px" }}>
                {" "}
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Curious
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    something new caught its eye
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Confused
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    it didn’t understand you
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Proud
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    it finished something big
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Thinking hard
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    working on a tough question
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Surprised
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    news it didn’t expect
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Playful
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    it’s joking or suggesting fun
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Love
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    you thanked it; family moments
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Shy
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    complimented, or sorry for a delay
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Sad
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    it couldn’t finish what you wanted
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Annoyed
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    blocked again by the same problem
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Excited
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    great news, or a big task starts
                  </span>
                </div>
                <div style={{ padding: "18px 0", borderTop: "1px solid rgba(245,245,245,0.14)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "600", color: "#f5f5f5" }}>
                    Skeptical
                  </span>
                  <span style={{ fontSize: "16px", lineHeight: "24px", color: "rgba(245,245,245,0.64)" }}>
                    double-checking something odd
                  </span>
                </div>
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
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              how it moves between states
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Motion and transitions
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  A state is only half the story. The jump between two states is where a character feels alive or robotic. I designed the key transitions frame by frame. For example, Idle → Listening anticipates with a small dip before leaning in, and Working → Success lands with a squash before the hop. Then I wrote the rules down as tokens.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "21 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-06-transitions"
                    src={asset("/assets/jugnu/jugnu-06-transitions.png")}
                    placeholder="Frame-by-frame strips showing the bot moving between states."
                    alt="Frame-by-frame strips showing the bot moving between states."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <div style={{ overflowX: "auto" }}>
                <div style={{ minWidth: "560px", display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "auto", padding: "20px 0" }}>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      TOKEN
                    </span>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                      VALUE
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Standard ease
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      cubic-bezier(0.45, 0, 0.2, 1)
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Bounce
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      cubic-bezier(0.34, 1.56, 0.64, 1)
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Settle
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      cubic-bezier(0.2, 0.9, 0.3, 1.2)
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Colour fade
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      200 ms linear (error 150 ms, sleep 1800 ms)
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Blink
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      every 4.6 s, ~180 ms closed
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Squash rule
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Keep volume: when height scales by s, width scales by 1 + (1 − s) × 0.6. Pivot at the bottom centre.
                    </span>
                  </div>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "220px minmax(0,1fr)", columnGap: "32px", alignItems: "center", minHeight: "72px", padding: "20px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Reduced motion
                    </span>
                    <span style={{ fontSize: "16px", lineHeight: "24px", color: "#f5f5f5" }}>
                      Hold each state’s first frame; keep the colour change
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="icons"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              one mark, every size
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                From 1024 to 16 pixels
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Jugnu has to live in a dock, a menu bar, a notification and a favicon. Detail is removed step by step as the size shrinks. The glow goes first, then the rim gradient. At 16px it becomes the flat outline with two dots, still recognisable.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-07-icon-sizes"
                    src={asset("/assets/jugnu/jugnu-07-icon-sizes.png")}
                    placeholder="The app icon at 1024, 64, 40 and 16 pixels, simplifying as it shrinks."
                    alt="The app icon at 1024, 64, 40 and 16 pixels, simplifying as it shrinks."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="spec"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              one source of truth
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Colour, light and motion spec
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Everything above is written into a single spec, so whoever builds the next version, in Lottie, Rive or code, builds the same character. Each state has a primary and secondary colour, a glow, a halo and a body and face loop.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 10", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-08-spec"
                    src={asset("/assets/jugnu/jugnu-08-spec.png")}
                    placeholder="A spec table listing each state’s colours, glow, halo and animation loops."
                    alt="A spec table listing each state’s colours, glow, halo and animation loops."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <span style={{ display: "block", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec", fontSize: "13px", lineHeight: "20px" }}>
                HANDOFF — 9 NAMED LAYERS · ONE STATE MACHINE · 20 STATES · TRANSITIONS NAMED t_from_to · COLOURS EXPOSED AS INPUTS
              </span>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="spline"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              from drawing to object
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Building it in Spline
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  A 2D character can fake depth. A 3D one has to earn it. I rebuilt Jugnu in Spline 3D as a real object: a glass head over a glowing core, two emissive eyes, and a pedestal with a faint hologram disc that scans slowly underneath. The hologram is kept deliberately subtle, so it reads as a base, not as an effect.
                </p>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Every state and mood got its own movement and light, not just a new face. Working orbits, Listening leans toward you, Error shakes and dims, Love floats hearts and warms the light. Jugnu also follows your cursor, reacts to taps and hovers, does small idle variations, and plays a quiet sound when it changes state.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-09-spline-states"
                    src={asset("/assets/jugnu/jugnu-09-spline-states.png")}
                    placeholder="The 3D bot shown in several states, each with its own light colour."
                    alt="The 3D bot shown in several states, each with its own light colour."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}>
                  CRAFT NOTES
                </span>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)", marginTop: "16px" }}>
                  {" "}
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 32px minmax(0,1.3fr)", gap: "8px 16px", alignItems: "start", padding: "28px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Real glass transmission made the head look flat
                    </span>
                    <span aria-hidden="true" style={{ fontSize: "18px", lineHeight: "28px", color: "#63c4ec" }}>
                      →
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      Layered a 50%-opacity shell over an emissive core instead, which gives depth that holds up on any GPU.
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 32px minmax(0,1.3fr)", gap: "8px 16px", alignItems: "start", padding: "28px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Switching lights on and off caused black frames
                    </span>
                    <span aria-hidden="true" style={{ fontSize: "18px", lineHeight: "28px", color: "#63c4ec" }}>
                      →
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      Lights are never toggled. Inactive state lights are parked off-stage and crossfaded in, so there are no flashes between states.
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 32px minmax(0,1.3fr)", gap: "8px 16px", alignItems: "start", padding: "28px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      12 real-time lights hurt performance
                    </span>
                    <span aria-hidden="true" style={{ fontSize: "18px", lineHeight: "28px", color: "#63c4ec" }}>
                      →
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      Merged and removed lights, and turned off shadows that weren’t doing any work. Same look, a fraction of the cost.
                    </span>
                  </div>
                  <div
                    data-g2="1"
                    style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 32px minmax(0,1.3fr)", gap: "8px 16px", alignItems: "start", padding: "28px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                  >
                    <span style={{ fontSize: "18px", lineHeight: "28px", fontWeight: "600", color: "#f5f5f5" }}>
                      Shadow acne on the floor
                    </span>
                    <span aria-hidden="true" style={{ fontSize: "18px", lineHeight: "28px", color: "#63c4ec" }}>
                      →
                    </span>
                    <span style={{ fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      Turned floor shadows off and faked contact with a soft glow ring under the pedestal.
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="name"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              finding what to call it
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Why Jugnu
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <p
                data-lead="1"
                style={{ margin: "0px auto 0", maxWidth: "880px", fontSize: "40px", lineHeight: "52px", fontWeight: "500", textAlign: "center", color: "#f5f5f5", textWrap: "balance" }}
              >
                Jugnu (जुगनू) is Hindi for firefly: a small light that shows up in the dark, exactly when you need it.
              </p>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  I explored a shortlist of culture-driven names: short, warm and easy to say out loud, since this is a bot you talk to. Jugnu won because the name and the design were already telling the same story, a small glowing thing with two bright eyes. Then I let the name change the design back.
                </p>
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                  The firefly idle
                </h3>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Idle used to be a steady breathe. Now it glows like a firefly: one soft, irregular swell of light at a time, with long dark gaps in between, never in a predictable rhythm. Each glow point follows its own slow curve, sharpened so the flashes are brief and the darkness is long. It’s the calmest state, and the one with the most personality.
                </p>
              </div>
              {" "}
              <figure style={{ margin: "0" }}>
                <div style={{ aspectRatio: "16 / 9", border: "2px solid rgba(245,245,245,0.14)", boxSizing: "border-box", background: "#222222" }}>
                  <ImageSlot
                    id="jugnu-10-firefly-idle"
                    src={asset("/assets/jugnu/jugnu-10-firefly-idle.png")}
                    placeholder="Jugnu in idle with a soft firefly-like glow."
                    alt="Jugnu in idle with a soft firefly-like glow."
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </figure>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="assistant"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-2deg)" }}
            >
              not just a pretty face
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                A working assistant
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  To prove the states work in real use, I wired Jugnu into a small voice and text assistant that runs in the browser. Talk to it and the face does what the state model says it should. Listening while you speak. Working while it thinks. Talking while it answers. Success or Error at the end.
                </p>
              </div>
              {" "}
              <div
                role="img"
                aria-label="Flow: You speak, then Listening, Working, Talking, and finally Success or Error"
                style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px 16px", padding: "12px" }}
              >
                {" "}
                <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                    You speak
                  </span>
                </div>
                <span aria-hidden="true" style={{ color: "#63c4ec", fontSize: "20px", lineHeight: "20px" }}>
                  →
                </span>
                <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "14px", height: "14px", background: "#7AB8FF" }} />
                  <span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                    Listening
                  </span>
                </div>
                <span aria-hidden="true" style={{ color: "#63c4ec", fontSize: "20px", lineHeight: "20px" }}>
                  →
                </span>
                <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "14px", height: "14px", background: "#FFB23F" }} />
                  <span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                    Working
                  </span>
                </div>
                <span aria-hidden="true" style={{ color: "#63c4ec", fontSize: "20px", lineHeight: "20px" }}>
                  →
                </span>
                <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "14px", height: "14px", background: "#5CF2C1" }} />
                  <span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                    Talking
                  </span>
                </div>
                <span aria-hidden="true" style={{ color: "#63c4ec", fontSize: "20px", lineHeight: "20px" }}>
                  →
                </span>
                <div style={{ position: "relative", border: "2px solid #63c4ec", padding: "14px 18px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", top: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "12px", height: "12px", boxSizing: "border-box", border: "2px solid #63c4ec", background: "#1c1c1c", zIndex: "2" }}
                  />
                  <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "14px", height: "14px", background: "#7CE08A" }} />
                  <span aria-hidden="true" style={{ display: "inline-block", flex: "none", width: "14px", height: "14px", background: "#FF6B6B" }} />
                  <span style={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", color: "#f5f5f5", whiteSpace: "nowrap" }}>
                    Success / Error
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div data-g2="1" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "40px" }}>
                {" "}
                <p style={{ margin: "0", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  <strong style={{ fontWeight: "600" }}>
                    What it can do today.
                  </strong>
                  {" "}Tell the time and date. Set timers and reminders. Tell a joke. Flip a coin or roll a dice. Check in when you say you’re tired or stressed. Say good night and go to sleep.
                </p>
                {" "}
                <p style={{ margin: "0", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  <strong style={{ fontWeight: "600" }}>
                    Built to be driven by anything.
                  </strong>
                  {" "}Jugnu exposes a tiny API:{" "}
                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "16px", color: "#63c4ec" }}>
                    jugnu.setState('working')
                  </code>
                  , or a{" "}
                  <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: "16px", color: "#63c4ec" }}>
                    postMessage
                  </code>
                  {" "}from any page or app. Any tool, whether a Claude Code task, a calendar or a build pipeline, can give it a face.
                </p>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="use-cases"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              where jugnu lives
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Use cases
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-body="1" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <p style={{ margin: "0", maxWidth: "720px", fontSize: "20px", lineHeight: "32px", fontWeight: "400", color: "#f5f5f5", textWrap: "pretty" }}>
                  Because the face is driven by states, not by a single app, Jugnu fits anywhere something runs on your behalf.
                </p>
              </div>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "40px 20px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 01
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Agent status at a glance.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      Sits in the corner while Claude Code or another agent runs a long task. Working while it runs, Success or Error when done, so you stop checking the terminal.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        DEV
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        AGENTS
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 02
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Personal task runner.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      The face for the bot that sends emails, books cabs and pays bills, showing what it’s doing without opening a log.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        PRODUCTIVITY
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        AUTOMATION
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 03
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Desk companion.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      A small always-on screen for timers, reminders and focus sessions that sleeps when you do.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        FOCUS
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        HOME
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 04
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Smart-home voice.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      A friendlier face for “turn off the lights” or “what’s the weather”, reacting as it listens and answers.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        VOICE
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        IOT
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 05
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Family helper.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      Reminders for medicines and calls home, with warm moods (Love, Proud) that make it feel less like software.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        FAMILY
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        CARE
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{ display: "flex", alignItems: "center", height: "36px", minWidth: "104px", padding: "0 16px", boxSizing: "border-box", background: "#a3e4c1", color: "#0f1d24", fontSize: "10px", fontWeight: "700", letterSpacing: "0.08em", alignSelf: "flex-start" }}
                  >
                    USE CASE 06
                  </span>
                  <div data-uc="1" style={{ flex: "1", background: "#a3e4c1", padding: "31px 30px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "34px", fontWeight: "500", color: "#0f1d24" }}>
                      Product onboarding and support.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#0f1d24" }}>
                      A brand character that explains, waits and celebrates inside an app, using the same spec.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        PRODUCT
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minWidth: "78px", height: "42px", padding: "8px 10px 0", boxSizing: "border-box", background: "#0f1d24", color: "#a3e4c1", fontSize: "9px", fontWeight: "500", letterSpacing: "0.04em", clipPath: "polygon(0 0,46% 0,56% 8px,100% 8px,100% 100%,0 100%)" }}
                      >
                        SUPPORT
                      </span>
                    </div>
                  </div>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="learnings"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
            >
              looking back
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Learnings
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                {" "}
                <div
                  data-learn="1"
                  style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: "24px", padding: "32px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#63c4ec" }}>
                    1
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "10px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Write the behaviour first.
                    </h3>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      The state list did more design work than any sketch. It turned “which one is cuter?” into “which one tells me it’s stuck?”.
                    </p>
                  </div>
                </div>
                <div
                  data-learn="1"
                  style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: "24px", padding: "32px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#63c4ec" }}>
                    2
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "10px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Test in a matrix, not in isolation.
                    </h3>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      A design that looks great in its hero state can fall apart in Sleep or Error. The 7 × 8 matrix caught that early.
                    </p>
                  </div>
                </div>
                <div
                  data-learn="1"
                  style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: "24px", padding: "32px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#63c4ec" }}>
                    3
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "10px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      Restraint is the craft.
                    </h3>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      The best changes were often removals: fewer lights, a subtler hologram, a glow with long dark gaps.
                    </p>
                  </div>
                </div>
                <div
                  data-learn="1"
                  style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: "24px", padding: "32px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#63c4ec" }}>
                    4
                  </span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "10px" }}>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "32px", fontWeight: "600", color: "#f5f5f5" }}>
                      A name can redesign a product.
                    </h3>
                    <p style={{ margin: "0", maxWidth: "720px", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                      Calling it Jugnu changed the idle state, and the idle state is what you see most.
                    </p>
                  </div>
                </div>
                {" "}
              </div>
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="next"
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {" "}
            <span
              data-sticky="1"
              style={{ display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "22px", lineHeight: "26px", fontWeight: "500", padding: "4px 10px", transform: "rotate(6deg)" }}
            >
              still glowing
            </span>
            {" "}
            <div
              data-fh="1"
              style={{ position: "relative", marginTop: "51px", border: "2px solid #63c4ec", padding: "7px 34px", maxWidth: "calc(100% - 64px)", boxSizing: "border-box" }}
            >
              <h2 data-h2="1" style={{ margin: "0", fontSize: "56px", lineHeight: "68px", fontWeight: "600", color: "#f5f5f5", textAlign: "center", textWrap: "balance" }}>
                Next steps
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
            <div data-colw="1" style={{ width: "calc(100% - 64px)", maxWidth: "1040px", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                {" "}
                <li style={{ padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  Connect Jugnu to my real task bot and Claude Code, so live jobs drive the states.
                </li>
                <li style={{ padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  Export the state machine to Rive for native desktop and mobile widgets.
                </li>
                <li style={{ padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  A menu-bar version that uses the 16px mark and the flat finish.
                </li>
                <li style={{ padding: "24px 0", borderTop: "1px solid rgba(245,245,245,0.14)", fontSize: "20px", lineHeight: "32px", color: "#f5f5f5" }}>
                  Usability check: can people name each state from the face alone, without labels?
                </li>
                {" "}
              </ul>
              {" "}
              {v.showClosing ? (
                <>
                <div style={{ marginTop: "40px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    {" "}
                    <div data-embedpad="1" style={{ position: "relative", border: "2px solid #63c4ec", padding: "10px" }}>
                      {" "}
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
                      <span
                        data-sticky-live="1"
                        style={{ position: "absolute", left: "-14px", top: "-24px", zIndex: "3", display: "inline-block", background: "#f6dfa6", color: "#1c1c1c", fontSize: "18px", lineHeight: "22px", fontWeight: "500", padding: "4px 10px", transform: "rotate(-4deg)" }}
                      >
                        live — tap it
                      </span>
                      {" "}
                      <div data-embed="1" style={{ position: "relative", height: "620px", background: "#1c1c1c", overflow: "hidden" }}>
                        {" "}
                        {v.notLoaded2 ? (
                          <>
                          <span
                            style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#63c4ec" }}
                          >
                            LOADING JUGNU…
                          </span>
                          </>
                        ) : null}
                        {" "}
                        <iframe
                          src="https://my.spline.design/blip-zy9Nv8xMTLVTZGHek8vudPoL/"
                          title="Jugnu — live interactive 3D"
                          loading="lazy"
                          allow="autoplay; microphone; fullscreen"
                          frameBorder="0"
                          onLoad={v.onLoad2}
                          style={{ position: "relative", display: "block", width: "100%", height: "100%", border: "0" }}
                        />
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div data-capline="1" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "32px" }}>
                      {" "}
                      <p style={{ margin: "0", maxWidth: "640px", fontSize: "14px", lineHeight: "20px", color: "rgba(245,245,245,0.64)", fontStyle: "italic" }}>
                        Say hello. Jugnu’s listening.
                      </p>
                      {" "}
                      <a
                        href="https://my.spline.design/blip-zy9Nv8xMTLVTZGHek8vudPoL/"
                        target="_blank"
                        rel="noopener"
                        style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", alignSelf: "flex-start" }}
                        className="jugnu-hover-0"
                      >
                        OPEN FULL SCREEN{" "}
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
                    </div>
                    {" "}
                  </div>
                </div>
                </>
              ) : null}
            </div>
            {" "}
          </section>
          {" "}
          <section
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}
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
              {" "}
              <a
                href={href("/")}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", alignSelf: "flex-start" }}
                className="jugnu-hover-0"
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
              {" "}
              <a
                href={href("/work/engage-x/")}
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", height: "40px", padding: "0 12px", background: "#0f1d24", color: "#63c4ec", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textDecoration: "none", alignSelf: "flex-start" }}
                className="jugnu-hover-0"
              >
                NEXT PROJECT: ENGAGE X{" "}
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
                    className="jugnu-focus-1"
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
                    className="jugnu-focus-1"
                  />
                  <label htmlFor="cf-msg" style={{ marginTop: "27px", fontSize: "10px", lineHeight: "12px", fontWeight: "600", letterSpacing: "0.12em", color: "#ffffff" }}>
                    IDEAS/PROJECTS DESCRIPTION
                  </label>
                  <textarea
                    id="cf-msg"
                    name="message"
                    style={{ marginTop: "13px", height: "197px", padding: "12px 14px", boxSizing: "border-box", background: "#428c52", border: "1px solid #66c77a", borderRadius: "6px", color: "#ffffff", fontSize: "16px", lineHeight: "1.4", resize: "none", outline: "none" }}
                    className="jugnu-focus-1"
                  />
                  {" "}
                  <button
                    type="submit"
                    style={{ marginTop: "42px", height: "45px", border: "0", borderRadius: "4px", background: "#ffffff", color: "#1c1c1c", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", cursor: "pointer" }}
                    className="jugnu-hover-2"
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
        <DockNav />
      </div>
    </>
  );
}
