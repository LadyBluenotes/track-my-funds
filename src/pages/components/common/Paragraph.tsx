
interface ParagraphProps {
    children: React.ReactNode;
    color?: string;
}

export default function Paragraph({ children, color }: ParagraphProps) {
  return (
    <p className={`mb-4 lg:mb-8 text-gray-600 md:text-lg lg:text-xl`}>
        {children}
    </p>
  );
}