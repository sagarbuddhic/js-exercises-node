const filter = () => {
  let obj = [
    { name: "anand", score: 10 },
    { name: "bob", score: 20 },
    { name: "madhu", score: 40 },
    { name: "p", score: 30 },
    { name: "balu", score: 50 },
  ];

  let output = obj
    .slice(2)
    .sort((a, b) => (a.score < b.score ? -1 : 1))
    .filter((v) => v.score > 30)
    .map((c) => c.score * 10);

  console.log(output);
  console.log(obj);
};

filter();
