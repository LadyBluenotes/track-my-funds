
interface ParagraphProps {
    children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        {children}
    </p>
  );
}