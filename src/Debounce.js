import React from "react";

export default class Debounce extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    

    // Higher order function
    debounce = (cb) => {
        let timer;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(cb, 1000)
        }
    }

    // Use state here will be updated
    debouncedSearch = this.debounce(()=>console.log(this.state.search))

    handleChange = (e) => {
        this.setState({search: e.target.value}, this.debouncedSearch()) // Dont set state param here
    }


    render() {
        return (
            <>
                <input value={this.state.search} onChange={this.handleChange} />
            </>
        )
    }

}