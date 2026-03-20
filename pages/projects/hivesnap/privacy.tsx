import { Contact } from "components/contact";
import { Hero } from "components/hero";
import { HivesnapPrivacy } from "components/hivesnap-privacy";
import Layout from "components/layout";
import { NextSeo } from "next-seo";

function Home({ preview }: { preview: boolean }) {
  return (
    <Layout preview={preview}>
      <NextSeo
        title="const NEXT - Simplify, Create, Amaze"
        description="hivesnap - privacy policy"
        canonical="https://constnext.com/projects/hivesnap/privacy"
        openGraph={{
          url: "https://constnext.com/projects/hivesnap/privacy",
          title: "hivesnap",
          description:
            "HiveSnap is a beekeeping management app that allows you to track your hives and log inspections using text, photos, and voice notes.",
          images: [
            {
              url: "https://images.ctfassets.net/voxe5faf7baw/5MiSzbSzJXb1HmY8nsWrGh/c4a987cead1c30361c3a44194a1dcea7/hivesnap-home.jpg",
              width: 1300,
              height: 1041,
              alt: "hivesnap home",
            },
          ],
        }}
      />
      <Hero
        title={`Hivesnap,\nEasy Inspections`}
        description="Beekeeping management app that allows you to track your hives and log inspections using text, photos, and voice notes."
        // actionLink="/about"
      />
      <HivesnapPrivacy />
      <Contact />
    </Layout>
  );
}
export default Home;
