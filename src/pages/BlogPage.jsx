import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { blog, card_bg } from "../assets/index";
import { useSearchParams } from "react-router-dom";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import blogData from "../Image";

const BlogPage = () => {
  const [searchParams] = useSearchParams();
  const [blog, setBlog] = useState({});

  const shareUrl =
    "https://verma-estate.onrender.com/listing/65c3ed0a153ef84ce48aeeae";

  // const shareUrl = window.location.href;
  // console.log(shareUrl);

  useEffect(() => {
    const blogQuery = searchParams.get("blog");
    const blog_Data = blogData.blogData.find((blog_) => blog_.id === blogQuery);
    setBlog(blog_Data);
    console.log(blog);
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="text-4xl text-center font-Rubik font-semibold  p-4 ">
          {blog.title}
        </p>
        <span className="flex flex-col ss:flex-row items-center justify-center gap-6 ss:gap-0 ss:justify-between m-0 text-black font-Roboto p-2 w-10/12 ">
          <span className="flex gap-4 items-center">
            <img src={card_bg} alt="" className="mr-2" />
            <p className="m-0 font-Roboto">By TOI</p>
          </span>
          <span className="flex items-center gap-4 ">
            <FacebookShareButton url={shareUrl}>
              <FaFacebook className="text-xl cursor-pointer text-bg-primary hover:text-bg-secondary" />
            </FacebookShareButton>

            <WhatsappShareButton url={shareUrl}>
              <IoLogoWhatsapp className="text-xl cursor-pointer text-bg-primary hover:text-bg-secondary" />
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl}>
              <FaXTwitter className="text-xl cursor-pointer text-bg-primary hover:text-bg-secondary" />
            </TwitterShareButton>
          </span>
        </span>
        <span className="flex justify-center flex-col p-[4rem] mx-auto gap-2 ">
          <img src={blog.src} alt="" className="w-[80%] mx-auto" />
          <p className="text-4xl text-center font-Rubik font-semibold   ">
            Title1
          </p>
          <p className=" text-xl font-Roboto p-4 leading-[2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            officia aliquam libero consequuntur nulla incidunt quo, perspiciatis
            ab nemo doloribus culpa, ex nostrum delectus voluptas soluta
            sapiente iste asperiores aperiam odit eius debitis, animi ullam
            mollitia. Neque libero ipsam architecto, recusandae accusamus sint
            quae eligendi repellat quibusdam officiis, debitis cupiditate
            repellendus corporis, rerum aliquid fugiat eaque! Velit iure ratione
            nostrum voluptas placeat aperiam corrupti porro consequatur vero
            error, voluptate expedita tempore quaerat sapiente, minus unde quo
            aut? Harum vero corrupti voluptatem facere cum. Alias ex quas,
            laborum enim itaque delectus incidunt sed libero quos optio hic
            quidem inventore, dolorem tempore? Ipsa, officia numquam quae
            delectus dicta aspernatur voluptates nostrum accusamus quidem
            dolore, maxime, fuga praesentium ex iure obcaecati porro incidunt
            qui libero perspiciatis voluptatibus quia provident temporibus.
            Incidunt totam, non tempore accusantium cupiditate aliquam enim
            officiis cumque, debitis a delectus harum, ipsam quam aliquid
            aperiam officia consectetur reiciendis quae blanditiis! Voluptas
            soluta vitae nobis minima itaque alias hic voluptate nemo eligendi
            quod minus sit enim, nesciunt eius deleniti fuga aliquid, esse
            dolores neque reprehenderit cum voluptates ullam. Magnam, quo
            ducimus! Omnis fuga magnam accusantium dignissimos exercitationem
            modi laborum dolorum dolores voluptas natus in nisi necessitatibus
            fugit amet, alias dolorem. Dicta.
          </p>
        </span>
      </div>
    </>
  );
};

export default BlogPage;
