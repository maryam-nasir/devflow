import { Document, model, models, Schema, Types } from "mongoose";

export interface ICollection {
  authorId: Types.ObjectId;
  questionId: Types.ObjectId;
}

export type CollectionType = ICollection & Document;

const CollectionSchema = new Schema<ICollection>(
  {
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true }
);

const Collection =
  models?.Collection || model<ICollection>("Collection", CollectionSchema);

export default Collection;
