'use client'

import { FigmaLogo, GithubLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import { Link } from '@/components/Lib/Link'
import { LogoIcon } from '@/Icons'
import { ownerConfigs } from '@/utils/ownerConfigs'

export function PersonalSkills() {
  return (
    <div className='flex flex-col gap-2 '>

      <LogoIcon color="var(--primary)" />

      <p className='max-w-prose text-sm'>{ownerConfigs.description}</p>

      <div className='flex gap-2'>
        <Link href={ownerConfigs.linkedinLink}>
          <LinkedinLogo size={20} />
        </Link>
        <Link href={ownerConfigs.figmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link href={ownerConfigs.youtubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link href={ownerConfigs.githubLink}>
          <GithubLogo size={20} />
        </Link>
        <Link href={ownerConfigs.twitterLink}>
          <TwitterLogo size={20} />
        </Link>
        <Link href={ownerConfigs.tiktokLink}>
          <TiktokLogo size={20} />
        </Link>
      </div>
    </div>
  )
}
