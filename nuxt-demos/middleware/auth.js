export default function (context) {
  console.log('this is a middleware')
  context.userAgent = process.server ? context.req.header['user-agent'] : ''
  console.log('context.userAgent', context.userAgent)
}