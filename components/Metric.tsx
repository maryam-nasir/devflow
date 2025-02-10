import Image from "next/image";
import Link from "next/link";

type MetricProps = {
  imageUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textClassName: string;
  imageClassName?: string;
  isAuthor?: boolean;
};

const Metric = ({
  imageUrl,
  alt,
  value,
  title,
  href,
  textClassName,
  imageClassName = "",
  isAuthor,
}: MetricProps) => {
  const content = (
    <>
      <Image
        src={imageUrl}
        width={16}
        height={16}
        alt={alt}
        className={`rounded-full object-contain ${imageClassName}`}
      />

      <p className={`flex items-center gap-1 ${textClassName}`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {content}
    </Link>
  ) : (
    <div className="flex-center gap-1">{content}</div>
  );
};

export default Metric;
