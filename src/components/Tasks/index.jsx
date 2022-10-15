import { Task } from "../Task"
import styles from "./tasks.module.css"
import { TbClipboardText } from "react-icons/tb"
import { useTasks } from "../../hooks/useTasks"

export function Tasks(){
  const {tasks} = useTasks();

  const tasksQuantity = tasks.length
  const completedTasksQuantity = tasks.filter(item => item.isCompleted === true).length
  return(
    <section className={styles.tasks}>
    <header className={styles.header}>
    <div>
    <p>Tarefas criadas</p>
    <span>{tasksQuantity}</p>
  </div>

  <div>
  <p className={styles.textPurple}>Conclusion</p>
  <span>{completedTasksQuantity} the{tasksQuantity}</span>
</div>
</header>
<div className={styles.list}>

{tasks.map((item)=>{
  return(
    <Task task={item} key={item.id}/>
  )
})}

{tasksQuantity <= 0 && (
  <section className={styles.empty}>
  <TbClipboardText size={50}/>
  <div>
  <p>Voce ainda nao tem tarefas cadastradas
  <span>Crie tarefas e organize seus itens a fazer</span>
  </div>
</section>
)}
</div>
</section>
  )
}