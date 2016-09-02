import axios from 'axios'

export const increment = () => {
    return { type: 'INCREMENT' }
}

export const changeInputText = (text) => {
    return {
        type: 'CHANGE_INPUT_TEXT',
        text
    }
}

const requestPostText = (text) => {
    return {
        type: 'REQUEST_POST_TEXT',
        text
    }
}

const successPostText = () => {
    return {
        type: 'SUCCESS_POST_TEXT'
    }
}

export const postText = (text) => {
    return dispatch => {
        dispatch(requestPostText(text))
        const article = {
            title: text,
            story: 'this is post from redux!!!'
        }
        return axios.post(
            'http://172.16.1.86:8000/api/article',
            article
        ).then((res) => {
            console.log(res)
            dispatch(successPostText())
        }).catch((err) => {
            console.log(err)
        })
    }
}
