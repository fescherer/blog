import { Link } from '@/components/Lib/Link'
import { Plus } from 'lucide-react'

export function Sharing() {
  return (
    <div className="flex flex-col gap-2">
      <h3>Sharing</h3>

      <div className="flex gap-2">
        <Link aria-label="Share this article on Twitter" href="gg">
          twitter- x
          {/* <TwitterLogo size={24} /> */}
        </Link>

        <Link aria-label="Share this article on Whatsapp" href="gg">
          Whatsapp
          {/* <WhatsappLogo size={24} /> */}
        </Link>

        <Link aria-label="Share this article on Linkedin" href="gg">
          linkedin
          {/* <LinkedinLogo size={24} /> */}
        </Link>

        <Link aria-label="Share this article on Facebook" href="gg">
          facebook
          {/* <FacebookLogo size={24} /> */}
        </Link>

        <Link aria-label="Share this article" href="ddsad">
          <Plus />
          {/* <Plus size={20} /> */}
        </Link>
      </div>
    </div>
  )
}
