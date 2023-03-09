import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getRecentPosts } from "../../api/RecentPageAPI";
import PostCard from "../postCard/PostCard";

const RecentPosts = () => {
  const { data, isFetching, isLoading } = useQuery(["recentPosts"], () =>
    getRecentPosts()
  );
  console.log(data);
  if (isFetching) {
    return <p>is Fetching</p>;
  }
  if (isLoading) {
    return <p>is Loading</p>;
  }
  return;
  //    <>
  //         data.map((post)=>{
  //             return <PostCard/>
  //                    })
  //                     </>
};

export default RecentPosts;
