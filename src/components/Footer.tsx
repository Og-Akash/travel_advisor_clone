import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { countries, currencies } from "@/constants/options";
import { legalLinks, sections } from "@/constants/footerLinks";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-tripadvisor-gray py-8 border-t mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile: accordion */}
        <div className="md:hidden">
          <Accordion type="single" collapsible className="mb-6">
            {sections.map((sec, i) => (
              <AccordionItem value={`item-${i}`} key={sec.title}>
                <AccordionTrigger className="flex justify-between">
                  {sec.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 py-2">
                    {sec.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm text-gray-600 hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Pickers */}
          <div className="flex flex-col gap-4 mb-6">
            <Select defaultValue="usd">
              <SelectTrigger className="w-full border-2 border-gray-300 rounded-xl">
                <SelectValue placeholder="$ USD" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="us">
              <SelectTrigger className="w-full border-2 border-gray-300 rounded-xl">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent>
                {countries.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 mb-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="text-gray-600 hover:text-gray-900">
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Legal & logo */}
          <div className="text-center text-sm text-gray-500 space-y-4 mb-4">
            <div className="flex justify-center items-center gap-2">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt="Tripadvisor"
                className="h-8 w-8"
              />
              <span>© 2025 Tripadvisor LLC All rights reserved.</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <a key={link} href="#" className="hover:underline">
                  {link}
                </a>
              ))}
            </div>
            <p className="mt-2 px-2">
              This is the version of our website addressed to speakers of English
              in the United States. If you are a resident of another country or region,
              please select the appropriate version of Tripadvisor for your country
              or region in the drop-down menu.{" "}
              <button className="text-black font-medium">Show more</button>
            </p>
          </div>
        </div>

        {/* Desktop: grid */}
        <div
          className="hidden md:grid gap-8 mb-8"
          style={{
            gridTemplateAreas: `
              "links1 links2 links3 . partners partners"
              "legal legal legal legal pickers pickers"
              "legal legal legal legal social social"
            `,
            gridTemplateColumns: "repeat(6, 1fr)",
          }}
        >
          {/* map the first 3 sections */}
          {sections.slice(0, 3).map((sec, i) => (
            <div key={sec.title} style={{ gridArea: `links${i + 1}` }}>
              <h3 className="text-sm font-bold mb-4 text-gray-900">{sec.title}</h3>
              <ul className="space-y-1">
                {sec.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Get The App */}
          <div style={{ gridArea: "links3" }}>
            <h3 className="text-sm font-bold mb-4 text-gray-900">Get The App</h3>
            <ul className="space-y-1">
              {sections[3].links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-600 hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div style={{ gridArea: "partners" }}>
            <h3 className="text-sm font-bold mb-4 text-gray-900">Tripadvisor Sites</h3>
            <ul className="space-y-2">
              {sections[4].links.map((text, idx) => {
                // split at last word for the link
                const parts = text.split(" ");
                const name = parts.pop()!;
                const before = parts.join(" ");
                return (
                  <li key={idx} className="text-sm text-gray-600">
                    {before}{" "}
                    <a href="#" className="text-green-700 hover:underline">
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Legal */}
          <div style={{ gridArea: "legal" }} className="text-sm text-gray-500">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt="Tripadvisor"
                className="h-10 w-10"
              />
              <p>© 2025 Tripadvisor LLC All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              {legalLinks.map((link) => (
                <Link key={link} to="#" className="text-sm font-medium underline tracking-tight text-tripadvisor-darkGray">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Pickers */}
          <div style={{ gridArea: "pickers" }} className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="usd">
              <SelectTrigger className="w-[160px] border-2 border-gray-300 rounded-xl">
                <SelectValue placeholder="$ USD" />
              </SelectTrigger>
              <SelectContent>
                {currencies.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="us">
              <SelectTrigger className="w-[180px] border-2 border-gray-300 rounded-xl">
                <SelectValue placeholder="United States" />
              </SelectTrigger>
              <SelectContent>
                {countries.map(({ label, value }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Social */}
          <div style={{ gridArea: "social" }} className="flex items-center gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="text-gray-600 hover:text-gray-900">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
