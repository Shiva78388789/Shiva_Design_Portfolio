// Ported from design-reference/design/Portfolio.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';
import DockNav from '@/components/DockNav';
import ImageSlot from '@/components/ImageSlot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomeView({ v }: { v: any }) {
  return (
    <>
      <div data-theme={v.theme} style={{ background: "var(--ground)", color: "var(--ink)", minHeight: "100vh", position: "relative" }}>
        {" "}
        <div
          data-m="chrome"
          data-pin={v.pinState}
          style={{ position: "absolute", top: "0", left: "0", right: "0", zIndex: "50", padding: "18px var(--gut) 0", pointerEvents: "none" }}
        >
          {" "}
        </div>
        {" "}
        <div
          data-m="ruler"
          aria-hidden="true"
          style={{ position: "absolute", top: "76px", left: "0", right: "0", height: "24px", zIndex: "45", background: "#FFFFFF", borderBottom: "1px solid #d8d6d4", overflow: "hidden", pointerEvents: "none", fontFamily: "'Archivo','Montserrat',sans-serif" }}
        >
          {" "}
          <div ref={v.rulerTrack} style={{ position: "absolute", top: "0", left: "0", width: "300%", height: "100%", willChange: "transform" }}>
            {" "}
            <div
              style={{ position: "absolute", top: "0", left: "0", right: "0", height: "100%", backgroundImage: "repeating-linear-gradient(to right,#9a9794 0 1px,transparent 1px 10px),repeating-linear-gradient(to right,#4a4744 0 1px,transparent 1px 100px)", backgroundSize: "100% 6px,100% 11px", backgroundPosition: "0 100%,0 100%", backgroundRepeat: "repeat-x" }}
            />
            {" "}
            {((v.rulerTicks ?? []) as any[]).map((t: any, i0: number) => (
              <Fragment key={i0}>
                {" "}
                <span style={css(`position:absolute;top:2px;left:${t?.left ?? ""};font-size:9px;letter-spacing:0.04em;color:#4a4744`)}>
                  {t?.label}
                </span>
                {" "}
              </Fragment>
            ))}
            {" "}
          </div>
          {" "}
          <div ref={v.rulerMark} style={{ position: "absolute", top: "0", left: "0", width: "1px", height: "100%", background: "#ec3013", willChange: "transform" }} />
          {" "}
        </div>
        {" "}
        <div
          data-m="drawer"
          data-open={v.menuState}
          style={{ position: "fixed", inset: "0", zIndex: "60", display: "none", flexDirection: "column", background: "var(--ground)", padding: "22px" }}
        >
          {" "}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {" "}
            <span style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "-0.01em" }}>
              SHIVA KUMAR
            </span>
            {" "}
            <button
              onClick={v.toggleMenu}
              aria-label="Close menu"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "38px", height: "38px", padding: "0", cursor: "pointer", background: "transparent", border: "1px solid var(--rule)", borderRadius: "50%", color: "var(--ink)" }}
            >
              {v.closeIcon}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "48px" }}>
            {" "}
            <a
              href="#work"
              onClick={v.closeMenu}
              style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)", textDecoration: "none", padding: "14px 0", borderBottom: "2px solid var(--rule)" }}
            >
              Work
            </a>
            {" "}
            <a
              href="#experience"
              onClick={v.closeMenu}
              style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)", textDecoration: "none", padding: "14px 0", borderBottom: "2px solid var(--rule)" }}
            >
              Experience
            </a>
            {" "}
            <a
              href="#contact"
              onClick={v.closeMenu}
              style={{ fontSize: "38px", fontWeight: "800", letterSpacing: "-0.03em", color: "var(--ink)", textDecoration: "none", padding: "14px 0", borderBottom: "2px solid var(--rule)" }}
            >
              Contact
            </a>
            {" "}
          </div>
          {" "}
          <a
            href={asset("/assets/Shiva_Kumar_Resume.pdf")}
            download=""
            style={{ marginTop: "auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", background: "var(--redsolid)", color: "#f3f2f2", textDecoration: "none", fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", padding: "16px 20px", borderRadius: "12px" }}
          >
            Download Resume
          </a>
          {" "}
        </div>
        {" "}
        <nav
          data-m="nav"
          data-glass={v.navState}
          style={{ pointerEvents: "auto", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "12px 22px" }}
        >
          {" "}
          <a href="#top" style={{ fontWeight: "800", fontSize: "14px", letterSpacing: "-0.01em", textDecoration: "none", color: "var(--ink)" }}>
            SHIVA KUMAR
          </a>
          {" "}
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {" "}
            <div data-m="navlinks" style={{ display: "flex", alignItems: "center", gap: "22px", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {" "}
              <a href="#work" style={{ textDecoration: "none", color: "var(--ink)" }}>
                Work
              </a>
              {" "}
              <a href="#experience" style={{ textDecoration: "none", color: "var(--ink)" }}>
                Experience
              </a>
              {" "}
              <a href="#contact" style={{ textDecoration: "none", color: "var(--ink)" }}>
                Contact
              </a>
              {" "}
            </div>
            {" "}
            <button
              data-m="burger"
              onClick={v.toggleMenu}
              aria-label="Open menu"
              style={{ display: "none", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", padding: "0", cursor: "pointer", background: "transparent", border: "1px solid var(--rule)", borderRadius: "50%", color: "var(--ink)" }}
            >
              {v.burgerIcon}
            </button>
            {" "}
          </div>
          {" "}
        </nav>
        <div data-m="vpwrap">
          <section
            id="top"
            style={{ minHeight: "100svh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "104px", boxSizing: "border-box", backgroundImage: "radial-gradient(circle, var(--soft) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px" }}
          >
            {" "}
            <div
              data-m="cursor"
              aria-hidden="true"
              style={css(`opacity:${v.revealOpacity ?? ""};transition:opacity .5s ease;position:absolute;left:clamp(20px,22cqw,420px);top:34%;z-index:2;animation:driftA 12s ease-in-out infinite`)}
            >
              {" "}
            </div>
            <div
              data-m="pin"
              onMouseEnter={v.onPinEnter}
              onMouseLeave={v.onPinLeave}
              style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; position: absolute; right: 244px; top: 104px; z-index: 4; display: flex; align-items: flex-start; gap: 10px; cursor: pointer`)}
            >
              {" "}
              <span
                style={{ width: "57px", height: "57px", borderRadius: "50% 50% 50% 4px", overflow: "hidden", flex: "none", border: "2px solid #ffffff", boxShadow: "0 10px 26px rgba(0,0,0,0.38)", background: "var(--panel)", display: "block" }}
              >
                {" "}
                <img
                  src={asset("/assets/shiva.png")}
                  alt="Shiva Kumar"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 12%", display: "block" }}
                />
              </span>
              {" "}
              <span
                style={css(`background:#ffffff;border-radius:4px 14px 14px 14px;padding:12px 16px;box-shadow:0 16px 40px rgba(0,0,0,0.35);display:flex;flex-direction:column;gap:3px;white-space:nowrap;transform-origin:top left;transform:${v.pinTransform ?? ""};opacity:${v.pinOpacity ?? ""};pointer-events:none;transition:transform .28s cubic-bezier(.2,.7,.2,1),opacity .2s ease`)}
              >
                {" "}
                <span style={{ color: "#6b6663", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Shiva Kumar
                </span>
                {" "}
                <span style={{ color: "#201e1d", fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>
                  Have a nice day
                </span>
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <div
              style={{ width: "100%", maxWidth: "1576px", padding: "0 var(--gut)", position: "relative", zIndex: "1", display: "flex", flex: "1 1 auto", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "34px", minHeight: "0" }}
            >
              {" "}
              {v.showComment ? (
                <>
                {" "}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", animation: "popIn .32s cubic-bezier(.2,.7,.2,1) both" }}>
                  {" "}
                  <span
                    style={{ width: "34px", height: "34px", borderRadius: "50% 50% 50% 2px", background: "#3E92E0", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none", color: "#fff", fontSize: "13px", fontWeight: "800", boxShadow: "0 10px 24px rgba(0,0,0,0.3)" }}
                  >
                    SK
                  </span>
                  {" "}
                  <span
                    style={{ background: "#3E92E0", borderRadius: "16px 16px 16px 4px", padding: "16px 22px", boxShadow: "0 14px 36px rgba(0,0,0,0.34)", display: "inline-flex", alignItems: "center", minWidth: "170px" }}
                  >
                    {" "}
                    <span style={{ color: "#fff", fontSize: "clamp(22px,3.4cqw,38px)", fontWeight: "600", letterSpacing: "-0.01em", whiteSpace: "pre" }}>
                      {v.typed}
                    </span>
                    {" "}
                    <span style={{ color: "#fff", fontSize: "clamp(22px,3.4cqw,38px)", fontWeight: "400", animation: "blink 1s step-end infinite" }}>
                      |
                    </span>
                    {" "}
                  </span>
                  {" "}
                </div>
                {" "}
                </>
              ) : null}
              {" "}
              {v.showName ? (
                <>
                {" "}
                <div
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(20px,4cqw,52px)", flexWrap: "wrap", animation: "riseIn .7s cubic-bezier(.2,.7,.2,1) both" }}
                >
                  {" "}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px" }}>
                    {" "}
                    <span
                      data-m="hi"
                      style={{ fontFamily: "Trebuchet MS", fontWeight: "600", fontSize: "clamp(28px,4cqw,54px)", color: "var(--dim)", lineHeight: "1", transform: "rotate(-3deg)", alignSelf: "center", textAlign: "center" }}
                    >
                      <span style={{ fontWeight: "300", fontSize: "32px", color: "#F3F2F2", letterSpacing: "1px" }}>
                        my name is
                      </span>
                    </span>
                    <span style={{ position: "relative", display: "inline-block", marginTop: "10px", padding: "26px 32px", outline: "2px solid #ffffff", outlineOffset: "0" }}>
                      {" "}
                      <span data-m="name" style={{ fontSize: "70px", fontWeight: "600", letterSpacing: "0.02em", lineHeight: "0.95", display: "block" }}>
                        Shiva Kumar
                      </span>
                      {" "}
                      <span
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                      />
                      {" "}
                      <span
                        aria-hidden="true"
                        style={{ position: "absolute", right: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                      />
                      {" "}
                      <span
                        aria-hidden="true"
                        style={{ position: "absolute", left: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                      />
                      {" "}
                      <span
                        aria-hidden="true"
                        style={{ position: "absolute", right: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                      />
                      {" "}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                </>
              ) : null}
              {" "}
              <div style={css(`opacity:${v.revealOpacity ?? ""};transition:opacity .5s ease;display:flex;align-items:center;justify-content:center;gap:10px`)}>
                {" "}
                <span
                  aria-hidden="true"
                  style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3ddc84", boxShadow: "0 0 12px rgba(61,220,132,0.75)", flex: "none", animation: "liveBlink 2.4s ease-in-out infinite" }}
                />
                <span
                  style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "500", letterSpacing: "0.16em", textTransform: "uppercase", color: "#FFFFFF" }}
                >
                  Available for thoughtful projects
                </span>
                {" "}
              </div>
              {" "}
              <div
                data-m="cursor"
                aria-hidden="true"
                style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; position: absolute; left: 294px; top: 282px; z-index: 2; animation: driftA 11s ease-in-out infinite`)}
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ position: "absolute", left: "0", top: "0", width: "24px", height: "24px", overflow: "visible", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
                >
                  <path d="M8.75418 20.0002L5.62291 4.04113L20 11.9184L12.9181 13.973L8.75418 20.0002Z" fill="black" stroke="white" />
                </svg>
                <span
                  style={{ margin: "16px 0 0 16px", display: "inline-flex", alignItems: "center", height: "40px", padding: "0 17px", background: "#DD2590", border: "2px solid #C11574", borderRadius: "2px 20px 20px 24px", boxShadow: "4px 4px 10px rgba(221,37,144,0.16)", color: "#FFFFFF", fontFamily: "'Archivo','Montserrat',sans-serif", fontSize: "20px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap" }}
                >
                  Product Designer
                </span>
                {" "}
              </div>
              <div
                data-m="cursor"
                aria-hidden="true"
                style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; position: absolute; top: 212px; right: 340px; z-index: 2; animation: driftB 13s ease-in-out infinite`)}
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ position: "absolute", left: "0", top: "0", width: "24px", height: "24px", overflow: "visible", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
                >
                  <path d="M8.75418 20.0002L5.62291 4.04113L20 11.9184L12.9181 13.973L8.75418 20.0002Z" fill="black" stroke="white" />
                </svg>
                <span
                  style={{ margin: "16px 0 0 16px", display: "inline-flex", alignItems: "center", height: "40px", padding: "0 17px", background: "#51AC65", border: "2px solid #418A51", borderRadius: "2px 20px 20px 24px", boxShadow: "4px 4px 10px rgba(81,172,101,0.16)", color: "#FFFFFF", fontFamily: "'Archivo','Montserrat',sans-serif", fontSize: "20px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap" }}
                >
                  Gurugram
                </span>
                {" "}
              </div>
              <div
                data-m="cursor"
                aria-hidden="true"
                style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; position: absolute; left: 360px; top: 104px; z-index: 2; animation: driftA 12s ease-in-out infinite`)}
              >
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ position: "absolute", right: "0", top: "0", width: "24px", height: "24px", overflow: "visible", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.25))" }}
                >
                  <path d="M4.36 12.86 16.86 2 17.15 18.55 11.77 13.42 4.36 12.86Z" fill="black" stroke="white" />
                </svg>
                <span
                  style={{ margin: "16px 16px 0 0", display: "inline-flex", alignItems: "center", height: "40px", padding: "0 17px", background: "#F7D158", border: "2px solid #C8A947", borderRadius: "20px 2px 24px 20px", boxShadow: "4px 4px 10px rgba(247,209,88,0.16)", color: "#201e1d", fontFamily: "'Archivo','Montserrat',sans-serif", fontSize: "20px", fontWeight: "400", lineHeight: "1", letterSpacing: "0", whiteSpace: "nowrap", position: "relative" }}
                >
                  Currently in Airtel
                </span>
                {" "}
              </div>
              <div
                data-m="pin"
                onMouseEnter={v.onPin2Enter}
                onMouseLeave={v.onPin2Leave}
                style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; position: absolute; left: 230px; z-index: 4; display: flex; align-items: flex-start; gap: 10px; cursor: pointer; top: 411px`)}
              >
                {" "}
                <span
                  style={{ width: "56px", height: "56px", borderRadius: "50% 50% 50% 4px", overflow: "hidden", flex: "none", border: "2px solid #ffffff", boxShadow: "0 10px 26px rgba(0,0,0,0.38)", background: "var(--panel)", display: "block" }}
                >
                  {" "}
                  <img
                    src={asset("/assets/shiva.png")}
                    alt="Shiva Kumar"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 12%", display: "block" }}
                  />
                  {" "}
                </span>
                {" "}
                <span
                  style={css(`background:#ffffff;border-radius:4px 14px 14px 14px;padding:12px 16px;box-shadow:0 16px 40px rgba(0,0,0,0.35);display:flex;flex-direction:column;gap:3px;white-space:nowrap;transform-origin:top left;transform:${v.pin2Transform ?? ""};opacity:${v.pin2Opacity ?? ""};pointer-events:none;transition:transform .28s cubic-bezier(.2,.7,.2,1),opacity .2s ease`)}
                >
                  {" "}
                  <span style={{ color: "#6b6663", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Shiva Kumar
                  </span>
                  {" "}
                  <span style={{ color: "#201e1d", fontSize: "16px", fontWeight: "600", letterSpacing: "-0.01em" }}>
                    Thanks for stopping by
                  </span>
                  {" "}
                </span>
                {" "}
              </div>
            </div>
            <div
              style={css(`opacity: ${v.revealOpacity ?? ""}; transition: opacity .5s ease; transform: translateY(-100px); margin-top: 200px; position: relative; z-index: 3; flex: none; width: 100%; max-width: 1576px; display: flex; flex-direction: column; align-items: center; gap: 20px; padding: 0 var(--gut) min(200px,18vh)`)}
            >
              {" "}
              <p
                style={{ margin: "0", fontFamily: "'Montserrat',sans-serif", fontSize: "36px", fontWeight: "300", letterSpacing: "0.03em", color: "#FFFFFF", textAlign: "center", textWrap: "pretty", width: "100%", maxWidth: "486px" }}
              >
                I design{" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  style={{ display: "inline-block", verticalAlign: "-0.12em", width: "32px", height: "32px", margin: "0 0.1em" }}
                >
                  <path d="M0 10V0C5.52285 0 10 4.47717 10 10V20C4.47715 20 0 15.5228 0 10Z" fill="#51AC65" />
                  <path d="M20 20C20 25.5228 15.5228 30 10 30H0C0 24.4772 4.47715 20 10 20H20Z" fill="#51AC65" />
                  <path d="M20 10V20C20 25.5228 24.4771 30 30 30V20C30 14.4772 25.5228 10 20 10Z" fill="#51AC65" />
                  <path d="M20 0H30C30 5.52283 25.5228 10 20 10H10C10 4.47717 14.4772 0 20 0Z" fill="#51AC65" />
                </svg>
                {" "}outstanding digital products{" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  style={{ display: "inline-block", verticalAlign: "-0.12em", width: "32px", height: "32px", margin: "0 0.1em", transformOrigin: "50% 50%", animation: "spinSlow 14s linear infinite" }}
                >
                  <path d="M30 0C30 8.28172 23.2884 14.9959 15.0077 15H15L15 14.9923C15.0041 6.71159 21.7183 0 30 0Z" fill="#DD2590" />
                  <path
                    d="M0.00765133 30C8.28841 29.9959 15 23.2817 15 15C15 23.2817 21.7116 29.9959 29.9923 30H30L30 29.9923C29.9959 21.7116 23.2817 15 15 15C6.71828 15 0.00413418 21.7116 1.90735e-06 29.9923L0 30H0.00765133Z"
                    fill="#DD2590"
                  />
                  <path d="M14.9923 15C6.71159 14.9959 0 8.28172 0 0C8.28172 0 14.9959 6.71159 15 14.9923L15 15H14.9923Z" fill="#DD2590" />
                </svg>
              </p>
              {" "}
              <a
                href="#contact"
                style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", color: "#111111", textDecoration: "none", border: "2px solid #FFFFFF", background: "#FFFFFF", padding: "13px 26px", transition: "background .2s ease,color .2s ease", borderRadius: "10px", display: "inline-flex", alignItems: "center", gap: "10px" }}
                data-m="callbtn"
                className="home-hover-0"
              >
                Contact me
                <svg
                  data-m="callico"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="none"
                  style={{ flex: "none", width: "20px", height: "20px", transformOrigin: "50% 60%" }}
                >
                  <path
                    d="M24.9994 19.9201V22.9201C25.0006 23.1986 24.9435 23.4743 24.832 23.7294C24.7204 23.9846 24.5567 24.2137 24.3515 24.402C24.1463 24.5902 23.904 24.7336 23.6402 24.8228C23.3764 24.912 23.0968 24.9452 22.8194 24.9201C19.7423 24.5857 16.7864 23.5342 14.1894 21.8501C11.7733 20.3148 9.72478 18.2663 8.18945 15.8501C6.49942 13.2413 5.44769 10.2711 5.11944 7.1801C5.09446 6.90356 5.12732 6.62486 5.21595 6.36172C5.30457 6.09859 5.44702 5.85679 5.63421 5.65172C5.82141 5.44665 6.04925 5.28281 6.30324 5.17062C6.55722 5.05843 6.83179 5.00036 7.10945 5.0001H10.1094C10.5948 4.99532 11.0652 5.16718 11.4332 5.48363C11.8012 5.80008 12.0415 6.23954 12.1094 6.7201C12.2361 7.68016 12.4709 8.62282 12.8094 9.5301C12.944 9.88802 12.9731 10.277 12.8934 10.651C12.8136 11.0249 12.6283 11.3682 12.3594 11.6401L11.0894 12.9101C12.513 15.4136 14.5859 17.4865 17.0894 18.9101L18.3594 17.6401C18.6313 17.3712 18.9746 17.1859 19.3486 17.1062C19.7225 17.0264 20.1115 17.0556 20.4694 17.1901C21.3767 17.5286 22.3194 17.7635 23.2794 17.8901C23.7652 17.9586 24.2088 18.2033 24.526 18.5776C24.8431 18.9519 25.0116 19.4297 24.9994 19.9201Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {" "}
            </div>
            {" "}
          </section>
          <section
            id="about"
            ref={v.aboutRef}
            style={{ minHeight: "100vh", transform: "translateY(-100px)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(90px,10vh,150px) calc(var(--gut) + clamp(150px,17cqw,230px) + 40px)", backgroundImage: "radial-gradient(circle, var(--soft) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px" }}
          >
            {" "}
            <div
              data-m="dragphoto"
              onPointerDown={v.onDragStart}
              data-drag="a"
              data-slide="l"
              style={css(`position:absolute;left:${v.pAx ?? ""}px;top:${v.pAy ?? ""}px;z-index:2;width:clamp(150px,17cqw,230px);touch-action:none;cursor:grab;transform:rotate(-4deg);box-shadow:0 22px 48px rgba(0,0,0,0.34);background:#ffffff`)}
            >
              {" "}
              <img src={asset("/assets/shiva-2026.png")} alt="Shiva Kumar" draggable="false" style={{ width: "100%", display: "block", pointerEvents: "none" }} />
              {" "}
            </div>
            {" "}
            <div
              data-m="dragphoto"
              onPointerDown={v.onDragStart}
              data-drag="b"
              data-slide="r"
              style={css(`position:absolute;left:${v.pBx ?? ""}px;top:${v.pBy ?? ""}px;z-index:2;width:clamp(150px,17cqw,230px);touch-action:none;cursor:grab;transform:rotate(5deg);box-shadow:0 22px 48px rgba(0,0,0,0.34);background:#ffffff`)}
            >
              {" "}
              <img src={asset("/assets/workplace.png")} alt="My Work Place" draggable="false" style={{ width: "100%", display: "block", pointerEvents: "none" }} />
              {" "}
            </div>
            {" "}
            <span style={{ position: "relative", display: "inline-block", padding: "10px 18px", outline: "2px solid #ffffff" }}>
              {" "}
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "32px", fontWeight: "500", textTransform: "none", color: "#FFFFFF", letterSpacing: "1px" }}>
                what's up
              </span>
              {" "}
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-7px", top: "-7px", width: "14px", height: "14px", border: "2px solid #ffffff", background: "#000000" }}
              />
              {" "}
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-7px", top: "-7px", width: "14px", height: "14px", border: "2px solid #ffffff", background: "#000000" }}
              />
              {" "}
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "-7px", bottom: "-7px", width: "14px", height: "14px", border: "2px solid #ffffff", background: "#000000" }}
              />
              {" "}
              <span
                aria-hidden="true"
                style={{ position: "absolute", right: "-7px", bottom: "-7px", width: "14px", height: "14px", border: "2px solid #ffffff", background: "#000000" }}
              />
              {" "}
            </span>
            <div
              style={{ marginTop: "30px", position: "relative", zIndex: "3", flex: "none", minHeight: "0", display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", maxWidth: "min(717px,100%)", textAlign: "center", pointerEvents: "none" }}
            >
              {" "}
              <p
                data-m="revealtext"
                style={{ margin: "0", fontFamily: "'Montserrat',sans-serif", fontSize: "60px", fontWeight: "500", lineHeight: "1.25", letterSpacing: "-0.02em", color: "#FFFFFF", textWrap: "pretty", width: "100%", maxWidth: "717px" }}
              >
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  I{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 12ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  am S
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 24ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  hiva{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 36ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  a P
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 48ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  roduct D
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 60ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  esigner{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 72ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  in{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 84ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  Gurugram{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 96ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  who{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 108ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  gets{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 120ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  excited{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 132ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  about{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 144ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  making{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 156ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  complicated{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 168ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  things{" "}
                </span>
                <span
                  style={{ display: "inline-block", whiteSpace: "pre", opacity: "1", transform: "translateY(0px)", filter: "blur(0px)", transition: "opacity 0.45s 180ms, transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1), filter 0.45s" }}
                >
                  simple
                </span>
              </p>
              {" "}
            </div>
          </section>
          <section
            id="work"
            style={{ borderBottom: "2px solid var(--rule)", backgroundImage: "radial-gradient(circle, var(--soft) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px" }}
          >
            {" "}
            <div
              style={{ padding: "clamp(70px,8cqw,120px) var(--gut) clamp(26px,4cqw,52px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}
            >
              {" "}
              <span style={{ fontFamily: "Montserrat", fontSize: "32px", fontWeight: "300", color: "var(--dim)", lineHeight: "1", transform: "rotate(-3deg)" }}>
                explore my work!
              </span>
              {" "}
              <span style={{ position: "relative", display: "inline-block", padding: "26px 32px", outline: "2px solid #ffffff", outlineOffset: "0" }}>
                {" "}
                <h2
                  style={{ margin: "0", fontFamily: "'Montserrat',sans-serif", fontSize: "70px", fontWeight: "600", letterSpacing: "0.02em", lineHeight: "0.95", textTransform: "none", color: "#FFFFFF" }}
                >
                  Featured
                  <br />
                  works
                </h2>
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", right: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", right: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
              </span>
              <span
                style={{ background: "#F3E2A9", color: "#201e1d", fontFamily: "'Montserrat',sans-serif", fontSize: "16px", fontWeight: "500", lineHeight: "1.5", padding: "12px 16px", maxWidth: "34ch", transform: "rotate(-1deg)", boxShadow: "0 12px 30px rgba(0,0,0,0.28)", width: "327px", height: "70px" }}
              >
                This is a showcase of what happens when curiosity drives the process.
              </span>
              {" "}
            </div>
            {" "}
            <div data-m="workstack" style={{ padding: "30px var(--gut) clamp(70px,8cqw,120px)", display: "block" }}>
              {" "}
              <article
                data-m="workrow"
                style={{ position: "sticky", top: "70px", zIndex: "1", marginBottom: "clamp(140px,22vh,240px)", outline: "2px solid #111111", background: "#22BDE8", color: "#0B1F26", boxShadow: "0 -18px 44px rgba(0,0,0,0.32)" }}
              >
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "-30px", height: "30px", background: "#22BDE8", padding: "0 20px 0 22px", display: "flex", alignItems: "center", gap: "8px", clipPath: "polygon(0 0,calc(100% - 22px) 0,100% 100%,0 100%)" }}
                >
                  {" "}
                  <span
                    style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.18em", color: "#0B1F26", fontVariantNumeric: "tabular-nums" }}
                  >
                    PROJECT 01
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  data-m="cardgrid"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(0,1.08fr)", gap: "clamp(20px,3cqw,44px)", alignItems: "center", padding: "clamp(28px,3.2cqw,46px)" }}
                >
                  {" "}
                  <div data-m="cardbody" style={{ display: "flex", flexDirection: "column", minWidth: "0", gap: "clamp(14px,1.6cqw,22px)" }}>
                    {" "}
                    <h3
                      style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,5cqw,64px)", fontWeight: "400", letterSpacing: "-0.015em", lineHeight: "1", margin: "0", color: "#0B1F26" }}
                    >
                      Engage X
                    </h3>
                    {" "}
                    <p
                      style={{ margin: "0", maxWidth: "34ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(15px,1.5cqw,20px)", fontWeight: "400", lineHeight: "1.35", color: "#0B1F26" }}
                    >
                      A unified campaign lifecycle manager
                    </p>
                    {" "}
                    <a
                      href={href("/work/engage-x/")}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "#0B1F26", color: "#22BDE8", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", padding: "13px 18px", transition: "opacity .2s ease" }}
                      className="home-hover-1"
                    >
                      View project{" "}
                      <span style={{ fontSize: "15px", lineHeight: "1" }}>
                        →
                      </span>
                    </a>
                    {" "}
                    <div data-m="cardtags" style={{ marginTop: "clamp(26px,4cqw,62px)", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#0B1F26", color: "#22BDE8", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#0B1F26", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Martech
                      </span>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#0B1F26", color: "#22BDE8", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#0B1F26", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        CPaaS
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-m="cardmedia" style={{ position: "relative", minWidth: "0", padding: "9px" }}>
                    {" "}
                    <div style={{ position: "relative", outline: "2px solid #1473E6", minHeight: "clamp(230px,28cqw,400px)", overflow: "hidden", background: "var(--panel)" }}>
                      {" "}
                      <ImageSlot id="work-card-1" shape="rect" radius="0" placeholder="Drop product imagery" />
                      {" "}
                      <span
                        data-m="jpgchip"
                        style={{ position: "absolute", right: "14px", top: "14px", display: "flex", alignItems: "center", gap: "9px", background: "#FFFFFF", padding: "8px 12px", pointerEvents: "none" }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", background: "#1473E6", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontSize: "8px", fontWeight: "700" }}
                        >
                          JPG
                        </span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: "#111111" }}>
                          IMAGE.JPG
                        </span>
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article
                data-m="workrow"
                style={{ position: "sticky", top: "118px", zIndex: "2", marginBottom: "clamp(140px,22vh,240px)", background: "#111111", color: "#FFFFFF", boxShadow: "0 -18px 44px rgba(0,0,0,0.32)" }}
              >
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "-30px", height: "30px", background: "#111111", padding: "0 20px 0 22px", display: "flex", alignItems: "center", gap: "8px", clipPath: "polygon(0 0,calc(100% - 22px) 0,100% 100%,0 100%)" }}
                >
                  {" "}
                  <span
                    style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.18em", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}
                  >
                    PROJECT 02
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  data-m="cardgrid"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(0,1.08fr)", gap: "clamp(20px,3cqw,44px)", alignItems: "center", padding: "clamp(28px,3.2cqw,46px)" }}
                >
                  {" "}
                  <div data-m="cardbody" style={{ display: "flex", flexDirection: "column", minWidth: "0", gap: "clamp(14px,1.6cqw,22px)" }}>
                    {" "}
                    <h3
                      style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,5cqw,64px)", fontWeight: "400", letterSpacing: "-0.015em", lineHeight: "1", margin: "0", color: "#FFFFFF" }}
                    >
                      Price simplification
                    </h3>
                    {" "}
                    <p
                      style={{ margin: "0", maxWidth: "34ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(15px,1.5cqw,20px)", fontWeight: "400", lineHeight: "1.35", color: "#FFFFFF" }}
                    >
                      Clearer DTH packs, priced so they compare
                    </p>
                    {" "}
                    <a
                      href={href("/work/dth-price-simplification/")}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "#FFFFFF", color: "#111111", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", padding: "13px 18px", transition: "opacity .2s ease" }}
                      className="home-hover-1"
                    >
                      View project{" "}
                      <span style={{ fontSize: "15px", lineHeight: "1" }}>
                        →
                      </span>
                    </a>
                    {" "}
                    <div data-m="cardtags" style={{ marginTop: "clamp(26px,4cqw,62px)", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#111111", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#FFFFFF", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Telecom
                      </span>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#111111", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#FFFFFF", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Pricing UX
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-m="cardmedia" style={{ position: "relative", minWidth: "0", padding: "9px" }}>
                    {" "}
                    <div style={{ position: "relative", outline: "2px solid #1473E6", minHeight: "clamp(230px,28cqw,400px)", overflow: "hidden", background: "var(--panel)" }}>
                      {" "}
                      <ImageSlot id="work-card-2" shape="rect" radius="0" placeholder="Drop product imagery" />
                      {" "}
                      <span
                        data-m="jpgchip"
                        style={{ position: "absolute", right: "14px", top: "14px", display: "flex", alignItems: "center", gap: "9px", background: "#FFFFFF", padding: "8px 12px", pointerEvents: "none" }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", background: "#1473E6", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontSize: "8px", fontWeight: "700" }}
                        >
                          JPG
                        </span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: "#111111" }}>
                          IMAGE.JPG
                        </span>
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article
                data-m="workrow"
                style={{ position: "sticky", top: "166px", zIndex: "3", marginBottom: "clamp(140px,22vh,240px)", outline: "2px solid #111111", background: "#51834A", color: "#FFFFFF", boxShadow: "0 -18px 44px rgba(0,0,0,0.32)" }}
              >
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "-30px", height: "30px", background: "#51834A", padding: "0 20px 0 22px", display: "flex", alignItems: "center", gap: "8px", clipPath: "polygon(0 0,calc(100% - 22px) 0,100% 100%,0 100%)" }}
                >
                  {" "}
                  <span
                    style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.18em", color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}
                  >
                    PROJECT 03
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  data-m="cardgrid"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(0,1.08fr)", gap: "clamp(20px,3cqw,44px)", alignItems: "center", padding: "clamp(28px,3.2cqw,46px)" }}
                >
                  {" "}
                  <div data-m="cardbody" style={{ display: "flex", flexDirection: "column", minWidth: "0", gap: "clamp(14px,1.6cqw,22px)" }}>
                    {" "}
                    <h3
                      style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,5cqw,64px)", fontWeight: "400", letterSpacing: "-0.015em", lineHeight: "1", margin: "0", color: "#FFFFFF" }}
                    >
                      Bijak Web Design System
                    </h3>
                    {" "}
                    <p
                      style={{ margin: "0", maxWidth: "34ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(15px,1.5cqw,20px)", fontWeight: "400", lineHeight: "1.35", color: "#FFFFFF" }}
                    >
                      Foundations and components for Bijak on the web
                    </p>
                    {" "}
                    <a
                      href={href("/work/bijak-design-system/")}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "#FFFFFF", color: "#1F3A1C", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", padding: "13px 18px", transition: "opacity .2s ease" }}
                      className="home-hover-1"
                    >
                      View project{" "}
                      <span style={{ fontSize: "15px", lineHeight: "1" }}>
                        →
                      </span>
                    </a>
                    {" "}
                    <div data-m="cardtags" style={{ marginTop: "clamp(26px,4cqw,62px)", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#51834A", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#FFFFFF", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Design system
                      </span>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#FFFFFF", color: "#51834A", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#FFFFFF", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Agritech
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-m="cardmedia" style={{ position: "relative", minWidth: "0", padding: "9px" }}>
                    {" "}
                    <div style={{ position: "relative", outline: "2px solid #1473E6", minHeight: "clamp(230px,28cqw,400px)", overflow: "hidden", background: "var(--panel)" }}>
                      {" "}
                      <ImageSlot id="work-card-bijak" shape="rect" radius="0" placeholder="Drop product imagery" />
                      {" "}
                      <span
                        data-m="jpgchip"
                        style={{ position: "absolute", right: "14px", top: "14px", display: "flex", alignItems: "center", gap: "9px", background: "#FFFFFF", padding: "8px 12px", pointerEvents: "none" }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", background: "#1473E6", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontSize: "8px", fontWeight: "700" }}
                        >
                          JPG
                        </span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: "#111111" }}>
                          IMAGE.JPG
                        </span>
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article
                data-m="workrow"
                style={{ position: "sticky", top: "214px", zIndex: "4", marginBottom: "clamp(140px,22vh,240px)", outline: "2px solid #111111", background: "#EFB420", color: "#211705", boxShadow: "0 -18px 44px rgba(0,0,0,0.32)" }}
              >
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "-30px", height: "30px", background: "#EFB420", padding: "0 20px 0 22px", display: "flex", alignItems: "center", gap: "8px", clipPath: "polygon(0 0,calc(100% - 22px) 0,100% 100%,0 100%)" }}
                >
                  {" "}
                  <span
                    style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.18em", color: "#211705", fontVariantNumeric: "tabular-nums" }}
                  >
                    PROJECT 04
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  data-m="cardgrid"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(0,1.08fr)", gap: "clamp(20px,3cqw,44px)", alignItems: "center", padding: "clamp(28px,3.2cqw,46px)" }}
                >
                  {" "}
                  <div data-m="cardbody" style={{ display: "flex", flexDirection: "column", minWidth: "0", gap: "clamp(14px,1.6cqw,22px)" }}>
                    {" "}
                    <h3
                      style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,5cqw,64px)", fontWeight: "400", letterSpacing: "-0.015em", lineHeight: "1", margin: "0", color: "#211705" }}
                    >
                      Toffee Seller App
                    </h3>
                    {" "}
                    <p
                      style={{ margin: "0", maxWidth: "34ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(15px,1.5cqw,20px)", fontWeight: "400", lineHeight: "1.35", color: "#211705" }}
                    >
                      Insurance App for cycle insurance
                    </p>
                    {" "}
                    <a
                      href={href("/work/toffee-seller-app/")}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "#211705", color: "#EFB420", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", padding: "13px 18px", transition: "opacity .2s ease" }}
                      className="home-hover-1"
                    >
                      View project{" "}
                      <span style={{ fontSize: "15px", lineHeight: "1" }}>
                        →
                      </span>
                    </a>
                    {" "}
                    <div data-m="cardtags" style={{ marginTop: "clamp(26px,4cqw,62px)", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#211705", color: "#EFB420", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#211705", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Insurtech
                      </span>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#211705", color: "#EFB420", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#211705", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        0 → 1
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-m="cardmedia" style={{ position: "relative", minWidth: "0", padding: "9px" }}>
                    {" "}
                    <div style={{ position: "relative", outline: "2px solid #1473E6", minHeight: "clamp(230px,28cqw,400px)", overflow: "hidden", background: "var(--panel)" }}>
                      {" "}
                      <ImageSlot id="work-card-3" shape="rect" radius="0" placeholder="Drop product imagery" />
                      {" "}
                      <span
                        data-m="jpgchip"
                        style={{ position: "absolute", right: "14px", top: "14px", display: "flex", alignItems: "center", gap: "9px", background: "#FFFFFF", padding: "8px 12px", pointerEvents: "none" }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", background: "#1473E6", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontSize: "8px", fontWeight: "700" }}
                        >
                          JPG
                        </span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: "#111111" }}>
                          IMAGE.JPG
                        </span>
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
              <article
                data-m="workrow"
                style={{ position: "sticky", top: "262px", zIndex: "5", outline: "2px solid #111111", background: "#D97757", color: "#1F1410", boxShadow: "0 -18px 44px rgba(0,0,0,0.32)" }}
              >
                {" "}
                <div
                  style={{ position: "absolute", left: "0", top: "-30px", height: "30px", background: "#D97757", padding: "0 20px 0 22px", display: "flex", alignItems: "center", gap: "8px", clipPath: "polygon(0 0,calc(100% - 22px) 0,100% 100%,0 100%)" }}
                >
                  {" "}
                  <span
                    style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "10px", fontWeight: "700", letterSpacing: "0.18em", color: "#1F1410", fontVariantNumeric: "tabular-nums" }}
                  >
                    PROJECT 05
                  </span>
                  {" "}
                </div>
                {" "}
                <div
                  data-m="cardgrid"
                  style={{ display: "grid", gridTemplateColumns: "minmax(0,0.92fr) minmax(0,1.08fr)", gap: "clamp(20px,3cqw,44px)", alignItems: "center", padding: "clamp(28px,3.2cqw,46px)" }}
                >
                  {" "}
                  <div data-m="cardbody" style={{ display: "flex", flexDirection: "column", minWidth: "0", gap: "clamp(14px,1.6cqw,22px)" }}>
                    {" "}
                    <h3
                      style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,5cqw,64px)", fontWeight: "400", letterSpacing: "-0.015em", lineHeight: "1", margin: "0", color: "#1F1410" }}
                    >
                      Claude Code projects
                    </h3>
                    {" "}
                    <p
                      style={{ margin: "0", maxWidth: "34ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(15px,1.5cqw,20px)", fontWeight: "400", lineHeight: "1.35", color: "#1F1410" }}
                    >
                      Tools and prototypes I build with Claude Code
                    </p>
                    {" "}
                    <a
                      href="#"
                      onClick={v.soon}
                      style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", background: "#1F1410", color: "#D97757", fontFamily: "'Montserrat',sans-serif", fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", padding: "13px 18px", transition: "opacity .2s ease" }}
                      className="home-hover-1"
                    >
                      View project{" "}
                      <span style={{ fontSize: "15px", lineHeight: "1" }}>
                        →
                      </span>
                    </a>
                    {" "}
                    <div data-m="cardtags" style={{ marginTop: "clamp(26px,4cqw,62px)", display: "flex", flexWrap: "wrap", gap: "12px" }}>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#1F1410", color: "#D97757", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#1F1410", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        AI
                      </span>
                      {" "}
                      <span
                        style={{ position: "relative", display: "inline-flex", alignItems: "center", background: "#1F1410", color: "#D97757", fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "500", letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "12px 16px", marginTop: "9px" }}
                      >
                        <span
                          aria-hidden="true"
                          style={{ position: "absolute", left: "0", top: "-9px", height: "9px", width: "54%", background: "#1F1410", clipPath: "polygon(0 0,74% 0,100% 100%,0 100%)" }}
                        />
                        Claude Code
                      </span>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div data-m="cardmedia" style={{ position: "relative", minWidth: "0", padding: "9px" }}>
                    {" "}
                    <div style={{ position: "relative", outline: "2px solid #1473E6", minHeight: "clamp(230px,28cqw,400px)", overflow: "hidden", background: "var(--panel)" }}>
                      {" "}
                      <ImageSlot id="work-card-4" shape="rect" radius="0" placeholder="Drop product imagery" />
                      {" "}
                      <span
                        data-m="jpgchip"
                        style={{ position: "absolute", right: "14px", top: "14px", display: "flex", alignItems: "center", gap: "9px", background: "#FFFFFF", padding: "8px 12px", pointerEvents: "none" }}
                      >
                        <span
                          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "22px", height: "22px", background: "#1473E6", color: "#FFFFFF", fontFamily: "'Montserrat',sans-serif", fontSize: "8px", fontWeight: "700" }}
                        >
                          JPG
                        </span>
                        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", color: "#111111" }}>
                          IMAGE.JPG
                        </span>
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", top: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", left: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    <span
                      aria-hidden="true"
                      style={{ position: "absolute", right: "3px", bottom: "3px", width: "12px", height: "12px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                    />
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </article>
              {" "}
            </div>
          </section>
          {" "}
          <section id="experience" style={{ borderBottom: "2px solid var(--rule)" }}>
            {" "}
            <div
              style={{ padding: "clamp(56px,6cqw,96px) var(--gut) clamp(26px,4cqw,52px)", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", textAlign: "center" }}
            >
              {" "}
              <span style={{ fontFamily: "Montserrat", fontSize: "32px", fontWeight: "400", color: "var(--dim)", lineHeight: "1", transform: "rotate(-3deg)" }}>
                where I've been!
              </span>
              {" "}
              <span style={{ position: "relative", display: "inline-block", padding: "26px 32px", outline: "2px solid var(--ink)", outlineOffset: "0" }}>
                {" "}
                <h2
                  style={{ margin: "0", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(34px,6cqw,70px)", fontWeight: "600", letterSpacing: "0.02em", lineHeight: "0.95", color: "var(--ink)" }}
                >
                  9 years of
                  <br />
                  shipped work
                </h2>
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", right: "-13px", top: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", right: "-13px", bottom: "-13px", width: "26px", height: "26px", border: "2.5px solid #ffffff", background: "#000000" }}
                />
                {" "}
              </span>
              {" "}
            </div>
            {" "}
            <div data-m="xlist" style={{ padding: "clamp(10px,2cqw,24px) var(--gut) clamp(64px,7cqw,110px)" }}>
              {" "}
              <div style={{ maxWidth: "1080px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
                {" "}
                <span aria-hidden="true" style={{ display: "block", height: "1px", background: "var(--soft)" }} />
                {" "}
                <div data-reveal="" data-xrow="0" data-xopen={v.x0Open} style={{ position: "relative", transitionDelay: "0ms" }}>
                  {" "}
                  <span data-xsel="1" aria-hidden="true" style={{ position: "absolute", inset: "0", outline: "2px solid #1473E6", pointerEvents: "none" }} />
                  {" "}
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  {" "}
                  <button
                    type="button"
                    data-exp="0"
                    onClick={v.xToggle}
                    aria-expanded={v.x0Aria}
                    data-m="xhead"
                    style={{ appearance: "none", border: "0", background: "transparent", margin: "0", font: "inherit", color: "inherit", textAlign: "left", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px", padding: "26px 22px" }}
                  >
                    {" "}
                    <span
                      data-xname="1"
                      style={{ flex: "1 1 auto", minWidth: "0", fontSize: "clamp(24px,2.8cqw,38px)", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.1", color: "var(--ink)" }}
                    >
                      Airtel
                    </span>
                    {" "}
                    <span data-m="xmeta" style={{ display: "flex", alignItems: "baseline", gap: "22px", flex: "0 0 auto" }}>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "500", color: "var(--ink)" }}>
                        Lead Experience Designer
                      </span>
                      {" "}
                      <span style={{ minWidth: "96px", textAlign: "right", fontSize: "13px", fontWeight: "400", color: "var(--dim)", whiteSpace: "nowrap" }}>
                        2021 — Now
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <svg
                      data-xchev="1"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "0 0 auto", color: "var(--dim)" }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <div data-xbody="1">
                    {" "}
                    <div style={{ overflow: "hidden", minHeight: "0" }}>
                      {" "}
                      <ul
                        data-m="xlistp"
                        style={{ listStyle: "none", margin: "0", padding: "0 22px 28px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "760px" }}
                      >
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Led the end to end UX strategy for Engage X. Transforming fragmented campaign operation into a scalable multi channel platform
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Revamped the IQ Reach platform to help 1M+ users to engage with their customers in an omni channel experience
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Led the redesign of core/new Airtel journeys for Prepaid, Postpaid, DTH, Fiber, Xsafe, and Esim.
                          </span>
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
                <span aria-hidden="true" style={{ display: "block", height: "1px", background: "var(--soft)" }} />
                {" "}
                <div data-reveal="" data-xrow="1" data-xopen={v.x1Open} style={{ position: "relative", transitionDelay: "90ms" }}>
                  {" "}
                  <span data-xsel="1" aria-hidden="true" style={{ position: "absolute", inset: "0", outline: "2px solid #1473E6", pointerEvents: "none" }} />
                  {" "}
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  {" "}
                  <button
                    type="button"
                    data-exp="1"
                    onClick={v.xToggle}
                    aria-expanded={v.x1Aria}
                    data-m="xhead"
                    style={{ appearance: "none", border: "0", background: "transparent", margin: "0", font: "inherit", color: "inherit", textAlign: "left", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px", padding: "26px 22px" }}
                  >
                    {" "}
                    <span
                      data-xname="1"
                      style={{ flex: "1 1 auto", minWidth: "0", fontSize: "clamp(24px,2.8cqw,38px)", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.1", color: "var(--ink)" }}
                    >
                      Bijak
                    </span>
                    {" "}
                    <span data-m="xmeta" style={{ display: "flex", alignItems: "baseline", gap: "22px", flex: "0 0 auto" }}>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "500", color: "var(--ink)" }}>
                        Senior Product Designer
                      </span>
                      {" "}
                      <span style={{ minWidth: "96px", textAlign: "right", fontSize: "13px", fontWeight: "400", color: "var(--dim)", whiteSpace: "nowrap" }}>
                        2020 — 2021
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <svg
                      data-xchev="1"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "0 0 auto", color: "var(--dim)" }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <div data-xbody="1">
                    {" "}
                    <div style={{ overflow: "hidden", minHeight: "0" }}>
                      {" "}
                      <ul
                        data-m="xlistp"
                        style={{ listStyle: "none", margin: "0", padding: "0 22px 28px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "760px" }}
                      >
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Led the design team building Bijak's core features from scratch — mandi rates, referral programme and credit engine — increasing engagement and generating 5M+ in platform revenue.
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Established design guidelines for the Bijak and Just apps, which later grew into a full design system.
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Proposed a vernacular approach to scale the product across India — 2 languages, then 24 — which opened tier 2 and 3 cities and added 2M+ in revenue.
                          </span>
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
                <span aria-hidden="true" style={{ display: "block", height: "1px", background: "var(--soft)" }} />
                {" "}
                <div data-reveal="" data-xrow="2" data-xopen={v.x2Open} style={{ position: "relative", transitionDelay: "180ms" }}>
                  {" "}
                  <span data-xsel="1" aria-hidden="true" style={{ position: "absolute", inset: "0", outline: "2px solid #1473E6", pointerEvents: "none" }} />
                  {" "}
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  {" "}
                  <button
                    type="button"
                    data-exp="2"
                    onClick={v.xToggle}
                    aria-expanded={v.x2Aria}
                    data-m="xhead"
                    style={{ appearance: "none", border: "0", background: "transparent", margin: "0", font: "inherit", color: "inherit", textAlign: "left", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px", padding: "26px 22px" }}
                  >
                    {" "}
                    <span
                      data-xname="1"
                      style={{ flex: "1 1 auto", minWidth: "0", fontSize: "clamp(24px,2.8cqw,38px)", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.1", color: "var(--ink)" }}
                    >
                      Toffee Insurance
                    </span>
                    {" "}
                    <span data-m="xmeta" style={{ display: "flex", alignItems: "baseline", gap: "22px", flex: "0 0 auto" }}>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "500", color: "var(--ink)" }}>
                        Senior UI/UX Designer
                      </span>
                      {" "}
                      <span style={{ minWidth: "96px", textAlign: "right", fontSize: "13px", fontWeight: "400", color: "var(--dim)", whiteSpace: "nowrap" }}>
                        2018 — 2019
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <svg
                      data-xchev="1"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "0 0 auto", color: "var(--dim)" }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <div data-xbody="1">
                    {" "}
                    <div style={{ overflow: "hidden", minHeight: "0" }}>
                      {" "}
                      <ul
                        data-m="xlistp"
                        style={{ listStyle: "none", margin: "0", padding: "0 22px 28px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "760px" }}
                      >
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Designed the end-to-end experience for the Toffee Insurance seller app and website. The seller app enabled users to sell 30% more insurance monthly.
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Revamped the claims process. The improved journey let customers self-serve on the platform, reducing settlement time from weeks to days.
                          </span>
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
                <span aria-hidden="true" style={{ display: "block", height: "1px", background: "var(--soft)" }} />
                {" "}
                <div data-reveal="" data-xrow="3" data-xopen={v.x3Open} style={{ position: "relative", transitionDelay: "270ms" }}>
                  {" "}
                  <span data-xsel="1" aria-hidden="true" style={{ position: "absolute", inset: "0", outline: "2px solid #1473E6", pointerEvents: "none" }} />
                  {" "}
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", top: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  <span
                    data-xh="1"
                    aria-hidden="true"
                    style={{ position: "absolute", right: "-6px", bottom: "-6px", width: "10px", height: "10px", background: "#FFFFFF", border: "2px solid #1473E6" }}
                  />
                  {" "}
                  <button
                    type="button"
                    data-exp="3"
                    onClick={v.xToggle}
                    aria-expanded={v.x3Aria}
                    data-m="xhead"
                    style={{ appearance: "none", border: "0", background: "transparent", margin: "0", font: "inherit", color: "inherit", textAlign: "left", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", gap: "24px", padding: "26px 22px" }}
                  >
                    {" "}
                    <span
                      data-xname="1"
                      style={{ flex: "1 1 auto", minWidth: "0", fontSize: "clamp(24px,2.8cqw,38px)", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.1", color: "var(--ink)" }}
                    >
                      BYO
                    </span>
                    {" "}
                    <span data-m="xmeta" style={{ display: "flex", alignItems: "baseline", gap: "22px", flex: "0 0 auto" }}>
                      {" "}
                      <span style={{ fontSize: "15px", fontWeight: "500", color: "var(--ink)" }}>
                        UI/UX Designer
                      </span>
                      {" "}
                      <span style={{ minWidth: "96px", textAlign: "right", fontSize: "13px", fontWeight: "400", color: "var(--dim)", whiteSpace: "nowrap" }}>
                        2017 — 2018
                      </span>
                      {" "}
                    </span>
                    {" "}
                    <svg
                      data-xchev="1"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ flex: "0 0 auto", color: "var(--dim)" }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {" "}
                  </button>
                  {" "}
                  <div data-xbody="1">
                    {" "}
                    <div style={{ overflow: "hidden", minHeight: "0" }}>
                      {" "}
                      <ul
                        data-m="xlistp"
                        style={{ listStyle: "none", margin: "0", padding: "0 22px 28px", display: "flex", flexDirection: "column", gap: "12px", maxWidth: "760px" }}
                      >
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Redesigned the UX across multiple screens of the BYO app and implemented gamification strategies.
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Created over 500 icons — colour and line versions — for the app and website.
                          </span>
                        </li>
                        {" "}
                        <li data-xitem="1" style={{ display: "flex", gap: "14px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--dim)", textWrap: "pretty" }}>
                          <span aria-hidden="true" style={{ flex: "0 0 auto", width: "6px", height: "6px", marginTop: "9px", background: "#1473E6" }} />
                          <span>
                            Designed multiple landing pages for product campaigns.
                          </span>
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
                <span aria-hidden="true" style={{ display: "block", height: "1px", background: "var(--soft)" }} />
                {" "}
                <a
                  data-reveal=""
                  href={asset("/assets/Shiva_Kumar_Resume.pdf")}
                  download=""
                  data-xres="1"
                  style={{ alignSelf: "center", marginTop: "clamp(40px,5cqw,64px)", display: "inline-flex", alignItems: "center", gap: "12px", background: "#1473E6", color: "#FFFFFF", textDecoration: "none", padding: "15px 24px", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  className="home-hover-2"
                >
                  {" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 15V3" />
                    <path d="m7 10 5 5 5-5" />
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  </svg>
                  {" "}Download resume{" "}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <section
            id="contact"
            style={{ position: "relative", overflow: "hidden", backgroundImage: "radial-gradient(circle, var(--soft) 1.3px, transparent 1.3px)", backgroundSize: "28px 28px", backgroundPosition: "-14px -14px" }}
          >
            {" "}
            <div
              style={{ padding: "clamp(80px,9cqw,140px) var(--gut) clamp(50px,6cqw,90px)", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,5cqw,70px)", alignItems: "center" }}
            >
              {" "}
              <div data-m="blob" style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                <svg
                  ref={v.blobRef}
                  viewBox="0 0 30 30"
                  width="100%"
                  style={{ maxWidth: "300px", height: "auto", display: "block", overflow: "visible", cursor: "grab", touchAction: "none", willChange: "transform" }}
                  aria-hidden="true"
                >
                  {" "}
                  <path d="M0 0H15L15 15C6.71573 15 0 8.28427 0 0Z" fill="#F7D158" />
                  {" "}
                  <path d="M30 0V15L15 15C15 6.71573 21.7157 0 30 0Z" fill="#F7D158" />
                  {" "}
                  <path d="M15 15L15 30L30 30C30 21.7157 23.2843 15 15 15Z" fill="#F7D158" />
                  {" "}
                  <path d="M0 30V15L15 15C15 23.2843 8.28427 30 0 30Z" fill="#F7D158" />
                  {" "}
                </svg>
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {" "}
                <h2
                  style={{ margin: "0", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(40px,7cqw,96px)", fontWeight: "700", letterSpacing: "-0.04em", lineHeight: "0.95", textTransform: "uppercase", color: "#FFFFFF" }}
                >
                  Let's talk
                </h2>
                {" "}
                <p
                  style={{ margin: "0", maxWidth: "46ch", fontFamily: "'Montserrat',sans-serif", fontSize: "clamp(14px,1.4cqw,18px)", fontWeight: "400", lineHeight: "1.55", color: "var(--dim)" }}
                >
                  I'm most energized by projects where I can dig into complex problems, collaborate with smart people, and ship things that genuinely improve someone's day.
                </p>
                {" "}
                <form onSubmit={v.cfSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "18px", marginTop: "10px", maxWidth: "560px" }}>
                  {" "}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "18px" }}>
                    {" "}
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {" "}
                      <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)" }}>
                        Your name
                      </span>
                      {" "}
                      <input
                        data-cf="1"
                        name="name"
                        type="text"
                        placeholder="Jane Doe"
                        value={v.cf_name}
                        onChange={v.cfSet}
                        required
                        style={{ boxSizing: "border-box", width: "100%", height: "52px", background: "transparent", border: "2px solid var(--rule)", borderRadius: "0", padding: "0 16px", fontFamily: "'Montserrat',sans-serif", fontSize: "15px", color: "var(--ink)", outline: "none", transition: "border-color .25s ease, box-shadow .25s ease" }}
                        className="home-focus-3"
                      />
                      {" "}
                    </label>
                    {" "}
                    <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {" "}
                      <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)" }}>
                        Your email
                      </span>
                      {" "}
                      <input
                        data-cf="1"
                        name="email"
                        type="email"
                        placeholder="jane@company.com"
                        value={v.cf_email}
                        onChange={v.cfSet}
                        required
                        style={{ boxSizing: "border-box", width: "100%", height: "52px", background: "transparent", border: "2px solid var(--rule)", borderRadius: "0", padding: "0 16px", fontFamily: "'Montserrat',sans-serif", fontSize: "15px", color: "var(--ink)", outline: "none", transition: "border-color .25s ease, box-shadow .25s ease" }}
                        className="home-focus-3"
                      />
                      {" "}
                    </label>
                    {" "}
                  </div>
                  {" "}
                  <label style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {" "}
                    <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)" }}>
                      Description
                    </span>
                    {" "}
                    <textarea
                      data-cf="1"
                      name="message"
                      rows={4}
                      placeholder="Tell me about the project, team or role"
                      value={v.cf_msg}
                      onChange={v.cfSet}
                      required
                      style={{ boxSizing: "border-box", width: "100%", resize: "vertical", minHeight: "120px", background: "transparent", border: "2px solid var(--rule)", borderRadius: "0", padding: "14px 16px", fontFamily: "'Montserrat',sans-serif", fontSize: "15px", lineHeight: "1.5", color: "var(--ink)", outline: "none", transition: "border-color .25s ease, box-shadow .25s ease" }}
                      className="home-focus-3"
                    />
                    {" "}
                  </label>
                  {" "}
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                    {" "}
                    <button
                      type="submit"
                      data-cfbtn="1"
                      style={{ appearance: "none", border: "0", borderRadius: "0", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "12px", background: "#1473E6", color: "#FFFFFF", padding: "16px 26px", fontFamily: "'Montserrat',sans-serif", fontSize: "13px", fontWeight: "600", letterSpacing: "0.08em", textTransform: "uppercase", transition: "background .25s ease, transform .15s ease" }}
                      className={["home-hover-4", "home-active-5"].join(' ')}
                    >
                      {" "}Submit{" "}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                      {" "}
                    </button>
                    {" "}
                    <span role="status" aria-live="polite" data-cfmsg={v.cfTone} style={{ fontSize: "13px", fontWeight: "500", color: "var(--dim)" }}>
                      {v.cfMsg}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </form>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </section>
          {" "}
          <footer
            style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", padding: "22px var(--gut)", borderTop: "2px solid var(--rule)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dim)" }}
          >
            {" "}
            <span>
              Shiva Kumar — Portfolio 2026
            </span>
            {" "}
            <span>
              Lead Experience Designer, AI enabled
            </span>
            {" "}
          </footer>
        </div>
      </div>
      <div
        data-soon={v.soonShow}
        role="status"
        aria-live="polite"
        style={{ position: "fixed", left: "50%", bottom: "96px", zIndex: "200", display: "flex", alignItems: "center", gap: "12px", background: "#0B1F26", color: "#FFFFFF", border: "2px solid #22BDE8", padding: "14px 22px", fontFamily: "'Montserrat',sans-serif", fontSize: "14px", fontWeight: "600", pointerEvents: "none", transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(.2,.9,.3,1.3)" }}
      >
        <span style={{ width: "8px", height: "8px", background: "#22BDE8" }} />
        Case study coming soon
      </div>
      <DockNav />
    </>
  );
}
