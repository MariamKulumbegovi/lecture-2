import { useEffect } from 'react';
import { withUserList } from '../../hoc';

const AskQuestion = ({ userList }) => {
  useEffect(() => {}, [userList]);
  console.log(userList, 'userlist');
  return (
    <div className="box is-justify-content-center">
      <div className="columns is-flex-wrap-wrap ">
        {userList.map(item => {
          return (
            <div className="column box is-one-third" key={item.id}>
              <img src={item.avatar} width="30%" height="30px" />
              <strong className="mx-2">
                {item.first_name} {item.last_name}
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withUserList(AskQuestion);
