import { useState, useCallback } from "react";
import { Reveal, SectionHeading } from "@/components/common";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { contactService } from "@/services/contactService";
import {
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  Send,
  LifeBuoy,
  Handshake,
  UserPlus,
  Clock,
  Zap,
  Building2,
} from "lucide-react";

const CONTACT_REASONS = [
  { value: "demo", label: "Request a live demo" },
  { value: "pricing", label: "Pricing & plans" },
  { value: "enterprise", label: "Enterprise / custom deployment" },
  { value: "partnership", label: "Partnership inquiry" },
  { value: "press", label: "Press & media" },
  { value: "other", label: "Other" },
];

const COMPANY_SIZES = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "501-1000", label: "501-1000 employees" },
  { value: "1000+", label: "1000+ employees" },
];

const TRANSACTION_VOLUMES = [
  { value: "under-1k", label: "Under 1k transactions/month" },
  { value: "1k-10k", label: "1k-10k transactions/month" },
  { value: "10k-50k", label: "10k-50k transactions/month" },
  { value: "50k-250k", label: "50k-250k transactions/month" },
  { value: "250k+", label: "250k+ transactions/month" },
  { value: "not-sure", label: "Not sure yet" },
];

const channels = [
  {
    icon: LifeBuoy,
    title: "Support",
    desc: "Account & reconciliation help",
    color: "#0756F2",
    value: "support@metaledger.metadev.io",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    desc: "Integrations & collaborations",
    color: "#0BBFBF",
    value: "partners@metaledger.metadev.io",
  },
  {
    icon: UserPlus,
    title: "Careers",
    desc: "Questions about open roles",
    color: "#0BBF9E",
    value: "careers@metaledger.metadev.io",
  },
  {
    icon: Phone,
    title: "General",
    desc: "Main contact line",
    color: "#F97316",
    value: "+91 95595 59143",
  },
];

const METADEV_CONTACT_EMAILS = [
  "info@metadev.in",
  "contact@metadev.in",
  "support@metadev.in",
  "business@metadev.in",
  "tech@metadev.in",
  "partnership@metadev.in",
];

const METADEV_OFFICES = [
  "Hyderabad, Telangana (HQ)",
  "Amaravathi, Andhra Pradesh",
  "Bangalore, Karnataka",
  "Bengaluru, Karnataka (HQ)",
];

const METADEV_PHONES = ["+91 95595 59143"];

const METADEV_HOURS = [
  "Monday – Friday: 9AM – 6PM",
  "Saturday: 10AM – 4PM",
  "Sunday: Closed",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  reason: string;
  companySize: string;
  adSpend: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  reason?: string;
}

