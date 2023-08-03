import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { StaleHolder } from 'components/all/skeletons';
import { getUser } from 'libs';
import React from 'react';
import swal from 'sweetalert';

type TUserProfile = {
  id?: string;
  smsNotix?: boolean;
  emailNotix?: boolean;
  pushNotix?: boolean;
  inboxNotix?: boolean;
  loginNotix?: boolean;
};

const NotificationsTab = () => {
  const queryClient = useQueryClient();
  const [notifications, setNotification] = React.useState<TUserProfile>({
    smsNotix: false,
    emailNotix: false,
    pushNotix: false,
    inboxNotix: false,
    loginNotix: false,
  } as any);

  // Load User Profile
  const { isLoading } = useQuery<TApiResult>(['profile'], getUser, {
    initialData: queryClient.getQueryData(['profile']),
    onSuccess: (result) => {
      const { data } = result;
      setNotification({
        id: data?.id,
        smsNotix: data?.smsNotix,
        emailNotix: data?.emailNotix,
        pushNotix: data?.pushNotix,
        inboxNotix: data?.inboxNotix,
        loginNotix: data?.loginNotix,
      });
    },
  });

  // Update User Profile
  const {
    mutate: updateUserNotix,
    error,
    isLoading: isUpdating,
  } = useMutation(
    (data) =>
      fetch(`/api/users/${notifications?.id}/update-notix`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    {
      onSuccess: async (data) => {
        // swal('Success', 'Profile updated successfully', 'success');
        queryClient.invalidateQueries(['profile']);
      },
      onError: (error) => {
        // swal('Error', 'An error occurred', 'error');
      },
    }
  );

  const busy = isLoading || isUpdating;

  const smsNotixRef = React.useRef<HTMLButtonElement>(null);
  const emailNotixRef = React.useRef<HTMLButtonElement>(null);
  const pushNotixRef = React.useRef<HTMLButtonElement>(null);
  const inboxNotixRef = React.useRef<HTMLButtonElement>(null);
  const loginNotixRef = React.useRef<HTMLButtonElement>(null);

  const handleSmsNotification = (e: any) => {
    e.preventDefault();
    if (smsNotixRef.current) {
      if (smsNotixRef.current.classList.contains('active')) {
        setNotification({ ...notifications, smsNotix: false });
        smsNotixRef.current.classList.remove('active');
      } else {
        setNotification({ ...notifications, smsNotix: true });
        smsNotixRef.current.classList.add('active');
      }
    }
  };

  const handleEmailNotification = (e: any) => {
    e.preventDefault();
    if (emailNotixRef.current) {
      if (emailNotixRef.current.classList.contains('active')) {
        setNotification({ ...notifications, emailNotix: false });
        emailNotixRef.current.classList.remove('active');
      } else {
        setNotification({ ...notifications, emailNotix: true });
        emailNotixRef.current.classList.add('active');
      }
    }
  };

  const handlePushNotification = (e: any) => {
    e.preventDefault();
    if (pushNotixRef.current) {
      if (pushNotixRef.current.classList.contains('active')) {
        setNotification({ ...notifications, pushNotix: false });
        pushNotixRef.current.classList.remove('active');
      } else {
        setNotification({ ...notifications, pushNotix: true });
        pushNotixRef.current.classList.add('active');
      }
    }
  };

  const handleInboxNotification = (e: any) => {
    e.preventDefault();
    if (inboxNotixRef.current) {
      if (inboxNotixRef.current.classList.contains('active')) {
        setNotification({ ...notifications, inboxNotix: false });
        inboxNotixRef.current.classList.remove('active');
      } else {
        setNotification({ ...notifications, inboxNotix: true });
        inboxNotixRef.current.classList.add('active');
      }
    }
  };

  const handleLoginNotification = (e: any) => {
    e.preventDefault();
    if (loginNotixRef.current) {
      if (loginNotixRef.current.classList.contains('active')) {
        setNotification({ ...notifications, loginNotix: false });
        loginNotixRef.current.classList.remove('active');
      } else {
        setNotification({ ...notifications, loginNotix: true });
        loginNotixRef.current.classList.add('active');
      }
    }
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-bgray-900 dark:text-white mb-5">
        Notification
      </h3>
      <div className="space-y-5">
        <div className="flex sm:flex-row flex-col sm:items-center items-end justify-between pb-5 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex gap-x-4">
            <span>
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={30}
                  fill={`${notifications.smsNotix ? '#22C55E' : '#FF4154'}`}
                />{' '}
                <path
                  d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
                  fill="white"
                />
                <path
                  d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex-1">
              <h4
                className="text-lg font-bold text-bgray-900 dark:text-white"
                id="availability-label"
              >
                SMS Notifications
              </h4>
              <p
                className="text-base text-bgray-500 dark:text-darkblack-300"
                id="availability-description"
              >
                Get activity notifications by SMS
              </p>
            </div>
          </div>
          {/* Enabled: "bg-success-300", Not Enabled: "bg-[#9AA2B1]" */}
          <StaleHolder busy={busy} width={30}>
            <button
              type="button"
              ref={smsNotixRef}
              onClick={(e) => {
                handleSmsNotification(e);
                updateUserNotix(notifications as any);
              }}
              className={`switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                notifications?.smsNotix ? 'active' : ''
              }`}
              role="switch"
              aria-checked="false"
              aria-labelledby="availability-label"
              aria-describedby="availability-description"
            >
              {/* Enabled: "translate-x-5", Not Enabled: "translate-x-0" */}
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              />
            </button>
          </StaleHolder>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-end justify-between pb-5 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex gap-x-4">
            <div className="w-[60px]">
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={30}
                  fill={`${notifications.emailNotix ? '#22C55E' : '#FF4154'}`}
                />
                <path
                  d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
                  fill="white"
                />
                <path
                  d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4
                className="text-lg font-bold text-bgray-900 dark:text-white"
                id="availability-label"
              >
                Email Notifications
              </h4>
              <p
                className="text-base text-bgray-500 dark:text-darkblack-300"
                id="availability-description"
              >
                Get activity notifications by Email
              </p>
            </div>
          </div>
          <StaleHolder busy={busy} width={30}>
            <button
              ref={emailNotixRef}
              onClick={(e) => {
                handleEmailNotification(e);
                updateUserNotix(notifications as any);
              }}
              type="button"
              className={`switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                notifications?.emailNotix ? 'active' : ''
              }`}
              role="switch"
              aria-checked="false"
              aria-labelledby="availability-label"
              aria-describedby="availability-description"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              />
            </button>
          </StaleHolder>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-end justify-between pb-5 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex gap-x-4">
            <div className="w-[60px]">
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={30}
                  fill={`${notifications.pushNotix ? '#22C55E' : '#FF4154'}`}
                />
                <path
                  d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
                  fill="white"
                />
                <path
                  d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4
                className="text-lg font-bold text-bgray-900 dark:text-white"
                id="availability-label"
              >
                Push Notifications
              </h4>
              <p
                className="text-base text-bgray-500 dark:text-darkblack-300"
                id="availability-description"
              >
                Get activity notifications Push notifications
              </p>
            </div>
          </div>
          <StaleHolder busy={busy} width={30}>
            <button
              ref={pushNotixRef}
              onClick={(e) => {
                handlePushNotification(e);
                updateUserNotix(notifications as any);
              }}
              type="button"
              className={`switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                notifications?.pushNotix ? 'active' : ''
              }`}
              role="switch"
              aria-checked="false"
              aria-labelledby="availability-label"
              aria-describedby="availability-description"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              />
            </button>
          </StaleHolder>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-end justify-between pb-5 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex gap-x-4">
            <div className="w-[60px]">
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={30}
                  fill={`${notifications.inboxNotix ? '#22C55E' : '#FF4154'}`}
                />
                <path
                  d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
                  fill="white"
                />
                <path
                  d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
                  fill="white"
                />
              </svg>{' '}
            </div>
            <div className="flex-1">
              <h4
                className="text-lg font-bold text-bgray-900 dark:text-white"
                id="availability-label"
              >
                Inbox Notifications
              </h4>
              <p
                className="text-base text-bgray-500 dark:text-darkblack-300"
                id="availability-description"
              >
                Get activity notifications in your Inbox
              </p>
            </div>
          </div>
          <StaleHolder busy={busy} width={30}>
            <button
              ref={inboxNotixRef}
              onClick={(e) => {
                handleInboxNotification(e);
                updateUserNotix(notifications as any);
              }}
              type="button"
              className={`switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                notifications?.inboxNotix ? 'active' : ''
              }`}
              role="switch"
              aria-checked="false"
              aria-labelledby="availability-label"
              aria-describedby="availability-description"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              />
            </button>
          </StaleHolder>
        </div>
        <div className="flex sm:flex-row flex-col sm:items-center items-end justify-between pb-5 border-b border-bgray-300 dark:border-darkblack-400">
          <div className="flex gap-x-4">
            <div className="w-[60px]">
              <svg
                width={60}
                height={60}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx={30}
                  cy={30}
                  r={30}
                  fill={`${notifications.loginNotix ? '#22C55E' : '#FF4154'}`}
                />
                <path
                  d="M29.9703 43.7392C27.4494 43.7392 24.9286 43.7512 22.4077 43.7352C20.2721 43.7232 19.0338 42.51 19.0197 40.3809C18.9955 37.0226 18.9915 33.6643 19.0197 30.306C19.0378 28.2088 20.3265 26.9736 22.4481 26.9696C27.4212 26.9597 32.3964 26.9617 37.3695 26.9696C39.604 26.9736 40.8564 28.2208 40.8644 30.4457C40.8745 33.7381 40.8786 37.0306 40.8644 40.323C40.8544 42.506 39.6242 43.7252 37.43 43.7372C34.9434 43.7492 32.4569 43.7392 29.9703 43.7392ZM27.5321 33.7242C27.6108 33.9217 27.6592 34.5403 27.9919 34.7977C28.8954 35.4981 28.7542 36.404 28.7563 37.3159C28.7563 37.7469 28.6272 38.2538 28.8107 38.589C29.0467 39.018 29.5367 39.5827 29.9219 39.5867C30.3131 39.5907 30.8496 39.0499 31.0613 38.6229C31.261 38.2179 31.1319 37.6492 31.1319 37.1543C31.1319 36.3022 31.0936 35.522 31.868 34.8216C32.6041 34.1552 32.4871 32.8881 31.8841 32.062C31.2811 31.2359 30.2002 30.8807 29.2019 31.18C28.2521 31.4653 27.5483 32.4152 27.5321 33.7242Z"
                  fill="white"
                />
                <path
                  d="M37.5315 26.0269C36.3356 26.0269 35.2466 26.0269 34.0345 26.0269C34.0345 25.1629 34.0446 24.3447 34.0325 23.5246C33.9982 21.0822 32.2397 19.2345 29.9467 19.2225C27.6497 19.2105 25.8851 21.0423 25.8448 23.4967C25.8306 24.3188 25.8427 25.1429 25.8427 26.0249C24.6448 26.0249 23.5558 26.0249 22.4729 26.0249C21.7126 21.0942 23.5054 17.4326 27.7546 16.1136C32.5603 14.621 37.3984 18.127 37.5274 23.1096C37.5516 24.0634 37.5315 25.0192 37.5315 26.0269Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4
                className="text-lg font-bold text-bgray-900 dark:text-white"
                id="availability-label"
              >
                Login Notifications
              </h4>
              <p
                className="text-base text-bgray-500 dark:text-darkblack-300"
                id="availability-description"
              >
                Get activity notifications when you login
              </p>
            </div>
          </div>
          <StaleHolder busy={busy} width={30}>
            <button
              ref={loginNotixRef}
              onClick={(e) => {
                handleLoginNotification(e);
                updateUserNotix(notifications as any);
              }}
              type="button"
              className={`switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                notifications?.loginNotix ? 'active' : ''
              }`}
              role="switch"
              aria-checked="false"
              aria-labelledby="availability-label"
              aria-describedby="availability-description"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              />
            </button>
          </StaleHolder>
        </div>
      </div>
    </>
  );
};

export default NotificationsTab;
