// leetcode71

const getSimplifiedPath = (path) => {
  const simplifiedPath = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};

console.log(getSimplifiedPath("/.../a/../b/c/../d/./"));
