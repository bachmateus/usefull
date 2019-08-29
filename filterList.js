/* filterList
  Used in a search bar. Recive a word and search for it in a list and than return a filtered list.
  #params
    searchWord -> The keyword used to find an item 
    list -> The list you wanna filter
  #return
    filteredList -> new list filtered by a keyword
*/
export function filterList(searchWord, list) {
  let filteredList = list;

  if ( searchWord.length > 0 ) {
    searchWord = removeAcentuations(searchWord);

    filteredList = list.filter(function(item){
      const formatedName = removeAcentuations(item.nome);

      if ( formatedName.search(searchWord) > -1 ){
        return item;
      }

    });
  }

  return(filteredList);
};

function removeAcentuations(word) {
  word = word.toLowerCase();
  word = word.replace(/[àáâãäå]/,"a");
  word = word.replace(/[èéêë]/,"e");
  word = word.replace(/[ìí]/,"i");
  word = word.replace(/[õö]/,"o");
  word = word.replace(/[úùü]/,"u");
  word = word.replace(/[ç]/,"c");

  return word;
}