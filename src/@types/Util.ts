export type AvailableSocialMedias = 'github' | 'linkedin' | 'youtube' | 'tiktok' | 'pinterest' | 'twitter' | 'facebook' | 'reddit' | 'discord' | 'email'

export interface ISocialMedias {
  id: AvailableSocialMedias
  link: string
}

export interface IAuthor {
  id: string
  fullName: string
  shortDescription: string
  profession: string
  image: string
  socials: ISocialMedias[]
}
