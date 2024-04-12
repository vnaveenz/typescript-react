import { type ReactNode } from "react";

type CourseGoalProps = {
  title: string;
  id: number;
  children?: ReactNode | undefined;
  onDelete: (id: number) => void;
};

export default function CourseGoal({
  title,
  children,
  onDelete,
  id,
}: CourseGoalProps): ReactNode {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
}
