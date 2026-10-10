// Ported from design-reference/design/Jugnu Case Study v2.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JugnuView({ v }: { v: any }) {
  return (
    <>
      <div data-screen-label="Jugnu case study" style={{ background: "#1c1c1c", minHeight: "100vh" }}>
        <div
          data-vp={v.vp}
          style={{ position: "relative", minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", overflow: "clip", padding: "0 clamp(20px,5vw,40px) clamp(80px,10vw,140px)", containerType: "inline-size", containerName: "jg" }}
        >
          {" "}
          <header style={{ maxWidth: "1040px", margin: "0 auto", display: "flex", justifyContent: "flex-end", paddingTop: "clamp(24px,5vw,56px)" }}>
            <a
              href={href("/")}
              aria-label="Close and go back home"
              style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#2a2a2a", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
              className="jugnu-hover-0"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2l18 18M20 2 2 20" />
              </svg>
            </a>
          </header>
          {" "}
          <section
            id="top"
            data-reveal="1"
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(8px,2vw,24px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              A claude code project
            </span>
            {" "}
            <h1 style={{ margin: "16px 0 0", fontSize: "clamp(44px,6vw,72px)", lineHeight: "1.1", fontWeight: "600", color: "#ffffff" }}>
              Jugnu
            </h1>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column" }}>
              {" "}
              <p style={{ margin: "0", maxWidth: "960px", fontSize: "clamp(24px,3.4vw,42px)", lineHeight: "1.25", fontWeight: "500", color: "#8c8c8c", textWrap: "pretty" }}>
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
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                    ROLE
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Concept, character design, motion, 3D, prototype
                  </span>
                </div>
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                    TOOLS
                  </span>
                  <span style={{ fontSize: "18px", lineHeight: "26px", color: "#f5f5f5" }}>
                    Claude Design, Claude Code, Spline 3D, Web Speech API
                  </span>
                </div>
                <div style={{ padding: "28px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
                  <div data-embedpad="1" style={{ position: "relative", borderRadius: "22px", background: "#2e2e2e", padding: "10px" }}>
                    {" "}
                    <span
                      style={{ position: "absolute", left: "24px", top: "24px", zIndex: "3", display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8", background: "#1c1c1c" }}
                    >
                      Live — tap it
                    </span>
                    {" "}
                    <div data-embed="1" style={{ position: "relative", height: "620px", background: "#1c1c1c", overflow: "hidden", borderRadius: "14px" }}>
                      {" "}
                      {v.notLoaded1 ? (
                        <>
                        <span
                          style={{ position: "absolute", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#6f6f6f" }}
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
                    <p style={{ margin: "0", maxWidth: "640px", fontSize: "15px", lineHeight: "22px", color: "#9a9a9a" }}>
                      This is the real thing, not a video. Hover and Jugnu follows your cursor. Tap it to get a reaction. Switch states and moods from the controls, or press the mic and ask ‘what time is it?’
                    </p>
                    {" "}
                    <a
                      href="https://my.spline.design/blip-zy9Nv8xMTLVTZGHek8vudPoL/"
                      target="_blank"
                      rel="noopener"
                      style={{ flex: "none", display: "inline-flex", alignItems: "center", gap: "10px", height: "44px", padding: "0 20px", borderRadius: "999px", background: "#2a2a2a", border: "1.5px solid #4a4a4a", color: "#ffffff", fontSize: "15px", fontWeight: "600", textDecoration: "none", alignSelf: "flex-start", transition: "background .2s" }}
                      className="jugnu-hover-0"
                    >
                      Open full screen{" "}
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
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              The short version
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              Overview
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g3="1" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "48px 40px" }}>
                {" "}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              Why a face at all
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              The problem
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
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
              <blockquote style={{ margin: "8px 0 0", padding: "clamp(24px,4vw,48px)", borderRadius: "18px", background: "#2e2e2e" }}>
                <p style={{ margin: "0", fontSize: "clamp(22px,2.8vw,34px)", lineHeight: "1.3", fontWeight: "500", color: "#ffffff", textWrap: "pretty" }}>
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
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              The rules I set first
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              Principles
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div data-g2="1" style={{ width: "100%", display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "20px" }}>
                {" "}
                <div style={{ padding: "clamp(24px,3vw,32px)", borderRadius: "18px", background: "#2e2e2e", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                    01
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Readable at a glance.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Every state must be identifiable from shape and motion alone, in greyscale, at 40px.
                  </p>
                </div>
                <div style={{ padding: "clamp(24px,3vw,32px)", borderRadius: "18px", background: "#2e2e2e", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                    02
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Calm by default.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Idle is the state it lives in 90% of the time, so idle has to be the quietest thing on screen.
                  </p>
                </div>
                <div style={{ padding: "clamp(24px,3vw,32px)", borderRadius: "18px", background: "#2e2e2e", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                    03
                  </span>
                  <h3 style={{ margin: "0", fontSize: "28px", lineHeight: "36px", fontWeight: "600", color: "#f5f5f5" }}>
                    Personality, not noise.
                  </h3>
                  <p style={{ margin: "0", fontSize: "18px", lineHeight: "28px", color: "#f5f5f5" }}>
                    Character comes from small, specific behaviour, like how it blinks, leans and settles, not from more decoration.
                  </p>
                </div>
                <div style={{ padding: "clamp(24px,3vw,32px)", borderRadius: "18px", background: "#2e2e2e", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              Behaviour before looks
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              Defining the states
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
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
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                      STATE
                    </span>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
                      WHEN IT HAPPENS
                    </span>
                    <span style={{ display: "block", fontSize: "11px", lineHeight: "16px", fontWeight: "700", letterSpacing: "0.1em", color: "#9a9a9a" }}>
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
            id="use-cases"
            data-reveal="1"
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              Where jugnu lives
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              Use cases
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
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
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 01
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Agent status at a glance.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      Sits in the corner while Claude Code or another agent runs a long task. Working while it runs, Success or Error when done, so you stop checking the terminal.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Dev
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Agents
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 02
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Personal task runner.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      The face for the bot that sends emails, books cabs and pays bills, showing what it’s doing without opening a log.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Productivity
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Automation
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 03
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Desk companion.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      A small always-on screen for timers, reminders and focus sessions that sleeps when you do.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Focus
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Home
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 04
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Smart-home voice.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      A friendlier face for “turn off the lights” or “what’s the weather”, reacting as it listens and answers.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Voice
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Iot
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 05
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Family helper.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      Reminders for medicines and calls home, with warm moods (Love, Proud) that make it feel less like software.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Family
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Care
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div data-uc="1" style={{ flex: "1", background: "#2e2e2e", borderRadius: "18px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span
                      style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", color: "#e8e8e8", alignSelf: "flex-start", height: "28px", fontSize: "13px", fontWeight: "600" }}
                    >
                      Use case 06
                    </span>
                    <h3 style={{ margin: "0", fontSize: "24px", lineHeight: "30px", fontWeight: "600", color: "#ffffff" }}>
                      Product onboarding and support.
                    </h3>
                    <p style={{ margin: "0", fontSize: "16px", lineHeight: "24px", color: "#c9c9c9" }}>
                      A brand character that explains, waits and celebrates inside an app, using the same spec.
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "24px", display: "flex", gap: "12px" }}>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Product
                      </span>
                      <span
                        style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "12px", fontWeight: "600", color: "#e8e8e8" }}
                      >
                        Support
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
            style={{ maxWidth: "1040px", margin: "0 auto", paddingTop: "clamp(96px,12vw,160px)", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}
          >
            {" "}
            <span
              style={{ display: "inline-flex", alignItems: "center", height: "32px", padding: "0 14px", border: "1.5px solid #4f4f4f", borderRadius: "999px", fontSize: "14px", fontWeight: "500", color: "#e8e8e8" }}
            >
              Looking back
            </span>
            {" "}
            <h2 style={{ margin: "4px 0 0", fontSize: "clamp(30px,3.8vw,46px)", lineHeight: "1.2", fontWeight: "600", color: "#ffffff", textWrap: "balance" }}>
              Learnings
            </h2>
            {" "}
            <div style={{ width: "100%", margin: "clamp(28px,4vw,48px) 0 0", display: "flex", flexDirection: "column", gap: "56px" }}>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", borderBottom: "1px solid rgba(245,245,245,0.14)" }}>
                {" "}
                <div
                  data-learn="1"
                  style={{ display: "grid", gridTemplateColumns: "96px minmax(0,1fr)", gap: "24px", padding: "32px 0", borderTop: "1px solid rgba(245,245,245,0.14)" }}
                >
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#6f6f6f" }}>
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
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#6f6f6f" }}>
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
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#6f6f6f" }}>
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
                  <span style={{ fontSize: "60px", lineHeight: "72px", fontWeight: "400", color: "#6f6f6f" }}>
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
        </div>
      </div>
    </>
  );
}
