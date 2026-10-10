// Ported from design-reference/design/Tools I Use.dc.html by scripts/convert-dc.mjs.
/* eslint-disable */
import { Fragment } from 'react';
import { asset, href, css } from '@/lib/dc';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToolsView({ v }: { v: any }) {
  return (
    <>
      <div
        data-screen-label="Tools I use"
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
              className="tools-hover-0"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M2 2l18 18M20 2 2 20" />
              </svg>
            </a>
            {" "}
          </div>
          {" "}
          <h1 style={{ margin: "clamp(8px,2vw,24px) 0 0", fontSize: "clamp(36px,4.6vw,58px)", lineHeight: "1.15", fontWeight: "600", color: "#ffffff" }}>
            Tools I use
          </h1>
          {" "}
          <div style={{ marginTop: "clamp(28px,4vw,48px)", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,440px),1fr))", gap: "20px" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Design
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Figma
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  UI design, prototyping and design systems.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-figma.svg")} alt="Figma" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Documentation
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Notion
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  Research notes, planning and documentation.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-notion.png")} alt="Notion" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Sprint
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Jira
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  Sprint planning, task tracking and team collaboration.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-jira.svg")} alt="Jira" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Code Repository
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Github
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  Hosting side projects and shipping code with AI.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-github.svg")} alt="Github" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Harness
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Lottie Animation
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  Micro-interactions, animated icons and motion design.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-lottie.svg")} alt="Lottie Animation" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Harness
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Spline 3D
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  3D modelling, interactions and animated characters
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-spline.png")} alt="Spline 3D" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  Harness
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Higgsfield Media
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  AI video generation, motion and creative experiments
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-higgsfield-2.png")} alt="Higgsfield Media" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", borderRadius: "18px", background: "#2e2e2e" }}>
              {" "}
              <div style={{ flex: "1", minWidth: "0" }}>
                {" "}
                <span
                  style={{ display: "inline-flex", alignItems: "center", height: "28px", padding: "0 12px", border: "1.5px solid #555", borderRadius: "999px", fontSize: "13px", fontWeight: "600", color: "#e8e8e8" }}
                >
                  LLM
                </span>
                {" "}
                <h2 style={{ margin: "12px 0 0", fontSize: "clamp(20px,1.9vw,22px)", lineHeight: "1.25", fontWeight: "600", color: "#ffffff" }}>
                  Claude
                </h2>
                {" "}
                <p style={{ margin: "6px 0 0", fontSize: "clamp(15px,1.4vw,18px)", lineHeight: "1.4", color: "#c9c9c9", textWrap: "pretty" }}>
                  AI build partner for code, research and ideas.
                </p>
                {" "}
              </div>
              {" "}
              <div
                style={{ flex: "none", width: "clamp(88px,9vw,112px)", aspectRatio: "116/110", borderRadius: "12px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {" "}
                <img src={asset("/assets/v2/t-claude.svg")} alt="Claude" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
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
