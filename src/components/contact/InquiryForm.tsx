"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type InquiryFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialFormData: InquiryFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  message: "",
};

const inputClasses =
  "w-full border-b border-white/12 bg-transparent px-0 py-4 text-base text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-blue-400";

export function InquiryForm() {
  const [formData, setFormData] =
    useState<InquiryFormData>(initialFormData);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(
    field: keyof InquiryFormData,
    value: string,
  ) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Your inquiry could not be submitted.",
        );
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10"
      >
        <CheckCircle2
          aria-hidden="true"
          className="h-9 w-9 text-blue-300"
        />

        <h3 className="mt-6 text-3xl font-semibold tracking-[-0.045em] text-white">
          Your inquiry has been received.
        </h3>

        <p className="mt-4 max-w-lg text-base leading-7 text-white/50">
          Thank you for reaching out. I’ll review the details
          and contact you to discuss the best next step.
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-semibold text-white/60 transition-colors hover:text-white"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10"
    >
      <div className="grid gap-x-8 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
            Name *
          </span>

          <input
            required
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
            placeholder="Your name"
            className={inputClasses}
          />
        </label>

        <label className="mt-8 block sm:mt-0">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
            Email *
          </span>

          <input
            required
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
            placeholder="you@company.com"
            className={inputClasses}
          />
        </label>

        <label className="mt-8 block">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
            Company
          </span>

          <input
            type="text"
            autoComplete="organization"
            value={formData.company}
            onChange={(event) =>
              updateField("company", event.target.value)
            }
            placeholder="Company or organization"
            className={inputClasses}
          />
        </label>

        <label className="mt-8 block">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
            Phone
          </span>

          <input
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(event) =>
              updateField("phone", event.target.value)
            }
            placeholder="Optional"
            className={inputClasses}
          />
        </label>
      </div>

      <label className="mt-8 block">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
          What can MES help with? *
        </span>

        <select
          required
          value={formData.projectType}
          onChange={(event) =>
            updateField("projectType", event.target.value)
          }
          className={`${inputClasses} appearance-none`}
        >
          <option value="" className="bg-[#070b12]">
            Select a starting point
          </option>

          <option value="new-product" className="bg-[#070b12]">
            Build something new
          </option>

          <option
            value="improve-existing"
            className="bg-[#070b12]"
          >
            Improve an existing system
          </option>

          <option
            value="website"
            className="bg-[#070b12]"
          >
            Business website
          </option>

          <option
            value="workflow"
            className="bg-[#070b12]"
          >
            Workflow or automation
          </option>

          <option
            value="direction"
            className="bg-[#070b12]"
          >
            Help determining the right direction
          </option>

          <option value="other" className="bg-[#070b12]">
            Something else
          </option>
        </select>
      </label>

      <label className="mt-8 block">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">
          Tell me about the need *
        </span>

        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(event) =>
            updateField("message", event.target.value)
          }
          placeholder="Describe the idea, problem, or process you would like to improve."
          className={`${inputClasses} resize-y`}
        />
      </label>

      {status === "error" && (
        <p
          role="alert"
          className="mt-6 text-sm leading-6 text-red-300"
        >
          {errorMessage}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-white/30">
          Submitting this form does not create a contract or
          commitment. It simply begins the conversation.
        </p>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mes-button mes-button-primary group justify-center disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <LoaderCircle
                aria-hidden="true"
                className="h-4 w-4 animate-spin"
              />
              Sending
            </>
          ) : (
            <>
              Send inquiry
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
}