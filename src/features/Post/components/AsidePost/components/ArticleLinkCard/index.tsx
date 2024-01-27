'use client'
import { Browser, FigmaLogo, GithubLogo, YoutubeLogo } from 'phosphor-react'
import { Card } from '@/components/Lib/Card'
import { Link } from '@/components/Lib/Link'
import type { IArticle } from '@/@types/Article'

interface ArticleLinkCardProps {
  article: IArticle
}

export function ArticleLinkCard({ article }: ArticleLinkCardProps) {
  if (article.project_url || article.figma_url || article.github_url || article.video_url) {
    return (
      <Card title="Links">
        <div className='flex list-disc flex-col gap-1 pl-4'>
          {
            article.project_url
              ? (
                <Link aria-label="Link to article's project deploy" href={article.project_url} className='flex items-center gap-1'>
                  <Browser weight='fill' size={20} />
                  Deploy
                </Link>
                )
              : null
          }

          {
            article.figma_url
              ? (
                <Link aria-label="Link to article's project Figma page" href={article.figma_url} className='flex items-center gap-1'>
                  <FigmaLogo weight='fill' size={20} />
                  Figma
                </Link>
                )
              : null
          }

          {
            article.github_url
              ? (
                <Link aria-label="Link to article's source code on Github" href={article.github_url} className='flex items-center gap-1'>
                  <GithubLogo weight='fill' size={20} />
                  Github
                </Link>
                )
              : null
          }

          {
            article.video_url
              ? (
                <Link aria-label="Link to article's video on Youtube" href={article.video_url} className='flex items-center gap-1'>
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
