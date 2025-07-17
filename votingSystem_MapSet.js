let poll = new Map();
poll.set("A", new Set())
poll.set("B", new Set())
poll.set("C", new Set())

poll.get("A").add([2, 3, 7])
poll.get("B").add([9, 8, 1])
poll.get("C").add([8, 5, 3])

function addOption(option){
  if(option == "" || !option || option == " "){return "Option cannot be empty."}
  if(poll.has(option)){
    return `Option "${option}" already exists.`
  }
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
}

function vote(option, voterId){
  if(!poll.has(option)){
    return `Option "${option}" does not exist.`
  }
  
  if(poll.get(option).has(voterId)){
    return `Voter ${voterId} has already voted for "${option}".`
  }
  poll.get(option).add(voterId)
  return `Voter ${voterId} voted for "${option}".`
}

function displayResults(){
  let string = [`Poll Results:`]
  poll.forEach((val, key) => {
    string.push(`${key}: ${val.size} votes`)
  })
  return string.join("\n")
}