function ContactHero() {
  return (
    <section
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="contact-hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 right-[15%] h-[500px] w-[500px] rounded-full bg-brand-blue/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[10%] h-[400px] w-[400px] rounded-full bg-brand-cyan/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/3 blur-[80px]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7,86,242,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(7,86,242,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0">
        <div className="absolute top-[20%] right-[8%] h-px w-[180px] bg-gradient-to-r from-transparent via-brand-blue/15 to-transparent" />
        <div className="absolute top-[60%] left-[5%] h-px w-[140px] bg-gradient-to-r from-transparent via-brand-cyan/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal variant="up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/15 bg-brand-blue/5 px-5 py-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-brand-blue uppercase">
              Get in touch
            </span>
          </span>
        </Reveal>
        <Reveal variant="up" delay={100}>
          <h1
            id="contact-hero-heading"
            className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-brand-navy leading-[0.98]"
          >
            Let's talk about{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-brand-blue via-brand-bright to-brand-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                cleaner books
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M1 5.5C40 2 80 1 100 3C120 5 160 6 199 3"
                  stroke="url(#hero-underline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="hero-underline"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                  >
                    <stop stopColor="#0756F2" />
                    <stop offset="1" stopColor="#0BBFBF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>
        </Reveal>
        <Reveal variant="up" delay={200}>
          <p className="mt-7 text-lg sm:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Whether you're evaluating MetaLedger, need enterprise onboarding, or
            just have questions — our financial operations specialists are here
            to help.
          </p>
        </Reveal>
        <Reveal variant="up" delay={300}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { label: "Response Time", value: "< 4 hours", icon: Zap },
              { label: "Accuracy Rate", value: "99.9%", icon: CheckCircle2 },
              { label: "Enterprise Clients", value: "50+", icon: Building2 },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-soft"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/8">
                  <stat.icon className="h-4 w-4 text-brand-blue" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-muted">{stat.label}</p>
                  <p className="text-sm font-bold text-brand-navy">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ChannelsSection() {
  return (
    <section
      className="relative py-8 sm:py-10 lg:py-12 bg-white"
      aria-labelledby="channels-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal variant="up">
          <div className="relative -mt-10 sm:-mt-12 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <Reveal key={ch.title} variant="scale" delay={i * 80}>
                    <div className="group glass-card rounded-2xl p-5 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 hover:border-brand-blue/20 cursor-default">
                      <div className="flex items-start gap-4">
                        <div
                          className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow"
                          style={{ backgroundColor: `${ch.color}12` }}
                        >
                          <Icon
                            className="h-6 w-6 transition-colors duration-300"
                            style={{ color: ch.color }}
                            aria-hidden="true"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-brand-navy text-sm">
                            {ch.title}
                          </h3>
                          <p className="text-xs text-muted mt-0.5">
                            {ch.desc}
                          </p>
                          <p
                            className="text-xs font-medium mt-1.5 truncate transition-colors duration-300"
                            style={{ color: ch.color }}
                          >
                            {ch.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "demo",
    companySize: "",
    adSpend: "not-sure",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        reason: formData.reason,
        companySize: formData.companySize,
        adSpend: formData.adSpend,
        subject: formData.reason,
        message: "",
      });
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        reason: "demo",
        companySize: "",
        adSpend: "not-sure",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-off overflow-hidden"
      aria-labelledby="contact-form-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand-blue/3 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-brand-cyan/3 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
          <div>
            <Reveal variant="up">
              <SectionHeading
                eyebrow="Contact us"
                title="Start the conversation"
                description="Fill out the form and we'll route you to the right person. Most inquiries get a response within 4 business hours."
                align="left"
              />
            </Reveal>

            <Reveal variant="up" delay={100}>
              <div className="mt-10 space-y-4">
                {[
                  {
                    icon: Mail,
                    color: "#0756F2",
                    title: "Email",
                    lines: METADEV_CONTACT_EMAILS,
                  },
                  {
                    icon: MapPin,
                    color: "#0BBFBF",
                    title: "Offices",
                    lines: METADEV_OFFICES,
                  },
                  {
                    icon: Phone,
                    color: "#8B5CF6",
                    title: "Phone",
                    lines: METADEV_PHONES,
                  },
                  {
                    icon: Clock,
                    color: "#F97316",
                    title: "Working Hours",
                    lines: METADEV_HOURS,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:shadow-card hover:border-slate-200 hover:-translate-y-0.5"
                    >
                      <div
                        className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${item.color}10` }}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy text-sm">
                          {item.title}
                        </h4>
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm text-muted mt-0.5"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal variant="up" delay={150}>
              {submitStatus === "success" ? (
                <div className="glass-card !rounded-2xl p-8 sm:p-12 text-center" role="status">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue/10 mb-6 shadow-glow">
                    <CheckCircle2 className="h-10 w-10 text-brand-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy">
                    Message sent!
                  </h2>
                  <p className="mt-3 text-muted max-w-md mx-auto">
                    Thanks for reaching out. Our team will review and get back
                    to you within our committed response time.
                  </p>
                  <Button
                    variant="brand"
                    className="mt-8"
                    onClick={() => setSubmitStatus("idle")}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="glass-card !rounded-2xl p-6 sm:p-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-teal" />
                  <div className="absolute top-0 right-0 h-[200px] w-[200px] opacity-[0.03] rounded-full bg-brand-blue blur-[60px]" />

                  <div className="relative">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-4">
                      <Input
                        label="Full name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleChange("name", e.target.value)
                        }
                        error={errors.name}
                        required
                        placeholder="Priya Sharma"
                        autoComplete="name"
                      />
                      <Input
                        label="Work email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                        error={errors.email}
                        required
                        placeholder="priya@company.com"
                        autoComplete="email"
                      />
                    </div>
                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleChange("company", e.target.value)
                      }
                      error={errors.company}
                      required
                      placeholder="Lumenkart"
                      autoComplete="organization"
                      className="mb-4"
                    />
                    <Select
                      label="How can we help?"
                      name="reason"
                      value={formData.reason}
                      onChange={(e) =>
                        handleChange("reason", e.target.value)
                      }
                      options={CONTACT_REASONS}
                      error={errors.reason}
                      required
                      className="mb-4"
                    />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-6">
                      <Select
                        label="Company size"
                        name="companySize"
                        value={formData.companySize}
                        onChange={(e) =>
                          handleChange("companySize", e.target.value)
                        }
                        options={COMPANY_SIZES}
                        placeholderOption="Select company size"
                      />
                      <Select
                        label="Monthly transaction volume"
                        name="adSpend"
                        value={formData.adSpend}
                        onChange={(e) =>
                          handleChange("adSpend", e.target.value)
                        }
                        options={TRANSACTION_VOLUMES}
                        placeholderOption="Select transaction volume"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        type="submit"
                        className="w-full sm:w-auto !py-3.5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              className="h-4 w-4 animate-spin mr-2"
                              aria-hidden="true"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send message
                            <Send
                              className="h-4 w-4 ml-2"
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="secondary"
                        className="w-full sm:w-auto !py-3.5"
                        onClick={() => {
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            reason: "demo",
                            companySize: "",
                            adSpend: "not-sure",
                          });
                          setErrors({});
                        }}
                      >
                        Clear form
                      </Button>
                    </div>
                    {submitStatus === "error" && (
                      <p
                        className="mt-4 text-center text-sm text-red-500"
                        role="alert"
                      >
                        Something went wrong. Please try again or email
                        hello@metaledger.metadev.io directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ChannelsSection />
      <ContactFormSection />
    </>
  );
}
