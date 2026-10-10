// Ported from design-reference/design/Bijak Web Design System v2.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import * as Bijak from '@/components/bijak';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BijakView({ v }: { v: any }) {
  return (
    <>
      <div
        style={{ backgroundColor: "#1C1C1C", color: "#FFFFFF", fontFamily: "'Montserrat',system-ui,sans-serif", minHeight: "100vh", overflowX: "clip", paddingBottom: "180px" }}
      >
        <div
          style={{ maxWidth: "1040px", margin: "0 auto", padding: "clamp(24px,5vw,56px) clamp(20px,5vw,40px) 0", display: "flex", justifyContent: "flex-end", position: "relative", zIndex: "5" }}
        >
          <a
            href={href("/")}
            aria-label="Close and go back home"
            style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#2a2a2a", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
            className="bijak-hover-0"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M2 2l18 18M20 2 2 20" />
            </svg>
          </a>
        </div>
        {" "}
        <header
          style={{ maxWidth: "1272px", margin: "0 auto", padding: "clamp(8px,2vw,24px) 20px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "40px" }}
        >
          {" "}
          <div style={{ flex: "0 1 auto", minWidth: "0" }}>
            {" "}
            <h1
              aria-label="Bijak Web Design System"
              style={{ margin: "14px 0 0", fontSize: "clamp(40px,7vw,88px)", lineHeight: "1.04", fontWeight: "700", display: "flex", flexWrap: "wrap", columnGap: "0.26em" }}
            >
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Bijak
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Web
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Design
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  System
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p data-hero="sub" style={{ margin: "18px 0 0", fontSize: "clamp(16px,1.6vw,20px)", fontWeight: "500", maxWidth: "36ch", lineHeight: "1.4" }}>
              One shared set of foundations and components for Bijak's web platform
            </p>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              {" "}
              <span data-hero="chip" style={{ background: "#56C381", color: "#0E2A19", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                Design system
              </span>
              {" "}
              <span data-hero="chip" style={{ background: "#56C381", color: "#0E2A19", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                Web
              </span>
              {" "}
              <span data-hero="chip" style={{ background: "#56C381", color: "#0E2A19", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                Agritech
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 14px", maxWidth: "500px", paddingBottom: "6px" }}>
            {" "}
            <div data-note="1" data-rot="-3" style={{ width: "230px", padding: "12px 12px 10px", background: "#7FD3F7", color: "#12303D", transform: "rotate(-3deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Role
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Senior Product Designer
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="2" style={{ width: "230px", padding: "12px 12px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(2deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Timeline
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                2020 — 2021
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="1.5" style={{ width: "230px", padding: "12px 12px 10px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(1.5deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Built in
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Figma · Roboto
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Overview
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(17px,1.8vw,20px)", fontWeight: "500", lineHeight: "1.55" }}>
            Established design guidelines for the Bijak and Just apps, which later grew into a full design system.
          </p>
          {" "}
          <p data-reveal="1" style={{ margin: "16px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            The web system documents every foundation and component in one Figma library: grids, spacing, colour, type, buttons, inputs, tables, selection controls, icons and cursor states. Each component ships with its variants and states so design and engineering build from the same source.
          </p>
          {" "}
          <div
            data-stats="1"
            data-mw="stats"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "56px", borderTop: "2px dashed #555555", borderBottom: "2px dashed #555555" }}
          >
            {" "}
            <div data-stat="1" style={{ padding: "26px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "600" }}>
                <span data-count="12">
                  12
                </span>
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#D6D6D6" }}>
                Component families
              </div>
            </div>
            {" "}
            <div data-stat="1" style={{ padding: "26px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "600" }}>
                <span data-count="23">
                  23
                </span>
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#D6D6D6" }}>
                Colour values
              </div>
            </div>
            {" "}
            <div data-stat="1" style={{ padding: "26px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "600" }}>
                <span data-count="36">
                  36
                </span>
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#D6D6D6" }}>
                Type styles
              </div>
            </div>
            {" "}
            <div data-stat="1" style={{ padding: "26px 10px", textAlign: "center" }}>
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "600" }}>
                <span data-count="64">
                  64
                </span>
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#D6D6D6" }}>
                Input field variants
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              {"Grid &"}
              <br />
              Layouts
            </h2>
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "52px" }}>
            {" "}
            {((v.bps ?? []) as any[]).map((b: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <button
                  type="button"
                  data-bi={b?.i}
                  data-seg={b?.on}
                  onClick={v.pickBp}
                  style={{ appearance: "none", cursor: "pointer", background: "transparent", border: "1.5px solid #6A6A6A", color: "#FFFFFF", padding: "9px 14px", fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "600" }}
                >
                  {b?.label}
                </button>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ marginTop: "22px", border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
            {" "}
            <div style={{ position: "relative", height: "280px", display: "flex", background: "#FFFFFF", overflow: "hidden" }}>
              {" "}
              <div data-nav={v.bpNav} style={css(`flex:0 0 auto;width:${v.navW ?? ""};background:#25282B;transition:width .6s cubic-bezier(.2,.8,.2,1)`)} />
              {" "}
              <div
                style={css(`flex:1 1 auto;display:flex;padding:0 ${v.bpMargin ?? ""};gap:${v.bpGutter ?? ""};background:#ED646A;transition:padding .6s cubic-bezier(.2,.8,.2,1)`)}
              >
                {" "}
                {((v.cols ?? []) as any[]).map((c: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <span data-col={c?.on} style={{ flex: "1 1 0", minWidth: "0", background: "#56C381", opacity: "0.9" }} />
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px", marginTop: "16px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                <span data-colcount="1">
                  {v.bpCols}
                </span>
                {" "}columns
              </div>
              {" "}
              <div style={{ fontSize: "13px", color: "#D6D6D6" }}>
                {v.bpNote}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-2"
            style={{ display: "inline-block", marginTop: "24px", padding: "12px 14px", background: "#FFE94D", color: "#2A2400", fontFamily: "'Permanent Marker',cursive", fontSize: "15px", lineHeight: "1.35", transform: "rotate(-2deg)" }}
          >
            {v.bpSticky}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Spacing
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Ten spacing steps from 8 to 56, with 4px reserved for tight icon padding.
          </p>
          {" "}
          <div data-space="1" style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "28px" }}>
            {" "}
            {((v.spacing ?? []) as any[]).map((sp: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div style={{ display: "grid", gridTemplateColumns: "56px 1fr", alignItems: "center", gap: "16px" }}>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#56C381" }}>
                    {sp?.v}
                  </span>
                  {" "}
                  <span style={{ display: "block", height: "18px" }}>
                    {" "}
                    <span data-bar="1" style={css(`display:block;height:100%;width:${sp?.w ?? ""};background:#56C381;transform-origin:left`)} />
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Colour
              <br />
              Palette
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Semantic roles sit on top of four tonal palettes. Click any swatch to copy its hex.
          </p>
          {" "}
          {((v.palettes ?? []) as any[]).map((pg: any, i0: number) => (
            <Fragment key={i0}>
              {" "}
              <div data-pal="1" style={{ marginTop: "36px" }}>
                {" "}
                <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A9A9A" }}>
                  {pg?.name}
                </div>
                {" "}
                <div data-mw="sw4" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "10px", marginTop: "12px" }}>
                  {" "}
                  {((pg?.items ?? []) as any[]).map((sw: any, i1: number) => (
                    <Fragment key={i1}>
                      {" "}
                      <button
                        type="button"
                        data-sw="1"
                        data-hex={sw?.hex}
                        onClick={v.copyHex}
                        style={{ appearance: "none", border: "0", padding: "0", cursor: "copy", textAlign: "left", background: "#262626", fontFamily: "'Montserrat',sans-serif", color: "#FFFFFF" }}
                      >
                        {" "}
                        <span style={css(`display:block;height:78px;background:${sw?.hex ?? ""};outline:1px solid rgba(255,255,255,0.12);outline-offset:-1px`)} />
                        {" "}
                        <span style={{ display: "block", padding: "9px 10px 10px" }}>
                          {" "}
                          <span style={{ display: "block", fontSize: "12px", fontWeight: "700" }}>
                            {sw?.hex}
                          </span>
                          {" "}
                          <span style={{ display: "block", marginTop: "2px", fontSize: "11px", color: "#BDBDBD" }}>
                            {sw?.label}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </button>
                      {" "}
                    </Fragment>
                  ))}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </Fragment>
          ))}
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Typography
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Twelve Roboto styles, each in Regular, Medium and Bold. Switch the weight to see the whole scale change.
          </p>
          {" "}
          <div data-reveal="1" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
            {" "}
            {((v.weights ?? []) as any[]).map((w: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <button
                  type="button"
                  data-wi={w?.i}
                  data-seg={w?.on}
                  onClick={v.pickWeight}
                  style={{ appearance: "none", cursor: "pointer", background: "transparent", border: "1.5px solid #6A6A6A", color: "#FFFFFF", padding: "9px 14px", fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "600" }}
                >
                  {w?.label}
                </button>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div data-types="1" style={{ marginTop: "22px", background: "#FFFFFF", color: "#25282B", padding: "8px 22px" }}>
            {" "}
            {((v.types ?? []) as any[]).map((t: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div
                  data-trow="1"
                  data-mw="typerow"
                  style={{ display: "grid", gridTemplateColumns: "170px 1fr", alignItems: "baseline", gap: "20px", padding: "14px 0", borderBottom: "1px solid #E8E8E8" }}
                >
                  {" "}
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", lineHeight: "1.45", color: "#52575C" }}>
                    <b style={{ display: "block", color: "#25282B", fontSize: "12px" }}>
                      {t?.name}
                    </b>
                    {t?.spec}
                  </div>
                  {" "}
                  <div
                    data-tsample="1"
                    style={css(`font-family:'Roboto',sans-serif;font-size:${t?.size ?? ""};letter-spacing:${t?.ls ?? ""};font-weight:${v.typeWeight ?? ""};line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:font-weight .3s ease`)}
                  >
                    {t?.sample}
                  </div>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Components
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            These are the live components from the library. Change a state and the component re-renders exactly as it is defined in Figma.
          </p>
          {" "}
          <div data-comp="1" style={{ marginTop: "36px", border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              {" "}
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                Buttons{" "}
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#9A9A9A", whiteSpace: "nowrap" }}>
                  · 36 variants
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {" "}
                {((v.btnStates ?? []) as any[]).map((bs: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <button
                      type="button"
                      data-bsi={bs?.i}
                      data-seg={bs?.on}
                      onClick={v.pickBtnState}
                      style={{ appearance: "none", cursor: "pointer", background: "transparent", border: "1.5px solid #6A6A6A", color: "#FFFFFF", padding: "7px 12px", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "600" }}
                    >
                      {bs?.label}
                    </button>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div
              data-stage="1"
              style={{ marginTop: "18px", background: "#FFFFFF", padding: "28px 22px", display: "flex", flexWrap: "wrap", gap: "22px", alignItems: "center", justifyContent: "center", minHeight: "130px" }}
            >
              {" "}
              <Bijak.Button type="default" state={v.btnState} />
              {" "}
              <div style={{ background: "#25282B", padding: "12px 14px" }}>
                <Bijak.Button type="stroke" state={v.btnState} />
              </div>
              {" "}
              <Bijak.Button type="nude" state={v.btnState} />
              {" "}
              <Bijak.Button type="default" state={v.btnState} icon={true} iconPosition="left" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-comp="1" style={{ marginTop: "20px", border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              {" "}
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                Input fields{" "}
                <span style={{ fontSize: "12px", fontWeight: "600", color: "#9A9A9A" }}>
                  · 64 variants
                </span>
              </div>
              {" "}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {" "}
                {((v.inStates ?? []) as any[]).map((is: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <button
                      type="button"
                      data-isi={is?.i}
                      data-seg={is?.on}
                      onClick={v.pickInState}
                      style={{ appearance: "none", cursor: "pointer", background: "transparent", border: "1.5px solid #6A6A6A", color: "#FFFFFF", padding: "7px 12px", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "600" }}
                    >
                      {is?.label}
                    </button>
                    {" "}
                  </Fragment>
                ))}
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div
              data-stage="1"
              style={{ marginTop: "18px", background: "#FFFFFF", padding: "28px 22px", display: "flex", flexWrap: "wrap", gap: "28px", justifyContent: "center", minHeight: "150px" }}
            >
              {" "}
              <Bijak.InputField state={v.inState} lable="on" helpText="on" dropdown="off" paragraph="off" />
              {" "}
              <Bijak.InputField state={v.inState} lable="on" helpText="off" dropdown="on" paragraph="off" />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
            {" "}
            <div data-comp="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                Selection controls
              </div>
              {" "}
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#9A9A9A" }}>
                Tap to change state
              </div>
              {" "}
              <div
                data-stage="1"
                style={{ marginTop: "18px", background: "#FFFFFF", padding: "24px 20px", display: "flex", flexWrap: "wrap", gap: "26px", alignItems: "center", justifyContent: "center", minHeight: "110px" }}
              >
                {" "}
                <button
                  type="button"
                  onClick={v.cycleCheck}
                  aria-label="Checkbox"
                  style={{ appearance: "none", border: "0", background: "transparent", padding: "6px", cursor: "pointer" }}
                >
                  <Bijak.CheckBox state={v.checkState} status="active" />
                </button>
                {" "}
                <button
                  type="button"
                  onClick={v.toggleRadio}
                  aria-label="Radio"
                  style={{ appearance: "none", border: "0", background: "transparent", padding: "6px", cursor: "pointer" }}
                >
                  <Bijak.RadioButton state={v.radioState} />
                </button>
                {" "}
                <button
                  type="button"
                  onClick={v.toggleToggle}
                  aria-label="Toggle"
                  style={{ appearance: "none", border: "0", background: "transparent", padding: "6px", cursor: "pointer" }}
                >
                  <Bijak.Toggle state={v.toggleState} />
                </button>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", justifyContent: "center", gap: "26px", marginTop: "10px", fontSize: "11px", color: "#BDBDBD" }}>
                {v.selSummary}
              </div>
              {" "}
            </div>
            {" "}
            <div data-comp="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "18px", fontWeight: "700" }}>
                {"Loaders & icons"}
              </div>
              {" "}
              <div style={{ marginTop: "4px", fontSize: "12px", color: "#9A9A9A" }}>
                Timelapse in 5 styles
              </div>
              {" "}
              <div
                data-stage="1"
                style={{ marginTop: "18px", background: "#FFFFFF", padding: "24px 20px", display: "flex", flexWrap: "wrap", gap: "22px", alignItems: "center", justifyContent: "center", minHeight: "110px" }}
              >
                {" "}
                <Bijak.Timelapse style2="filled" />
                {" "}
                <Bijak.Timelapse style2="outlined" />
                {" "}
                <Bijak.Timelapse style2="rounded" />
                {" "}
                <Bijak.Timelapse style2="sharp" />
                {" "}
                <Bijak.Timelapse style2="two-tone" />
                {" "}
                <Bijak.Hamburger />
                {" "}
                <Bijak.CalendarOutline />
                {" "}
                <Bijak.KYC />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Cursor
              <br />
              States
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Thirteen cursors tell the user what an element will do before they click. Hover a tile to try the real cursor.
          </p>
          {" "}
          <div data-cursors="1" data-mw="cursors" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: "10px", marginTop: "28px" }}>
            {" "}
            {((v.cursors ?? []) as any[]).map((cu: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div
                  data-cur="1"
                  style={css(`background:#FFFFFF;color:#25282B;padding:18px 10px 12px;display:flex;flex-direction:column;align-items:center;gap:12px;cursor:${cu?.css ?? ""}`)}
                  className="bijak-hover-1"
                >
                  {" "}
                  <Bijak.Cursor cursorType={cu?.t} />
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "600", textTransform: "capitalize" }}>
                    {cu?.t}
                  </span>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #56C381" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #56C381", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Governance
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Every page in the library opens with a cover that names its owner and shows where it stands. The status moves through six stages, so anyone opening the file knows whether a component is ready to use.
          </p>
          {" "}
          <div data-pipe="1" data-mw="pipe" style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6,1fr)", marginTop: "36px" }}>
            {" "}
            <span aria-hidden="true" style={{ position: "absolute", left: "8%", right: "8%", top: "17px", height: "2px", background: "#3A3A3A" }} />
            {" "}
            <span
              data-pline="1"
              aria-hidden="true"
              style={{ position: "absolute", left: "8%", right: "8%", top: "17px", height: "2px", background: "#56C381", transformOrigin: "left", transform: "scaleX(0)" }}
            />
            {" "}
            {((v.stages ?? []) as any[]).map((st: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div data-stg="1" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                  {" "}
                  <span
                    data-sdot="1"
                    style={{ width: "36px", height: "36px", border: "2px solid #4A4A4A", background: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "700" }}
                  >
                    {st?.n}
                  </span>
                  {" "}
                  <span style={{ fontSize: "13px", fontWeight: "600" }}>
                    {st?.t}
                  </span>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "44px" }}>
            {" "}
            <div
              data-note="1"
              data-rot="-2"
              style={{ padding: "16px 16px", background: "#FFE94D", color: "#2A2400", fontFamily: "'Permanent Marker',cursive", fontSize: "16px", lineHeight: "1.35", transform: "rotate(-2deg)" }}
            >
              ❓Why... why did you put that there?
            </div>
            {" "}
            <div
              data-note="1"
              data-rot="1.5"
              style={{ padding: "16px 16px", background: "#FFE94D", color: "#2A2400", fontFamily: "'Permanent Marker',cursive", fontSize: "16px", lineHeight: "1.35", transform: "rotate(1.5deg)" }}
            >
              Is this clickable? I can’t tell?
            </div>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "20px 0 0", fontSize: "14px", lineHeight: "1.6", color: "#9A9A9A" }}>
            Review notes are part of the kit too, so feedback lives next to the component it is about.
          </p>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(110px,14vw,180px) 20px 0" }}>
          {" "}
          <div data-next="1">
            {" "}
            <div
              style={{ display: "inline-block", background: "#FFFFFF", color: "#1C1C1C", padding: "7px 14px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.16em", textTransform: "uppercase" }}
            >
              Next project
            </div>
            {" "}
            <a
              href={href("/work/toffee-seller-app/")}
              data-mw="next"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "2px solid #3A3A3A", background: "#141414", textDecoration: "none", color: "#FFFFFF" }}
              className="bijak-hover-2"
            >
              {" "}
              <div
                data-mw="nextimg"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "260px", borderRight: "2px solid #3A3A3A", padding: "24px", overflow: "hidden", background: "#FFFFFF" }}
              >
                {" "}
                <img
                  data-nextimg="1"
                  src={asset("/assets/toffee/hero.png")}
                  alt="Toffee Seller App"
                  style={{ display: "block", width: "100%", maxWidth: "360px", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "14px", padding: "clamp(28px,4vw,44px)" }}>
                {" "}
                <h3 style={{ margin: "0", fontSize: "clamp(30px,4vw,44px)", fontWeight: "700", color: "#FFFFFF" }}>
                  Toffee Seller App
                </h3>
                {" "}
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#D6D6D6" }}>
                  Insurance App for cycle insurance
                </p>
                {" "}
                <span
                  data-nextcta="1"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "6px", background: "#EC5A5A", color: "#FFFFFF", padding: "12px 18px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  View project{" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          <div style={{ marginTop: "56px" }}>
            {" "}
            <a
              href={href("/")}
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#9A9A9A" }}
              className="bijak-hover-3"
            >
              ← Back to portfolio
            </a>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <div
          data-toast={v.toastOn}
          role="status"
          aria-live="polite"
          style={{ position: "fixed", left: "50%", bottom: "104px", zIndex: "200", display: "flex", alignItems: "center", gap: "10px", background: "#FFFFFF", color: "#1C1C1C", padding: "12px 18px", fontSize: "13px", fontWeight: "700", pointerEvents: "none", transition: "opacity .3s ease, transform .35s cubic-bezier(.2,.9,.3,1.3)" }}
        >
          <span style={css(`width:14px;height:14px;background:${v.toastHex ?? ""}`)} />
          {v.toastMsg}
        </div>
      </div>
    </>
  );
}
