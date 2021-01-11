let TextInput = () => {
    return <div>
        <form>
            <label for="fname">Input</label>
            <input type="text" id="fname" name="fname"></input><br></br>
        </form>
    </div>
}

let YesNoRadio = () => {
    // return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
    return <div>
        <input type="radio" id="yes" name="option" value="yes"></input>
        <label for="yes">Yes</label>
        <input type="radio" id="no" name="option" value="no"></input>
        <label for="no">No</label>
    </div>
}

let SubmitButton = () => {
    return <div>
        <button type="submit">Submit</button>
    </div>
}

let Form = () => {
    // return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    return <div>
        <TextInput />
        <TextInput />
        <TextInput />
        <YesNoRadio />
        <YesNoRadio />
        <SubmitButton />
    </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))