import { Document, model, models, Schema, Types } from "mongoose";

export interface IVote {
  author: Types.ObjectId;
  actionId: Types.ObjectId;
  actionType: "question" | "answer";
  voteType: "upvote" | "downvote";
}

export type voteType = IVote & Document;

const VoteSchema = new Schema<IVote>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    actionType: { type: String, required: true, enum: ["question", "answer"] },
    voteType: { type: String, required: true, enum: ["upvote", "downvote"] },
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
