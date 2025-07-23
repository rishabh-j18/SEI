import { Logo } from "@/components/icons";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2" prefetch={true}>
              <Logo className="h-8 w-8 text-primary" />
              <span className="self-center whitespace-nowrap text-xl font-semibold font-headline">
                SEI
              </span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Nurturing Minds, Shaping Futures
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-primary" prefetch={true}>Courses</Link></li>
              <li><Link href="/why-sei" className="hover:text-primary" prefetch={true}>Why SEI</Link></li>
              <li><Link href="/register" className="hover:text-primary" prefetch={true}>Admissions</Link></li>
              <li><Link href="/contact" className="hover:text-primary" prefetch={true}>Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold uppercase">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/calendar" className="hover:text-primary" prefetch={true}>Academic Calendar</Link></li>
              <li><Link href="/syllabus-notes" className="hover:text-primary" prefetch={true}>Syllabus &amp; Notes</Link></li>
              <li><Link href="/resources" className="hover:text-primary" prefetch={true}>Student Resources</Link></li>
              <li><Link href="/directory" className="hover:text-primary" prefetch={true}>Directory</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold uppercase">Contact</h3>
            <address className="mt-4 not-italic text-sm">
              <p>123 University Ave, Knowledge City</p>
              <p>Email: <a href="mailto:info@sei.edu" className="hover:text-primary">info@sei.edu</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shailja Educational Institute. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Twitter /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
