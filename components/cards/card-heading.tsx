import { CardDescription, CardTitle } from "../ui/card";

export default function CardHeading({
  title,
  description,
  logos,
}: {
  title: string;
  description: React.ReactNode;
  logos: React.ReactNode;
}) {
  return (
    <div className="grid auto-rows-min items-start gap-1">
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <div className="flex flex-wrap gap-2.5 pt-2.5">{logos}</div>
    </div>
  );
}
