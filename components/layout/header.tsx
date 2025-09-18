import Image from 'next/image';

import Container from '@/components/layout/container';

export default function Header() {
  return (
    <header className="absolute w-full shadow-sm top-0 z-50">
      <Container className="flex justify-between items-center py-8 border-b border-b-white">
        <a href="route('app.index')" className="brand">
          <Image
            src="/images/logo.svg"
            alt="CampaignButler Logo"
            width={280}
            height={34}
            priority
          />
        </a>
        <nav className="menu">
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Quick Start</a>
          <a href="#">Support</a>
          <a href="#">Blog</a>
          <a href="#" className="contact btn-primary">
            Contact
            <span className="material-icons text-[1.875rem] ml-2">
              arrow_outward
            </span>
          </a>
        </nav>
      </Container>
    </header>
  );
}
