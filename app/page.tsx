import type { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/layout/container';
import Accordion from '@/components/elements/accordion';
import TestimonialSlider from '@/components/elements/slider/testimonial';
import CampaignToolkitSlider from '@/components/elements/slider/campaignToolkit';
import CardIcon1 from '@/components/elements/card/cardIcon1';
import CardIcon2 from '@/components/elements/card/cardIcon2';

export const metadata: Metadata = {
  title: 'All in one platform for your business | CampaignButler',
  description: 'Site for DeskTeam360 test',
};

export default function Home() {
  const accordionItems = [
    {
      title: 'Unified Strategy, Maximum Impact',
      content:
        'Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.',
    },
    {
      title: 'Built for Political Success',
      content:
        'Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.',
    },
    {
      title: 'Scale to Your Race',
      content:
        'Stop juggling multiple vendors. Our integrated platform ensures your message stays consistent across every voter touchpoint—saving you time, money, and headaches.',
    },
  ];

  const testimonialItems = [
    {
      image: '/images/pexel-1.png',
      quote:
        'The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.',
      author: 'Michael Thompson 1',
      title: 'County Commissioner',
    },
    {
      image: '/images/pexel-2.png',
      quote:
        'The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.',
      author: 'Michael Thompson 2',
      title: 'County Commissioner',
    },
    {
      image: '/images/pexel-3.png',
      quote:
        'The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.',
      author: 'Michael Thompson 3',
      title: 'County Commissioner',
    },
  ];

  const campaignToolkitItems = [
    {
      image: '/images/campaign-kit-1.png',
      title: 'Digital Presence',
      items: [
        'Official .Vote Domain — Secure instant credibility with a trusted .vote domain that voters recognize and trust',
        'Professional Campaign Website — Launch a mobile-friendly, conversion-focused site that tells your story and drives action',
        "Official .Vote Email — Create a professional, branded email address that enhances your campaign's legitimacy",
      ],
    },
    {
      image: '/images/campaign-kit-2.png',
      title: 'Physical Presence',
      items: [
        'Official .Vote Domain — Secure instant credibility with a trusted .vote domain that voters recognize and trust',
        'Professional Campaign Website — Launch a mobile-friendly, conversion-focused site that tells your story and drives action',
        "Official .Vote Email — Create a professional, branded email address that enhances your campaign's legitimacy",
      ],
    },
    {
      image: '/images/campaign-kit-1.png',
      title: 'Another Presence',
      items: [
        'Official .Vote Domain — Secure instant credibility with a trusted .vote domain that voters recognize and trust',
        'Professional Campaign Website — Launch a mobile-friendly, conversion-focused site that tells your story and drives action',
        "Official .Vote Email — Create a professional, branded email address that enhances your campaign's legitimacy",
      ],
    },
  ];

  const servingNationwideItems = [
    {
      icon: '/images/icon-red-us-map.svg',
      title: 'All 50 States',
      description: 'Compliant solutions for campaigns anywhere in America',
    },
    {
      icon: '/images/icon-red-race.svg',
      title: 'Every Race Level',
      description: 'From city council to congressional campaigns',
    },
    {
      icon: '/images/icon-red-specialized-knowledge.svg',
      title: 'Specialized Knowledge',
      description:
        'Expertise in school board, judicial, and other specialized races',
    },
    {
      icon: '/images/icon-red-raise-hands.svg',
      title: 'Partisan & Non-Partisan',
      description: 'Solutions for every type of campaign',
    },
  ];

  const campaignSolutionItems = [
    {
      icon: '/images/icon-outline-mobile-check.svg',
      title: 'À La Carte Services',
      description:
        'Build your custom campaign toolkit Starting at <b>$99/month</b>',
      linkUrl: '#',
      linkLabel: 'See Options',
    },
    {
      icon: '/images/icon-outline-dark-pc-check.svg',
      title: 'Full Suite Package',
      description:
        'Everything you need to launch and run a professional campaign <b>$500/month</b>',
      linkUrl: '#',
      linkLabel: 'Get Started',
      type: 'dark',
    },
    {
      icon: '/images/icon-outline-technical-person.svg',
      title: 'Custom Solutions',
      description: 'For larger campaigns with specialized needs',
      linkUrl: '#',
      linkLabel: 'Request Quote',
    },
  ];

  return (
    <main>
      <section className="homepage-hero pt-[18.75rem] text-white pb-[60px] relative overflow-hidden rounded-br-[9.375rem]">
        <Container>
          <div className="xl:max-w-[49.375rem] mb-[6.25rem]">
            <h1 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[1.875rem]">
              Win Your Next Election with Campaign Butler's All-in-One Solution
            </h1>
            <p className="mb-[4.6875rem]">
              From digital presence to boots on the ground, we deliver the
              tools, technology, and expertise that modern campaigns need to
              connect with voters and secure victory.
            </p>
            <div>
              <form action="" className="hero-form flex items-center gap-4">
                <span className="text-[1.3125rem]">Find Your Domain</span>
                <div className="relative w-[24rem]">
                  <input
                    type="text"
                    name="search"
                    className="search-field bg-[var(--color-bg-input)] w-full text-[1.3125rem] p-2 placeholder-white rounded-md pr-[5rem]"
                    placeholder="Type here..."
                  />
                  <div className="absolute text-[1.3125rem] top-[50%] right-4 -translate-y-[50%]">
                    | .vote
                  </div>
                </div>
                <button
                  type="submit"
                  className="border border-white py-2 px-6 text-[1.3125rem] flex items-center gap-2 rounded-md"
                >
                  Search
                  <span className="material-icons !text-[2rem] text-[var(--color-red-1)]">
                    arrow_outward
                  </span>
                </button>
              </form>
            </div>
          </div>
          <div className="flex items-center mt-16 pt-8">
            <button className="btn-primary text-white px-8 py-4 rounded-md flex items-center gap-2 text-lg font-medium transition-colors">
              Launch Your Campaign Today
              <span className="material-icons text-xl">arrow_outward</span>
            </button>

            <div className="flex-1 mx-8">
              <hr className="border-gray-600" />
            </div>

            <div className="flex items-center gap-8">
              <button className="text-white hover:text-red-400 flex items-center gap-2 text-lg transition-colors">
                See Our Pricing
                <span className="material-icons text-xl text-red-400">
                  arrow_outward
                </span>
              </button>

              <span className="text-gray-400">|</span>

              <button className="text-white hover:text-red-400 flex items-center gap-2 text-lg transition-colors">
                Schedule a Demo
                <span className="material-icons text-xl text-red-400">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-30">
        <Container>
          <div className="grid grid-cols-2 gap-[5rem]">
            <div className="md:order-2 border-b-2">
              <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[1.875rem]">
                The Campaign Challenge
              </h2>
              <p className="max-w-[40.5625rem]">
                From digital presence to boots on the ground, we deliver the
                tools, technology, and expertise that modern campaigns need to
                connect with voters and secure victory.
              </p>
            </div>
            <div>
              <Image
                src="/images/infographic-1.svg"
                alt="Infographic 1"
                width={695}
                height={452}
                priority
              />
            </div>
          </div>
          <div className="py-30 grid grid-cols-2 gap-[5rem]">
            <div className="">
              <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[1.875rem]">
                The Campaign Butler Solution
              </h2>
              <p className="max-w-[40.5625rem]">
                We've created the first truly integrated campaign platform that
                handles everything from your domain name to your door-knocking
                strategy. Our unified approach eliminates communication gaps,
                reduces costs, and dramatically increases your campaign's
                effectiveness.
              </p>
            </div>
            <div>
              <Image
                src="/images/infographic-2.svg"
                alt="Infographic 2"
                width={695}
                height={452}
                priority
              />
            </div>
          </div>
        </Container>
      </section>
      <section className=" relative py-30 bg-[var(--color-text)] rounded-tl-[9.375rem] text-white overflow-hidden">
        <Image
          src="/images/bg-spiraling-dot-1.svg"
          alt="Spiraling Dot"
          width={2766}
          height={1719}
          priority
          className="absolute top-[-33%] left-[-26%] z-0"
        />
        <Container className="relative z-1">
          <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem] text-center">
            Why Winning Campaigns Choose Campaign Butler
          </h2>
          <div className="grid grid-cols-2 gap-[1.875rem]">
            <Image
              src="/images/chess.png"
              alt="Infographic 2"
              width={695}
              height={452}
              priority
            />
            <Accordion items={accordionItems} />
          </div>
        </Container>
      </section>
      <section className="pt-30">
        <Container type="fluid">
          <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem] text-center">
            Trusted by Winning Candidates
          </h2>
          <TestimonialSlider slides={testimonialItems} />
        </Container>
        <div className="transform -translate-y-[400px] mb-[-400px] pt-[400px] pb-30 bg-[var(--color-dark-blue-2)] text-white">
          <Container>
            <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
              <Image
                src="/images/logo-human-right.svg"
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src="/images/logo-planned-parenthood.svg"
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src="/images/logo-nccs.svg"
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src="/images/logo-us-immigration.svg"
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src="/images/logo-naral.svg"
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
            </div>
          </Container>
        </div>
      </section>
      <section className="py-30">
        <Container>
          <CampaignToolkitSlider
            title="Your Complete Campaign Toolkit"
            slides={campaignToolkitItems}
          />
        </Container>
      </section>
      <section className=" relative py-30 bg-gradient-dark text-white overflow-hidden">
        <Image
          src="/images/bg-spiraling-dot-2.svg"
          alt="Spiraling Dot"
          width={2766}
          height={1719}
          priority
          className="absolute top-0 -right-[30%] z-0"
        />
        <Container>
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
              <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem]">
                30+ Years of Campaign Victory Experience
              </h2>
              <p>
                <span className="text-[var(--color-red-1)]">
                  Campaign Butler
                </span>
                combines decades of political expertise with cutting-edge
                marketing technology. We've helped candidates at every
                level—from school board to statewide office—connect with voters
                and win elections. Our team understands that exposure wins
                elections, but only when it's strategic, consistent, and
                targeted. That's why we've built the only truly integrated
                campaign marketing platform that unites traditional outreach
                with digital essentials.
              </p>
            </div>
            <Image
              src="/images/experience-icons.svg"
              alt="Experience"
              width={695}
              height={452}
              priority
            />
          </div>
        </Container>
      </section>
      <section className="bg-gray-us-map relative py-30 overflow-hidden">
        <Container>
          <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem] text-center">
            Serving Campaigns Nationwide
          </h2>
          <div className="w-full">
            <div className="grid grid-cols-4 gap-10">
              {servingNationwideItems.map((item, index) => (
                <CardIcon1
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-30 overflow-hidden">
        <Container>
          <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem] text-center">
            Campaign Solutions for Every Budget
          </h2>
          <div className="w-full">
            <div className="flex flex-row justify-center gap-10">
              {campaignSolutionItems.map((item, index) => (
                <CardIcon2
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  linkUrl={item.linkUrl}
                  linkLabel={item.linkLabel}
                  type={item?.type}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
