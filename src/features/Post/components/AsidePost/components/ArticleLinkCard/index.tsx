'use client'
import { Browser, FigmaLogo, GithubLogo, YoutubeLogo } from 'phosphor-react'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import type { Doc } from 'contentlayer/generated'

interface ArticleLinkCardProps {
  doc: Doc
}

export function ArticleLinkCard({ doc }: ArticleLinkCardProps) {
  if (doc.project_url || doc.figma_url || doc.github_url || doc.video_url) {
    return (
      <Card title="Links">
        <div className='flex list-disc flex-col gap-1 pl-4'>
          {
            doc.project_url
              ? (
                <Link href={doc.project_url} className='flex items-center gap-1'>
                  <Browser weight='fill' size={20} />
                  Deploy
                </Link>
                )
              : null
          }

          {
            doc.figma_url
              ? (
                <Link href={doc.figma_url} className='flex items-center gap-1'>
                  <FigmaLogo weight='fill' size={20} />
                  Figma
                </Link>
                )
              : null
          }

          {
            doc.github_url
              ? (
                <Link href={doc.github_url} className='flex items-center gap-1'>
                  <GithubLogo weight='fill' size={20} />
                  Github
                </Link>
                )
              : null
          }

          {
            doc.video_url
              ? (
                <Link href={doc.video_url} className='flex items-center gap-1'>
                  <YoutubeLogo weight='fill' size={20} />
                  Video
                </Link>
                )
              : null
          }

        </div>
      </Card>
    )
  }
  else { return null }
}
