import { Link } from "@chakra-ui/react";

import { Facebook, GitHub, Linkedin, Twitter } from "react-feather";
import { facebookUrl, githubUrl, linkedinUrl, twitterUrl } from "utils/urls";

const followItems = [
  {
    icon: <GitHub color="#d1d5db" size={18} />,
    href: githubUrl,
    title: "Find me on GitHub",
  },

  {
    icon: <Twitter color="#d1d5db" size={18} />,
    href: twitterUrl,
    title: "Find me on twitter",
  },

  {
    icon: <Facebook color="#d1d5db" size={18} />,
    href: facebookUrl,
    title: "Find me on facebook",
  },

  {
    icon: <Linkedin color="#d1d5db" size={18} />,
    href: linkedinUrl,
    title: "Find me on LinkedIn",
  },
];

export function Follow() {
  return (
    <>
      {followItems.map((followItem) => (
        <Link
          key={followItem.href}
          href={followItem.href}
          title={followItem.title}
          isExternal
          padding="4"
          alignSelf="center"
        >
          {followItem.icon}
        </Link>
      ))}
    </>
  );
}
