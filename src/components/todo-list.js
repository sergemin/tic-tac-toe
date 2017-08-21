import React, { Component } from 'react';
import TodosListHeader from './todo-list-header'
export default class TodosList extends React.Component {
    renderItems(arr) {
        return arr.map(this.props.todos, (todo, index) => <TodoListItem key={index} />)
    }
    render() {
        return (
            <table>
                <TodosListHeader/>
                <tr>
                    {this.renderItems}
                </tr>
            </table>
        )
    }
};