export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "inyc-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "arn:aws:execute-api:us-east-1:*:fnu05fos8f/*"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6lJlxiUHG",
    APP_CLIENT_ID: "4dii9o8h9bijtrusvau9km50go",
    IDENTITY_POOL_ID: "us-east-1:986ec53c-c257-4c33-8a3a-c922cb9e5265"
  }
};
