// Ported from design-reference/design/Side Hustle.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SideHustleView({ v }: { v: any }) {
  return (
    <>
      <div
        data-screen-label="Side Hustle"
        style={{ minHeight: "100vh", background: "#1c1c1c", color: "#f5f5f5", padding: "0 clamp(20px,5vw,40px) clamp(64px,8vw,120px)" }}
      >
        {" "}
        <div style={{ maxWidth: "1040px", margin: "0 auto" }}>
          {" "}
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: "clamp(24px,5vw,56px)" }}>
            {" "}
            <a
              href={href("/")}
              aria-label="Close"
              style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#2a2a2a", border: "1.5px solid #444", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}
              className="side-hustle-hover-0"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2l18 18M20 2 2 20" />
              </svg>
            </a>
            {" "}
          </div>
          {" "}
          <h1 style={{ margin: "clamp(8px,2vw,24px) 0 0", fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff" }}>
            Side Hustle
          </h1>
          {" "}
          <div
            style={{ marginTop: "clamp(28px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,230px),1fr))", gap: "clamp(16px,2vw,24px)" }}
          >
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-books.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Book Worm
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Learning, one book at a time
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-gym.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Gymming
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Strong body, clear mind
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-automation.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Automation Expert
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Building my digital team
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-gaming.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Gaming
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Respawn, retry, repeat
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-projection.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Projection Mapping
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Painting with light
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "243/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/h-dj.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "14% 20%", width: "60%", height: "72%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ padding: "18px 20px 20px" }}>
                {" "}
                <h2 style={{ margin: "0", fontSize: "17px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                  Djing
                </h2>
                {" "}
                <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.4", color: "#c9c9c9" }}>
                  Mixing beats after hours
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      </div>
    </>
  );
}
