import React, { Component } from 'react';

class OpportunitiesForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      companyName: '',
      location: '',
      description: '',
      link: '',
      type: ''
    }

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    var title = this.state.title.trim();
    var companyName = this.state.companyName.trim();
    var location = this.state.location.trim();
    var link = this.state.link.trim();
    var type = this.state.type.trim().toLowerCase();

    this.props.handleSubmit({ title: title, companyName: companyName, location: location, description: this.state.description, link: link, type: type });
    this.setState({ title: '', companyName: '', location: '', description: '', link: '', type: '' });
  }

  render() {
    return (
      <div className="form">

        <form className="opportunitiesForm" onSubmit={this.handleSubmit}>
          <label for="job-title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Job/internship title"
            value={this.state.title}
            onChange={this.handleFieldChange}
            required
          />

          <label for="company-name">Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={this.state.companyName}
            onChange={this.handleFieldChange}
            required
          />

          <label for="location">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Austin, TX, US"
            value={this.state.location}
            onChange={this.handleFieldChange}
            required
          />

          <label for="description">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Write a short description of the job/internship here..."
            value={this.state.description}
            onChange={this.handleFieldChange}
            required
          />

          <label for="link">link</label>
          <input
            type="text"
            name="link"
            placeholder="Link to job application page"
            value={this.state.link}
            onChange={this.handleFieldChange}
            required
          />

          <label for="type">Type</label>
          <input
            type="text"
            name="type"
            placeholder="Job or internship?"
            value={this.state.type}
            onChange={this.handleFieldChange}
            required
          />

          <input type="submit" value="Post" />
        </form>

      </div>
    );
  }

}

export default OpportunitiesForm;
