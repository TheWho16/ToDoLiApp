import React, { Component } from "react";
import { notyInfo } from "../noty-info/noty";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
      e.preventDefault();
      const { label } = this.state;
      if (label.length !== 0) {
      this.setState({ label: "" });
      const cb = this.props.onItemAdded || (() => {});
      cb(label);
    } else {
      notyInfo("Введи задачу");
    }
  };

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control new-todo-label"
          value={this.state.label}
          onChange={this.onLabelChange}
          placeholder="Задачи пишем сюда"
        />

        <button type="submit" className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  }
}
