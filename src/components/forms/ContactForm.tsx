"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./ContactForm.module.scss";

type Status = "idle" | "submitting" | "success" | "error";

const plantTypes = ["Oil & Gas", "Chemicals", "Energy & Power", "Manufacturing", "Other"];

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";

/**
 * Static-export-safe demo request form. Posts JSON to an optional configured
 * endpoint. With no endpoint (or on any error) it falls back to a graceful
 * message pointing the visitor at the direct email. Includes a hidden honeypot.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this. Abort silently if populated.
    if (data.get("company_website")) return;

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      role: data.get("role"),
      plantType: data.get("plantType"),
      message: data.get("message"),
    };

    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.notice} role="status">
        <p className={styles.noticeTitle}>Thanks, your request is in.</p>
        <p className={styles.noticeBody}>
          A member of the team will reach out within one business day to schedule your 30-minute
          demo. Prefer email? Write to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {status === "error" ? (
        <div className={styles.error} role="alert">
          We could not submit the form from here. Please email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> and we will set up your demo.
        </div>
      ) : null}

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input className={styles.input} type="text" name="name" autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>
            Work email <span className={styles.req} aria-hidden="true">*</span>
          </span>
          <input
            className={styles.input}
            type="email"
            name="email"
            required
            autoComplete="email"
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.field}>
          <span className={styles.label}>Company</span>
          <input
            className={styles.input}
            type="text"
            name="company"
            autoComplete="organization"
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Role</span>
          <input className={styles.input} type="text" name="role" autoComplete="organization-title" />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Plant type</span>
        <select className={styles.input} name="plantType" defaultValue="">
          <option value="" disabled>
            Select a plant type
          </option>
          {plantTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>What would you like to see?</span>
        <textarea className={styles.input} name="message" rows={4} />
      </label>

      {/* Honeypot: visually hidden, off-screen, not tabbable. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button className={styles.submit} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Book a demo"}
      </button>
    </form>
  );
}
