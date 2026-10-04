// Ported from design-reference/design/EngageX.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import ImageSlot from '@/components/ImageSlot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EngageXView({ v }: { v: any }) {
  return (
    <>
      <div
        style={{ backgroundColor: "#1C1C1C", backgroundImage: "radial-gradient(circle, rgba(243,242,242,0.18) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px", color: "#FFFFFF", fontFamily: "'Montserrat',system-ui,sans-serif", minHeight: "100vh", overflowX: "clip", paddingBottom: "180px" }}
      >
        {" "}
        <div style={{ maxWidth: "1512px", margin: "0 auto", position: "relative" }}>
          {" "}
          <header
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", padding: "120px clamp(24px,8vw,120px) 0" }}
          >
            {" "}
            <div style={{ flex: "0 1 auto" }}>
              {" "}
              <img data-hero="logo" src={asset("/assets/engagex/xtelify-logo.png")} alt="Xtelify" style={{ display: "block", width: "100px", height: "auto" }} />
              {" "}
              <h1
                aria-label="Engage X"
                style={{ margin: "18px 0 0", fontSize: "96px", lineHeight: "1", fontWeight: "700", letterSpacing: "0.01em", display: "flex", overflow: "hidden", paddingBottom: "6px" }}
              >
                {" "}
                <span data-char="1" style={{ display: "inline-block" }}>
                  E
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  n
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  g
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  a
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  g
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  e
                </span>
                <span data-char="1" style={{ display: "inline-block", width: "0.3em" }}>
                  {" "}
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  X
                </span>
                {" "}
              </h1>
              {" "}
              <p data-hero="sub" style={{ margin: "18px 0 0", fontSize: "20px", fontWeight: "500", letterSpacing: "0.01em" }}>
                A Unified Campaign Lifecycle Manager
              </p>
              {" "}
              <div data-mw="chips" style={{ display: "flex", gap: "8px", marginTop: "22px" }}>
                {" "}
                <span
                  data-hero="chip"
                  style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "500", padding: "5px 7px", border: "1px solid #9BDDF5" }}
                >
                  Design Lead
                </span>
                {" "}
                <span
                  data-hero="chip"
                  style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "500", padding: "5px 7px", border: "1px solid #9BDDF5" }}
                >
                  From concept to launch
                </span>
                {" "}
                <span
                  data-hero="chip"
                  style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "500", padding: "5px 7px", border: "1px solid #9BDDF5" }}
                >
                  6 Months
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ position: "relative", flex: "0 0 auto", width: "500px", height: "200px", marginTop: "88px" }}>
              {" "}
              <div
                data-note="1"
                data-rot="-4"
                style={{ position: "absolute", left: "2px", top: "0", width: "232px", padding: "12px 12px 10px", background: "#7FD3F7", color: "#12303D", transform: "rotate(-4deg)" }}
              >
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "700" }}>
                  Role
                </div>
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "500" }}>
                  Lead Experience Designer
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-note="1"
                data-rot="1.5"
                style={{ position: "absolute", left: "0", top: "92px", width: "236px", padding: "12px 12px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(1.5deg)" }}
              >
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "700" }}>
                  Team
                </div>
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "500" }}>
                  {"2 PM, 6 Engineers & Me"}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-note="1"
                data-rot="2.5"
                style={{ position: "absolute", right: "0", top: "56px", width: "234px", padding: "12px 12px 22px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(2.5deg)" }}
              >
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "700" }}>
                  Platform
                </div>
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "500" }}>
                  Web
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </header>
          {" "}
          <div data-mw="laptop" style={{ position: "relative", width: "640px", margin: "130px auto 0" }}>
            {" "}
            <img
              data-laptop="1"
              src={asset("/assets/engagex/laptop.png")}
              alt="Engage X — Create new campaign screen"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <div
              data-cursor="1"
              style={{ position: "absolute", right: "calc(100% - 90px)", top: "285px", width: "max-content", display: "flex", alignItems: "flex-start" }}
            >
              {" "}
              <span style={{ background: "#E0217A", color: "#FFFFFF", fontSize: "15px", fontWeight: "500", padding: "8px 18px", borderRadius: "999px", marginTop: "6px" }}>
                Please refer PRD
              </span>
              {" "}
              <svg width="18" height="20" viewBox="0 0 18 20" style={{ marginLeft: "-2px", transform: "scaleX(-1)" }}>
                <path d="M1 1l15 7-6.5 2L7 17z" fill="#1C1C1C" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              {" "}
            </div>
            {" "}
            <div
              data-cursor="2"
              style={{ position: "absolute", left: "calc(100% - 60px)", top: "185px", width: "max-content", display: "flex", alignItems: "flex-start" }}
            >
              {" "}
              <svg width="18" height="20" viewBox="0 0 18 20" style={{ marginRight: "-2px" }}>
                <path d="M1 1l15 7-6.5 2L7 17z" fill="#1C1C1C" stroke="#FFFFFF" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
              {" "}
              <span style={{ background: "#2BA84A", color: "#FFFFFF", fontSize: "15px", fontWeight: "500", padding: "8px 18px", borderRadius: "999px", marginTop: "10px" }}>
                Detach Instance
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-reveal="1"
            data-mw="col notice"
            style={{ width: "840px", margin: "100px auto 0", background: "#F4C542", color: "#2A220A", padding: "16px 14px 14px" }}
          >
            {" "}
            <div style={{ fontSize: "12px", fontWeight: "700" }}>
              Confidentiality Notice
            </div>
            {" "}
            <p style={{ margin: "3px 0 0", fontSize: "11.5px", lineHeight: "1.45" }}>
              My work at Airtel is focused on highly sensitive cybersecurity and privacy initiatives. To comply with strict non-disclosure agreements, all proprietary data, live interfaces, and specific workflows have been omitted. This case study focuses exclusively on high-level strategy, organizational architecture, and publicly communicable outcomes.
            </p>
            {" "}
          </div>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "64px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Problem
                <br />
                Statement
              </h2>
              {" "}
            </div>
            {" "}
            <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "18px", lineHeight: "1.5" }}>
              Airtel’s customer communication ecosystem suffers from a fragmented campaign lifecycle across channels, tools, and teams. This creates operational inefficiencies across planning, audience selection, content creation, scheduling, and execution resulting in high manual effort, delayed rollouts, and inconsistent messaging.
            </p>
            {" "}
            <div
              data-note="1"
              data-rot="-4"
              data-mw="goal"
              style={{ width: "164px", margin: "42px 0 0 -62px", padding: "14px 0 12px", background: "#F6DFA6", color: "#3D3010", textAlign: "center", fontSize: "15px", fontWeight: "700", transform: "rotate(-4deg)" }}
            >
              Goal
            </div>
            {" "}
            <p data-reveal="1" style={{ margin: "22px 0 0", fontSize: "18px", lineHeight: "1.5" }}>
              Build a single, scalable campaign management platform to streamline workflows, accelerate execution, ensure brand consistency, and drive better customer engagement.
            </p>
            {" "}
          </section>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" data-imp-title="1" style={{ position: "relative", width: "360px", margin: "0 auto", padding: "14px 0 18px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "2px solid #5BC0E8" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-12px", top: "-12px", width: "24px", height: "24px", border: "2px solid #5BC0E8", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-12px", top: "-12px", width: "24px", height: "24px", border: "2px solid #5BC0E8", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-12px", bottom: "-12px", width: "24px", height: "24px", border: "2px solid #5BC0E8", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-12px", bottom: "-12px", width: "24px", height: "24px", border: "2px solid #5BC0E8", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "76px", lineHeight: "1.16", fontWeight: "500" }}>
                Impact
              </h2>
              {" "}
            </div>
            {" "}
            <div data-impact="1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginTop: "104px", position: "relative" }}>
              {" "}
              <div data-divider="1" style={{ position: "absolute", left: "50%", top: "0", bottom: "0", borderLeft: "2px dashed #6A6A6A", transformOrigin: "top" }} />
              {" "}
              <div style={{ paddingRight: "10px" }}>
                {" "}
                <div
                  data-note="1"
                  data-rot="8"
                  style={{ width: "158px", margin: "0 auto", padding: "10px 0 9px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "15px", fontWeight: "700", transform: "rotate(8deg)" }}
                >
                  Business
                </div>
                {" "}
                <div data-mw="mgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "44px", marginTop: "44px", textAlign: "center" }}>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="10" data-prefix="+">
                        +10
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Increase customer retention rate
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="20" data-prefix="-">
                        -20
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Reduce customer acquisition cost
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="20" data-prefix="+">
                        +20
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Increase customer lifecycle value
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="30" data-prefix="-">
                        -30
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Reduce operational dependancy
                    </div>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-hdiv="1" style={{ display: "none", borderTop: "2px dashed #6A6A6A", margin: "0 -10px" }} />
              {" "}
              <div style={{ paddingLeft: "10px" }}>
                {" "}
                <div
                  data-note="1"
                  data-rot="-4"
                  style={{ width: "158px", margin: "22px auto 0", padding: "13px 0 12px", background: "#F6DFA6", color: "#3D3010", textAlign: "center", fontSize: "15px", fontWeight: "700", transform: "rotate(-4deg)" }}
                >
                  UX
                </div>
                {" "}
                <div data-mw="mgrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "56px", marginTop: "44px", textAlign: "center" }}>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="30" data-prefix="+">
                        +30
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Task completion rate
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="20" data-prefix="-">
                        -20
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Lower user churn
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="15" data-prefix="+">
                        +15
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Improved CSAT/NPS
                    </div>
                  </div>
                  {" "}
                  <div data-metric="1">
                    <div data-mnum="1" style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                      <span data-count="15" data-prefix="+">
                        +15
                      </span>
                      %
                    </div>
                    <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                      Feature adoption
                    </div>
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
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "200px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Design
                <br />
                Approach
              </h2>
              {" "}
            </div>
            {" "}
            <div data-mw="folders" style={{ display: "grid", gridTemplateColumns: "263px 263px 278px", gap: "18px", marginTop: "60px", alignItems: "start" }}>
              {" "}
              <div data-folder="1" style={{ position: "relative", paddingTop: "28px" }}>
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "0", width: "88px", height: "30px", background: "#5BC0E8", clipPath: "polygon(0 0,78% 0,100% 100%,0 100%)" }}
                />
                {" "}
                <div data-mw="fbody" style={{ background: "#5BC0E8", color: "#12303D", height: "206px", padding: "22px 24px" }}>
                  {" "}
                  <div style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "0.02em" }}>
                    RESEARCH
                  </div>
                  {" "}
                  <ul style={{ margin: "4px 0 0", paddingLeft: "26px", fontSize: "16px", lineHeight: "1.6", fontWeight: "500" }}>
                    {" "}
                    <li data-li="1">
                      Personas
                    </li>
                    <li data-li="1">
                      Benchmarking
                    </li>
                    <li data-li="1">
                      Affinity Mapping
                    </li>
                    <li data-li="1">
                      User Interviews
                    </li>
                    {" "}
                  </ul>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-folder="1" style={{ position: "relative", paddingTop: "28px" }}>
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "0", width: "88px", height: "30px", background: "#5BC0E8", clipPath: "polygon(0 0,78% 0,100% 100%,0 100%)" }}
                />
                {" "}
                <div data-mw="fbody" style={{ background: "#5BC0E8", color: "#12303D", height: "206px", padding: "22px 24px" }}>
                  {" "}
                  <div style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "0.02em" }}>
                    DESIGN
                  </div>
                  {" "}
                  <ul style={{ margin: "4px 0 0", paddingLeft: "26px", fontSize: "16px", lineHeight: "1.6", fontWeight: "500" }}>
                    {" "}
                    <li data-li="1">
                      Group Brainstorming
                    </li>
                    <li data-li="1">
                      AI prototypes
                    </li>
                    <li data-li="1">
                      AI illustrations
                    </li>
                    <li data-li="1">
                      DS powered UI
                    </li>
                    <li data-li="1">
                      Interactions
                    </li>
                    {" "}
                  </ul>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-folder="1" style={{ position: "relative", paddingTop: "28px" }}>
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "0", width: "88px", height: "30px", background: "#5BC0E8", clipPath: "polygon(0 0,78% 0,100% 100%,0 100%)" }}
                />
                {" "}
                <div data-mw="fbody" style={{ background: "#5BC0E8", color: "#12303D", height: "206px", padding: "22px 24px" }}>
                  {" "}
                  <div style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "0.02em" }}>
                    EVALUATE
                  </div>
                  {" "}
                  <ul style={{ margin: "4px 0 0", paddingLeft: "26px", fontSize: "16px", lineHeight: "1.6", fontWeight: "500" }}>
                    {" "}
                    <li data-li="1">
                      Usability Testing
                    </li>
                    <li data-li="1">
                      Refinements
                    </li>
                    {" "}
                  </ul>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Proto
                <br />
                Personas
              </h2>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "38px", marginTop: "56px" }}>
              {" "}
              <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px 30px" }}>
                {" "}
                <div style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>
                  {" "}
                  <img
                    src={asset("/assets/engagex/kamakshi.png")}
                    alt="Kamakshi Yadav"
                    style={{ width: "108px", height: "108px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto", marginLeft: "6px" }}
                  />
                  {" "}
                  <div style={{ paddingTop: "14px" }}>
                    {" "}
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      Kamakshi Yadav
                    </div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "13.5px", color: "#D6D6D6" }}>
                      Customer success lead
                    </div>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                      Manages high-touch enterprise accounts and tracks post-onboarding client health across multiple dashboards.
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ marginTop: "26px", fontSize: "15px", fontWeight: "700" }}>
                  Goals
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Identify churn risks early, accelerate Time-to-Value (TTV), and conduct timely outreach without manually assembling data from disparate tools.
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Pain Points
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Disjointed tools require switching between CRM, support tickets, and product analytics; lack of context causes awkward customer check-ins.
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Key Platform Need
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  A unified customer health dashboard with automated risk alerts and single-pane-of-glass timeline views.
                </p>
                {" "}
              </article>
              {" "}
              <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px 30px" }}>
                {" "}
                <div style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>
                  {" "}
                  <img
                    src={asset("/assets/engagex/gaurav.png")}
                    alt="Gaurav Sharma"
                    style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto" }}
                  />
                  {" "}
                  <div style={{ paddingTop: "14px" }}>
                    {" "}
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      Gaurav Sharma
                    </div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "13.5px", color: "#D6D6D6" }}>
                      Business Head
                    </div>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                      Oversees cross-departmental revenue goals, focusing on Net Revenue Retention (NRR) and Customer Lifetime Value (LTV).
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ marginTop: "26px", fontSize: "15px", fontWeight: "700" }}>
                  Goals
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Track overall lifecycle conversions, lower Customer Acquisition Cost (CAC), and forecast quarterly revenue based on real customer data.
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Pain Points
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Inconsistent cross-departmental reports, delayed metrics on expansion opportunities, and lack of visibility into post-sale customer drops.
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Key Platform Need
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  High-level executive reporting suite featuring NRR trends, cohort analysis, and lifecycle health overviews.
                </p>
                {" "}
              </article>
              {" "}
              <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px 30px" }}>
                {" "}
                <div style={{ display: "flex", gap: "28px", alignItems: "flex-start" }}>
                  {" "}
                  <img
                    src={asset("/assets/engagex/priya.png")}
                    alt="Priya Kharbanda"
                    style={{ width: "92px", height: "92px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto", marginLeft: "10px" }}
                  />
                  {" "}
                  <div style={{ paddingTop: "6px" }}>
                    {" "}
                    <div style={{ fontSize: "16px", fontWeight: "700" }}>
                      Priya Kharbanda
                    </div>
                    {" "}
                    <div style={{ marginTop: "4px", fontSize: "13.5px", color: "#D6D6D6" }}>
                      Marketing Lead
                    </div>
                    {" "}
                    <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                      Manage campaigns across multiple channels to increase revenue of core lob business
                    </p>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ marginTop: "26px", fontSize: "15px", fontWeight: "700" }}>
                  Goals
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Drive full-funnel growth and Net Revenue Retention (NRR) by delivering dynamic, personalized cross-channel campaigns
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Pain Points
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  Frequently face fragmented data where critical product usage signals are locked inside analytics tools, forcing them to rely heavily on engineering teams for manual list exports that delay campaign execution and miss key onboarding windows.
                </p>
                {" "}
                <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                  Key Platform Need
                </div>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "13.5px", lineHeight: "1.45", color: "#D6D6D6" }}>
                  A 360-degree customer profile dashboard that aggregates behavioral, transactional, and support data in real time, paired with a visual, no-code audience segmenter.
                </p>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Information
                <br />
                Architecture
              </h2>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div
            data-iawrap="1"
            style={{ width: "min(1392px, calc(100% - 48px))", margin: "56px auto 0", border: "2px dashed #6A6A6A", background: "#1C1C1C", padding: "36px 28px 40px", overflowX: "auto" }}
          >
            {" "}
            <div style={{ minWidth: "1320px" }}>
              {" "}
              <div
                data-ia-root="1"
                style={{ width: "220px", margin: "0 auto", background: "#FFFFFF", color: "#1C1C1C", fontSize: "16px", fontWeight: "700", padding: "12px 0", textAlign: "center" }}
              >
                Engage X
              </div>
              {" "}
              <span data-ia-stem="1" style={{ display: "block", width: "1.5px", height: "24px", background: "#5BC0E8", margin: "0 auto", transformOrigin: "top" }} />
              {" "}
              <div data-mw="iagrid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2.1fr 1fr 1fr 1fr 1fr 1fr", gap: "14px", alignItems: "start" }}>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "50%", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Login
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Enter user name
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Enter password
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Campaign Listing
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Campaign Listing Table
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center", width: "60%", margin: "0 auto" }}
                  >
                    Campaigns
                  </div>
                  <span
                    data-ia-stub="1"
                    data-mw="stubblk"
                    style={{ display: "block", width: "1.5px", height: "12px", background: "#5BC0E8", margin: "0 auto", transformOrigin: "top" }}
                  />
                  <div data-mw="iasub" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div data-ia-sub="1" style={{ position: "relative", paddingTop: "14px", minWidth: "0" }}>
                      <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "50%", right: "-5px", height: "1.5px", background: "#5BC0E8" }} />
                      <span
                        data-ia-stub="1"
                        data-mw="stubabs"
                        style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "14px", background: "#5BC0E8", transformOrigin: "top" }}
                      />
                      <div
                        data-ia-node="1"
                        style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                      >
                        SMS Campaign
                      </div>
                      <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Campaign Type
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Basic Configuration
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px", marginTop: "10px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Sender
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Recipient
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Template
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px", marginTop: "10px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Test Campaign
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Schedule Campaign
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Launch
                        </div>
                      </div>
                    </div>
                    <div data-ia-sub="1" style={{ position: "relative", paddingTop: "14px", minWidth: "0" }}>
                      <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-5px", right: "50%", height: "1.5px", background: "#5BC0E8" }} />
                      <span
                        data-ia-stub="1"
                        data-mw="stubabs"
                        style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "14px", background: "#5BC0E8", transformOrigin: "top" }}
                      />
                      <div
                        data-ia-node="1"
                        style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                      >
                        WhatsApp
                      </div>
                      <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Campaign Type
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Basic Configuration
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px", marginTop: "10px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Sender
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Recipient
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Add Template
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px", marginTop: "10px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Test Campaign
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Schedule Campaign
                        </div>
                        <div
                          data-ia-kid="1"
                          style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                        >
                          <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                          Launch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Schedule Campaign
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      One-time Schedule
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Recurring Schedule
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Event Trigger Hook
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Audiences
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      {"Users & Segments"}
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Audience Selection
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      User Attributes Mapping
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Uploaded Lists
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Channel Reachability
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Content
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Media Library
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Templates Portal
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "-7px", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    Reporting
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Campaign Performance
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Flexible Metric Filters
                    </div>
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Channel Error Logging
                    </div>
                  </div>
                </div>
                {" "}
                <div data-ia-col="1" style={{ position: "relative", paddingTop: "22px", minWidth: "0" }}>
                  <span data-ia-bus="1" style={{ position: "absolute", top: "0", left: "-7px", right: "50%", height: "1.5px", background: "#5BC0E8" }} />
                  <span
                    data-ia-stub="1"
                    data-mw="stubabs"
                    style={{ position: "absolute", top: "0", left: "calc(50% - 0.75px)", width: "1.5px", height: "22px", background: "#5BC0E8", transformOrigin: "top" }}
                  />
                  <div
                    data-ia-node="1"
                    style={{ position: "relative", background: "#5BC0E8", color: "#12303D", fontSize: "13px", fontWeight: "700", lineHeight: "1.25", padding: "9px 10px", textAlign: "center" }}
                  >
                    {"Events & Goals"}
                  </div>
                  <div style={{ position: "relative", marginLeft: "10px", padding: "8px 0 0 13px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span data-ia-spine="1" style={{ position: "absolute", left: "0", top: "0", bottom: "15px", width: "1.5px", background: "#5BC0E8", transformOrigin: "top" }} />
                    <div
                      data-ia-kid="1"
                      style={{ position: "relative", background: "#FFFFFF", color: "#1C1C1C", fontSize: "12px", fontWeight: "500", lineHeight: "1.3", padding: "7px 9px" }}
                    >
                      <span data-ia-tick="1" style={{ position: "absolute", left: "-13px", top: "50%", width: "13px", height: "1.5px", background: "#5BC0E8" }} />
                      Custom Conversion Metrics
                    </div>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                AI
                <br />
                Prototype
              </h2>
              {" "}
            </div>
            {" "}
            <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "18px", lineHeight: "1.5" }}>
              A working prototype of the unified campaign flow, built in Figma Make. Click through it below.
            </p>
            {" "}
          </section>
          {" "}
          <div data-proto="1" data-mw="col" style={{ width: "840px", margin: "40px auto 0" }}>
            {" "}
            <div style={{ border: "2px solid #3A3A3A", background: "#0F0F0F" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                {" "}
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                {" "}
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                {" "}
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                {" "}
                <span style={{ flex: "1 1 auto", marginLeft: "10px", fontSize: "12px", color: "#9A9A9A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Unified CLM — Prompt Version 1
                </span>
                {" "}
                <a
                  href="https://www.figma.com/make/oYWaqmm7Dgtf73TVdMz5M9/Unified-CLM-Prompt-Version-1?fullscreen=1&t=qIcNDzO6gDcvTYhp-1&code-node-id=0-9"
                  target="_blank"
                  rel="noopener"
                  style={{ flex: "0 0 auto", fontSize: "12px", fontWeight: "600", color: "#5BC0E8", textDecoration: "none" }}
                  className="engage-x-hover-0"
                >
                  Open full screen ↗
                </a>
                {" "}
              </div>
              {" "}
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fmake%2FoYWaqmm7Dgtf73TVdMz5M9%2FUnified-CLM-Prompt-Version-1%3Ffullscreen%3D1%26t%3DqIcNDzO6gDcvTYhp-1%26code-node-id%3D0-9"
                title="Engage X AI prototype"
                allow="clipboard-write; fullscreen"
                allowFullScreen
                loading="lazy"
                style={{ display: "block", width: "100%", height: "min(820px, 78vh)", border: "0", background: "#0F0F0F" }}
              />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                UI
                <br />
                Design
              </h2>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div data-ui="1" style={{ position: "relative", height: "500vh", marginTop: "40px" }}>
            {" "}
            <div
              style={{ position: "sticky", top: "0", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "22px" }}
            >
              {" "}
              <div data-mw="col" style={{ width: "840px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                {" "}
                <div data-ui-note="1" style={{ minWidth: "230px", padding: "12px 16px 10px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(-2deg)" }}>
                  {" "}
                  <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Now viewing
                  </div>
                  {" "}
                  <div data-ui-label="1" style={{ marginTop: "2px", fontSize: "18px", fontWeight: "700" }}>
                    Campaign Dashboard
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  {" "}
                  <span data-ui-count="1" style={{ fontSize: "13px", fontWeight: "600", color: "#FFFFFF", letterSpacing: "0.08em" }}>
                    01 / 05
                  </span>
                  {" "}
                  <div style={{ display: "flex", gap: "6px" }}>
                    <span data-ui-dot="0" style={{ width: "22px", height: "8px", background: "#5BC0E8", transition: "width 0.3s ease, background 0.3s ease" }} />
                    <span data-ui-dot="1" style={{ width: "8px", height: "8px", background: "#555555", transition: "width 0.3s ease, background 0.3s ease" }} />
                    <span data-ui-dot="2" style={{ width: "8px", height: "8px", background: "#555555", transition: "width 0.3s ease, background 0.3s ease" }} />
                    <span data-ui-dot="3" style={{ width: "8px", height: "8px", background: "#555555", transition: "width 0.3s ease, background 0.3s ease" }} />
                    <span data-ui-dot="4" style={{ width: "8px", height: "8px", background: "#555555", transition: "width 0.3s ease, background 0.3s ease" }} />
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-mw="col uiframe" style={{ width: "840px", height: "min(525px, calc(100vh - 200px))", overflow: "hidden" }}>
                {" "}
                <div data-ui-track="1" style={{ display: "flex", height: "100%", willChange: "transform" }}>
                  {" "}
                  <div
                    data-ui-panel="0"
                    style={{ flex: "0 0 100%", height: "100%", display: "flex", flexDirection: "column", border: "2px solid #3A3A3A", background: "#0F0F0F" }}
                  >
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                      {" "}
                      <span style={{ marginLeft: "10px", fontSize: "12px", color: "#9A9A9A" }}>
                        Campaign Dashboard
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ flex: "1 1 auto", minHeight: "0", position: "relative", border: "0" }}>
                      {" "}
                      <ImageSlot id="ui-screen-1" placeholder="Drop the Campaign Dashboard screen" style={{ display: "block", width: "100%", height: "100%" }} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div
                    data-ui-panel="1"
                    style={{ flex: "0 0 100%", height: "100%", display: "flex", flexDirection: "column", border: "2px solid #3A3A3A", background: "#0F0F0F" }}
                  >
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                      {" "}
                      <span style={{ marginLeft: "10px", fontSize: "12px", color: "#9A9A9A" }}>
                        Create Campaign
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ flex: "1 1 auto", minHeight: "0", position: "relative", border: "0" }}>
                      {" "}
                      <ImageSlot id="ui-screen-2" placeholder="Drop the Create Campaign screen" style={{ display: "block", width: "100%", height: "100%" }} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div
                    data-ui-panel="2"
                    style={{ flex: "0 0 100%", height: "100%", display: "flex", flexDirection: "column", border: "2px solid #3A3A3A", background: "#0F0F0F" }}
                  >
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                      {" "}
                      <span style={{ marginLeft: "10px", fontSize: "12px", color: "#9A9A9A" }}>
                        Audience Segments
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ flex: "1 1 auto", minHeight: "0", position: "relative", border: "0" }}>
                      {" "}
                      <ImageSlot id="ui-screen-3" placeholder="Drop the Audience Segments screen" style={{ display: "block", width: "100%", height: "100%" }} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div
                    data-ui-panel="3"
                    style={{ flex: "0 0 100%", height: "100%", display: "flex", flexDirection: "column", border: "2px solid #3A3A3A", background: "#0F0F0F" }}
                  >
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                      {" "}
                      <span style={{ marginLeft: "10px", fontSize: "12px", color: "#9A9A9A" }}>
                        Schedule Campaign
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ flex: "1 1 auto", minHeight: "0", position: "relative", border: "0" }}>
                      {" "}
                      <ImageSlot id="ui-screen-4" placeholder="Drop the Schedule Campaign screen" style={{ display: "block", width: "100%", height: "100%" }} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div
                    data-ui-panel="4"
                    style={{ flex: "0 0 100%", height: "100%", display: "flex", flexDirection: "column", border: "2px solid #3A3A3A", background: "#0F0F0F" }}
                  >
                    {" "}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "10px 14px", borderBottom: "2px solid #3A3A3A" }}>
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
                      {" "}
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
                      {" "}
                      <span style={{ marginLeft: "10px", fontSize: "12px", color: "#9A9A9A" }}>
                        Campaign Reporting
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div style={{ flex: "1 1 auto", minHeight: "0", position: "relative", border: "0" }}>
                      {" "}
                      <ImageSlot id="ui-screen-5" placeholder="Drop the Campaign Reporting screen" style={{ display: "block", width: "100%", height: "100%" }} />
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ fontSize: "12px", color: "#9A9A9A", letterSpacing: "0.08em" }}>
                Scroll to move through the screens
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Illustrations
              </h2>
              {" "}
            </div>
            {" "}
            <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "18px", lineHeight: "1.5" }}>
              A set of 12 illustrations drawn for empty states, alerts and onboarding across the platform. Click any one to view it larger.
            </p>
            {" "}
            <div
              data-bento="1"
              style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gridAutoRows: "196px", gap: "12px", perspective: "1000px" }}
            >
              {" "}
              <div
                data-bt="0"
                style={{ gridColumn: "span 2", gridRow: "span 2", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/1.png")}
                  alt="Omnichannel Campaigns"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Omnichannel Campaigns
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    01
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="1"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/2.png")}
                  alt="Analytics Deep-dive"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Analytics Deep-dive
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    02
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="2"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/3.png")}
                  alt="Secure Access"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Secure Access
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    03
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="3"
                style={{ gridColumn: "span 2", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/4.png")}
                  alt="Performance Review"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Performance Review
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    04
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="4"
                style={{ gridColumn: "span 1", gridRow: "span 2", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/5.png")}
                  alt="Media Upload"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Media Upload
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    05
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="5"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/6.png")}
                  alt="API Failure"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    API Failure
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    06
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="6"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/7.png")}
                  alt="Billing Servers"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Billing Servers
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    07
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="7"
                style={{ gridColumn: "span 1", gridRow: "span 2", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/8.png")}
                  alt="In-app Chat"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    In-app Chat
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    08
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="8"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/9.png")}
                  alt="Notifications"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Notifications
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    09
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="9"
                style={{ gridColumn: "span 1", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/10.png")}
                  alt="Insights"
                  style={{ position: "absolute", inset: "6%", width: "88%", height: "88%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Insights
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    10
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="10"
                style={{ gridColumn: "span 2", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/11.png")}
                  alt="Segment Approved"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    Segment Approved
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    11
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div
                data-bt="11"
                style={{ gridColumn: "span 2", gridRow: "span 1", position: "relative", overflow: "hidden", background: "#FFFFFF", cursor: "zoom-in", transformStyle: "preserve-3d", willChange: "transform" }}
              >
                {" "}
                <div
                  data-bt-glow="1"
                  style={{ position: "absolute", inset: "0", pointerEvents: "none", opacity: "0", background: "radial-gradient(260px circle at var(--mx,50%) var(--my,50%), rgba(91,192,232,0.28), transparent 60%)" }}
                />
                {" "}
                <img
                  data-bt-img="1"
                  src={asset("/assets/engagex/ill/12.png")}
                  alt="User Lists"
                  style={{ position: "absolute", inset: "8%", width: "84%", height: "84%", objectFit: "contain", pointerEvents: "none" }}
                />
                {" "}
                <div
                  style={{ position: "absolute", left: "10px", right: "10px", bottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}
                >
                  {" "}
                  <span
                    data-bt-name="1"
                    style={{ background: "#1C1C1C", color: "#FFFFFF", fontSize: "11px", fontWeight: "600", padding: "5px 8px", opacity: "0", transform: "translateY(8px)" }}
                  >
                    User Lists
                  </span>
                  {" "}
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "#9A9A9A" }}>
                    12
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          {v.lbOpen ? (
            <>
            {" "}
            <div
              data-lb="1"
              onClick={v.closeLb}
              style={{ position: "fixed", inset: "0", zIndex: "50", background: "rgba(10,10,10,0.88)", display: "flex", alignItems: "center", justifyContent: "center", gap: "28px", cursor: "zoom-out" }}
            >
              {" "}
              <button
                onClick={v.prevLb}
                aria-label="Previous"
                style={{ width: "48px", height: "48px", border: "1.5px solid #5BC0E8", background: "transparent", color: "#FFFFFF", fontSize: "20px", cursor: "pointer" }}
                className="engage-x-hover-1"
              >
                ←
              </button>
              {" "}
              <div data-lb-card="1" onClick={v.stop} style={{ position: "relative", width: "min(560px, 70vw)", background: "#FFFFFF", cursor: "default" }}>
                {" "}
                <img src={v.lbSrc} alt={v.lbName} style={{ display: "block", width: "100%", height: "auto", aspectRatio: "332/348", objectFit: "contain" }} />
                {" "}
                <div
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "#1C1C1C", color: "#FFFFFF", border: "1.5px solid #FFFFFF" }}
                >
                  {" "}
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    {v.lbName}
                  </span>
                  {" "}
                  <span style={{ fontSize: "12px", color: "#9A9A9A" }}>
                    {v.lbCount}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <button
                onClick={v.nextLb}
                aria-label="Next"
                style={{ width: "48px", height: "48px", border: "1.5px solid #5BC0E8", background: "transparent", color: "#FFFFFF", fontSize: "20px", cursor: "pointer" }}
                className="engage-x-hover-1"
              >
                →
              </button>
              {" "}
            </div>
            {" "}
            </>
          ) : null}
          {" "}
          <section data-mw="col" style={{ width: "840px", margin: "0 auto", paddingTop: "160px" }}>
            {" "}
            <div data-title="1" style={{ position: "relative", width: "500px", margin: "0 auto", padding: "12px 0 10px", textAlign: "center" }}>
              {" "}
              <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #4AA8E0" }} />
              {" "}
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              <span
                data-handle="1"
                style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #4AA8E0", background: "#1C1C1C" }}
              />
              {" "}
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "62px", lineHeight: "1.16", fontWeight: "500" }}>
                Early Wins
              </h2>
              {" "}
            </div>
            {" "}
            <div data-wins="1" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginTop: "80px" }}>
              {" "}
              <div data-win="1" style={{ position: "relative", textAlign: "center", padding: "0 10px" }}>
                {" "}
                <div style={{ fontSize: "34px", fontWeight: "500" }}>
                  <span data-wcount="66" data-prefix="">
                    66
                  </span>
                  %
                </div>
                {" "}
                <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                  Reduction in campaign setup time
                </div>
                {" "}
              </div>
              {" "}
              <div data-win="1" style={{ position: "relative", textAlign: "center", padding: "0 10px" }}>
                <div data-win-div="1" style={{ position: "absolute", left: "0", top: "0", bottom: "0", borderLeft: "2px dashed #555555", transformOrigin: "top" }} />
                {" "}
                <div style={{ fontSize: "34px", fontWeight: "500" }}>
                  <span data-wcount="2" data-prefix="">
                    2
                  </span>
                  X
                </div>
                {" "}
                <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                  Better CTR with new channels
                </div>
                {" "}
              </div>
              {" "}
              <div data-win="1" style={{ position: "relative", textAlign: "center", padding: "0 10px" }}>
                <div data-win-div="1" style={{ position: "absolute", left: "0", top: "0", bottom: "0", borderLeft: "2px dashed #555555", transformOrigin: "top" }} />
                {" "}
                <div style={{ fontSize: "34px", fontWeight: "500" }}>
                  <span data-wcount="20" data-prefix="">
                    20
                  </span>
                  %
                </div>
                {" "}
                <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                  Reduction in marketing spends
                </div>
                {" "}
              </div>
              {" "}
              <div data-win="1" style={{ position: "relative", textAlign: "center", padding: "0 10px" }}>
                <div data-win-div="1" style={{ position: "absolute", left: "0", top: "0", bottom: "0", borderLeft: "2px dashed #555555", transformOrigin: "top" }} />
                {" "}
                <div style={{ fontSize: "34px", fontWeight: "500" }}>
                  <span data-wcount="30" data-prefix="">
                    30
                  </span>
                  {" "}Cr
                </div>
                {" "}
                <div data-mlabel="1" style={{ margin: "2px auto 0", maxWidth: "180px", fontSize: "15px", lineHeight: "1.15" }}>
                  Revenue generated
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div data-mw="col" style={{ width: "840px", margin: "80px auto 0" }}>
            {" "}
            <a
              href={href("/")}
              style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#9A9A9A" }}
              className="engage-x-hover-0"
            >
              ← Back to portfolio
            </a>
            {" "}
          </div>
          {" "}
        </div>
      </div>
      <DockNav active="work" />
    </>
  );
}
