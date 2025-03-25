import Image from "next/image";
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
  showRemoveButton?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
};

const TagCard = ({
  _id,
  name,
  noOfQuestions,
  showCount,
  isCompact,
  showRemoveButton,
  isButton,
  handleRemove,
}: TagCardProps) => {
  const content = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 flex flex-row gap-2 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${getDeviconClassName(name)} text-sm`}></i>
          <span>{name}</span>
        </div>
        {showRemoveButton && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="close icon"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{noOfQuestions}</p>
      )}
    </>
  );

  if (isCompact) {
    return isButton ? (
      <button className="flex justify-between gap-2" type="button">
        {content}
      </button>
    ) : (
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagCard;
