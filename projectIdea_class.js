const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
}

class ProjectIdea {
  constructor(title, description){
    this.title = title
    this.description = description
    this.status = projectStatus.PENDING
  }

  updateProjectStatus(newStatus){
    this.status = newStatus
  }
}

class ProjectIdeaBoard {
  constructor(title){
    this.title = title
    this.ideas = []
  }

  pin(projectIdea){
    this.ideas.push(projectIdea)
  }

  unpin(projectIdea){
    let toUnpin = this.ideas.findIndex((idea) => idea.title == projectIdea.title)
    this.ideas.splice(toUnpin, 1)
  }

  count(){
    return this.ideas.length
  }

  formatToString(){
    let string = `${this.title} has ${this.count()} idea(s)\n`
    for (let idea of this.ideas){
      string += `${idea.title} (${idea.status["description"]}) - ${idea.description}\n`
    }
    return string
    
  }
}