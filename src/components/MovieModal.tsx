import React, { useEffect, useState } from "react";
import { Movie } from "../misc/types";
import { constructImageUrl } from "../misc/tmdbConfig";
import Button from "./Button";
import Close from "../assets/icons/Close";

type MovieModalProps = {
  movie: Movie;
  onClose: () => void;
};

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-screen h-screen p-12 bg-black bg-opacity-70 z-40 flex justify-center items-center overflow-hidden">
      <div className="border max-w-screen-sm border-white border-opacity-20 relative overflow-hidden rounded-lg">
        <div
          onClick={onClose}
          className="absolute rounded-full right-5 top-5 z-50 hover:bg-white hover:bg-opacity-25 cursor-pointer p-2"
        >
          <Close />
        </div>
        <div className="relative">
          <img
            className={`transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0 blur"
            } `}
            src={constructImageUrl("ORIGINAL", movie.backdrop_path)}
            alt=""
          />
          <div
            className={`absolute min-w-[500px] h-full bg-gradient-to-t from-[#161616] to-transparent top-0 left-0 right-0 bottom-0 ${`transition-all duration-200 ${
              isVisible ? "opacity-100" : "opacity-0 blur-md"
            } `}`}
          ></div>
        </div>
        <div className="bg-[#161616] flex flex-col gap-4 p-10">
          <h1 className="text-5xl">{movie.title}</h1>
          <p className="font-normal">{movie.overview}</p>

          <Button
            isArrow={true}
            style="p-3 font-normal text-xl w-[150px]"
            text="Get Started"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
