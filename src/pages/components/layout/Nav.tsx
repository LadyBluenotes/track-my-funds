import UserNav from "./UserNav";
import LandingNav from "./LandingNav";
import { useSession } from "next-auth/react";

export default function Nav() {
    const { data: session } = useSession();
    
    return <>{session ? <UserNav /> : <LandingNav />}</>;
    }