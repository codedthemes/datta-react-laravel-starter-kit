// third-party
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  platform: string;
  icon: string | IconDefinition;
}

const socialLinks: SocialLink[] = [
  { platform: 'facebook', icon: 'fa-facebook-f' },
  { platform: 'twitter', icon: 'fa-twitter' },
  { platform: 'dribbble', icon: 'fa-dribbble' },
  { platform: 'pinterest', icon: 'fa-pinterest' },
  { platform: 'youtube', icon: 'fa-youtube' },
  { platform: 'google', icon: 'fa-google-plus-g' },
  { platform: 'linkedin', icon: 'fa-linkedin-in' }
];

// ==============================||SOCIAL - SOCIAL LINKLIST ||============================== //

export default function SocialLinksList({ isInline }: { isInline?: boolean }) {
  return (
    <ul className={`${isInline ? 'list-unstyled social-top-link' : 'list-inline mt-3'} f-20 mb-0`}>
      {socialLinks.map(({ platform, icon }) => (
        <li className={`${isInline ? 'list-item' : 'list-inline-item'}`} key={platform}>
          <a href="#!" className={`text-${platform}`}>
            <i className={`fab ${icon}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}
