function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  document.querySelector('#nested .target')
}

function deepestChild() {
  // let node = document.getElementById('grand-node');
  let node = document.querySelectorAll("grand-node");
  let newArr = Array.from(node);
  let node = newArr[-1]
  };

  return node;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
