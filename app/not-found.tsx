import Link from "next/link"

export default function NotFound() {
  return (
    <div style={{ margin: 0, padding: 0, background: "#0a0610", color: "#fff", fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: 700, margin: "0 0 1rem" }}>404</h1>
        <p style={{ fontSize: "1.25rem", color: "#aaa", marginBottom: "2rem" }}>This page doesn&apos;t exist.</p>
        <Link href="/" style={{ color: "#e05a2b", textDecoration: "none", fontWeight: 600 }}>Go home</Link>
      </div>
    </div>
  )
}
