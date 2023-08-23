'use client'

import { FigmaLogo, GithubLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import { LogoIcon } from '@/Icons'
import { footerFigmaLink, footerGithubLink, footerLinkedinLink, footerTiktokLink, footerTwitter, footerYoutubeLink } from '@/utils/config'

export function PersonalSkills() {
  return (
    <div className='flex flex-col gap-2 '>

      <LogoIcon color="var(--primary)" />

      <p className='max-w-prose text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non risus molestie, tristique purus </p>

      <div className='flex gap-2'>
        <Link href={footerLinkedinLink}>
          <LinkedinLogo size={20} />
        </Link>
        <Link href={footerFigmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link href={footerYoutubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link href={footerGithubLink}>
          <GithubLogo size={20} />
        </Link>
        <Link href={footerTwitter}>
          <TwitterLogo size={20} />
        </Link>
        <Link href={footerTiktokLink}>
          <TiktokLogo size={20} />
        </Link>
      </div>
    </div>
  )
}
