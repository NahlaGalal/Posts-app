import React from "react";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { IUserPosts } from "./Types";

const User: React.FC<IUserPosts> = ({
  website,
  company,
  email,
  name,
  phone,
  username,
}) => {
  return (
    <section className="custom-container mb-16 relative">
      <div
        className="[ bg-lightViolet rounded-xl ]
    [ border border-greyColor border-opacity-25 ]
    [ text-center p-4 text-blackColor ]"
      >
        {/* User avatar */}
        <span
          className="[ flex justify-center items-center ]
                [ w-24 h-24 ] 
                [ rounded-full bg-darkVoilet text-white ]
                [ font-bold text-xl ]
                [ absolute -top-12 left-1/2 -translate-x-1/2 ]"
          data-cy="user-avatar"
        >
          {name[0].toLocaleUpperCase()}
        </span>

        {/* User name */}
        <h2
          className="mt-12 text-2xl font-semibold text-darkVoilet"
          data-cy="user-name"
        >
          {name}
        </h2>
        <p
          className="[ text-sm font-medium ] 
        [ py-1 px-3 ] 
        [ text-mainColor bg-lightViolet mix-blend-multiply ] 
        rounded-2xl w-max mx-auto"
          data-cy="user-username"
        >
          @{username}
        </p>

        <div className="flex justify-center flex-wrap gap-4 my-6">
          {/* User phone */}
          <p className="flex gap-1 items-center" data-cy="user-phone">
            <BsFillTelephoneFill />
            {phone}
          </p>

          {/* User email */}
          <p className="flex gap-1 items-center" data-cy="user-email">
            <BsFillEnvelopeFill />
            {email}
          </p>

          {/* User Website */}
          <a
            href={website}
            className="flex gap-1 items-center"
            data-cy="user-website"
          >
            <TfiWorld />
            {website}
          </a>
        </div>

        <div
          className="[ border-t border-t-greyColor ]
        [ pt-4 ]"
        >
          <h3 className="text-sm text-greyColor" data-cy="work-title">
            Work
          </h3>

          {/* User company */}
          <p className="font-medium mt-1" data-cy="user-company">
            {company.bs} @ {company.name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default User;
