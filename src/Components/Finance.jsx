import React from "react";
import iconOnline from "../assets/images/icon-online.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconAPI from "../assets/images/icon-api.svg";
const Finance = () => {
  const openBankings = [
    {
      image: iconOnline,
      name: "online Banking",
      desc: "Our modern web and mobile application allow you to keep track of your finances wherever you are in the world",
    },
    {
      image: iconBudgeting,
      name: "simple budgeting",
      desc: "See exactly where your money goes each month. Receive notifications when you'r close to your hitting limits",
    },
    {
      image: iconOnboarding,
      name: "Fast Onboarding",
      desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
    },
    {
      image: iconAPI,
      name: "Open API",
      desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier",
    },
  ];
  return (
    <div className="text-center md:text-left my-8 bg-gray-100 py-7 pt-50 px-10 md:px-20">
      <p className="text-4xl mb-3">Why choose Easybank </p>
      <p className="text-gray-500 mb-8 max-w-xl">
        We leverage Open Banking to turn your bank account into financial hub.
        contol your financies like never before.
      </p>
      <div className="flex flex-col md:flex-row gap-8">
        {openBankings.map((openBanking, index) => {
          return (
            <div className={index}>
              <img src={openBanking.image} alt="" className="mx-auto md:mx-0"/>
              <p className="text-xl my-2">{openBanking.name}</p>
              <p className="text-gray-500">{openBanking.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Finance;
