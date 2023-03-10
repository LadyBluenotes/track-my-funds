import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ProtectedPage({ children }: { children: React.ReactNode}) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const loading = status === "loading";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    router.push("/login");
    return <div>Redirecting...</div>;
  }

  return <>{children}</>;
}

export default ProtectedPage;