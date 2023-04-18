
interface ParagraphProps {
    children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="mb-4 text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
        {children}
    </p>
  );
}