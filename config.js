let ak = process.env.AK
let sk = process.env.SK
let endpoint = process.env.ENDPOINT
let bucket = process.env.BUCKET
module.exports = {

  s3: {
    accessKeyId:  ak,
    secretAccessKey: sk,
    endpoint: endpoint,
    bucket: bucket
  },
  suffix: {
    small: '_small.jpg',
    full: '_full.jpg'
  }
};
