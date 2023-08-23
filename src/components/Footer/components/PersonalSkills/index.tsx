'use client'

import { FigmaLogo, GithubLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import { LogoIcon } from '@/Icons'
import { figmaLink, githubLink, linkedinLink, tiktokLink, twitterLink, youtubeLink } from '@/utils/config'

export function PersonalSkills() {
  return (
    <div className='flex flex-col gap-2 '>

      <LogoIcon color="var(--primary)" />

      <p className='max-w-prose text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus </p>

      <div className='flex gap-2'>
        <Link href={linkedinLink}>
          <LinkedinLogo size={20} />
        </Link>
        <Link href={figmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link href={youtubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link href={githubLink}>
          <GithubLogo size={20} />
        </Link>
        <Link href={twitterLink}>
          <TwitterLogo size={20} />
        </Link>
        <Link href={tiktokLink}>
          <TiktokLogo size={20} />
        </Link>
      </div>
    </div>
  )
}
