import ProtectedPage from "../ProtectedPage"
import ContentCard from "./ContentCard"

interface ProtectedCardProps {
    children: React.ReactNode
}

export default function ProtectedCard({ children }: ProtectedCardProps) {

    return (
        <ProtectedPage>
            <ContentCard>
                {children}
            </ContentCard>
        </ProtectedPage>
    )
}