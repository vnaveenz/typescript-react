import { type FormEvent, useRef, type ReactNode } from "react";
// import { type handleAddGoalProps } from "../App.tsx";

type AddGoalProps = {
  handleAddGoal: (goal: string, summary: string) => void;
};

export default function AddGoal({ handleAddGoal }: AddGoalProps): ReactNode {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleNewGoal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    handleAddGoal(enteredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleNewGoal}>
      <p>
        <label htmlFor="goal">Course Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <button>Add New Goal</button>
    </form>
  );
}
