export default {
  RESOURCE_SERVER_URL: "http://localhost:3000/",
  handleHttpError: function (error, onAuthErr, onApiErr) {
    if (error.name === "AxiosError" && error.response.data["_metadata"]) {
      if (onApiErr) {
        onApiErr(error.response.data["_metadata"]["message"]);
      } else {
        alert(error.response.data["_metadata"]["message"]);
      }
    }
  },
}
