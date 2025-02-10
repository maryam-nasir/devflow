import Link from "next/link";

import ROUTES from "@/constants/routes";
import { getTimestamp } from "@/lib/utils";

import TagCard from "./TagCard";
import Metric from "../Metric";

type QuestionCardProps = {
  question: Question;
};

const QuestionCard = ({ question }: QuestionCardProps) => {
  const { _id, title, tags, author, createdAt, views, upvotes, answers } =
    question;
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={ROUTES.QUESTION(_id)}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>{" "}
        </div>
      </div>

      <div className="mt-3.5 flex w-full flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} isCompact />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imageUrl={author.image}
          alt={author.name}
          value={author.name}
          title={`• asked ${getTimestamp(createdAt)}`}
          href={ROUTES.USER_PROFILE(author._id)}
          textClassName="body-medium text-dark400_light700"
          isAuthor
        />

        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <Metric
            imageUrl="/icons/like.svg"
            alt="like"
            value={upvotes}
            title=" Votes"
            textClassName="small-medium text-dark400_light800"
          />

          <Metric
            imageUrl="/icons/message.svg"
            alt="answers"
            value={answers}
            title=" Answers"
            textClassName="small-medium text-dark400_light800"
          />

          <Metric
            imageUrl="/icons/eye.svg"
            alt="views"
            value={views}
            title=" Views"
            textClassName="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
