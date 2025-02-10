import Link from "next/link";

import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";

type TagCardProps = {
  _id: string;
  name: string;
  noOfQuestions?: number;
  showCount?: boolean;
  isCompact?: boolean;
};

const TagCard = ({
  _id,
  name,
  noOfQuestions,
  showCount,
  isCompact,
}: TagCardProps) => {
  return (
    <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${getDeviconClassName(name)} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{noOfQuestions}</p>
      )}
    </Link>
  );
};

export default TagCard;
