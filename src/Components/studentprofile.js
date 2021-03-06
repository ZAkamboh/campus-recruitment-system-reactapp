import React, { Component } from "react";

class Studentprofile extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }
  componentWillMount() {
    const student = JSON.parse(localStorage.getItem("studentprofile"));
    // console.log(student);
    if (!student) {
      alert("if you are student so login first");
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    const stdpro = JSON.parse(localStorage.getItem("studentprofile"));
    //console.log(stdpro);
    this.setState({ data: stdpro }, () => {
      console.log(this.state.data);
    });
  }
  render() {
    return (
      <div>
        <h1> student profile</h1>
        <table className="table table-bordered table-hover table-striped">
          <tr>
            <td>College Name</td>
            <td>Student Email</td>
            <td>Contact Number</td>
            <td>GPA</td>
            <td>Skills</td>
          </tr>
          {this.state.data && (
            <tr>
              <td>{this.state.data.collegename}</td>
              <td>{this.state.data.studentemail}</td>
              <td>{this.state.data.contactnumber}</td>
              <td>{this.state.data.gpa}</td>
              <td>{this.state.data.skills}</td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default Studentprofile;
