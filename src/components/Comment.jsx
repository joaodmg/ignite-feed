import { ThumbsUp, Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";

export function Comment({ content }){
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/joaodmg.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Vitor Godinho</strong>
              <time
                title="20 de Setembro às 08:00"
                dateTime="2023-09-20 08:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
