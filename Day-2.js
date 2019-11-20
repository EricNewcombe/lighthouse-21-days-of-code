const interviewAnswer = (topic) => {

    const responses = {
      "arts funding": "We'll have to get creative!",
      "economy": "Time is money.",
      "transportation": "It's going to be a long road, so we better get moving.",
      "default": "ASDF"
    }
    
    return responses[topic] !== undefined ? responses[topic] : responses["default"];
    
}