// Ported from design-reference/design/DTH Price Simplification.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import DthScreen from '@/components/DthScreen';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DthView({ v }: { v: any }) {
  return (
    <>
      <div
        style={{ backgroundColor: "#1C1C1C", backgroundImage: "radial-gradient(circle, rgba(243,242,242,0.18) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px", color: "#FFFFFF", fontFamily: "'Montserrat',system-ui,sans-serif", minHeight: "100vh", overflowX: "clip", paddingBottom: "180px" }}
      >
        {" "}
        <header
          style={{ maxWidth: "1272px", margin: "0 auto", padding: "clamp(64px,9vw,120px) 20px 0", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "40px" }}
        >
          {" "}
          <div style={{ flex: "0 1 auto", minWidth: "0" }}>
            {" "}
            <div data-hero="kicker" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "0.16em", textTransform: "uppercase", color: "#5BC0E8" }}>
              Airtel · 2022
            </div>
            {" "}
            <h1
              aria-label="DTH Price Simplification"
              style={{ margin: "14px 0 0", fontSize: "clamp(40px,7vw,88px)", lineHeight: "1.04", fontWeight: "700", display: "flex", flexWrap: "wrap", columnGap: "0.26em" }}
            >
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  DTH
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Price
                </span>
              </span>
              {" "}
              <span style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  Simplification
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p data-hero="sub" style={{ margin: "18px 0 0", fontSize: "clamp(16px,1.6vw,20px)", fontWeight: "500", maxWidth: "34ch", lineHeight: "1.4" }}>
              Simplifying the selection of DTH packs in the Airtel Black journey
            </p>
            {" "}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "22px" }}>
              {" "}
              <span data-hero="chip" style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                2 Sprints
              </span>
              {" "}
              <span data-hero="chip" style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                App / SAFO
              </span>
              {" "}
              <span data-hero="chip" style={{ background: "#5BC0E8", color: "#10384A", fontSize: "11px", fontWeight: "600", padding: "6px 9px" }}>
                Airtel Black
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
                Lead Experience Designer
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="2" style={{ width: "230px", padding: "12px 12px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(2deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Team
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                {"Product, Engineering, Growth & Me"}
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="1.5" style={{ width: "230px", padding: "12px 12px 10px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(1.5deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Platform
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Mobile app
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
          style={{ maxWidth: "1000px", margin: "clamp(64px,8vw,110px) auto 0", padding: "0 20px", display: "flex", justifyContent: "center", alignItems: "flex-end", gap: "clamp(16px,3vw,40px)" }}
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
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Problem
              <br />
              Statement
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(17px,1.8vw,20px)", fontWeight: "500", lineHeight: "1.55" }}>
            To simplify the selection of DTH packs by keeping only 2 options 350 pack and 500 pack which will help in better retention of TV channels and increase ARPU.
          </p>
          {" "}
          <p data-reveal="1" style={{ margin: "16px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6", color: "#D6D6D6" }}>
            Moreover, by taking such measures other addons such as OTT, VAS or Ala carte channels can be sold easily.
          </p>
          {" "}
          <div data-mw="three" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: "16px", marginTop: "44px" }}>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.14em", color: "#5BC0E8" }}>
                WHAT
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "15px", fontWeight: "600", lineHeight: "1.45" }}>
                To improve users control and trust in creation of a pack
              </p>
              {" "}
              <ul style={{ margin: "12px 0 0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.7", color: "#D6D6D6" }}>
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
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.14em", color: "#5BC0E8" }}>
                WHEN
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
                When customer is bundling new dth service in airtel black journey
              </p>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.14em", color: "#5BC0E8" }}>
                WHY
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5", color: "#D6D6D6" }}>
                Its an industry level change to cover the losses by the service providers + to provide an easy journey for the user to select packs
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-4"
            style={{ width: "190px", margin: "64px 0 0 -8px", padding: "14px 0 12px", background: "#F6DFA6", color: "#3D3010", textAlign: "center", fontSize: "15px", fontWeight: "700", transform: "rotate(-4deg)" }}
          >
            Requirement
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "22px 0 0", fontSize: "17px", fontWeight: "600" }}>
            Number of packs to choose from
          </p>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "18px" }}>
            {" "}
            <div data-pack="1" style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "24px 22px" }}>
              {" "}
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "700" }}>
                Rs{" "}
                <span data-count="350">
                  350
                </span>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#555555" }}>
                  + GST
                </span>
              </div>
              {" "}
              <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5" }}>
                Offering all SD channels + Select HD (High definition) channels
              </p>
              {" "}
            </div>
            {" "}
            <div data-pack="1" style={{ background: "#5BC0E8", color: "#10384A", padding: "24px 22px" }}>
              {" "}
              <div style={{ fontSize: "clamp(30px,3.6vw,40px)", fontWeight: "700" }}>
                Rs{" "}
                <span data-count="500">
                  500
                </span>
                {" "}
                <span style={{ fontSize: "15px", fontWeight: "600" }}>
                  + GST
                </span>
              </div>
              {" "}
              <p style={{ margin: "10px 0 0", fontSize: "14.5px", lineHeight: "1.5" }}>
                Offering all HD channels for a particular language/region
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ marginTop: "44px", background: "#F4C542", color: "#2A220A", padding: "18px 18px 16px" }}>
            {" "}
            <div style={{ fontSize: "13px", fontWeight: "700" }}>
              TRAI guidelines
            </div>
            {" "}
            <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.55" }}>
              Standalone channel can only be sold at an X (fixed) price.
              <br />
              However, the price can be increased or decreased if the channel is added in a bouquet.
              <br />
              For eg - Star sport can only be sold at Rs.19 as a standalone channel but can be sold at Rs.16 in a bouquet such as “hindi sports channel pack”
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Assumptions
            </h2>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "56px" }}>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px" }}>
              {" "}
              <div
                data-note="1"
                data-rot="2"
                style={{ display: "inline-block", padding: "8px 12px", background: "#A8E6BF", color: "#15361F", fontSize: "14px", fontWeight: "700", transform: "rotate(2deg)" }}
              >
                Business Assumptions
              </div>
              {" "}
              <p style={{ margin: "18px 0 0", fontSize: "16px", lineHeight: "1.55" }}>
                Language based pack selection will be easier to sell to the customer along with other services
              </p>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px" }}>
              {" "}
              <div
                data-note="1"
                data-rot="-2"
                style={{ display: "inline-block", padding: "8px 12px", background: "#7FD3F7", color: "#12303D", fontSize: "14px", fontWeight: "700", transform: "rotate(-2deg)" }}
              >
                User Hypothesis/assumptions
              </div>
              {" "}
              <p style={{ margin: "18px 0 0", fontSize: "16px", lineHeight: "1.55" }}>
                It has been assumed that user like to watch channels based on one language and the local language channels can be added independently in the pack in a form ala carte.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ marginTop: "36px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9A9A9A" }}>
            9 languages
          </div>
          {" "}
          <div data-langs="1" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "14px" }}>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Hindi
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Bengali
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Gujarati
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Kannada
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Malyalam
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Marathi
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Oriya
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Tamil
            </span>
            {" "}
            <span data-lang="1" style={{ border: "1.5px solid #5BC0E8", padding: "8px 14px", fontSize: "14px", fontWeight: "600" }}>
              Telugu
            </span>
            {" "}
          </div>
          {" "}
          <ul
            data-reveal="1"
            style={{ margin: "36px 0 0", paddingLeft: "20px", fontSize: "clamp(15px,1.5vw,17px)", lineHeight: "1.65", display: "flex", flexDirection: "column", gap: "6px", color: "#D6D6D6" }}
          >
            {" "}
            <li>
              flexibity of ala carte of pack modification
            </li>
            {" "}
            <li>
              User will get freedom of choice to select channels as per the requirement
            </li>
            {" "}
            <li>
              Language selection will help curate better packs for the customer and reduce coglode by reducing the seletion to 2 packs
            </li>
            {" "}
            <li>
              Lack of value in packs /random packs
            </li>
            {" "}
            <li>
              Nomenclature and the tone of message is very direct - assuming he/she understands it.
            </li>
            {" "}
          </ul>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Research
            </h2>
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="-3"
            style={{ display: "inline-block", marginTop: "56px", padding: "10px 14px", background: "#7FD3F7", color: "#12303D", fontSize: "14px", fontWeight: "700", transform: "rotate(-3deg)" }}
          >
            Part 1
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "16px 0 0", fontSize: "clamp(20px,2.2vw,24px)", fontWeight: "700" }}>
            UX Audit with Heuristic analysis of listing page
          </h3>
          {" "}
          <div data-heur="1" data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
            {" "}
            {((v.heuristics ?? []) as any[]).map((h: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div data-hcard="1" style={{ display: "flex", gap: "14px", alignItems: "flex-start", border: "2px dashed #6A6A6A", padding: "16px 16px" }}>
                  {" "}
                  <span
                    data-prio={h?.p}
                    style={{ flex: "0 0 auto", minWidth: "34px", textAlign: "center", padding: "4px 6px", fontSize: "11px", fontWeight: "800", background: "#5BC0E8", color: "#10384A" }}
                  >
                    {h?.p}
                  </span>
                  {" "}
                  <span style={{ fontSize: "14.5px", lineHeight: "1.5" }}>
                    {h?.t}
                  </span>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div
            data-note="1"
            data-rot="2"
            style={{ display: "inline-block", marginTop: "64px", padding: "10px 14px", background: "#A8E6BF", color: "#15361F", fontSize: "14px", fontWeight: "700", transform: "rotate(2deg)" }}
          >
            Part 2
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "16px 0 0", fontSize: "clamp(20px,2.2vw,24px)", fontWeight: "700" }}>
            Zomato order journey UX Audit
          </h3>
          {" "}
          <div data-zom="1" data-mw="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginTop: "24px" }}>
            {" "}
            {((v.zomato ?? []) as any[]).map((z: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div data-zcard="1" style={{ background: "#262626", padding: "18px 16px", minHeight: "120px" }}>
                  {" "}
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#5BC0E8" }}>
                    {z?.h}
                  </div>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "13.5px", lineHeight: "1.5", color: "#D6D6D6" }}>
                    {z?.t}
                  </p>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Card
              <br />
              Exploration
            </h2>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px", marginTop: "52px" }}>
            {" "}
            <div>
              {" "}
              <p data-reveal="1" style={{ margin: "0", fontSize: "17px", fontWeight: "600", lineHeight: "1.5" }}>
                Goal to decide the most scalable card.
              </p>
              {" "}
              <div data-reveal="1" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                {" "}
                <span style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  Base Pack
                </span>
                {" "}
                <span style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  Language Pack
                </span>
                {" "}
                <span style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  OTT
                </span>
                {" "}
                <span style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  VAS
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <p data-reveal="1" style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D6D6D6" }}>
                From our benchmarking and research we have explored a component keeping the values of
              </p>
              {" "}
              <div data-reveal="1" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                {" "}
                <span style={{ border: "1.5px solid #5BC0E8", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  Scalability
                </span>
                {" "}
                <span style={{ border: "1.5px solid #5BC0E8", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  visceral stimulation
                </span>
                {" "}
                <span style={{ border: "1.5px solid #5BC0E8", padding: "6px 10px", fontSize: "12px", fontWeight: "700" }}>
                  Provide control
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-reveal="1" style={{ marginTop: "44px", border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
            {" "}
            <div data-mw="copts" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {" "}
              {((v.cards ?? []) as any[]).map((c: any, i0: number) => (
                <Fragment key={i0}>
                  {" "}
                  <button
                    type="button"
                    data-ci={c?.i}
                    data-copt={c?.on}
                    onClick={v.pickCard}
                    style={{ appearance: "none", flex: "0 0 auto", cursor: "pointer", background: "transparent", border: "1.5px solid #6A6A6A", color: "#FFFFFF", padding: "9px 14px", fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "600" }}
                  >
                    Option{" "}
                    {c?.n}
                  </button>
                  {" "}
                </Fragment>
              ))}
              {" "}
            </div>
            {" "}
            <div data-cbody="1" data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "20px" }}>
              {" "}
              <div style={{ background: "#262626", padding: "18px 16px" }}>
                {" "}
                <div style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.14em", color: "#A8E6BF" }}>
                  PROS
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5" }}>
                  {v.cardPro}
                </p>
                {" "}
              </div>
              {" "}
              <div style={{ background: "#262626", padding: "18px 16px" }}>
                {" "}
                <div style={{ fontSize: "12px", fontWeight: "800", letterSpacing: "0.14em", color: "#FF8A80" }}>
                  CONS
                </div>
                {" "}
                <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.5" }}>
                  {v.cardCon}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "28px" }}>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "800", color: "#5BC0E8" }}>
                Why?
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14.5px", lineHeight: "1.7", color: "#D6D6D6" }}>
                <li>
                  {"build recognition > leading to faster scanning"}
                </li>
                <li>
                  give user control to take faster decisions
                </li>
                <li>
                  reduce design/engg effort
                </li>
                <li>
                  tackle any kind of buisness requirement
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "800", color: "#5BC0E8" }}>
                Why?
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14.5px", lineHeight: "1.7", color: "#D6D6D6" }}>
                <li>
                  give more value to the savings aspect of the bundle
                </li>
                <li>
                  drive OTT recognition viscerally associatign the logo with the top content to create a user need (esteem needs)
                </li>
              </ul>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Final
              <br />
              Design
            </h2>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <div data-ui="1" style={{ position: "relative", height: "700vh", marginTop: "24px" }}>
          {" "}
          <div
            style={{ position: "sticky", top: "0", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "18px", padding: "0 20px" }}
          >
            {" "}
            <div style={{ width: "min(840px,100%)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
              {" "}
              <div data-ui-note="1" style={{ minWidth: "0", padding: "12px 16px 10px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(-2deg)" }}>
                {" "}
                <div style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Now viewing
                </div>
                {" "}
                <div data-ui-label="1" style={{ marginTop: "2px", fontSize: "18px", fontWeight: "700" }}>
                  Select a DTH box
                </div>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {" "}
                <span data-ui-count="1" style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em" }}>
                  01 / 07
                </span>
                {" "}
                <div style={{ display: "flex", gap: "5px" }}>
                  {" "}
                  <span data-ui-dot="0" style={{ width: "22px", height: "8px", background: "#5BC0E8", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="1" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="2" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="3" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="4" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="5" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                  <span data-ui-dot="6" style={{ width: "8px", height: "8px", background: "#555555", transition: "width .3s ease, background .3s ease" }} />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div
              data-mw="uiframe"
              style={{ width: "min(840px,100%)", height: "min(620px, calc(100vh - 170px))", overflow: "hidden", border: "2px dashed #6A6A6A", background: "#141414" }}
            >
              {" "}
              <div data-ui-track="1" style={{ display: "flex", height: "100%", willChange: "transform" }}>
                {" "}
                {((v.screens ?? []) as any[]).map((s: any, i0: number) => (
                  <Fragment key={i0}>
                    {" "}
                    <div
                      data-mw="panel"
                      style={{ flex: "0 0 100%", height: "100%", display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "32px", padding: "20px clamp(20px,4vw,48px)" }}
                    >
                      {" "}
                      <div>
                        {" "}
                        <div style={{ fontSize: "13px", fontWeight: "800", letterSpacing: "0.14em", color: "#5BC0E8" }}>
                          {s?.step}
                        </div>
                        {" "}
                        <div style={{ marginTop: "8px", fontSize: "clamp(22px,2.8vw,32px)", fontWeight: "700", lineHeight: "1.15" }}>
                          {s?.title}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <div
                        data-mw="pwrap"
                        style={{ width: "260px", height: "563px", overflow: "hidden", border: "6px solid #0F0F0F", outline: "2px solid #3A3A3A", background: "#FFFFFF", justifySelf: "center" }}
                      >
                        {" "}
                        <div data-mw="pscale" style={{ width: "375px", height: "812px", transform: "scale(0.661)", transformOrigin: "top left" }}>
                          {" "}
                          <DthScreen name={s?.c} />
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </Fragment>
                ))}
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
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(80px,10vw,130px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "16px 0 12px", textAlign: "center" }}>
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
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Feedback
              <br />
              Rounds
            </h2>
            {" "}
          </div>
          {" "}
          <p data-reveal="1" style={{ margin: "52px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            Product/engineering/design and business feedback
          </p>
          {" "}
          <div data-fbwrap="1" style={{ position: "relative", marginTop: "28px", paddingLeft: "28px" }}>
            {" "}
            <span
              data-fbline="1"
              aria-hidden="true"
              style={{ position: "absolute", left: "5px", top: "8px", bottom: "8px", width: "2px", background: "#3A3A3A", transformOrigin: "top" }}
            />
            {" "}
            {((v.feedback ?? []) as any[]).map((f: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <div data-fbrow="1" data-fb={f?.on} style={{ position: "relative", borderBottom: "1px solid #3A3A3A" }}>
                  {" "}
                  <span data-fbdot="1" aria-hidden="true" style={{ position: "absolute", left: "-28px", top: "26px", width: "12px", height: "12px", background: "#6A6A6A" }} />
                  {" "}
                  <button
                    type="button"
                    data-fi={f?.i}
                    onClick={v.toggleFb}
                    style={{ appearance: "none", border: "0", background: "transparent", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "16px", padding: "18px 0", textAlign: "left", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif" }}
                  >
                    {" "}
                    <span style={{ flex: "0 0 auto", minWidth: "92px", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: "#5BC0E8" }}>
                      {f?.d}
                    </span>
                    {" "}
                    <span style={{ flex: "1 1 auto", fontSize: "16px", fontWeight: "600" }}>
                      {f?.h}
                    </span>
                    {" "}
                    <svg data-fbchev="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <div data-fbbody="1">
                    {" "}
                    <div style={{ overflow: "hidden", minHeight: "0" }}>
                      {" "}
                      <ul style={{ listStyle: "none", margin: "0", padding: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {" "}
                        {((f?.items ?? []) as any[]).map((it: any, i1: number) => (
                          <Fragment key={i1}>
                            {" "}
                            <li style={{ display: "flex", gap: "12px", fontSize: "14px", lineHeight: "1.5", color: "#D6D6D6" }}>
                              <span style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "8px", background: "#5BC0E8" }} />
                              <span>
                                {it}
                              </span>
                            </li>
                            {" "}
                          </Fragment>
                        ))}
                        {" "}
                      </ul>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "56px" }}>
            {" "}
            <div data-card="1" style={{ background: "#5BC0E8", color: "#10384A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "800" }}>
                Phase 2
              </div>
              {" "}
              <p style={{ margin: "8px 0 0", fontSize: "15px", fontWeight: "600", lineHeight: "1.5" }}>
                Learning from phase 1 has helped in better grouping and better scanning.
              </p>
              {" "}
            </div>
            {" "}
            <div data-card="1" style={{ border: "2px dashed #6A6A6A", padding: "22px 20px" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "800", color: "#5BC0E8" }}>
                Actionable progress that you could see was missing
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14px", lineHeight: "1.65", color: "#D6D6D6" }}>
                <li>
                  User control - create your pack, progress in btw steps, visceral stimulation
                </li>
                <li>
                  Flexibility - components, filter, back button
                </li>
                <li>
                  {"consistency - H1 is consistent & the page heading"}
                </li>
                <li>
                  Feedback - progress in btw steps, CTA
                </li>
              </ul>
              {" "}
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
