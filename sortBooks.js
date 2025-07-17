let books = [
    {
      title: "A title of a Book",
      authorName: "Author Name",
      releaseYear: 2025,
    },
    {
      title: "Another title of a book",
      authorName: "Another Author Name",
      releaseYear: 2025,
    },
    {
      title: "A title that is not a title",
      authorName: "Name of an Author",
      releaseYear: 1899,
    },
    {
      title: "A book with a title",
      authorName: "Van an Author",
      releaseYear: 2023,
    },
    {
      title: "Books have title",
      authorName: "Books' Author",
      releaseYear: 2008,
    },
    {
      title: "In general",
      authorName: "Anoyance",
      releaseYear: 1933,
    }
  ]
  
  function sortByYear(bookOne, bookTwo) {
    if (bookOne.releaseYear < bookTwo.releaseYear) {
      return -1
    } else if (bookOne.releaseYear > bookTwo.releaseYear) {
      return 1
    } else {
      return 0
    }
  }
  
  let filteredBooks = books.filter((a) => a.releaseYear > 1950)
  console.log(filteredBooks)
  
  filteredBooks.sort(sortByYear)