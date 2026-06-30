import { Globe, Mail, Share2 } from "lucide-react";
import { footerLinkGroups } from "@/lib/data";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { icon: Share2, href: "#", label: "Social" },
  { icon: Globe, href: "#", label: "Website" },
  { icon: Mail, href: "mailto:hello@prepverse.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="text-xl font-bold">
              <span className="gradient-text">PrepVerse</span>
              <span className="text-foreground"> AI</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI-powered placement preparation platform helping students land
              their dream jobs at top companies worldwide.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} PrepVerse AI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
