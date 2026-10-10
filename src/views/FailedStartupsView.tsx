// Ported from design-reference/design/Failed Startups.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FailedStartupsView({ v }: { v: any }) {
  return (
    <>
      <div
        data-screen-label="Failed Startups"
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
              className="failed-startups-hover-0"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2l18 18M20 2 2 20" />
              </svg>
            </a>
            {" "}
          </div>
          {" "}
          <h1 style={{ margin: "clamp(8px,2vw,24px) 0 0", fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff" }}>
            Failed Startups
          </h1>
          {" "}
          <div style={{ marginTop: "clamp(28px,4vw,64px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "20px" }}>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "333/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/f-sfed.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "8% 20%", width: "60%", height: "84%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "18px 20px" }}>
                {" "}
                <img
                  src={asset("/assets/v2/logo-sfed.png")}
                  alt="SFED logo"
                  style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block", background: "#d9d9d9" }}
                />
                {" "}
                <div style={{ minWidth: "0" }}>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                    SFED
                  </h2>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.4", color: "#c9c9c9" }}>
                    2019 - 2020
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "333/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/f-neon.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "8% 20%", width: "60%", height: "84%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "18px 20px" }}>
                {" "}
                <img
                  src={asset("/assets/v2/logo-neon.png")}
                  alt="Neon Central logo"
                  style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block", background: "#d9d9d9" }}
                />
                {" "}
                <div style={{ minWidth: "0" }}>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                    Neon Central
                  </h2>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.4", color: "#c9c9c9" }}>
                    2022-2023
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "333/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/f-content.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "8% 20%", width: "60%", height: "84%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "18px 20px" }}>
                {" "}
                <img
                  src={asset("/assets/v2/logo-content.png")}
                  alt="Content Creation logo"
                  style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block", background: "#d9d9d9" }}
                />
                {" "}
                <div style={{ minWidth: "0" }}>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                    Content Creation
                  </h2>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.4", color: "#c9c9c9" }}>
                    2023
                  </p>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", flexDirection: "column", borderRadius: "16px", overflow: "hidden", background: "#2e2e2e" }}>
              {" "}
              <div style={{ position: "relative", aspectRatio: "333/150", background: "#4a4a4a" }}>
                {" "}
                <img
                  src={asset("/assets/v2/f-bakery.svg")}
                  alt=""
                  style={{ position: "absolute", inset: "8% 20%", width: "60%", height: "84%", objectFit: "contain", display: "block" }}
                />
                {" "}
              </div>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "18px", padding: "18px 20px" }}>
                {" "}
                <img
                  src={asset("/assets/v2/logo-bakery.png")}
                  alt="Big fat Bakery logo"
                  style={{ flex: "none", width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", display: "block", background: "#d9d9d9" }}
                />
                {" "}
                <div style={{ minWidth: "0" }}>
                  {" "}
                  <h2 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "600", color: "#ffffff" }}>
                    Big fat Bakery
                  </h2>
                  {" "}
                  <p style={{ margin: "6px 0 0", fontSize: "15px", lineHeight: "1.4", color: "#c9c9c9" }}>
                    2024
                  </p>
                  {" "}
                </div>
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
