// Ported from design-reference/design/EngageX v2.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EngageXView({ v }: { v: any }) {
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
            className="engage-x-hover-0"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M2 2l18 18M20 2 2 20" />
            </svg>
          </a>
        </div>
        {" "}
        <div style={{ maxWidth: "1512px", margin: "0 auto", position: "relative" }}>
          {" "}
          <header
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px", padding: "clamp(8px,2vw,24px) clamp(24px,8vw,120px) 0" }}
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
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", maxWidth: "500px", marginTop: "88px" }}>
              {" "}
              <div data-note="1" data-rot="-4" style={{ width: "232px", padding: "12px 12px 10px", background: "#7FD3F7", color: "#12303D", transform: "rotate(-4deg)" }}>
                {" "}
                <div style={{ fontSize: "23px", fontWeight: "700" }}>
                  Role
                </div>
                {" "}
                <div style={{ fontSize: "15px", fontWeight: "500" }}>
                  Lead Experience Designer
                </div>
                {" "}
              </div>
              {" "}
              <div data-note="1" data-rot="1.5" style={{ width: "236px", padding: "12px 12px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(1.5deg)" }}>
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
              <div data-note="1" data-rot="2.5" style={{ width: "234px", padding: "12px 12px 22px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(2.5deg)" }}>
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
            style={{ width: "840px", margin: "100px auto 0", background: "#2e2e2e", color: "#e8e8e8", borderRadius: "18px", padding: "16px 14px 14px" }}
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
            <div data-title="1" data-da-title="1" style={{ position: "relative", width: "100%", margin: "0 auto", padding: "10px 0 16px", textAlign: "center" }}>
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
              <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "80px", lineHeight: "1.16", fontWeight: "500" }}>
                Design{" "}
                <br data-mbr="1" />
                Approach
              </h2>
              {" "}
            </div>
            {" "}
            <div data-da="1" style={{ position: "relative", display: "grid", gridTemplateColumns: "320px 288px minmax(0,1fr)", marginTop: "100px", paddingLeft: "18px" }}>
              {" "}
              <div data-da-hline="1" style={{ position: "absolute", top: "23px", left: "0", width: "0", height: "2px", background: "#8E8E8E" }}>
                <div data-da-fill="1" style={{ position: "absolute", inset: "0", background: "#4FAE62", transformOrigin: "left" }} />
                <span
                  data-da-tip="1"
                  style={{ position: "absolute", top: "50%", left: "0", width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "#6FD486", boxShadow: "0 0 10px 2px rgba(111,212,134,0.7)", opacity: "0" }}
                />
              </div>
              {" "}
              <div data-da-hline="1" style={{ position: "absolute", top: "23px", left: "0", width: "0", height: "2px", background: "#8E8E8E" }}>
                <div data-da-fill="1" style={{ position: "absolute", inset: "0", background: "#4FAE62", transformOrigin: "left" }} />
                <span
                  data-da-tip="1"
                  style={{ position: "absolute", top: "50%", left: "0", width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "#6FD486", boxShadow: "0 0 10px 2px rgba(111,212,134,0.7)", opacity: "0" }}
                />
              </div>
              {" "}
              <div data-da-step="1" style={{ position: "relative" }}>
                {" "}
                <div data-da-head="1" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "max-content" }}>
                  {" "}
                  <div
                    data-da-circle="1"
                    style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#4FAE62", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "500", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                  >
                    1
                  </div>
                  {" "}
                  <div data-da-label="1" style={{ marginTop: "10px", fontSize: "18px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif" }}>
                    RESEARCH
                  </div>
                  {" "}
                  <div data-da-vline="1" style={{ display: "none", position: "relative", width: "2px", background: "#8E8E8E" }}>
                    <div data-da-fill="1" style={{ position: "absolute", inset: "0", background: "#4FAE62", transformOrigin: "top" }} />
                    <span
                      data-da-tip="1"
                      style={{ position: "absolute", left: "50%", top: "0", width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "#6FD486", boxShadow: "0 0 10px 2px rgba(111,212,134,0.7)", opacity: "0" }}
                    />
                  </div>
                  {" "}
                </div>
                {" "}
                <div
                  data-da-items="1"
                  style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", marginTop: "22px", fontSize: "16px", color: "#CFCFCF", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                >
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Personas
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Benchmarking
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Affinity Mapping
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      User Interviews
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-da-step="1" style={{ position: "relative" }}>
                {" "}
                <div data-da-head="1" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "max-content" }}>
                  {" "}
                  <div
                    data-da-circle="1"
                    style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#4FAE62", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "500", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                  >
                    2
                  </div>
                  {" "}
                  <div data-da-label="1" style={{ marginTop: "10px", fontSize: "18px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif" }}>
                    Design
                  </div>
                  {" "}
                  <div data-da-vline="1" style={{ display: "none", position: "relative", width: "2px", background: "#8E8E8E" }}>
                    <div data-da-fill="1" style={{ position: "absolute", inset: "0", background: "#4FAE62", transformOrigin: "top" }} />
                    <span
                      data-da-tip="1"
                      style={{ position: "absolute", left: "50%", top: "0", width: "8px", height: "8px", margin: "-4px 0 0 -4px", borderRadius: "50%", background: "#6FD486", boxShadow: "0 0 10px 2px rgba(111,212,134,0.7)", opacity: "0" }}
                    />
                  </div>
                  {" "}
                </div>
                {" "}
                <div
                  data-da-items="1"
                  style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", marginTop: "22px", fontSize: "16px", color: "#CFCFCF", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                >
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Group Brainstorming
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" data-ai="1" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "5px 12px 5px 7px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      AI Prototypes
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" data-ai="1" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "5px 12px 5px 7px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      AI Illustrations
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      DS Powered UI
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" data-ai="1" style={{ display: "flex", alignItems: "center", gap: "14px", padding: "5px 12px 5px 7px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      AI Interactions
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-da-step="1" style={{ position: "relative" }}>
                {" "}
                <div data-da-head="1" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "max-content" }}>
                  {" "}
                  <div
                    data-da-circle="1"
                    style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#4FAE62", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: "500", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                  >
                    3
                  </div>
                  {" "}
                  <div data-da-label="1" style={{ marginTop: "10px", fontSize: "18px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif" }}>
                    Evaluate
                  </div>
                  {" "}
                </div>
                {" "}
                <div
                  data-da-items="1"
                  style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", marginTop: "22px", fontSize: "16px", color: "#CFCFCF", fontFamily: "'Montserrat',system-ui,sans-serif" }}
                >
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Usability Testing
                    </span>
                  </div>
                  {" "}
                  <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" style={{ flex: "0 0 auto" }} aria-hidden="true">
                      <circle cx="10" cy="10" r="10" fill="#B5B5B5" />
                      <path d="M6 10.2l2.6 2.6L14 7.4" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                      Refinements
                    </span>
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
                UI
                <br />
                Design
              </h2>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <div data-shots="1" style={{ width: "min(1060px, calc(100% - 48px))", margin: "96px auto 0", display: "flex", flexDirection: "column", gap: "140px" }}>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-3"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-3deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Dashboard
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-1-dashboard.png")}
                  alt="EngageX Dashboard screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-2.5"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-2.5deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Channel Selection
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-2-channel-selection.png")}
                  alt="EngageX Channel Selection screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-3"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-3deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Campaign Creation
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-3-campaign-creation.png")}
                  alt="EngageX Campaign Creation screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-2"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-2deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Channel Onboarding
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-4-channel-onboarding.png")}
                  alt="EngageX Channel Onboarding screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-3"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-3deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Media Library
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-5-media-library.png")}
                  alt="EngageX Media Library screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
            {" "}
            <figure data-shot="1" style={{ position: "relative", margin: "0" }}>
              {" "}
              <div
                data-shot-note="1"
                data-rot="-2.5"
                style={{ position: "absolute", left: "-26px", top: "-40px", zIndex: "2", padding: "12px 30px 10px", background: "#F6DFA6", color: "#1D3B1A", fontSize: "22px", fontWeight: "700", fontFamily: "'Montserrat',system-ui,sans-serif", transform: "rotate(-2.5deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.25)" }}
              >
                Scheduler
              </div>
              {" "}
              <div data-shot-frame="1" style={{ border: "8px solid #4A4A4A", borderRadius: "22px", background: "#FFFFFF", overflow: "hidden" }}>
                {" "}
                <img
                  src={asset("/assets/engagex/ui-6-scheduler.png")}
                  alt="EngageX Scheduler screen"
                  loading="lazy"
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
            </figure>
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
            <div
              data-wins="1"
              style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,280px))", justifyContent: "center", columnGap: "clamp(24px,6vw,96px)", rowGap: "56px", marginTop: "88px", textAlign: "center" }}
            >
              {" "}
              <div data-win="1">
                <div style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                  <span data-count="66" data-prefix="">
                    66
                  </span>
                  %
                </div>
                <div data-mlabel="1" style={{ margin: "10px auto 0", maxWidth: "220px", fontSize: "15px", lineHeight: "1.35" }}>
                  Reduction in campaign setup time
                </div>
              </div>
              {" "}
              <div data-win="1">
                <div style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                  <span data-count="2" data-prefix="">
                    2
                  </span>
                  X
                </div>
                <div data-mlabel="1" style={{ margin: "10px auto 0", maxWidth: "220px", fontSize: "15px", lineHeight: "1.35" }}>
                  Better CTR with new channels
                </div>
              </div>
              {" "}
              <div data-win="1">
                <div style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                  <span data-count="20" data-prefix="">
                    20
                  </span>
                  %
                </div>
                <div data-mlabel="1" style={{ margin: "10px auto 0", maxWidth: "220px", fontSize: "15px", lineHeight: "1.35" }}>
                  Reduction in marketing spends
                </div>
              </div>
              {" "}
              <div data-win="1">
                <div style={{ fontSize: "58px", lineHeight: "1.05", fontWeight: "500" }}>
                  <span data-count="30" data-prefix="">
                    30
                  </span>
                  {" "}Cr
                </div>
                <div data-mlabel="1" style={{ margin: "10px auto 0", maxWidth: "220px", fontSize: "15px", lineHeight: "1.35" }}>
                  Revenue generated
                </div>
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
              className="engage-x-hover-2"
            >
              ← Back to portfolio
            </a>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </>
  );
}
