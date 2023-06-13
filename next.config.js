/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

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