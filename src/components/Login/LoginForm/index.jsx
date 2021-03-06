import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars } from 'react-loader-spinner'
import styled from 'styled-components'

const LoginForm = ({submit, page, update}) => {
    const [data, setData] = useState(null)

    const handleSubmit = event => {
        submit(data)
        event.preventDefault()
    }

    const changeData = (value, a) => {
        const newData = {...data}
        newData[a] = value
        setData(newData)
    }

    return (
        <fieldset disabled={update}>
            <Form>
                {page.input.map((e, i) => <input key={i} onChange={({target}) => changeData(target.value, e.value)} type="text" placeholder={e.text}/>)}
                <button type="submit" onClick={handleSubmit}>{update ? <Bars height={20} color='#ffffff'/> : page.button}</button>
                <Link className={update ? 'disabledLink' : ''} to={page.redirect.value}><p>{page.redirect.text}</p></Link>
            </Form>
        </fieldset>
    )
}

export default LoginForm

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;

    input, button {
        width: 300px;
        height: 45px;
        border-radius: 5px;
        border: none;
    }

    input {
        border: solid 1px #D4D4D4;
        padding: 11px;
        font-size: 20px;
        ::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        font-size: 21px;
        color: #ffffff;
        background-color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        width: 180px;
    }

    p {
        margin-top: 20px;
        text-align: center;
        font-size: 14px;
        color: #52B6FF;    
    }

    a {
        :visited {
            color: #52B6FF;
        }
    }

    .disabledLink {
        pointer-events: none;
    }
`