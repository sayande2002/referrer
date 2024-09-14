import { Metadata } from "next";

import { fromNow } from "@refhiredcom/utils";
import { unstable_setRequestLocale } from "next-intl/server";

import { PostCard } from "@/components/custom-components";
import { MultipleButtons } from "@/components/custom-components/post-card/post-buttons";
import Navigate from "@/components/navigate";

import { requests } from "@/lib/axios";

export const metadata: Metadata = {
  title: "Home",
  description: "Get job referrals to the top best companies of the world",
};

const Home = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const response = await requests
    .get("posts", {
      headers: {
        name: "Sayan De from Server Component",
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));

  console.log("😊Postsssssssssssssssssssssssssssss", response);
  const posts: any[] = [];
  return (
    <>
      {response?.data.map((data) => (
        <PostCard key={data.id}>
          <PostCard.Image src={data.user?.image ?? "/images/avatar/avatar.png"} />
          <PostCard.Content>
            <PostCard.Header
              name={data.user?.name}
              userName={`@${data.user?.userName}`}
              time={fromNow(data.createdAt)}
              timeLeft={fromNow(data.expiresAt)}
            />
            <Navigate userName={data.user.userName} postId={data.id}>
              <PostCard.Description>{data.description}</PostCard.Description>
            </Navigate>
            <PostCard.Tags
              allTags={false}
              location={data.jobLocation}
              experience={data.jobExperience}
              jobType={data.jobType}
              role={data.jobRole}
              salary={data.jobCompensation}
              // skills={data.tags}
            />
            <PostCard.Footer>
              <MultipleButtons link={`${data.user.userName}/${data.id}`} title={data.description} />
              {/* <ApplyDialog
                myObject={data.accept}
                postID={data.id}
                stars={data.stars}
                totalApplied={data.totalApplied}
                acceptLimit={data.acceptLimit}
                expired={expired(data.expiresAt)}
              /> */}
            </PostCard.Footer>
          </PostCard.Content>
        </PostCard>
      ))}
    </>
  );
};

export default Home;
