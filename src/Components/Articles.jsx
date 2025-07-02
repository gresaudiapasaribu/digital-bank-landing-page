import React from "react";
import currency from "../assets/images/image-currency.jpg";
import restaurant from "../assets/images/image-restaurant.jpg";
import plane from "../assets/images/image-plane.jpg";
import confetti from "../assets/images/image-confetti.jpg";
const Articles = () => {
  const articles = [
    {
      image: currency,
      author: "Claire Robinson",
      title: "Recieve money in any currency with no fees",
      desc: "The world is getting smaller and we're becoming more.mobile. So why should you be forced to only receive money in a single...",
    },
    {
      image: restaurant,
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      desc: "Our simple budgeting feature allows you to separate out your spending and set realstic limits each month. That means you...",
    },
    {
      image: plane,
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      desc: "We want you to enjoy your travels. This is why don't charge any fees on purchases while you're abroad. we'll even show you...",
    },
    {
      image: confetti,
      author: "Claire Robinson",
      title: "Our invite-ony Beta accounts are now live!",
      desc: "After a lot of hard work by the whole team, we're excited to launch our closed beta. it's easy to request an invite through the site...",
    },
  ];
  return (
    <div className="py-5 px-10 md:px-20">
      <p className="text-center text-4xl mb-7">Latest Articles</p>
      <div className="flex flex-col md:flex-row gap-10">
        {articles.map((article, index) => {
          return (
            <div className="bg-gray-100" key={index}>
              <img className="rounded-lg w-full md:h-[200px]" src={article.image} alt="" />
              <div className="py-8 px-8">
                <p className="text-gray-400">By {article.author}</p>
                <p className="text-2xl font-bold py-2 md:py-4 leading-none"> {article.title}</p>
                <p className="text-gray-500"> {article.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
