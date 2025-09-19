import type { Metadata } from 'next';
import Image from 'next/image';

import { getImagePath } from '@/utils/images';
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
        <div
          style={{
            content: '',
            position: 'absolute',
            top: '65%',
            right: '8%',
            transform: 'translateY(-50%)',
            width: '40%',
            height: '60%',
            background: `url('${getImagePath('/images/network-illustration.svg')}') no-repeat center center`,
            backgroundSize: 'contain',
            opacity: '0.2',
            pointerEvents: 'none',
          }}
        ></div>
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
                src={getImagePath('/images/infographic-1.svg')}
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
                src={getImagePath('/images/infographic-2.svg')}
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
          src={getImagePath('/images/bg-spiraling-dot-1.svg')}
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
              src={getImagePath('/images/chess.png')}
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
                src={getImagePath('/images/logo-human-right.svg')}
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src={getImagePath('/images/logo-planned-parenthood.svg')}
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src={getImagePath('/images/logo-nccs.svg')}
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src={getImagePath('/images/logo-us-immigration.svg')}
                alt="Human Right"
                width={211}
                height={84}
                priority
                className="max-h-[3.9375rem]"
              />
              <Image
                src={getImagePath('/images/logo-naral.svg')}
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
          src={getImagePath('/images/bg-spiraling-dot-2.svg')}
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
              src={getImagePath('/images/experience-icons.svg')}
              alt="Experience"
              width={695}
              height={452}
              priority
            />
          </div>
        </Container>
      </section>
      <section
        className="bg-gray-us-map relative py-30 overflow-hidden"
        style={{
          background: `url('${getImagePath('/images/bg-gray-us-map.svg')}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
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
      <section className="relative py-30 overflow-hidden bg-gradient-dark text-white">
        <Container>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-[4.375rem] leading-[5.25rem] font-semibold mb-[3.125rem]">
                Ready to Launch{' '}
                <span className="text-[var(--color-red-1)]">
                  Your Winning Campaign?
                </span>
              </h2>
              <p className="text-[2.25rem] leading-[2.7rem] mb-6">
                Get started today with Campaign Butler and receive:
              </p>
              <ul className="list-triangle-point">
                <li>
                  <b>Same-day</b> domain and email setup
                </li>
                <li>
                  <b>Professional</b> website within 72 hours
                </li>
                <li>
                  <b>Dedicated</b> campaign strategist
                </li>
                <li>
                  <b>Complete</b> onboarding and training
                </li>
              </ul>
            </div>
            <form action="" className="flex flex-col gap-[1.25rem]">
              <input
                type="text"
                name="first-name"
                className="w-full text-[1.3125rem] py-2 px-4 placeholder-white rounded-md pr-[5rem] border border-white"
                placeholder="First Name"
              />
              <input
                type="text"
                name="last-name"
                className="w-full text-[1.3125rem] py-2 px-4 placeholder-white rounded-md pr-[5rem] border border-white"
                placeholder="Last Name"
              />
              <input
                type="email"
                name="email"
                className="w-full text-[1.3125rem] py-2 px-4 placeholder-white rounded-md pr-[5rem] border border-white"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                className="w-full text-[1.3125rem] py-2 px-4 placeholder-white rounded-md pr-[5rem] border border-white"
                placeholder="Phone Number (optional)"
              />
              <div className="checkbox mb-6">
                <label className="text-[1.125rem] leading-[1.875rem] flex items-start gap-3">
                  <div className="relative flex-shrink-0 mt-[2px]">
                    <input
                      type="checkbox"
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-sm bg-transparent checked:bg-blue-600 checked:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    />
                    <svg
                      className="absolute top-0 left-0 w-4 h-4 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-white">
                    I agree to receive text messages from Campaign Butler. By
                    checking this box and providing your phone number,{' '}
                    <span className="text-[var(--color-red-1)] underline">
                      Read more...
                    </span>
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="btn-primary py-2 px-4 text-[1.3125rem] inline-flex self-start items-center gap-2"
              >
                Launch My Campaign
                <span className="material-icons !text-[2rem]">
                  arrow_outward
                </span>
              </button>
            </form>
          </div>
        </Container>
      </section>
      <section
        className="relative py-30 text-white"
        style={{
          background: `url('${getImagePath('/images/bg-dark-spiraling-dot-3.svg')}') no-repeat center center`,
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className="relative grid grid-cols-2 gap-20">
            <div className="absolute -top-[60%]">
              <Image
                src={getImagePath('/images/person-1.svg')}
                alt="Person"
                width={400}
                height={500}
                priority
                className="object-contain"
              />
            </div>
            <div></div>
            <div className="order-2">
              <h3 className="text-[2.25rem] leading-[2.7rem] font-semibold mb-[1.875rem]">
                Visibility Starts Here. Victory Follows.
              </h3>
              <p className="text-[1.5rem] leading-[2.25rem] mb-[2.5rem]">
                Don't leave your campaign success to chance. Partner with the
                experts who understand what it takes to win in today's complex
                political landscape.
              </p>
              <button
                type="submit"
                className="btn-primary py-2 px-4 text-[1.3125rem] gap-2"
              >
                Get Started Today
                <span className="material-icons !text-[2rem]">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
