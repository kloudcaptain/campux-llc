import { fragment } from "@/app/lib/ported";

export default function NotFound() {
  return <div dangerouslySetInnerHTML={{ __html: fragment("not-found") }} />;
}
