'use client';

import Head from 'next/head';
import '@/lib/env';

import BioSection from '@/components/bio-section';
import ContactsSection from '@/components/contacts-section';
import CvSection from '@/components/cv-section';
import ExperienceSection from '@/components/experience/experience-section';
import ProfileSection from '@/components/profile-section';
import ProjectsSection from '@/components/projects-section';
import ShowcasesSection from '@/components/showcases-section';
import SkillsSection from '@/components/skills-section';
import SwiperSection from '@/components/swiper-section';
import TemplateSection from '@/components/template-section';
import YearsSection from '@/components/years-section';

import Header from '@/layouts/header';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main className='py-9 px-3 flex flex-col gap-y-7 '>
      <Head>
        <title>Hi</title>
      </Head>

      <div className='grid-container-1 mx-auto'>
        <Header />

        <div className='first grid-container-2'>
          <ProfileSection />
          <BioSection />
          <ExperienceSection />
          <CvSection className='hidden md:block xl:hidden' />
          <YearsSection className='hidden md:block xl:hidden' />
        </div>

        <div className='second grid-container-3'>
          <SkillsSection />
          <CvSection className='md:hidden xl:block' />
          <YearsSection className='md:hidden xl:block' />
          <ProjectsSection />
          <ContactsSection />
          <SwiperSection />
          <ShowcasesSection />
          <TemplateSection />
        </div>
      </div>
    </main>
  );
}
