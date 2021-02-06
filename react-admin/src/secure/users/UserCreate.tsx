import React, { Component, SyntheticEvent } from 'react';
import Wrapper from "../Wrapper";
import axios from 'axios';
import { Role } from '../../classes/role';
import { Redirect } from 'react-router-dom';


class UserCreate extends Component {
    state = {
        roles: [],
        redirect: false
    }
    first_name = '';
    last_name = '';
    email = '';
    role_id = 0;

    componentDidMount = async () => {
        const response = await axios.get("roles");

        this.setState({
            roles: response.data.data
        });
    }
    submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await axios.post("users", {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            role_id: this.role_id
        });

        this.setState({
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/users"} />
        }

        return (
            <Wrapper>
                <form onSubmit={this.submit}>
                    <div className="form-group">
                        <label htmlFor="firstName" className="visually-hidden">First Name</label>
                        <input type="text" id="firstName" className="form-control" placeholder="First Name" required onChange={e => this.first_name = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                        <input type="text" id="lastName" className="form-control" placeholder="Last Name" required onChange={e => this.last_name = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={e => this.email = e.target.value} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select name="role_id" className="form-control" onChange={e => this.role_id = parseInt(e.target.value)}>
                            <option >Select Role</option>
                            {this.state.roles.map(
                                (role: Role) => {
                                    return (
                                        <option key={role.id} value={role.id}>{role.name}</option>
                                    )

                                }
                            )}

                        </select>
                    </div>
                    <button className="btn btn-outline-secondary">Save</button>
                </form>

            </Wrapper>
        );
    }
}

export default UserCreate;