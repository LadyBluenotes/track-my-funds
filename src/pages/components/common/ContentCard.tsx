
interface ContentCardProps {
    children: React.ReactNode;
}


export default function ContentCard({ children }: ContentCardProps) {

    return (
        <div className="flex flex-col justify-center max-w-4xl p-5 shadow-md rounded-none bg-white mx-auto mt-7 mb-10 sm:w-screen md:rounded-xl"
        style={{
          backdropFilter: "blur(20px)",
        }}>
            <div className="place-self-center lg:col-span-7">
            {children}
            </div>
        </div>
    )
}