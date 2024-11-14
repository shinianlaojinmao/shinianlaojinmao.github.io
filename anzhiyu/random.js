var posts=["2024/10/20/hello-world/","2024/10/27/hello/","2024/10/27/666/","2024/10/27/hello-world - 副本 - 副本/","2024/10/27/hello-world - 副本/","2024/11/09/今天/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };