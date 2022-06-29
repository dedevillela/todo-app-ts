import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { PlusCircle } from "phosphor-react";

import styles from "./TaskSubmitForm.module.scss";

export type TaskTypes = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TaskSubmitFormProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
};

export function TaskSubmitForm({ tasks, setTasks }: TaskSubmitFormProps) {
  const [newTask, setNewTask] = useState("");

  function handleTaskSubmit(event: FormEvent) {
    event.preventDefault();

    setTasks([{ id: uuid(), title: newTask, isComplete: false }, ...tasks]);
    setNewTask("");
  }

  function handleTaskInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Escreva a sua tarefa!');
  }

  return (
    <form onSubmit={handleTaskSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        value={newTask}
        onChange={handleTaskInput}
        onInvalid={handleNewCommentInvalid}
        required
      />
      <button type="submit" title="Criar nova tarefa">
        Criar <PlusCircle />
      </button>
    </form>
  );
}
