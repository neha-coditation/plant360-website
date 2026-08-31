"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import styles from "./NewsletterForm.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";

/**
 * Newsletter signup form. Client-only. Posts JSON to a configurable endpoint;
 * if no endpoint is set or the request fails, it falls back to asking the
 * visitor to email the site address. Includes a honeypot field for bots.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot, must stay empty
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Bot filled the hidden field: abort silently by pretending success.
    if (company) {
      setStatus("success");
      return;
    }

    if (!ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter-page" }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.notice} role="status">
        <p className={styles.noticeTitle}>You are subscribed.</p>
        <p className={styles.noticeBody}>
          Watch your inbox for the next issue. You can unsubscribe from any email.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.label} htmlFor="newsletter-email">
        Work email
      </label>
      <input
        id="newsletter-email"
        className={styles.input}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "submitting"}
      />

      {/* Honeypot: hidden from users, tempting to bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="newsletter-company">Company</label>
        <input
          id="newsletter-company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button className={styles.button} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Subscribing..." : "Subscribe"}
      </button>

      {status === "error" ? (
        <p className={styles.error} role="alert">
          We could not complete the signup right now. Email{" "}
          <a className={styles.errorLink} href={`mailto:${site.email}`}>
            {site.email}
          </a>{" "}
          and we will add you.
        </p>
      ) : (
        <p className={styles.help}>No spam. Unsubscribe anytime.</p>
      )}
    </form>
  );
}
