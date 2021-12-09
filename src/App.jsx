import React from "react";
import MovieBox from "./components/MovieBox";

const movies = [
  {
    title: "스파이더맨-노 웨이 홈",
    score: 9,
    poster:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84949/84949_320.jpg",
  },
  {
    title: "몬스타엑스 : 더 드리밍",
    score: 8,
    poster:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85458/85458_320.jpg",
  },
  {
    title: "듄",
    score: 7,
    poster:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84945/84945_320.jpg",
  },
  {
    title: "돈 룩 업",
    score: 6,
    poster:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85094/85094_320.jpg",
  },
  {
    title: "연애 빠진 로맨스",
    score: 5.5,
    poster:
      "https://img.cgv.co.kr/Movie/Thumbnail/Poster/000085/85239/85239_320.jpg",
  },
];

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="content">
          {movies.map((movie) => {
            return <MovieBox movie={movie} />;
          })}
        </section>
      </main>
    );
  }
}

export default App;
