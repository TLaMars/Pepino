import { useAtom } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import { notificationAtom } from "src/store/control-settings";

import $ from "./Notification.module.scss";

const Notification: React.FC = () => {
  const [notification, setNotification] = useAtom(notificationAtom);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  // Handle fade out animation before unmounting
  const handleClose = React.useCallback(() => {
    setIsLeaving(true);
    timeoutRef.current = window.setTimeout(() => {
      setNotification(null);
      setIsLeaving(false);
    }, 200); // Match animation duration
  }, [setNotification]);

  // clear notification after 3 seconds
  useEffect(() => {
    if (!notification) return;

    const timeout = setTimeout(() => {
      handleClose();
    }, 3000);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleClose, notification]);

  if (!notification) return null;

  return (
    <div className={`${$.backdrop} ${isLeaving ? $.fadeOut : ""}`}>
      <div className={$.notification}>
        {notification.icon}
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

export default Notification;
