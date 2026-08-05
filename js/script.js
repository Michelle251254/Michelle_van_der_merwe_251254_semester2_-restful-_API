class Book {
  constructor(_title, _author_name, _cover_i, _first_publish_year) {
    this.title = _title;
    this.author_name = _author_name;
    this.cover_i = _cover_i;
    this.first_publish_year = _first_publish_year;
  }
}
!async function () {
  const url = "https://openlibrary.org/search.json?q=test";
  const headers = new Headers({
    "User-Agent": "Api/1.0 (251254@virtualwindow.co.za)",
  });
  const options = {
    method: "GET",
    headers: headers,
  };

  let data = await fetch(url, headers)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));

  console.log(data);
  const row = data.docs[0];
  console.log("row", row);
  let title = row.title;
  let author_name = row.author_name;
  let cover_i = row.cover_i;
  let first_publish_year = row.first_publish_year;

  let newBook = new Book(title, author_name, cover_i, first_publish_year);

  document.getElementById("title").innerHTML = newBook.title;
  document.getElementById("content").innerHTML =
    newBook.author_name +
    "<br>" +
    newBook.cover_i +
    "<br>" +
    newBook.first_publish_year;

  console.log(newBook);
}();
