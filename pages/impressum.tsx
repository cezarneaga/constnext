import { Contact } from "components/contact";
import { Hero } from "components/hero";
import { Impressum } from "components/impressum";
import Layout from "components/layout";
import { NextSeo } from "next-seo";

function Home({ preview }: { preview: boolean }) {
  return (
    <Layout preview={preview}>
      <NextSeo
        title="const NEXT - Simplify, Create, Amaze"
        description="Details of incorporation"
        canonical="https://constnext.com/impressum"
        openGraph={{
          url: "https://constnext.com/impressum",
          title: "Impressum - Simplify, Create, Amaze",
          description:
            "Professional web & app development for people and organisations that have a positive impact in the society.",
          images: [
            {
              url: "https://images.ctfassets.net/voxe5faf7baw/15bf3tWfqEWQbHmMqd0Xan/49199ff6464d5c54126c1677a706c99b/cn-home.png",
              width: 1300,
              height: 1041,
              alt: "const NEXT Impressum",
            },
          ],
        }}
      />
      <Hero
        title={`Simplify,\nCreate & Amaze`}
        description="Professional web & app development for people and organisations that have a positive impact in the society."
        // actionLink="/about"
      />
      <Impressum />
      <Contact />
    </Layout>
  );
}
export default Home;
