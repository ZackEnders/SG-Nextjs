import { db } from "@/db";
import { cache } from "react";

export type CommentWithAuthor = Awaited<
  ReturnType<typeof fetchCommentByPostId>
>[number];

export const fetchCommentByPostId = cache((postId: string) => {
  return db.comment.findMany({
    where: { postId },
    include: {
      user: { select: { name: true, image: true } },
    },
  });
});
