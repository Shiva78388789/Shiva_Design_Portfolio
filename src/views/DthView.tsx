// Ported from design-reference/design/DTH Price Simplification.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import SiteRuler from '@/components/SiteRuler';
import DthScreen from '@/components/DthScreen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DthView({ v }: { v: any }) {
  return (
    <>
      <SiteRuler />
      <div
        style={{ backgroundColor: "#1C1C1C", color: "#FFFFFF", fontFamily: "'Montserrat',system-ui,sans-serif", minHeight: "100vh", overflowX: "clip", paddingBottom: "180px" }}
      >
        {" "}
        <header
          style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(64px,8vw,110px) 20px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}
        >
          {" "}
          <div style={{ flex: "0 1 auto", minWidth: "0" }}>
            {" "}
            <h1
              aria-label="DTH Price Simplification"
              style={{ margin: "0", fontSize: "clamp(36px,4.4vw,56px)", lineHeight: "1.12", fontWeight: "700", display: "flex", flexDirection: "column" }}
            >
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.04em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  DTH Price
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.04em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Simplification
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p data-hero="sub" style={{ margin: "16px 0 0", fontSize: "clamp(15px,1.4vw,18px)", fontWeight: "500", maxWidth: "34ch", lineHeight: "1.45" }}>
              Simplifying the selection of DTH packs in the Airtel Black journey
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ position: "relative", width: "min(510px,100%)", display: "flex", flexWrap: "wrap", gap: "18px 16px", paddingTop: "4px" }}>
            {" "}
            <div data-note="1" data-rot="-3" style={{ width: "232px", padding: "12px 14px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(-3deg)" }}>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "700" }}>
                Team
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {"Product, Engineering, Growth & Me"}
              </div>
              {" "}
            </div>
            {" "}
            <div
              data-note="1"
              data-rot="4"
              style={{ width: "232px", padding: "12px 14px 18px", marginTop: "22px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(4deg)" }}
            >
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "700" }}>
                Platform
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Mobile App
              </div>
              {" "}
            </div>
            {" "}
            <div
              data-note="1"
              data-rot="-1"
              style={{ width: "232px", padding: "12px 14px 10px", marginTop: "-18px", background: "#7FD3F7", color: "#12303D", transform: "rotate(-1deg)" }}
            >
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "700" }}>
                Role
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Lead Experience Designer
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <div
          data-mw="hphones"
          style={{ maxWidth: "1000px", margin: "clamp(56px,7vw,90px) auto 0", padding: "0 20px", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "clamp(16px,2vw,28px)" }}
        >
          {" "}
          <div
            data-hphone="0"
            style={{ flex: "0 0 auto", width: "230px", height: "498px", overflow: "hidden", border: "6px solid #0F0F0F", outline: "2px solid #3A3A3A", background: "#FFFFFF", marginBottom: "40px" }}
          >
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.5813)", transformOrigin: "top left" }}>
              <DthScreen name="BOX" />
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-hphone="1"
            style={{ flex: "0 0 auto", width: "270px", height: "585px", overflow: "hidden", border: "6px solid #0F0F0F", outline: "2px solid #5BC0E8", background: "#FFFFFF" }}
          >
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.688)", transformOrigin: "top left" }}>
              <DthScreen name="BASEPACKS" />
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-hphone="2"
            style={{ flex: "0 0 auto", width: "230px", height: "498px", overflow: "hidden", border: "6px solid #0F0F0F", outline: "2px solid #3A3A3A", background: "#FFFFFF", marginBottom: "40px" }}
          >
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.5813)", transformOrigin: "top left" }}>
              <DthScreen name="ReviewOrder" />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{ maxWidth: "1080px", margin: "clamp(56px,7vw,80px) auto 0", padding: "0 20px" }}>
          {" "}
          <div data-reveal="1" style={{ background: "#F4C542", color: "#2A220A", padding: "18px 20px 16px" }}>
            {" "}
            <div style={{ fontSize: "14px", fontWeight: "700" }}>
              Confidentiality Notice
            </div>
            {" "}
            <p style={{ margin: "6px 0 0", fontSize: "13.5px", lineHeight: "1.55" }}>
              My work at Airtel is focused on highly sensitive cybersecurity and privacy initiatives. To comply with strict non-disclosure agreements, all proprietary data, live interfaces, and specific workflows have been omitted. This case study focuses exclusively on high-level strategy, organizational architecture, and publicly communicable outcomes.
            </p>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(96px,11vw,150px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Problem Statement
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "56px 0 0", fontSize: "clamp(15px,1.3vw,17px)", lineHeight: "1.6", textWrap: "pretty" }}>
            To simplify the selection of DTH packs by keeping only 2 options 350 pack and 500 pack which will help in better retention of TV channels and increase ARPU.Moreover, by taking such measures other addons such as OTT, VAS or Ala carte channels can be sold easily.
          </p>
          {" "}
          <div data-mw="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,240px))", gap: "24px", marginTop: "44px" }}>
            {" "}
            <div data-card="1" style={{ background: "#7FD3F7", color: "#12303D", padding: "16px 18px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                What
              </div>
              {" "}
              <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.35" }}>
                To improve users control and trust in creation of a pack
              </p>
              {" "}
              <ul style={{ margin: "2px 0 0", paddingLeft: "22px", fontSize: "14.5px", lineHeight: "1.35" }}>
                <li>
                  Ability to choose OTT
                </li>
                <li>
                  Ability to choose Channels
                </li>
                <li>
                  Ability to choose Language
                </li>
                <li>
                  Ability to add VAS
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ background: "#7FD3F7", color: "#12303D", padding: "16px 18px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                When
              </div>
              {" "}
              <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.35" }}>
                When customer is bundling new dth service in airtel black journey
              </p>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ background: "#7FD3F7", color: "#12303D", padding: "16px 18px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Why
              </div>
              {" "}
              <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.35" }}>
                Its an industry level change to cover the losses by the service providers + to provide an easy journey for the user to select packs
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ marginTop: "72px", background: "#F4C542", color: "#2A220A", padding: "18px 20px 16px" }}>
            {" "}
            <div style={{ fontSize: "14px", fontWeight: "700" }}>
              TRAI Guidelines
            </div>
            {" "}
            <p style={{ margin: "6px 0 0", fontSize: "13.5px", lineHeight: "1.55" }}>
              Standalone channel can only be sold at an X (fixed) price.However, the price can be increased or decreased if the channel is added in a bouquet. For eg - Star sport can only be sold at Rs.19 as a standalone channel but can be sold at Rs.16 in a bouquet such as “hindi sports channel pack”
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(96px,11vw,150px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Impact
            </h2>
            {" "}
          </div>
          {" "}
          <div
            data-impact="1"
            data-mw="impact"
            style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "40px", margin: "72px auto 0", maxWidth: "880px" }}
          >
            {" "}
            <div data-divider="1" style={{ position: "absolute", left: "50%", top: "0", bottom: "0", borderLeft: "2px dashed #6A6A6A", transformOrigin: "top" }} />
            {" "}
            <div>
              {" "}
              <div
                data-note="1"
                data-rot="6"
                style={{ width: "150px", margin: "0 auto", padding: "9px 0 8px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(6deg)" }}
              >
                Business
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "40px", columnGap: "12px", marginTop: "40px", textAlign: "center" }}>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="20" data-prefix="-">
                      -20
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto" }}>
                    Pricing and billing-related care calls
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="9" data-prefix="+">
                      +9
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto" }}>
                    Pack upgrade conversion
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="15" data-prefix="+">
                      +15
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto" }}>
                    Long term recharge adoption
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="6" data-prefix="-">
                      -6
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto" }}>
                    Churn within 60 days of recharge
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <div
                data-note="1"
                data-rot="-2"
                style={{ width: "150px", margin: "0 auto", padding: "9px 0 8px", background: "#F6DFA6", color: "#3D3010", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(-2deg)" }}
              >
                UX
              </div>
              {" "}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: "40px", columnGap: "12px", marginTop: "40px", textAlign: "center" }}>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="80" data-prefix="+">
                      +80
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6" }}>
                    Task Success
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="3" data-prefix="">
                      3
                    </span>
                    {" "}min
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "16ch", marginLeft: "auto", marginRight: "auto" }}>
                    Time to change/ Upgrade pack
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="25" data-prefix="-">
                      -25
                    </span>
                    %
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6", maxWidth: "16ch", marginLeft: "auto", marginRight: "auto" }}>
                    Drop off in pack selection
                  </div>
                </div>
                {" "}
                <div data-metric="1">
                  <div style={{ fontSize: "clamp(40px,4vw,54px)", lineHeight: "1.05", fontWeight: "500" }}>
                    <span data-count="8" data-prefix="">
                      8
                    </span>
                  </div>
                  <div style={{ marginTop: "6px", fontSize: "13px", lineHeight: "1.35", color: "#D6D6D6" }}>
                    Customer effort score
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
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Design Approach
            </h2>
            {" "}
          </div>
          {" "}
          <div data-da="1" data-mw="da" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", margin: "72px auto 0", maxWidth: "860px" }}>
            {" "}
            <div data-da-step="1" style={{ position: "relative" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  data-da-circle="1"
                  style={{ flex: "0 0 auto", width: "40px", height: "40px", borderRadius: "50%", background: "#4FAE62", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "500" }}
                >
                  1
                </div>
                <span data-da-line="1" style={{ flex: "1 1 auto", height: "1.5px", background: "linear-gradient(90deg,#4FAE62 50%,#8E8E8E 50%)", transformOrigin: "left" }} />
              </div>
              {" "}
              <div style={{ marginTop: "10px", fontSize: "15px", fontWeight: "700" }}>
                RESEARCH
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px", fontSize: "14.5px", color: "#CFCFCF" }}>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Personas
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Benchmarking
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Affinity Mapping
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  User Interviews
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-da-step="1" style={{ position: "relative" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  data-da-circle="1"
                  style={{ flex: "0 0 auto", width: "40px", height: "40px", borderRadius: "50%", background: "#4FAE62", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "500" }}
                >
                  2
                </div>
                <span data-da-line="1" style={{ flex: "1 1 auto", height: "1.5px", background: "#8E8E8E", transformOrigin: "left" }} />
              </div>
              {" "}
              <div style={{ marginTop: "10px", fontSize: "15px", fontWeight: "700" }}>
                Design
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px", fontSize: "14.5px", color: "#CFCFCF" }}>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Group Brainstorming
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Prototypes
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  DS Powered UI
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Interactions
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-da-step="1" style={{ position: "relative" }}>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  data-da-circle="1"
                  style={{ flex: "0 0 auto", width: "40px", height: "40px", borderRadius: "50%", background: "#4FAE62", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: "500" }}
                >
                  3
                </div>
              </div>
              {" "}
              <div style={{ marginTop: "10px", fontSize: "15px", fontWeight: "700" }}>
                Evaluate
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "14px", fontSize: "14.5px", color: "#CFCFCF" }}>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Usability Testing
                </div>
                {" "}
                <div data-da-li="1" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
                    <circle cx="10" cy="10" r="10" fill="#9A9A9A" />
                    <path d="M6 10.4l2.6 2.6L14 7.6" fill="none" stroke="#1C1C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Refinements
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
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Personas
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{ maxWidth: "840px", margin: "72px auto 0", display: "flex", flexDirection: "column", gap: "40px" }}>
            {" "}
            <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "28px 24px 30px" }}>
              {" "}
              <div data-mw="persona-head" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                {" "}
                <img
                  src={asset("/assets/dth/persona-1.png")}
                  alt="Parminder Singh"
                  style={{ flex: "0 0 auto", width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                />
                {" "}
                <div>
                  {" "}
                  <div style={{ fontSize: "16px", fontWeight: "700" }}>
                    Parminder Singh - Age 56
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px", fontSize: "14px", color: "#E6E6E6" }}>
                    “Pack ₹299 ka bola tha, kat ₹380 kyun gaye?”
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px", fontSize: "14px", color: "#D6D6D6" }}>
                    Retired bank clerk in Kanpur. Hindi-first. Has had a DTH connection for 12 years.
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "26px", fontSize: "15px", fontWeight: "700" }}>
                Goals
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "#D6D6D6" }}>
                A single, final monthly amount in plain language, and a reminder before balance runs out.
              </p>
              {" "}
              <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                Pain Points
              </div>
              {" "}
              <ul style={{ margin: "8px 0 0", paddingLeft: "22px", fontSize: "14px", lineHeight: "1.55", color: "#D6D6D6" }}>
                <li>
                  Doesn't understand NCF or why ₹299 becomes ₹380 after taxes.
                </li>
                <li>
                  Fears losing channels if he touches anything.
                </li>
                <li>
                  Calls customer care whenever the amount changes
                </li>
              </ul>
              {" "}
              <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                Behaviour
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "#D6D6D6" }}>
                Recharges through a local retailer or asks his son to do it on the app. Rarely changes his pack.
              </p>
              {" "}
            </article>
            {" "}
            <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "28px 24px 30px" }}>
              {" "}
              <div data-mw="persona-head" style={{ display: "flex", alignItems: "center", gap: "28px" }}>
                {" "}
                <img
                  src={asset("/assets/dth/persona-2.png")}
                  alt="Neha Kapoor"
                  style={{ flex: "0 0 auto", width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", display: "block" }}
                />
                {" "}
                <div>
                  {" "}
                  <div style={{ fontSize: "16px", fontWeight: "700" }}>
                    Neha Kapoor - Age 34
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px", fontSize: "14px", color: "#E6E6E6" }}>
                    “I just want to know if I'm overpaying, without doing math”
                  </div>
                  {" "}
                  <div style={{ marginTop: "8px", fontSize: "14px", color: "#D6D6D6" }}>
                    Product manager in Pune who manages the TV for her family of four.
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ marginTop: "26px", fontSize: "15px", fontWeight: "700" }}>
                Goals
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.5", color: "#D6D6D6" }}>
                A quick way to build or compare packs with a clear price breakdown, plus savings on long-term recharge.
              </p>
              {" "}
              <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                Pain Points
              </div>
              {" "}
              <ul style={{ margin: "8px 0 0", paddingLeft: "22px", fontSize: "14px", lineHeight: "1.55", color: "#D6D6D6" }}>
                <li>
                  Can't easily see what her family actually watches.
                </li>
                <li>
                  HD channels eat into the channel count confusingly.
                </li>
                <li>
                  Building a custom pack is tedious.
                </li>
              </ul>
              {" "}
              <div style={{ marginTop: "22px", fontSize: "15px", fontWeight: "700" }}>
                Key Platform Need
              </div>
              {" "}
              <ul style={{ margin: "8px 0 0", paddingLeft: "22px", fontSize: "14px", lineHeight: "1.55", color: "#D6D6D6" }}>
                <li>
                  Uses the app.
                </li>
                <li>
                  Compares DTH against OTT bundles.
                </li>
                <li>
                  Will pay more for HD and sports, but hates paying for channels nobody watches.
                </li>
              </ul>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Benchmarking
            </h2>
            {" "}
          </div>
          {" "}
          <div
            data-mw="bench"
            style={{ display: "grid", gridTemplateColumns: "minmax(0,520px) minmax(0,420px)", justifyContent: "space-between", gap: "48px", margin: "80px auto 0", maxWidth: "1040px" }}
          >
            {" "}
            <div data-bench="1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 24px", alignItems: "start" }}>
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-1.png")}
                alt="Sun Direct – subscription plans"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-2.png")}
                alt="Sun Direct – pack detail"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-3.png")}
                alt="Dish TV – curated combos"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-4.png")}
                alt="Dish TV – channel filter"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-5.png")}
                alt="Tata Play – binge combos"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
              <img
                data-bshot="1"
                src={asset("/assets/dth/bench-6.png")}
                alt="Tata Play – combo channel list"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              {" "}
            </div>
            {" "}
            <div data-mw="notes" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
              {" "}
              <div data-bnote="1" style={{ width: "min(242px,100%)", minHeight: "180px", padding: "16px 18px", background: "#F6DFA6", color: "#2A220A" }}>
                {" "}
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Logos
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.4" }}>
                  lend recognition value to TV channels in a list
                </p>
                {" "}
              </div>
              {" "}
              <div data-bnote="1" style={{ width: "min(242px,100%)", minHeight: "180px", padding: "16px 18px", background: "#F6DFA6", color: "#2A220A" }}>
                {" "}
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Size
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.4" }}>
                  Size of content and other elements in screen is also of significance
                </p>
                {" "}
              </div>
              {" "}
              <div data-bnote="1" style={{ width: "min(242px,100%)", minHeight: "180px", padding: "16px 18px", background: "#F6DFA6", color: "#2A220A" }}>
                {" "}
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Grouping
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.4" }}>
                  of channels in relevant genres - helps block unnecessary info while scanning
                </p>
                {" "}
              </div>
              {" "}
              <div data-bnote="1" style={{ width: "min(242px,100%)", minHeight: "180px", padding: "16px 18px", background: "#F6DFA6", color: "#2A220A" }}>
                {" "}
                <div style={{ fontSize: "14px", fontWeight: "700" }}>
                  Flexibility and control
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "14px", lineHeight: "1.4" }}>
                  required in scanning the list (search/filter)
                </p>
                {" "}
              </div>
              {" "}
              <div data-bnote="1" data-frame-note="1" style={{ marginTop: "12px", minHeight: "320px", padding: "28px 28px 32px", background: "#A8E6BF", color: "#15361F" }}>
                {" "}
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "500", lineHeight: "1.2" }}>
                  Frame
                  <br />
                  “FREEDOM”
                </div>
                {" "}
                <ul style={{ margin: "22px 0 0", paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.45" }}>
                  <li>
                    Multiple packs to choose from
                  </li>
                  <li>
                    Modify as you like
                  </li>
                </ul>
                {" "}
                <ul style={{ margin: "18px 0 0", paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.45" }}>
                  <li>
                    Filters
                  </li>
                  <li>
                    Multiple selection
                  </li>
                  <li>
                    Compare option
                  </li>
                </ul>
                {" "}
              </div>
              {" "}
              <div data-bnote="1" data-frame-note="1" style={{ minHeight: "320px", padding: "28px 28px 32px", background: "#A8E6BF", color: "#15361F" }}>
                {" "}
                <div style={{ textAlign: "center", fontSize: "24px", fontWeight: "500", lineHeight: "1.2" }}>
                  Frame
                  <br />
                  “EASE”
                </div>
                {" "}
                <ul style={{ margin: "22px 0 0", paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.45" }}>
                  <li>
                    easy to buy
                  </li>
                  <li>
                    easy to modify
                  </li>
                  <li>
                    already curated for you by us
                  </li>
                </ul>
                {" "}
                <ul style={{ margin: "18px 0 0", paddingLeft: "20px", fontSize: "14.5px", lineHeight: "1.45" }}>
                  <li>
                    easily scannable list
                  </li>
                  <li>
                    easy to change selection
                  </li>
                  <li>
                    easy to place order directly
                  </li>
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
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Component
              <br />
              Exploration
            </h2>
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-4"
            style={{ width: "150px", margin: "96px auto 0", padding: "9px 0 8px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(-4deg)" }}
          >
            Version 1
          </div>
          {" "}
          <div
            data-mw="comp"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", alignItems: "start", maxWidth: "1040px", margin: "40px auto 0" }}
          >
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <img
                data-comp="1"
                src={asset("/assets/dth/v1-1.png")}
                alt="Version 1 card – compact with checkbox"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <img
                data-comp="1"
                src={asset("/assets/dth/v1-2.png")}
                alt="Version 1 card – with channel logos"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <img
                data-comp="1"
                src={asset("/assets/dth/v1-3.png")}
                alt="Version 1 card – thumbnail right"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
              <img
                data-comp="1"
                src={asset("/assets/dth/v1-4.png")}
                alt="Version 1 card – thumbnail left"
                loading="lazy"
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v1-5.png")}
              alt="Version 1 card – large banner"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-4"
            style={{ width: "150px", margin: "88px auto 0", padding: "9px 0 8px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(-4deg)" }}
          >
            Version 2
          </div>
          {" "}
          <div
            data-mw="comp"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", alignItems: "start", maxWidth: "1040px", margin: "40px auto 0" }}
          >
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v2-1.png")}
              alt="Version 2 – Amazon Prime banner"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v2-2.png")}
              alt="Version 2 – Disney + Hotstar banner"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v2-3.png")}
              alt="Version 2 – Xstream Premium banner"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-4"
            style={{ width: "150px", margin: "88px auto 0", padding: "9px 0 8px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(-4deg)" }}
          >
            Version 3
          </div>
          {" "}
          <div
            data-mw="comp"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", alignItems: "start", maxWidth: "1040px", margin: "40px auto 0" }}
          >
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v3-1.png")}
              alt="Version 3 card – thumbnail right"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v3-2.png")}
              alt="Version 3 card – most raised pack"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/v3-3.png")}
              alt="Version 3 card – compact row"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-4"
            style={{ width: "150px", margin: "88px auto 0", padding: "9px 0 8px", background: "#A8E6BF", color: "#15361F", textAlign: "center", fontSize: "14px", fontWeight: "700", transform: "rotate(-4deg)" }}
          >
            Bottom Sheet
          </div>
          {" "}
          <div
            data-mw="comp"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "20px", alignItems: "start", maxWidth: "1040px", margin: "40px auto 0" }}
          >
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/bs-1.png")}
              alt="Bottom sheet – Base Pack 1"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/bs-2.png")}
              alt="Bottom sheet – Amazon Prime"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
            <img
              data-comp="1"
              src={asset("/assets/dth/bs-3.png")}
              alt="Bottom sheet – Vedantu Masterclass"
              loading="lazy"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Final Screens
            </h2>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <div
          data-mw="finals"
          style={{ maxWidth: "1080px", margin: "64px auto 0", padding: "0 20px", display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "20px" }}
        >
          {" "}
          <div data-final="1" style={{ flex: "0 0 auto", width: "330px", height: "715px", overflow: "hidden", background: "#FFFFFF" }}>
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.88)", transformOrigin: "top left" }}>
              <DthScreen name="BOX" />
            </div>
            {" "}
          </div>
          {" "}
          <div data-final="1" style={{ flex: "0 0 auto", width: "330px", height: "715px", overflow: "hidden", background: "#FFFFFF" }}>
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.88)", transformOrigin: "top left" }}>
              <DthScreen name="BASEPACKS" />
            </div>
            {" "}
          </div>
          {" "}
          <div data-final="1" style={{ flex: "0 0 auto", width: "330px", height: "715px", overflow: "hidden", background: "#FFFFFF" }}>
            {" "}
            <div style={{ width: "375px", height: "812px", transform: "scale(0.88)", transformOrigin: "top left" }}>
              <DthScreen name="ReviewOrder" />
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <section style={{ maxWidth: "1080px", margin: "0 auto", padding: "clamp(110px,12vw,170px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "fit-content", maxWidth: "100%", margin: "0 auto", padding: "12px 28px 10px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,5vw,58px)", lineHeight: "1.16", fontWeight: "500" }}>
              Early Metrics
            </h2>
            {" "}
          </div>
          {" "}
          <div
            data-metrics="1"
            style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,220px))", justifyContent: "center", columnGap: "clamp(24px,5vw,72px)", rowGap: "56px", margin: "88px auto 0", textAlign: "center" }}
          >
            {" "}
            <div data-metric="1">
              <div style={{ fontSize: "clamp(44px,5vw,64px)", lineHeight: "1.05", fontWeight: "500" }}>
                <span data-count="12" data-prefix="-">
                  -12
                </span>
                %
              </div>
              <div style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.4", color: "#D6D6D6" }}>
                Pricing and billing-related care calls
              </div>
            </div>
            {" "}
            <div data-metric="1">
              <div style={{ fontSize: "clamp(44px,5vw,64px)", lineHeight: "1.05", fontWeight: "500" }}>
                <span data-count="4" data-prefix="+">
                  +4
                </span>
                %
              </div>
              <div style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.4", color: "#D6D6D6" }}>
                Pack upgrade conversion
              </div>
            </div>
            {" "}
            <div data-metric="1">
              <div style={{ fontSize: "clamp(44px,5vw,64px)", lineHeight: "1.05", fontWeight: "500" }}>
                <span data-count="7" data-prefix="+">
                  +7
                </span>
                %
              </div>
              <div style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.4", color: "#D6D6D6" }}>
                Long term recharge adoption
              </div>
            </div>
            {" "}
            <div data-metric="1">
              <div style={{ fontSize: "clamp(44px,5vw,64px)", lineHeight: "1.05", fontWeight: "500" }}>
                <span data-count="4" data-prefix="">
                  4
                </span>
                %
              </div>
              <div style={{ marginTop: "8px", fontSize: "14px", lineHeight: "1.4", color: "#D6D6D6" }}>
                Churn within 60 days of recharge
              </div>
            </div>
            {" "}
          </div>
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
              href={href("/work/engage-x/")}
              data-mw="next"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "2px solid #3A3A3A", background: "#141414", textDecoration: "none", color: "#FFFFFF" }}
              className="dth-hover-0"
            >
              {" "}
              <div
                data-mw="nextimg"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "260px", borderRight: "2px solid #3A3A3A", padding: "24px", overflow: "hidden" }}
              >
                {" "}
                <img
                  data-nextimg="1"
                  src={asset("/assets/engagex/laptop.png")}
                  alt="Engage X"
                  style={{ display: "block", width: "100%", maxWidth: "340px", height: "auto" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "14px", padding: "clamp(28px,4vw,44px)" }}>
                {" "}
                <h3 style={{ margin: "0", fontSize: "clamp(30px,4vw,44px)", fontWeight: "700", color: "#FFFFFF" }}>
                  Engage X
                </h3>
                {" "}
                <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#D6D6D6" }}>
                  A Unified Campaign Lifecycle Manager
                </p>
                {" "}
                <span
                  data-nextcta="1"
                  style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "6px", background: "#5BC0E8", color: "#10384A", padding: "12px 18px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}
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
              className="dth-hover-1"
            >
              ← Back to portfolio
            </a>
            {" "}
          </div>
          {" "}
        </section>
      </div>
      <DockNav active="work" />
    </>
  );
}
