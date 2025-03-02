function Button({text, style}:{text: string, style: string}){
    return <button className={style} onClick={emptyTextbox}>{text}</button>
}

function emptyTextbox(){
    const input = document.getElementById('task-input') as HTMLInputElement
    input.value = ''
}

export default Button