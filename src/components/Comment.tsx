import { ThumbsUp, Trash } from "@phosphor-icons/react/dist/ssr";
import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";
import { useState } from "react";

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps){
  
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment () {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
    // Outra opcao seria no button chamar assim
    // <button onClick={() => setLikeCount(likeCount + 1)}>
  }

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
            <button onMouseDown={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={24} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
