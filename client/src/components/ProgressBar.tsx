import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md">
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground mt-2 text-center">
        {current} of {total} words completed
      </p>
    </div>
  );
}
