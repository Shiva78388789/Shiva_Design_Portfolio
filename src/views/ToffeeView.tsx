// Ported from design-reference/design/Toffee Seller App v2.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToffeeView({ v }: { v: any }) {
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
            className="toffee-hover-0"
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
              aria-label="Toffee Seller App"
              style={{ margin: "14px 0 0", fontSize: "clamp(44px,8vw,96px)", lineHeight: "1.02", fontWeight: "700", display: "flex", flexWrap: "wrap", columnGap: "0.28em" }}
            >
              {" "}
              <span data-word="1" style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  T
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  o
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  f
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  f
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  e
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  e
                </span>
              </span>
              {" "}
              <span data-word="1" style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  S
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  e
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  l
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  l
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  e
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  r
                </span>
              </span>
              {" "}
              <span data-word="1" style={{ display: "inline-flex", overflow: "hidden", paddingBottom: "0.06em" }}>
                <span data-char="1" style={{ display: "inline-block" }}>
                  A
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  p
                </span>
                <span data-char="1" style={{ display: "inline-block" }}>
                  p
                </span>
              </span>
              {" "}
            </h1>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 14px", maxWidth: "520px", paddingBottom: "6px" }}>
            {" "}
            <div data-note="1" data-rot="-3" style={{ width: "220px", padding: "12px 12px 10px", background: "#7FD3F7", color: "#12303D", transform: "rotate(-3deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                My Role
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                UI/UX Designer
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="2" style={{ width: "250px", padding: "12px 12px 10px", background: "#A8E6BF", color: "#15361F", transform: "rotate(2deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Team
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500", lineHeight: "1.35" }}>
                Shiva Kumar, Priyanka Pathania, Nishant Jain, Ashish and Ankush
              </div>
              {" "}
            </div>
            {" "}
            <div data-note="1" data-rot="1.5" style={{ width: "250px", padding: "12px 12px 10px", background: "#F6DFA6", color: "#3D3010", transform: "rotate(1.5deg)" }}>
              {" "}
              <div style={{ fontSize: "15px", fontWeight: "700" }}>
                Tools
              </div>
              {" "}
              <div style={{ fontSize: "14px", fontWeight: "500" }}>
                Sketch, Invision, Balsamiq, Illustrator
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </header>
        {" "}
        <div style={{ maxWidth: "1272px", margin: "clamp(48px,7vw,90px) auto 0", padding: "0 20px" }}>
          {" "}
          <div data-heroimg="1" style={{ overflow: "hidden", background: "#FFFFFF" }}>
            {" "}
            <img src={asset("/assets/toffee/hero.png")} alt="Toffee Seller App screens" style={{ display: "block", width: "100%", height: "auto" }} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "14px 0 10px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #EC5A5A" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Overview
            </h2>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "56px 0 0", fontSize: "20px", fontWeight: "700" }}>
            Problem
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            Cycle dealers were experiencing a lot of difficulties in issuing cycle insurance through Toffee PWA due to network connectivity or technical errors. A lot of the cycle dealers felt frustrated due to the amount of time involved in policy issuance and the limited features of the web app. Moreover, it was getting difficult for the toffee team to capture the appropriate data to improve the user experience and integrate new features and products as well.
          </p>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(80px,10vw,130px) 20px 0" }}>
          {" "}
          <h3 data-reveal="1" style={{ margin: "0 0 36px", textAlign: "center", fontSize: "clamp(18px,2vw,22px)", fontWeight: "600" }}>
            Toffee Insurance web app design (Old)
          </h3>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "minmax(0,300px) minmax(0,1fr)", gap: "40px", alignItems: "center" }}>
            {" "}
            <img
              data-phone="1"
              src={asset("/assets/toffee/old-web.png")}
              alt="Old Toffee PWA"
              style={{ display: "block", width: "100%", maxWidth: "300px", height: "auto", margin: "0 auto" }}
            />
            {" "}
            <div data-pains="1" style={{ border: "2px dashed #6A6A6A", padding: "28px 26px" }}>
              {" "}
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Notifications
                  </span>
                </li>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Claims transparency
                  </span>
                </li>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Customers data
                  </span>
                </li>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Dealers commission data
                  </span>
                </li>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Customer support
                  </span>
                </li>
                {" "}
                <li data-pain="1" style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "16px", fontWeight: "500" }}>
                  <span
                    data-x="1"
                    style={{ flex: "0 0 auto", width: "26px", height: "26px", borderRadius: "50%", background: "#EC5A5A", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </span>
                  <span>
                    Dull Leaderboard/Milestones
                  </span>
                </li>
                {" "}
              </ul>
              {" "}
              <p data-pain="1" style={{ margin: "28px 0 0", fontSize: "14px", fontWeight: "600", lineHeight: "1.5", color: "#D6D6D6" }}>
                These are the pain points and limitations of PWA for Cycle dealers and Toffee team.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
            {" "}
            <span data-drop="1" style={{ display: "block", width: "1.5px", height: "70px", background: "#EC5A5A", transformOrigin: "top" }} />
            {" "}
            <div data-result="1" style={{ background: "#FFFFFF", color: "#1C1C1C", fontSize: "14px", fontWeight: "700", padding: "14px 30px" }}>
              As a result....
            </div>
            {" "}
            <span data-drop="1" style={{ display: "block", width: "1.5px", height: "60px", background: "#EC5A5A", transformOrigin: "top" }} />
            {" "}
            <svg data-drop="1" width="12" height="8" viewBox="0 0 12 8" style={{ display: "block", marginTop: "-1px" }}>
              <path d="M0 0h12L6 8z" fill="#EC5A5A" />
            </svg>
            {" "}
          </div>
          {" "}
          <div
            data-mw="pgrid"
            data-res-wrap="1"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", maxWidth: "600px", margin: "18px auto 0", perspective: "900px" }}
          >
            {" "}
            <div data-res="1" style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "22px 18px", fontSize: "14px", fontWeight: "600", lineHeight: "1.45" }}>
              <span style={{ color: "#D63F3F" }}>
                Low sales
              </span>
              {" "}of insurance policies on cycles.
            </div>
            {" "}
            <div data-res="1" style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "22px 18px", fontSize: "14px", fontWeight: "600", lineHeight: "1.45" }}>
              <span style={{ color: "#D63F3F" }}>
                Reduced engagement
              </span>
              {" "}rate of cycle dealers.
            </div>
            {" "}
            <div data-res="1" style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "22px 18px", fontSize: "14px", fontWeight: "600", lineHeight: "1.45" }}>
              <span style={{ color: "#D63F3F" }}>
                Lack of trust
              </span>
              {" "}in Toffee Insurance.
            </div>
            {" "}
            <div data-res="1" style={{ background: "#FFFFFF", color: "#1C1C1C", padding: "22px 18px", fontSize: "14px", fontWeight: "600", lineHeight: "1.45" }}>
              <span style={{ color: "#D63F3F" }}>
                Increased friction
              </span>
              {" "}in insurance policy issuance and claim settlement.
            </div>
            {" "}
          </div>
          {" "}
          <div
            data-q="1"
            style={{ position: "relative", margin: "clamp(80px,10vw,120px) auto 0", maxWidth: "640px", minHeight: "180px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}
          >
            {" "}
            <span
              data-qmark="1"
              aria-hidden="true"
              style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", fontSize: "clamp(160px,22vw,240px)", fontWeight: "800", lineHeight: "1", color: "#EC5A5A", opacity: "0.35" }}
            >
              ?
            </span>
            {" "}
            <p data-qtext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(18px,2.2vw,24px)", fontWeight: "700", lineHeight: "1.4" }}>
              How can we improve the Toffee experience and entice our users (cycle dealers) to sell more policies?
            </p>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "clamp(72px,9vw,110px) 0 0", fontSize: "20px", fontWeight: "700" }}>
            Solution
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            We designed Toffee Seller, a mobile app that empowers our users(cycle dealers) by providing them salient information regarding their commissions earned and push alerts on various offers run by Toffee Insurance to keep them engaged. It also enables users to get control over their customer's data, claims as well as market competition via a leaderboard.
          </p>
          {" "}
        </section>
        {" "}
        <section
          style={{ maxWidth: "1000px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0", display: "flex", flexDirection: "column", gap: "clamp(96px,12vw,150px)" }}
        >
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: "64px", alignItems: "center" }}>
            {" "}
            <div data-mw="imgfirst" style={{ display: "flex", justifyContent: "center" }}>
              <img
                data-phone="1"
                src={asset("/assets/toffee/home.png")}
                alt="Toffee Seller homescreen"
                style={{ display: "block", width: "100%", maxWidth: "300px", height: "auto" }}
              />
            </div>
            {" "}
            <div>
              {" "}
              <div data-reveal="1" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#EC5A5A" }}>
                01
              </div>
              {" "}
              <h3 data-reveal="1" style={{ margin: "8px 0 0", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", textTransform: "uppercase" }}>
                Bigger and better homescreen
              </h3>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "18px", fontWeight: "500", lineHeight: "1.5" }}>
                Whether cycle dealers wants to check their commission earned,Local rank or sell cycle insurance, every information has been kept upfront.
              </p>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "#D6D6D6" }}>
                Toffee seller app shows the data about the number of policies sold and commissions earned by the cycle dealer in the current month, apart from that "clear credit" feature and Buyflow CTA saves a substantial amount of time in clearing credit as well as issuing the policy.
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,1fr)", gap: "64px", alignItems: "center" }}>
            {" "}
            <div>
              {" "}
              <div data-reveal="1" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#EC5A5A" }}>
                02
              </div>
              {" "}
              <h3 data-reveal="1" style={{ margin: "8px 0 0", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", textTransform: "uppercase" }}>
                Claims experience redesigned
              </h3>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "18px", fontWeight: "500", lineHeight: "1.5" }}>
                All the information cycle dealers need regarding claims, at one place.
              </p>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "#D6D6D6" }}>
                Want a quick overview of the claims process? don't know how much time the claim will take in the settlement? No idea of documents required? Cycle dealers can get all this information in the claims section of the Toffee seller app.
              </p>
              {" "}
              <div data-steps="1" data-mw="steps" style={{ position: "relative", marginTop: "30px", border: "2px dashed #6A6A6A", padding: "22px 16px 18px" }}>
                {" "}
                <div style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#D6D6D6", marginBottom: "18px" }}>
                  Claim Status
                </div>
                {" "}
                <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
                  {" "}
                  <span aria-hidden="true" style={{ position: "absolute", left: "12.5%", right: "12.5%", top: "17px", height: "2px", background: "#4A4A4A" }} />
                  {" "}
                  <span
                    data-sline="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "12.5%", right: "12.5%", top: "17px", height: "2px", background: "#EC5A5A", transformOrigin: "left", transform: "scaleX(0)" }}
                  />
                  {" "}
                  <div data-step="1" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                    <span
                      data-dot="1"
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #4A4A4A", background: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: "0" }}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "11.5px", lineHeight: "1.3", color: "#D6D6D6" }}>
                      Estimate Added
                    </span>
                  </div>
                  {" "}
                  <div data-step="1" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                    <span
                      data-dot="1"
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #4A4A4A", background: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: "0" }}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "11.5px", lineHeight: "1.3", color: "#D6D6D6" }}>
                      Estimate Approved
                    </span>
                  </div>
                  {" "}
                  <div data-step="1" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                    <span
                      data-dot="1"
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #4A4A4A", background: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: "0" }}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "11.5px", lineHeight: "1.3", color: "#D6D6D6" }}>
                      Add Invoice
                    </span>
                  </div>
                  {" "}
                  <div data-step="1" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center" }}>
                    <span
                      data-dot="1"
                      style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2px solid #4A4A4A", background: "#1C1C1C", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ opacity: "0" }}
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "11.5px", lineHeight: "1.3", color: "#D6D6D6" }}>
                      Payment Transferred
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div data-mw="imgfirst" style={{ display: "flex", justifyContent: "center" }}>
              <img
                data-phone="1"
                src={asset("/assets/toffee/claims.png")}
                alt="Claims screen"
                style={{ display: "block", width: "100%", maxWidth: "380px", height: "auto" }}
              />
            </div>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.25fr)", gap: "64px", alignItems: "center" }}>
            {" "}
            <div data-mw="imgfirst" style={{ display: "flex", justifyContent: "center" }}>
              <img
                data-phone="1"
                src={asset("/assets/toffee/leaderboard.png")}
                alt="Ranking board"
                style={{ display: "block", width: "100%", maxWidth: "300px", height: "auto" }}
              />
            </div>
            {" "}
            <div>
              {" "}
              <div data-reveal="1" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#EC5A5A" }}>
                03
              </div>
              {" "}
              <h3 data-reveal="1" style={{ margin: "8px 0 0", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", textTransform: "uppercase" }}>
                Motivate with leaderboard
              </h3>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "18px", fontWeight: "500", lineHeight: "1.5" }}>
                Ranking features to foster competition among all the cycle dealers in the market place and to motivate them to sell more policies.
              </p>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "#D6D6D6" }}>
                Cycle dealers can use the leaderboard to check their ranking locally and would be able to unlock special incentives based on their performance.The more insurance gets sold the more incentives can be earned. However, ranking reset every month to remove bias.
              </p>
              {" "}
              <div data-board="1" style={{ marginTop: "30px", border: "2px dashed #6A6A6A" }}>
                {" "}
                <div
                  data-lrow="1"
                  style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #3A3A3A" }}
                >
                  <span
                    style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EC5A5A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    1
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    SS Overseas, Nashik
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>
                    ★{" "}
                    <span data-lcount="237">
                      237
                    </span>
                  </span>
                </div>
                {" "}
                <div
                  data-lrow="1"
                  style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #3A3A3A" }}
                >
                  <span
                    style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EC5A5A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    2
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    SS Overseas, Ahmednagar
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>
                    ★{" "}
                    <span data-lcount="222">
                      222
                    </span>
                  </span>
                </div>
                {" "}
                <div
                  data-lrow="1"
                  style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: "12px", padding: "12px 16px", borderBottom: "1px solid #3A3A3A" }}
                >
                  <span
                    style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#EC5A5A", color: "#FFFFFF", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    3
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "500" }}>
                    {"Bali & Sons., Kohlapur"}
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>
                    ★{" "}
                    <span data-lcount="216">
                      216
                    </span>
                  </span>
                </div>
                {" "}
                <div
                  data-lrow="1"
                  style={{ display: "grid", gridTemplateColumns: "44px 1fr auto", alignItems: "center", gap: "12px", padding: "14px 16px", background: "#FFFFFF", color: "#1C1C1C" }}
                >
                  <span style={{ fontSize: "15px", fontWeight: "700", paddingLeft: "4px" }}>
                    24
                  </span>
                  <span style={{ fontSize: "14px", fontWeight: "700" }}>
                    Me{" "}
                    <span style={{ fontWeight: "500", color: "#555555" }}>
                      · Level-1 · ₹5000 earned
                    </span>
                  </span>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>
                    ★{" "}
                    <span data-lcount="110">
                      110
                    </span>
                  </span>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.25fr) minmax(0,1fr)", gap: "64px", alignItems: "center" }}>
            {" "}
            <div>
              {" "}
              <div data-reveal="1" style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", color: "#EC5A5A" }}>
                04
              </div>
              {" "}
              <h3 data-reveal="1" style={{ margin: "8px 0 0", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", textTransform: "uppercase" }}>
                Leveraging the data
              </h3>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "18px", fontWeight: "500", lineHeight: "1.5" }}>
                Cycle dealers will instantly get the data of the customer to whom the insured cycle has been sold.
              </p>
              {" "}
              <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "15px", lineHeight: "1.65", color: "#D6D6D6" }}>
                Data captured at the time of policy issuance will get stored on the server and instantly reflect in the seller app for the convenience of the cycle dealer. Moreover, the data could be used for customer engagement later, with the help of date and cycle model filters, customer data can be segregated easily.
              </p>
              {" "}
            </div>
            {" "}
            <div data-mw="imgfirst" style={{ display: "flex", justifyContent: "center" }}>
              <img
                data-phone="1"
                src={asset("/assets/toffee/customer.png")}
                alt="My Customer screen"
                style={{ display: "block", width: "100%", maxWidth: "380px", height: "auto" }}
              />
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "14px 0 10px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #EC5A5A" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Our Approach
            </h2>
            {" "}
          </div>
          {" "}
          <div data-mw="three" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "18px", marginTop: "56px" }}>
            {" "}
            <div data-appr="1" style={{ position: "relative", border: "2px dashed #6A6A6A", padding: "26px 22px 28px", minHeight: "230px" }}>
              {" "}
              <div data-num="1" style={{ fontSize: "64px", fontWeight: "800", lineHeight: "1", color: "#EC5A5A" }}>
                01
              </div>
              {" "}
              <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700" }}>
                Research
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14.5px", lineHeight: "1.7", color: "#D6D6D6" }}>
                <li>
                  Competitive analysis
                </li>
                <li>
                  Interviews
                </li>
                <li>
                  Affinity Mapping
                </li>
                <li>
                  Personas
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div data-appr="1" style={{ position: "relative", border: "2px dashed #6A6A6A", padding: "26px 22px 28px", minHeight: "230px" }}>
              {" "}
              <div data-num="1" style={{ fontSize: "64px", fontWeight: "800", lineHeight: "1", color: "#EC5A5A" }}>
                02
              </div>
              {" "}
              <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700" }}>
                Design
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14.5px", lineHeight: "1.7", color: "#D6D6D6" }}>
                <li>
                  Group Brainstorming
                </li>
                <li>
                  Wireframes
                </li>
                <li>
                  Pre-Iterations
                </li>
                <li>
                  Hi-Fi Design
                </li>
                <li>
                  Interactions
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div data-appr="1" style={{ position: "relative", border: "2px dashed #6A6A6A", padding: "26px 22px 28px", minHeight: "230px" }}>
              {" "}
              <div data-num="1" style={{ fontSize: "64px", fontWeight: "800", lineHeight: "1", color: "#EC5A5A" }}>
                03
              </div>
              {" "}
              <div style={{ marginTop: "14px", fontSize: "18px", fontWeight: "700" }}>
                Evaluate
              </div>
              {" "}
              <ul style={{ margin: "10px 0 0", paddingLeft: "18px", fontSize: "14.5px", lineHeight: "1.7", color: "#D6D6D6" }}>
                <li>
                  Usability Testing
                </li>
                <li>
                  Post-Iterations
                </li>
              </ul>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "clamp(64px,8vw,96px) 0 0", fontSize: "20px", fontWeight: "700" }}>
            My Contribution
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            As the UI/UX designer on the team, I advocated and participated in conducting user research and brainstorming sessions before arriving at solutions.
          </p>
          {" "}
          <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            I did all the research and design activities with other designers and developers. Created Wireframes, Hi and low-fidelity designs, interactions, and testing.
          </p>
          {" "}
          <p data-reveal="1" style={{ margin: "14px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            {"After the product pushed to the market,  I refined the designs by gathering feedback data and made improvements in the app."}
          </p>
          {" "}
        </section>
        {" "}
        <section style={{ maxWidth: "880px", margin: "0 auto", padding: "clamp(96px,12vw,160px) 20px 0" }}>
          {" "}
          <div data-title="1" style={{ position: "relative", width: "min(500px,100%)", margin: "0 auto", padding: "14px 0 10px", textAlign: "center" }}>
            {" "}
            <div data-frame="1" style={{ position: "absolute", inset: "0", border: "1.5px solid #EC5A5A" }} />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", top: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", left: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <span
              data-handle="1"
              style={{ position: "absolute", right: "-5px", bottom: "-5px", width: "10px", height: "10px", border: "1.5px solid #EC5A5A", background: "#1C1C1C" }}
            />
            {" "}
            <h2 data-ttext="1" style={{ position: "relative", margin: "0", fontSize: "clamp(38px,6vw,62px)", lineHeight: "1.16", fontWeight: "500" }}>
              Research
            </h2>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "56px 0 0", fontSize: "20px", fontWeight: "700" }}>
            Competitive analysis
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            We first looked into the market to examine if there's already any similar insurance app and if so, then, how they are solving the problem.
          </p>
          {" "}
          <div data-reveal="1" style={{ marginTop: "28px", background: "#FFFFFF", padding: "18px 20px" }}>
            {" "}
            <img src={asset("/assets/toffee/logos.png")} alt="Policybazaar, Lemonade, Coverfox, Digit" style={{ display: "block", width: "100%", height: "auto" }} />
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "40px 0 0", fontSize: "18px", fontWeight: "700" }}>
            We found that:
          </h3>
          {" "}
          <ul
            style={{ margin: "12px 0 0", paddingLeft: "20px", fontSize: "clamp(15px,1.5vw,17px)", lineHeight: "1.6", display: "flex", flexDirection: "column", gap: "8px" }}
          >
            {" "}
            <li data-reveal="1">
              There was no product similar to the toffee seller app in the insurance market at that time.
            </li>
            {" "}
            <li data-reveal="1">
              There were apps for insurance agents and consumers but were lacking in unique features that Toffee insurance is offering.
            </li>
            {" "}
            <li data-reveal="1">
              No end to end claims experience by any competitor in an app.
            </li>
            {" "}
          </ul>
          {" "}
          <div
            data-reveal="1"
            style={{ marginTop: "32px", background: "#2e2e2e", color: "#e8e8e8", borderRadius: "18px", padding: "18px 18px 16px", fontSize: "14.5px", fontWeight: "600", lineHeight: "1.5" }}
          >
            Therefore, we hope to create a tool for our insurance sellers, to help them in selling policies impeccably without the hassle of claims and giving them complete transparency with the help of data.
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "clamp(64px,8vw,96px) 0 0", fontSize: "20px", fontWeight: "700" }}>
            Affinity mapping
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            To better understand the possibilities and features to be included in the app, we conducted affinity mapping sessions and asked developers, product managers, and graphic designers to participate in the activity, so that as a group, we can brainstorm solutions based on our findings. Simultaneously, we started analyzing the data of previous field visits to pick any problem which could be solved with this app.
          </p>
          {" "}
          <div data-mw="two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginTop: "28px" }}>
            {" "}
            <div data-photo="1" style={{ overflow: "hidden" }}>
              <img src={asset("/assets/toffee/affinity-1.png")} alt="Affinity mapping wall" style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            {" "}
            <div data-photo="1" style={{ overflow: "hidden" }}>
              <img src={asset("/assets/toffee/affinity-2.png")} alt="Affinity mapping board" style={{ display: "block", width: "100%", height: "auto" }} />
            </div>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "clamp(64px,8vw,96px) 0 0", fontSize: "20px", fontWeight: "700" }}>
            Users Persona
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            To better guide our designs and enable everyone on the team to empathize with our users, We further synthesized the interview results and came up with the following personas.
          </p>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginTop: "32px" }}>
            {" "}
            <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px 26px" }}>
              {" "}
              <div data-mw="phead" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                {" "}
                <img
                  src={asset("/assets/toffee/naveen.png")}
                  alt="Naveen"
                  style={{ width: "104px", height: "104px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto" }}
                />
                {" "}
                <div>
                  {" "}
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Bio
                  </div>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.55", color: "#D6D6D6" }}>
                    Naveen lives in Tagore Garden (New Delhi) and owns a firefox cycle showroom in ModelTown. He has a good volume of cycle sales and maintains a good relationship with his customers.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-mw="four" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr 1fr 1.15fr", gap: "14px", marginTop: "22px" }}>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px", fontSize: "12.5px", lineHeight: "1.85", color: "#D6D6D6" }}>
                  Age -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    45 Years
                  </b>
                  <br />
                  Work -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Businessman
                  </b>
                  <br />
                  Status -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Married
                  </b>
                  <br />
                  Location -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    New Delhi
                  </b>
                  <br />
                  Personality -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Introvert
                  </b>
                  <br />
                  Self Motivated -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    No
                  </b>
                  <br />
                  Technology -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Internet and Mobile apps
                  </b>
                  <br />
                  Monthly Policies -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    15-20
                  </b>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Needs
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Increase the volume of sales
                    </li>
                    <li>
                      Customer Satisfaction
                    </li>
                  </ul>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Motivation
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Commissions
                    </li>
                    <li>
                      Customers loyalty
                    </li>
                  </ul>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#EC5A5A" }}>
                    Frustrations
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Difficulty in explaining insurance to customers
                    </li>
                    <li>
                      Disparity in commissions
                    </li>
                    <li>
                      Selling insurance hinders cycle sales
                    </li>
                  </ul>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
            <article data-persona="1" style={{ border: "2px dashed #6A6A6A", padding: "24px 22px 26px" }}>
              {" "}
              <div data-mw="phead" style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                {" "}
                <img
                  src={asset("/assets/toffee/sunny.png")}
                  alt="Sunny"
                  style={{ width: "104px", height: "104px", borderRadius: "50%", objectFit: "cover", flex: "0 0 auto" }}
                />
                {" "}
                <div>
                  {" "}
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Bio
                  </div>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.55", color: "#D6D6D6" }}>
                    Sunny lives in Dwarka (New Delhi) and owns a Multibrand cycle showroom in Dwarka. He has a good volume of cycle sales and has a range of expensive cycles as well. He likes to experiment with sale strategies and is very clear about his business objectives.
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div data-mw="four" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr 1fr 1.15fr", gap: "14px", marginTop: "22px" }}>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px", fontSize: "12.5px", lineHeight: "1.85", color: "#D6D6D6" }}>
                  Age -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    25 Years
                  </b>
                  <br />
                  Work -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Businessman
                  </b>
                  <br />
                  Status -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Single
                  </b>
                  <br />
                  Location -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    New Delhi
                  </b>
                  <br />
                  Personality -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Extrovert
                  </b>
                  <br />
                  Self Motivated -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Yes
                  </b>
                  <br />
                  Technology -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    Internet and Mobile apps
                  </b>
                  <br />
                  Monthly Policies -{" "}
                  <b style={{ color: "#FFFFFF" }}>
                    25-30
                  </b>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Needs
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Increase the volume of sales
                    </li>
                    <li>
                      Cater all age group and class
                    </li>
                  </ul>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700" }}>
                    Motivation
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Commissions
                    </li>
                    <li>
                      Ranking among local sellers
                    </li>
                  </ul>
                </div>
                {" "}
                <div data-pbox="1" style={{ background: "#262626", padding: "16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: "700", color: "#EC5A5A" }}>
                    Frustrations
                  </div>
                  <ul style={{ margin: "8px 0 0", paddingLeft: "16px", fontSize: "13.5px", lineHeight: "1.6", color: "#D6D6D6" }}>
                    <li>
                      Hard to convince cycle buyers to buy insurance
                    </li>
                    <li>
                      Disparity in commissions
                    </li>
                    <li>
                      Slow system due to internet connection or mobile device
                    </li>
                  </ul>
                </div>
                {" "}
              </div>
              {" "}
            </article>
            {" "}
          </div>
          {" "}
          <h3 data-reveal="1" style={{ margin: "clamp(64px,8vw,96px) 0 0", fontSize: "20px", fontWeight: "700" }}>
            User Flow
          </h3>
          {" "}
          <p data-reveal="1" style={{ margin: "10px 0 0", fontSize: "clamp(16px,1.6vw,18px)", lineHeight: "1.6" }}>
            With our research findings, old designs and personas in mind, I have created a user flow to visualize all the specific steps a user needs to take in coming to the platform and selling insurance policy.
          </p>
          {" "}
          <div
            data-flow="1"
            data-mw="flow"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", columnGap: "36px", rowGap: "44px", marginTop: "40px" }}
          >
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "1", gridColumn: "1", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Seller app download
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px", transformOrigin: "center" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "1", gridColumn: "2", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF", boxShadow: "4px 4px 0 -1.5px #1C1C1C, 4px 4px 0 0 #EC5A5A" }}
            >
              Splash screen with sign-in
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "1", gridColumn: "3", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Enter registered mobile number
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "1", gridColumn: "4", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Enter OTP
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "calc(50% - 20px)", top: "calc(100% + 16px)", width: "40px", height: "12px", transform: "rotate(90deg)" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "2", gridColumn: "4", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Dealer Home Screen
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", right: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px", transform: "rotate(180deg)" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "2", gridColumn: "3", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Buy Cycle Insurance
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", right: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px", transform: "rotate(180deg)" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "2", gridColumn: "2", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF", boxShadow: "4px 4px 0 -1.5px #1C1C1C, 4px 4px 0 0 #EC5A5A" }}
            >
              Cycle buyer details
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", right: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px", transform: "rotate(180deg)" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "2", gridColumn: "1", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Calculate Premium
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "calc(50% - 20px)", top: "calc(100% + 16px)", width: "40px", height: "12px", transform: "rotate(90deg)" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "3", gridColumn: "1", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Issue Policy
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "3", gridColumn: "2", border: "1.5px solid #EC5A5A", background: "#1C1C1C", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "600", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Policy issued successfully
              <svg
                data-arr="1"
                viewBox="0 0 40 12"
                preserveAspectRatio="none"
                style={{ position: "absolute", left: "100%", top: "calc(50% - 6px)", width: "36px", height: "12px" }}
              >
                <path d="M0 6h34" stroke="#EC5A5A" strokeWidth="1.5" />
                <path d="M33 1l6 5-6 5" fill="none" stroke="#EC5A5A" strokeWidth="1.5" />
              </svg>
            </div>
            {" "}
            <div
              data-node="1"
              style={{ position: "relative", gridRow: "3", gridColumn: "3", border: "1.5px solid #EC5A5A", background: "#EC5A5A", padding: "14px 10px", textAlign: "center", fontSize: "13.5px", fontWeight: "700", lineHeight: "1.35", color: "#FFFFFF" }}
            >
              Back on Homescreen
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
              className="toffee-hover-1"
            >
              {" "}
              <div
                data-mw="nextimg"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "280px", borderRight: "2px solid #3A3A3A", padding: "24px", overflow: "hidden" }}
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
              className="toffee-hover-2"
            >
              ← Back to portfolio
            </a>
            {" "}
          </div>
          {" "}
        </section>
      </div>
    </>
  );
}
