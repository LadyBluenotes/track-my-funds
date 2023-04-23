
interface ContentCardProps {
    children: React.ReactNode;
}

export default function ContentCard({ children }: ContentCardProps) {

    return (
        <div className="flex flex-col justify-center max-w-5xl p-5 shadow-md rounded-none bg-white mx-auto mt-7 mb-10 sm:w-screen md:rounded-xl"
        style={{
          backdropFilter: "blur(20px)",
        }}>
            <div className="place-self-center w-10/12">
            {children}
            </div>
        </div>
    )
}