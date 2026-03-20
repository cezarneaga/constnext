import { Link } from "components/chakra-link";

export function Alert({ preview }: { preview: boolean }) {
  return <>{preview && <Link href="/api/exit-preview">Click here</Link>}</>;
}
