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
    <>
      <div className="min-h-screen pb-10 from-pink-200 via-pink-400 to-pink-600 bg-gradient-to-br">
        <div className="w-full px-4 pt-5 mx-auto text-center md:w-7/12">
          <div className="py-1 text-sm text-white"></div>
        </div>
        <div className="relative w-full max-w-md min-w-0 mx-auto mt-16 mb-6 break-words bg-white shadow-lg xl:max-w-2xl rounded-xl">
          <div className="mx-4 -mt-6 card-header">
            <a
              // href="https://www.material-tailwind.com"
              blur-shadow-image="true"
            >
              <img
                className="w-auto rounded-lg"
                src={urlToImage}
                alt="tailwind-card-image"
              />
            </a>
          </div>
          <div className="card-body">
            <a href="#">
              <h4 className="font-semibold">{title}</h4>
            </a>
            <p className="mb-4 opacity-60">{description}</p>
            <div className="flex align-middle">
              <div>
                <Link href={url}>
                  <button
                    className="button button-pink"
                    data-ripple-light="true"
                  >
                    Leer Mas
                  </button>
                </Link>
              </div>
              <div>
                <p>Publicado el:</p>
                <p>{publishedAt}.</p>
              </div>
            </div>
          </div>
        </div>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/colored-shadow.js"></script>
      </div>
      <div className="flex">
        <div>
          <div className="w-[100px] h-[100px]">
            <img className="object-cover" src={urlToImage} alt={title} />
          </div>
          <p>{title}</p>
        </div>
        <div>
          <p>{description}</p>
          <Link href={url}>
            <a>Redirect</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleCollection;
