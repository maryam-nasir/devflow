import { model, models, Schema, Types } from "mongoose";

export interface ITagQuestion {
  questionId: Types.ObjectId;
  tagId: Types.ObjectId;
}

const TagQuestionSchema = new Schema<ITagQuestion>({
  questionId: { type: Schema.Types.ObjectId, required: true, ref: "Question" },
  tagId: { type: Schema.Types.ObjectId, required: true, ref: "Tag" },
});

const TagQuestion =
  models?.TagQuestion || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
