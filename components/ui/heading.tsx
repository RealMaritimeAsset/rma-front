interface HeadingProps {
  title: string;
  description: string;
  size: 'md' | 'sm';
  separator?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  description,
  size
}) => {
  return (
    <div>
      <div>
        {size === 'md' ? (
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        ) : (
          <h3 className="text-lg font-medium">{title}</h3>
        )}
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
