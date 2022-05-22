const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value) // what ever we type in gets to the function

  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '' // clears imput in 10ms
    }, 10)
    
    randomSelect()
  }
})


function createTags(input) {
  const tags = input.split(',') // creates an array divided by (',')
  .filter(tag => tag.trim() !== '') // if a tag is not empty it trims it
  .map(tag => tag.trim()) // why adding .map here?

  tagsEl.innerHTML = '' // if not used would be updated every time a button is pushed

  tags.forEach(tag => {
    const tagEl = document.createElement('span') // create spans in "tags"
    tagEl.classList.add('tag') // give them a class of tag
    tagEl.innerText = tag // give them the text from the text area
    tagsEl.appendChild(tagEl) // append them to "tags"
  })
}


function randomSelect() {
  const times = 30

  const interval = setInterval(() => { // flashing 
    const randomTag = pickRandomTag()
    higlightTag(randomTag)

    setTimeout(() => {
      unHiglightTag(randomTag)
    }, 100)

  }, 100);


  setTimeout(() => { // stoping and chosing one
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()

      higlightTag(randomTag)
    }, 100)

  }, times * 100)

}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function higlightTag(tag) {
  tag.classList.add('highlight')
}

function unHiglightTag(tag) {
  tag.classList.remove('highlight')
}
