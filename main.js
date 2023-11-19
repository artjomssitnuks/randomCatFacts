

async function pushRandomCatName(repoOwner, token) {
  const octokit = new Octokit({ auth:token });
