import { IoNotificationsOutline, IoPower } from "react-icons/io5";
import { Link} from 'react-router-dom';

const NotificationPower = () => {


  return (
    <div className="flex space-x-4 text-lg">
      <button className="relative">
        <IoNotificationsOutline />
        <span className="absolute border border-gray-100 top-1.5 right-1 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full" />
      </button>
      <Link to="/logout">
          <button >
            <IoPower />
          </button>
      </Link>
    </div>
  );
};

export default NotificationPower;
