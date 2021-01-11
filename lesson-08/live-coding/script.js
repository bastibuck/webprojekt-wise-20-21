const flagsDictionary = {
  alpha: "A",
  alpha_beta_delta: "ABD",
};

const userInput = ["alpha", "beta", "delta"];

userInput.join("_");

// userInput.push("alpha");
// userInput.push("beta");

if (userInput.length === 3) {
  // show result
  console.log(flagsDictionary[userInput.join("_")]);
}
