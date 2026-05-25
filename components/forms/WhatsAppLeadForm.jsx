"use client";

import { siteConfig } from "@/lib/site";

export default function WhatsAppLeadForm({
  fields,
  messagePrefix,
  buttonLabel,
  formClassName,
  buttonClassName,
  buttonContent,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const lines = fields.map((field) => {
      const value = formData.get(field.name)?.toString().trim() ?? "";
      return `${field.messageLabel}: ${value}`;
    });
    const text = `${messagePrefix}:\n${lines.join("\n")}`;
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      {fields.map((field) => (
        <div key={field.name} className={field.wrapperClassName}>
          <label htmlFor={field.id} className="sr-only">
            {field.label}
          </label>

          {field.rows ? (
            <textarea
              id={field.id}
              name={field.name}
              rows={field.rows}
              placeholder={field.placeholder}
              required={field.required !== false}
              className={field.className}
            />
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              required={field.required !== false}
              className={field.className}
            />
          )}
        </div>
      ))}

      <button type="submit" className={buttonClassName}>
        {buttonContent ?? buttonLabel}
      </button>
    </form>
  );
}
