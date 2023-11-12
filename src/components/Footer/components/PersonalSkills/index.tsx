'use client'

import { GithubLogo, LinkedinLogo, Rss } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import { LogoIcon } from '@/Icons'
import { ownerConfigs } from '@/utils/ownerConfigs'

export function PersonalSkills() {
  return (
    <div className='flex flex-col gap-2 '>

      <LogoIcon color="var(--primary)" />

      <p className='max-w-prose text-sm'>{ownerConfigs.description}</p>

      <div className='flex gap-4'>
        <Link aria-label="Go to RSS's author" href="/feed.xml">
          <Rss size={24} />
        </Link>
        <Link aria-label="Go to Linkedin's author" href={ownerConfigs.linkedinLink}>
          <LinkedinLogo size={24} />
        </Link>
        <Link aria-label="Go to Github's author" href={ownerConfigs.githubLink}>
          <GithubLogo size={24} />
        </Link>
        {/* <Link aria-label="Go to Figma's author" href={ownerConfigs.figmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link aria-label="Go to Youtube's author" href={ownerConfigs.youtubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link aria-label="Go to Twitter's author" href={ownerConfigs.twitterLink}>
          <TwitterLogo size={20} />
        </Link>
        <Link aria-label="Go to Tiktok's author" href={ownerConfigs.tiktokLink}>
          <TiktokLogo size={20} />
        </Link> */}
      </div>
    </div>
  )
}
