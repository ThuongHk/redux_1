export const addJob = (data)=>{
    return {
        type: 'ADDJOB',
        payload: data
    }
}

export const searchJob = (text)=>{
    return {
        type: 'SEARCHJOB',
        payload: text
    }
}