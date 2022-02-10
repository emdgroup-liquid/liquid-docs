require('dotenv').config()

let repoPath = ''
try {
  const repositoryUrl = require('../../package.json').repository.url
  repoPath = new URL(repositoryUrl.replace('git@', '')).pathname
  if (repoPath.endsWith('.git')) {
    repoPath = repoPath.slice(0, -4)
  }
} catch (err) {
  console.warn('Failed parsing repository URL')
}

module.exports = {
  base:
    process.env.MODE === 'gh_pages'
      ? `/${repoPath.split('/').slice(-1)[0]}`
      : '',
  repoPath,
}
