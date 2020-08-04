<script>
  import SearchIcon from './SearchIcon'

  const regex = /"name\s([\w-_]+)"\sfilename:package\.json/
  const SearchInput = document.querySelector('.js-jump-to-field')
  const handleClick = () => {
    let keyword = SearchInput.value
    if (keyword) {
      const isMatchRegex = keyword.match(regex)
      if (isMatchRegex) {
        keyword = isMatchRegex[1]
      }

      window.location.href = `/search?q="name ${keyword}"+filename:package.json`
    }
  }
</script>

<button class="btn btn-sm mr-5 f6" on:click={handleClick}>
  <SearchIcon />
  Package
</button>
