import http from '../http-common';

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append('file', file);

    return http.post(
      'https://1nbzuqpai0.execute-api.ap-southeast-1.amazonaws.com/api/matching/test-invoice',
      formData,
      {
        headers: {
          accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization:
            'Bearer eyJraWQiOiJiVWU4WU9TV1I2Q09pNWE0UWFCOWcyUUJCXC9lVVF5V25SZWRkWkx6U2FmVT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlZTUwMzVkNS0wYTlhLTQ5MTktYjg3YS0zYjgzMDA2NGZhMDIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoZWFzdC0xX2JObU5GeWlZMiIsImN1c3RvbTpleHBvX3B1c2hfdG9rZW4iOiIiLCJjb2duaXRvOnVzZXJuYW1lIjoidGVzdC1hZG1pbi0wMSIsImF1ZCI6IjY2bTRmM3Y5OXBpdWo4OWowZTJpNzBvNWVlIiwiZXZlbnRfaWQiOiI5MzY0MDMyYy1jNzA0LTQ5MDctODdhMS0zN2QwOTIxNjM3YTAiLCJ0b2tlbl91c2UiOiJpZCIsImN1c3RvbTpzaGlwcGVyX2NvbXBhbnkiOiJ7XCJuYW1lXCI6IFwiRm9vZCBQcm9qZWN0XCIsIFwidWlkXCI6IFwiNzBhODA0ZDYtMmVlZi00MTJlLThjZTItODdlMTZiMjcwOWYwXCJ9IiwiY3VzdG9tOmZ1bGZpbGxtZW50X2NvbXBhbnkiOiIiLCJhdXRoX3RpbWUiOjE2NTU3MzQwMzEsImN1c3RvbTpjYXJyaWVyX2NvbXBhbnkiOiJ7XCJuYW1lXCI6IFwiRm9vZCBwcm9qZWN0XCIsIFwidWlkXCI6IFwiNTFlZTAyZDEtZWUwYS00ZmFhLTkyNDAtYThhZjA4ZTUwMjgzXCJ9IiwiZXhwIjoxNjU1ODIwNDMxLCJjdXN0b206bGluZV9pZCI6IiIsImN1c3RvbTpyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTU3MzQwMzEsImVtYWlsIjoidGVzdC1hZG1pbi0wMUBnbWFpbC5jb20ifQ.RzG9xeAHeXlEZA7VWcE6XQXQ1VgMvej8LUiDLPfd1NffTtLSbjKYwjIw-zf5aWSc1CsTMJLfl_Q7QnojOyOUF0GxGbY7-d4biT7d-B4JiJZWSLg7N6JX1mfJdoe7GsQCcSzzVIYyLAdG2kO-jsbOf-nj3RVwqFHFaWQ2twrHwztjefMfy38k2wX9Jq-6OuXY_FogPwNQU7odLpIEbo7QM2ckClJV5opJiP_Rpn0l90wuI1DOHsKL6e9JNtemopxilRRMxEoZA4ZlVmBwDhjgfKUE4v7kdKJrwDvW9hjBlCCKICOHjO9WeeQ0JFGm7BGPZjQl8ALIrtaBlJx_HUQeLA'
        },
        onUploadProgress
      }
    );
  }

  getFiles() {
    return http.get('/files');
  }
}

export default new UploadFilesService();
