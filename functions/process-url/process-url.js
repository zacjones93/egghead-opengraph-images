const cloudinary = require("cloudinary").v2;
const qs = require('querystring');
cloudinary.config({
  cloud_name: "daxsro6st",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

exports.handler = async function (event, ctx) {
  const {queryStringParameters} = event;
  console.log(queryStringParameters);
  try {
    // https://res.cloudinary.com/daxsro6st/image/upload/v1587129280/og-images/1x1-0050ff7f_tocst6.png
    const imageUrl = cloudinary.url(
      `${process.env.DANIEL_IMAGE_VERSION}/og-images/1x1-0050ff7f_tocst6.png`,
      {
        // resouce_type: "raw"
        sign_url: true,
        // secure: true,
        custom_pre_function: {
          function_type: "remote",
          source: `https://quizzical-liskov-0bc7e1.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
            queryStringParameters
          )}`
        }
      }
    );
    console.log(`https://quizzical-liskov-0bc7e1.netlify.app/.netlify/functions/gen-opengraph-image?${qs.stringify(
      queryStringParameters
    )}`)
    return {
      statusCode: 302,
      headers: {
        Location: imageUrl
      },
      body: ""
    };
  } catch (e) {
    console.log(e);
  }
};