import React from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const PostBox = () => {
  return (
    <div className="">
      <div className="bg-white  rounded-2xl mx-auto my-5 shadow-lg">
        {/* top part  */}
        <div className="w-5/6 mx-auto">
          <div className="flex pt-6 pb-4">
            <div>
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div className="font-medium text-md">UserName</div>
              <div className="font-normal text-gray-600">timestamp</div>
            </div>
          </div>
        </div>
        {/* content part */}
        <div className="w-5/6 mx-auto text-left pb-5">
          <h3>Title:</h3>
          <div className="mt-4">
            <p className="text-xs">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              asperiores quaerat adipisci quidem repellendus aperiam, id nam
              minus voluptatum saepe debitis at alias harum, illum
              exercitationem deleniti facilis suscipit delectus velit ipsam,
              amet est nostrum nesciunt. Reiciendis suscipit odit illum ipsa
              rerum molestiae doloribus quam ad sint, sequi, aspernatur delectus
              sed a distinctio molestias neque inventore voluptas quo
              repellendus cumque sit quos obcaecati. A ullam dicta dignissimos
              nisi, assumenda, voluptas facilis iure eos deleniti nam unde,
              doloremque natus hic voluptate! Qui hic nulla aperiam! Ducimus
              doloribus cumque hic nulla mollitia quibusdam debitis id repellat
              modi aspernatur amet, ratione necessitatibus in! Expedita,
              doloribus soluta iure quisquam, neque enim, eius atque unde
              incidunt aliquam nostrum eum dolorum in autem sint dolores! Ea
              officia quisquam numquam reiciendis veritatis ducimus temporibus!
              Nulla quidem eius quis, incidunt commodi impedit soluta, et
              veritatis reiciendis repellat ea! Cum, laborum quibusdam deleniti
              amet harum dolorem cumque mollitia ducimus recusandae. Inventore
              enim asperiores, quos, eos nesciunt id dicta voluptas repellendus
              in rerum repudiandae qui. Tempora officiis facilis ratione sunt
              perferendis natus id sed non voluptatibus deserunt doloribus
              adipisci cupiditate accusamus eos soluta quam quae hic dolore amet
              eveniet facere, quasi nisi nesciunt reiciendis? Perspiciatis vitae
              numquam adipisci eius fuga?
            </p>
          </div>
          <div className=" py-3">
            <div className="flex justify-between mb-2">
              <div className="text-gray-700"> 20 Likes . 10 dislikes</div>
              <div className="text-gray-700"> 60 comments</div>
            </div>
            <div className="flex justify-between">
              <div className="flex  ">
                <button className="btn btn-ghost">
                  <HandThumbUpIcon className="h-6 w-6 mr-2" /> Like
                </button>
                <button className="btn btn-ghost">
                  <HandThumbDownIcon className="h-6 w-6 mr-2" /> Dislike
                </button>
              </div>
              <div>
                <button className="btn btn-ghost">Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
