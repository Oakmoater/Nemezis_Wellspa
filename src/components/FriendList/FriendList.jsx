import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" id={id}>
      <span className="status" isonline={isOnline.toString()}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

function FriendList({ title, friends }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="friend-list">
        {friends.map((friend) => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            id={friend.id}
          />
        ))}
      </ul>
    </section>
  );
};

  FriendList.propTypes = {
      title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default FriendList;