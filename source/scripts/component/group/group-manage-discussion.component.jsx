'use strict';

var GroupTitle = require('../style-guide/group-title.component.jsx');

var ManageDiscussion = React.createClass ({
  getInitialState: function () {
    return {
      isDeleted: false
    }
  },

  render () {
    var tableBody = this.props.subjects.map((item, index) => {
      return (
          <tr key={index}>
            <th scope="row"><input type="checkbox" value={index +1} />{index + 1}</th>
            <td>{item.author}</td>
            <td>{item.content}</td>
            {this.state.isDeleted ? <td>已删除</td> : <td><button className="text-primary">删除</button></td>}
          </tr>
      )
    });
    return (
        <div>
          <GroupTitle titleName='待审核列表'/>
          <table className="table table-hover">
            <thead>
            <tr>
              <th><input type="checkbox" value="0" />全选</th>
              <th>发布人</th>
              <th>内容</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            {tableBody}
            </tbody>
          </table>
        </div>
    );
  }
});

module.exports = ManageDiscussion;