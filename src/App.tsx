import { useState, type ReactNode } from "react";
import Header from "./Components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import AddGoal from "./Components/AddGoal.tsx";
import CourseGoalList from "./Components/CourseGoalList.tsx";

export type goalProps = {
  id: number;
  title: string;
  description: string;
};

export default function App(): ReactNode {
  const [goals, setGoals] = useState<Array<goalProps>>([]);
  function handleAddGoal(goal: string, summary: string): void {
    setGoals((prevGoals) => {
      const newGoal: goalProps = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddGoal handleAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
