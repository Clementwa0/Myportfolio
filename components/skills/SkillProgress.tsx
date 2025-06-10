import { Progress } from "@/components/ui/progress";

interface SkillProgressProps {
  value: number;
}

export default function SkillProgress({ value }: SkillProgressProps) {
  return (
    <Progress 
      value={value} 
      className="h-2" 
      indicatorClassName={
        value >= 80 ? "bg-chart-1" :
        value >= 70 ? "bg-chart-2" :
        value >= 60 ? "bg-chart-3" :
        value >= 50 ? "bg-chart-4" : "bg-chart-5"
      }
    />
  );
}