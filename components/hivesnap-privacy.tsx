import {
  Box,
  Flex,
  Heading,
  Link,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

export function HivesnapPrivacy() {
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const blockquoteBg = useColorModeValue("gray.50", "gray.700");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex width="100%" height="auto" m="0" px="4" alignItems="stretch" overflow="hidden">
      <Box width="100%" maxW="1280px" mx="auto" py="8">
        <Box maxW={["100%", "80%", "68%"]} mx="auto" mt="4">

          {/* Title */}
          <Heading size="xl" textTransform="uppercase" textAlign="left" color={headingColor} mb={2}>
            HiveSnap Privacy Policy
          </Heading>
          <Text color={mutedColor} mb={1}><strong>Effective Date:</strong> 20.03.2026</Text>
          <Text color={mutedColor} mb={8}><strong>Last Updated:</strong> 20.03.2026</Text>

          {/* 1. Introduction */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            1. Introduction
          </Heading>
          <Text color={textColor} mb={3}>
            Welcome to HiveSnap ("we," "our," or "us"). We are committed to protecting your privacy.
            This Privacy Policy explains what information we collect, how we use it, who we share it
            with, and what choices you have — when you use our mobile application ("App") available
            on the Apple App Store.
          </Text>
          <Text color={textColor} mb={3}>
            HiveSnap is a beekeeping management app that allows you to track your hives and log
            inspections using text, photos, and voice notes.
          </Text>
          <Text color={textColor} mb={3}>
            Please read this policy carefully. By using HiveSnap, you agree to the practices
            described here.
          </Text>

          {/* 2. Information We Collect */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            2. Information We Collect
          </Heading>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={3}>
            2.1 Information You Provide Directly
          </Heading>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Account information:</strong> When you register or sign in, we collect your{" "}
              <strong>email address</strong>. HiveSnap uses passwordless authentication (magic link)
              — we do not store passwords.
            </ListItem>
            <ListItem>
              <strong>Location preference:</strong> You may set a <strong>city name</strong> for
              weather forecasts. This is a text field you enter manually; we do not collect your GPS
              location or precise location data.
            </ListItem>
            <ListItem>
              <strong>Hive data:</strong> Names, descriptions, and details of the beehives you add
              to the App.
            </ListItem>
            <ListItem>
              <strong>Inspection records:</strong> Notes, observations, and structured data from
              hive inspections you log — either entered manually or captured by photographing an
              inspection card.
            </ListItem>
            <ListItem>
              <strong>Voice notes:</strong> Audio recordings you make within the App. These are sent
              to AssemblyAI for transcription and stored as text in your inspection records.
            </ListItem>
            <ListItem>
              <strong>Inspection card photos:</strong> When you photograph an inspection card, the
              image is transmitted to Anthropic's Claude API to extract structured inspection data.
              The photo itself is <strong>not stored</strong> by HiveSnap — only the resulting data
              object (e.g., inspection fields and values) is saved to your account.
            </ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={3}>
            2.2 Information Collected Automatically
          </Heading>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Device information:</strong> Device type, operating system version, app
              version, unique device identifiers.
            </ListItem>
            <ListItem>
              <strong>Usage data:</strong> App interactions, feature usage patterns, session
              duration, crash reports.
            </ListItem>
            <ListItem>
              <strong>IP address:</strong> Used to infer approximate geographic location
              (country/region level) for security and analytics purposes.
            </ListItem>
            <ListItem>
              <strong>Sync metadata:</strong> PowerSync collects lightweight metadata required to
              synchronize your data between devices (e.g., record change timestamps, sync state).
              This does not include the content of your hive or inspection records.
            </ListItem>
          </UnorderedList>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={3}>
            2.3 Purchase & Subscription Information (via RevenueCat)
          </Heading>
          <Text color={textColor} mb={3}>
            If you purchase a subscription or in-app purchase, RevenueCat processes transaction data
            on our behalf, including:
          </Text>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Purchase receipts:</strong> Apple App Store receipt data to validate and
              manage entitlements.
            </ListItem>
            <ListItem>
              <strong>Subscription status:</strong> Active/inactive subscription state, renewal
              dates, trial status.
            </ListItem>
            <ListItem>
              <strong>Device & app identifiers:</strong> Device type, OS, App Store country, app
              version.
            </ListItem>
            <ListItem>
              <strong>Anonymous user ID:</strong> RevenueCat assigns an anonymous identifier to link
              purchases to your account.
            </ListItem>
          </UnorderedList>
          <Box
            bg={blockquoteBg}
            borderLeft="4px solid"
            borderColor={borderColor}
            px={4}
            py={3}
            mb={4}
            borderRadius="md"
          >
            <Text color={textColor}>
              We do <strong>not</strong> collect or store your payment card information. All payment
              processing is handled by Apple via the App Store.
            </Text>
          </Box>

          {/* 3. How We Use Your Information */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            3. How We Use Your Information
          </Heading>
          <Text color={textColor} mb={3}>
            We use the information we collect to:
          </Text>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Provide the App:</strong> Authenticate your account, store your hives and
              inspections, sync your data across devices, and deliver HiveSnap's core features.
            </ListItem>
            <ListItem>
              <strong>Transcribe voice notes:</strong> Send audio recordings to AssemblyAI solely
              to convert speech to text. We do not use your audio for any other purpose.
            </ListItem>
            <ListItem>
              <strong>Process inspection card photos:</strong> Send photos to Anthropic's Claude API
              solely to extract structured inspection data. The image is not retained after
              processing.
            </ListItem>
            <ListItem>
              <strong>Weather forecasts:</strong> Use the city name you provide to fetch weather
              data relevant to your beekeeping location.
            </ListItem>
            <ListItem>
              <strong>Manage subscriptions:</strong> Validate purchases, grant premium access, and
              handle billing events via RevenueCat.
            </ListItem>
            <ListItem>
              <strong>Improve the App:</strong> Analyze usage patterns and crash reports to fix bugs
              and improve performance.
            </ListItem>
            <ListItem>
              <strong>Communicate with you:</strong> Send transactional emails (e.g., magic link
              sign-in). We do not send marketing emails without your explicit consent.
            </ListItem>
            <ListItem>
              <strong>Security & fraud prevention:</strong> Detect and prevent unauthorized access
              and abuse.
            </ListItem>
            <ListItem>
              <strong>Legal compliance:</strong> Meet our obligations under applicable law.
            </ListItem>
          </UnorderedList>

          {/* 4. Third-Party Services */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            4. Third-Party Services
          </Heading>
          <Text color={textColor} mb={4}>
            HiveSnap is built on third-party infrastructure. Each provider processes data on our
            behalf under their own privacy policies and data processing agreements:
          </Text>
          <TableContainer mb={6}>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th>Service</Th>
                  <Th>Role</Th>
                  <Th>Data Shared</Th>
                  <Th>Privacy Policy</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td><strong>Supabase</strong></Td>
                  <Td>Backend / database / authentication</Td>
                  <Td>Email, hive data, inspection records</Td>
                  <Td>
                    <Link href="https://supabase.com/privacy" isExternal color="blue.500">
                      supabase.com/privacy
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td><strong>PowerSync</strong></Td>
                  <Td>Offline-first data sync</Td>
                  <Td>Sync metadata (not record content)</Td>
                  <Td>
                    <Link href="https://www.powersync.com/legal/privacy-policy" isExternal color="blue.500">
                      powersync.com/legal/privacy-policy
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td><strong>RevenueCat</strong></Td>
                  <Td>Subscription management</Td>
                  <Td>Purchase receipts, device info, user ID</Td>
                  <Td>
                    <Link href="https://www.revenuecat.com/privacy/" isExternal color="blue.500">
                      revenuecat.com/privacy
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td><strong>AssemblyAI</strong></Td>
                  <Td>Voice note transcription</Td>
                  <Td>Audio recordings</Td>
                  <Td>
                    <Link href="https://www.assemblyai.com/legal/privacy-policy" isExternal color="blue.500">
                      assemblyai.com/legal/privacy-policy
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td><strong>Anthropic (Claude API)</strong></Td>
                  <Td>Inspection card photo processing</Td>
                  <Td>Inspection card images (not stored)</Td>
                  <Td>
                    <Link href="https://www.anthropic.com/privacy" isExternal color="blue.500">
                      anthropic.com/privacy
                    </Link>
                  </Td>
                </Tr>
                <Tr>
                  <Td><strong>Sentry</strong></Td>
                  <Td>Error monitoring & crash reporting</Td>
                  <Td>Crash reports, device info, app version, user ID</Td>
                  <Td>
                    <Link href="https://sentry.io/privacy/" isExternal color="blue.500">
                      sentry.io/privacy
                    </Link>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text color={textColor} mb={4}>
            We do not sell your personal data to third parties, and we do not use your data for
            advertising purposes.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={3}>
            A Note on AssemblyAI
          </Heading>
          <Text color={textColor} mb={3}>
            When you record a voice note, the audio is transmitted to AssemblyAI's servers for
            transcription. AssemblyAI processes audio solely to return a text transcript; they do
            not use your audio to train models without consent. Once transcription is complete, the
            resulting text is stored in your HiveSnap account. We do not retain the raw audio file
            beyond what is required for the transcription request.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={3}>
            A Note on Anthropic (Claude API)
          </Heading>
          <Text color={textColor} mb={3}>
            When you photograph an inspection card, the image is sent to Anthropic's Claude API
            solely to extract structured data from the card. HiveSnap does not store the photo —
            only the structured inspection data returned by Claude is saved to your account.
          </Text>
          <Text color={textColor} mb={3}>
            Under Anthropic's Commercial Terms of Service (Section B),{" "}
            <strong>
              "Anthropic may not train models on Customer Content from Services."
            </strong>{" "}
            This means your inspection card images are never used to train Anthropic's AI models.
            You retain all rights to your inputs, and HiveSnap owns the outputs.
          </Text>
          <Text color={textColor} mb={3}>
            For users in the EU/EEA, UK, and Switzerland, Anthropic's processing of data through
            the API is governed by their <strong>Data Processing Addendum (DPA)</strong>, which
            provides the following additional protections:
          </Text>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              Anthropic acts as a <strong>data processor</strong> on behalf of HiveSnap (the
              controller); they process your data only on our documented instructions.
            </ListItem>
            <ListItem>
              Anthropic will <strong>not sell, share, or combine</strong> your personal data with
              data from other customers or third parties.
            </ListItem>
            <ListItem>
              In the event of a security breach involving your data, Anthropic will notify HiveSnap{" "}
              <strong>within 48 hours</strong>.
            </ListItem>
            <ListItem>
              International transfers of EU personal data to Anthropic (US-based) are covered by{" "}
              <strong>EU Standard Contractual Clauses (SCCs)</strong> and the{" "}
              <strong>UK International Data Transfer Addendum</strong>.
            </ListItem>
            <ListItem>
              Anthropic is audited annually against industry standards (SOC 2). Certificates are
              available at{" "}
              <Link href="https://trust.anthropic.com" isExternal color="blue.500">
                trust.anthropic.com
              </Link>
              .
            </ListItem>
          </UnorderedList>
          <Text color={mutedColor} fontSize="sm" mb={4}>
            Sources:{" "}
            <Link href="https://www.anthropic.com/legal/commercial-terms" isExternal color="blue.500">
              anthropic.com/legal/commercial-terms
            </Link>
            {" · "}
            <Link href="https://www.anthropic.com/legal/data-processing-addendum" isExternal color="blue.500">
              anthropic.com/legal/data-processing-addendum
            </Link>
          </Text>

          {/* 5. Data Storage & Security */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            5. Data Storage & Security
          </Heading>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              Your data is stored on Supabase's infrastructure, hosted on{" "}
              <strong>eu-west-1 (WestEU - Ireland)</strong>.
            </ListItem>
            <ListItem>
              We use industry-standard security practices including TLS encryption in transit and
              encryption at rest.
            </ListItem>
            <ListItem>
              Passwordless authentication (magic link) means there are no passwords to compromise
              for your account.
            </ListItem>
            <ListItem>
              Access to your data is restricted to authorized personnel and service providers only.
            </ListItem>
            <ListItem>
              While we take reasonable precautions, no system is 100% secure. If you discover a
              security issue, please contact us at{" "}
              <Link href="mailto:cezar@constnext.com" color="blue.500">
                cezar@constnext.com
              </Link>
              .
            </ListItem>
          </UnorderedList>

          {/* 6. Data Retention */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            6. Data Retention
          </Heading>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Account & hive data:</strong> Retained as long as your account is active. If
              you delete your account, we delete your data within <strong>30 days</strong>, except
              where we are legally required to retain it.
            </ListItem>
            <ListItem>
              <strong>Voice notes:</strong> Raw audio is not stored by HiveSnap after transcription.
              The text transcript is retained as part of your inspection record until you delete it
              or close your account.
            </ListItem>
            <ListItem>
              <strong>Inspection card photos:</strong> Not stored by HiveSnap. Images are
              transmitted to Anthropic's Claude API for processing and discarded immediately after
              the structured data is returned.
            </ListItem>
            <ListItem>
              <strong>Sync data:</strong> PowerSync sync state is cleared when you uninstall the
              app or log out.
            </ListItem>
            <ListItem>
              <strong>Purchase history:</strong> RevenueCat retains transaction records per their
              own retention policy. We retain your subscription status for as long as your account
              exists.
            </ListItem>
            <ListItem>
              <strong>Crash/analytics data:</strong> Retained for up to <strong>12 months</strong>,
              then aggregated or deleted.
            </ListItem>
          </UnorderedList>

          {/* 7. Your Rights & Choices */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            7. Your Rights & Choices
          </Heading>
          <Text color={textColor} mb={3}>
            Depending on your location, you may have the following rights:
          </Text>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Access:</strong> Request a copy of your personal data.
            </ListItem>
            <ListItem>
              <strong>Correction:</strong> Ask us to correct inaccurate data.
            </ListItem>
            <ListItem>
              <strong>Deletion:</strong> Request deletion of your account and associated data.
            </ListItem>
            <ListItem>
              <strong>Data portability:</strong> Request your data in a portable format.
            </ListItem>
          </UnorderedList>
          <Text color={textColor} mb={4}>
            <strong>To exercise these rights,</strong> contact us at{" "}
            <Link href="mailto:cezar@constnext.com" color="blue.500">
              cezar@constnext.com
            </Link>
            . We will respond within <strong>30 days</strong>.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={2}>
            Subscription Management
          </Heading>
          <Text color={textColor} mb={4}>
            Manage or cancel your subscription at any time through{" "}
            <strong>App Store → Settings → Subscriptions</strong>.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={2}>
            Account Deletion
          </Heading>
          <Text color={textColor} mb={4}>
            You can delete your account by emailing us. This permanently removes your hives,
            inspections, photos, and account data from our systems.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={2}>
            Inspection Card Photos
          </Heading>
          <Text color={textColor} mb={4}>
            You can choose not to use the inspection card photo feature.
          </Text>

          <Heading as="h3" size="md" color={headingColor} mt={5} mb={2}>
            Voice Notes
          </Heading>
          <Text color={textColor} mb={4}>
            You can choose not to use the voice note feature.
          </Text>

          {/* 8. Children's Privacy */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            8. Children's Privacy
          </Heading>
          <Text color={textColor} mb={4}>
            HiveSnap is not directed to children under the age of <strong>13</strong> (or{" "}
            <strong>16</strong> in the EU/EEA). We do not knowingly collect personal information
            from children. If you believe a child has provided us with personal data, please contact
            us and we will delete it promptly.
          </Text>

          {/* 9. International Data Transfers */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            9. International Data Transfers
          </Heading>
          <Text color={textColor} mb={3}>
            HiveSnap is operated from Austria. If you use the App from outside this region, your
            data may be transferred to and processed in countries where data protection laws may
            differ. We rely on appropriate safeguards (e.g., Standard Contractual Clauses) for such
            transfers where required.
          </Text>
          <Text color={textColor} mb={3}>
            This includes transfers to:
          </Text>
          <UnorderedList color={textColor} spacing={2} mb={4} pl={2}>
            <ListItem>
              <strong>Anthropic</strong> (US-based) — covered by EU Standard Contractual Clauses
              (SCCs) and the UK International Data Transfer Addendum, as set out in Anthropic's DPA.
            </ListItem>
            <ListItem>
              <strong>AssemblyAI</strong> (US-based) — please review{" "}
              <Link href="https://www.assemblyai.com/legal/privacy-policy" isExternal color="blue.500">
                AssemblyAI's privacy policy
              </Link>{" "}
              for their transfer mechanisms.
            </ListItem>
            <ListItem>
              <strong>Supabase</strong> and <strong>RevenueCat</strong> — each maintain their own
              data transfer mechanisms; see their respective privacy policies linked in Section 4.
            </ListItem>
          </UnorderedList>

          {/* 10. Apple App Store */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            10. Apple App Store — Privacy Nutrition Label
          </Heading>
          <Text color={textColor} mb={3}>
            For reference, HiveSnap declares the following data types in its App Store Privacy
            Nutrition Label:
          </Text>
          <Text color={textColor} mb={2}><strong>Data Linked to You:</strong></Text>
          <UnorderedList color={textColor} spacing={1} mb={4} pl={2}>
            <ListItem>Contact Info — email address (used for passwordless sign-in)</ListItem>
            <ListItem>User Content — hive records, inspection notes, voice note transcripts</ListItem>
            <ListItem>Location — city name (user-entered, not GPS)</ListItem>
            <ListItem>Identifiers — user ID, device identifier (RevenueCat)</ListItem>
            <ListItem>Purchases — transaction history, subscription status (RevenueCat)</ListItem>
            <ListItem>Diagnostics — crash reports, error logs (linked via anonymous user ID)</ListItem>
          </UnorderedList>
          <Text color={textColor} mb={2}><strong>Data Not Linked to You:</strong></Text>
          <Text color={textColor} mb={2}><strong>Audio Data:</strong></Text>
          <UnorderedList color={textColor} spacing={1} mb={4} pl={2}>
            <ListItem>
              Audio recordings (voice notes) — transmitted to AssemblyAI for transcription, not
              stored permanently by HiveSnap.
            </ListItem>
          </UnorderedList>

          {/* 11. Changes to This Policy */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            11. Changes to This Policy
          </Heading>
          <Text color={textColor} mb={4}>
            We may update this Privacy Policy from time to time. When we do, we will update the
            "Last Updated" date at the top. If changes are material, we will notify you via the App
            or by email. Continued use of the App after changes take effect constitutes acceptance
            of the updated policy.
          </Text>

          {/* 12. Contact Us */}
          <Heading as="h2" size="lg" color={headingColor} mt={8} mb={3}>
            12. Contact Us
          </Heading>
          <Text color={textColor} mb={1}>
            If you have questions, requests, or concerns about this Privacy Policy:
          </Text>
          <Text color={textColor} mb={1}><strong>Cezar Neaga</strong></Text>
          <Text color={textColor} mb={1}>
            Email:{" "}
            <Link href="mailto:cezar@constnext.com" color="blue.500">
              cezar@constnext.com
            </Link>
          </Text>
          <Text color={textColor} mb={1}>
            Address: Hackenbergweg 51/4, 1190, Vienna, Austria
          </Text>
          <Text color={textColor} mb={8}>
            Website:{" "}
            <Link href="https://constnext.com/projects/hivesnap" isExternal color="blue.500">
              constnext.com/projects/hivesnap
            </Link>
          </Text>

        </Box>
      </Box>
    </Flex>
  );
}
