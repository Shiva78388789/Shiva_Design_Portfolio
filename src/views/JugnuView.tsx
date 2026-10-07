// Ported from design-reference/design/JugnuCaseStudy.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import SiteRuler from '@/components/SiteRuler';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JugnuView({ v }: { v: any }) {
  return (
    <>
      <SiteRuler />
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
            data-reveal="1"
            data-sec="1"
            style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "196px", display: "flex", flexDirection: "column", alignItems: "center", gap: "40px" }}
          >
            {" "}
          </section>
          {" "}
        </div>
        <DockNav />
      </div>
    </>
  );
}
