
import React from "react";

const RegisterForm = props => {
    const { inputs, setInputs } = props

    const onChangeHandler = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <h2>Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label> {/*where it says first name on the page*/}
                    <input
                        type="text"
                        name="firstName"
                        onChange={onChangeHandler}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {inputs.firstName.length > 0 && inputs.firstName.length < 2
                            ? "First Name must be at least 2 characters."
                            : ""}
                    </p>
                    {/* here is the validation*/}
                    {/*like an if statement, if theres only one character display this*/}
                    {/*else display this */}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={onChangeHandler}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {inputs.lastName.length > 0 && inputs.lastName.length < 2
                            ? "Last Name must be at least 2 characters."
                            : ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        onChange={onChangeHandler}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {inputs.email.length > 0 && inputs.email.length < 5
                            ? "Email must be at least 5 characters."
                            : ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        onChange={onChangeHandler}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {inputs.password.length > 0 && inputs.password.length < 8
                            ? "Password must be at least 8 characters."
                            : ""}
                    </p>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={onChangeHandler}
                        className="form-control"
                    />
                    <p className="text-muted">
                        {inputs.password !== inputs.confirmPassword
                            ? "Passwords must match."
                            : ""}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;