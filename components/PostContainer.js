import React from "react";
import PT from "prop-types";
// import PostSnippet from "./PostSnippet";
import Snippet from './PostSnippet';
import withTheme from "../lib/withTheme";
import Search from "./Search";

function PostContainer({ dark, postsData, theme }) {
  const { textColorForDark, textColorForLight, altColors } = theme;

  const [posts, setPosts] = React.useState(postsData);

  const mapPosts = () => {
    const pwd = postsData.map(post => ({ ...post, display: true }));
    return pwd;
  }

  const search = searchTerm => {
    const filteredPosts = posts.map(post => {
      if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return { ...post, display: true };
      }

      if (post.snippet.toLowerCase().includes(searchTerm.toLowerCase())) {
        return { ...post, display: true };
      }

      if (searchTerm === "") {
        return { ...post, display: true };
      }

      return { ...post, display: false };
    });

    setPosts(filteredPosts);
  };

  React.useEffect(() => {
    const pwd = mapPosts(postsData);
    setPosts(pwd);
  }, []);

  return (
    <main className="post-container">
      <h3>Posts</h3>
      <Search search={search} />
      {posts.map(
        post =>
          post.display && <Snippet key={post.id} dark={dark} {...post} />
      )}

      <style jsx>
        {`
          .post-container {
            padding-top: 30px;
            color: ${dark ? textColorForDark : textColorForLight};
            width: 100%;
            padding-bottom: 100px;
          }

          h3 {
            color: ${altColors[1]};
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </main>
  );
}

PostContainer.propTypes = {
  theme: PT.shape(PT.string.isRequired).isRequired,
  dark: PT.bool.isRequired,
  postsData: PT.arrayOf(PT.object).isRequired
};

export default withTheme(PostContainer);
