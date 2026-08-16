import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import { type BlogPost } from "@/app/data/blog";

function chrome(name: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "_ported", `${name}.html`),
    "utf8"
  );
}

// Renders [label](href) markdown links inside paragraph text. Internal hrefs
// (starting with /) render as normal anchors; external links open in a new tab.
function renderInline(text: string): ReactNode {
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith("/") ? (
        <a key={m.index} href={href}>
          {label}
        </a>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (parts.length === 0) return text;
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Category -> the practice it maps to, for the end-of-article block.
const practiceByCategory: Record<
  string,
  { href: string; label: string; need: string }
> = {
  Architecture: {
    href: "/services#architecture",
    label: "Architecture & landing zones",
    need: "Architecture review",
  },
  DevSecOps: {
    href: "/services#devsecops",
    label: "DevSecOps",
    need: "DevSecOps & automation",
  },
  Automation: {
    href: "/services#automation",
    label: "Automation & AI-assisted operations",
    need: "DevSecOps & automation",
  },
  FinOps: {
    href: "/services#finops",
    label: "FinOps & cost governance",
    need: "Cost governance",
  },
  Engineering: {
    href: "/services",
    label: "our practices",
    need: "Architecture review",
  },
};

function fmtDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleClient({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const practice =
    practiceByCategory[post.category] ?? practiceByCategory.Engineering;

  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: chrome("chrome-header-insights") }}
      />
      <main id="top">
        <div className="article-wrap">
          <article className="article">
            <a className="back" href="/insights">
              ← Insights
            </a>
            <h1>{post.title}</h1>
            <div className="ameta">
              <span className="cat">{post.category}</span>
              <span>·</span>
              <span>{fmtDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <div className="body">
              {post.sections.map((section, si) => (
                <div key={si}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((para, pi) => (
                    <p key={pi}>{renderInline(para)}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="endblock">
              <p>
                This is work we do:{" "}
                <a className="link" href={practice.href}>
                  {practice.label}
                </a>
                .
              </p>
              <div className="cta">
                <a
                  className="btn btn-primary"
                  href={`/contact?need=${encodeURIComponent(practice.need)}`}
                >
                  Talk to an engineer
                </a>
              </div>
            </div>

            {related.length > 0 && (
              <div className="more">
                <h2>More insights</h2>
                <ol className="ilist">
                  {related.map((rp) => (
                    <li key={rp.slug} data-cat={rp.category}>
                      <a href={`/insights/${rp.slug}`}>
                        <span className="imeta">
                          {rp.category} · {fmtDate(rp.date)} · {rp.readTime}
                        </span>
                        <span className="ititle">{rp.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </article>
        </div>
      </main>
      <div dangerouslySetInnerHTML={{ __html: chrome("chrome-footer") }} />
    </>
  );
}
