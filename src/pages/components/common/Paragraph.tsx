
interface ParagraphProps {
    children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className={`mb-4 lg:mb-8 text-gray-600 md:text-lg lg:text-xl`}>
        {children}
    </p>
  );
}