/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''
console.log('is github', isGithubActions)
if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
    console.log('repo ', repo)
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
}

const images = {
    loader: 'akamai',
    path: '',
}

module.exports = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: images,
    output: 'export',
}
