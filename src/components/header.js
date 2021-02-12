const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  // const headerContainer = document.querySelector('.header-container')

  // Create instances
  const header = document.createElement('div')
  const headerSpan = document.createElement('span')
  const headerH1 = document.createElement('h1')
  const headerSpan2 = document.createElement('span')

  // Create the tree
  header.appendChild(headerSpan)
  header.appendChild(headerH1)
  header.appendChild(headerSpan2)

  //Set classes for elements
  header.className = 'header'
  headerSpan.className = 'date'
  headerSpan2.className = 'temp'

  // Set arguments in the place of Node text
  headerH1.textContent = title
  headerSpan.textContent = date
  headerSpan2.textContent = temp

  // return header
  return header
}


const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerContainer = document.querySelector(selector)
  Header('Some title', 'Some date', 'Some temp')
  headerContainer.appendChild(Header())
  return headerContainer
}



export { Header, headerAppender }
