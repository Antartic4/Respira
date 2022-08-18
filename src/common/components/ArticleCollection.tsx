import Link from "next/link";
import { Article } from "../../../types";

const ArticleCollection = ({
  urlToImage,
  description,
  title,
  publishedAt,
  url,
}: Article) => {
  return (
    <div className="min-h-screen pb-3 from-violet-300 to-violet-400 bg-gradient-to-l">
      <br />
      <div className="relative w-full max-w-md min-w-0 mx-auto mt-5 mb-2 break-words bg-white shadow-lg xl:max-w-2xl rounded-xl">
        <div className="mx-4 -mt-6 card-header">
          <br />
          <picture>
            <source srcSet={urlToImage} type="image/webp" />
            <img src={urlToImage} className="rounded-2xl" alt="title" />
          </picture>
        </div>
        <div className="card-body">
          <a href="#">
            <h4 className="font-semibold">{title}</h4>
          </a>
          <p className="mb-1 opacity-70">{description}</p>
          <div className="align-middle">
            <div>
              <Link href={url}>
                <button
                  className="text-blue-600 underline button button-pink"
                  data-ripple-light="true"
                >
                  Leer Mas
                </button>
              </Link>
              <br />
              <br />
            </div>
            <div>
              <p className="mb-1 opacity-90">Publicado el : {publishedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCollection;
