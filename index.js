exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify("Welcome to Hitech learning acadamy!"),
  }
  return response
}
