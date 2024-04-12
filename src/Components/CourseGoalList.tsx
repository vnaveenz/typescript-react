import { type ReactNode } from "react";
import CourseGoal from "./CourseGoal.tsx";
import { goalProps } from "../App.tsx";

type CourseGoalListProps = {
  goals: Array<goalProps>;
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps): ReactNode {
  return (
    <ul>
      {goals.map((goal) => (
        <li>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
