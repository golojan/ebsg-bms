import React, { useState } from 'react';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { getUser } from 'libs';
import { StaleHolder } from 'components/all/skeletons';
import swal from 'sweetalert';

type TUserProfile = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  Mda?: {
    id?: number;
    name?: string;
  };
};

const UserProfileTab = () => {
  const queryClient = useQueryClient();
  const [userProfile, setUserProfile] = useState<TUserProfile>({});

  // Load User Profile
  const { isLoading } = useQuery<TApiResult>(['profile'], getUser, {
    onSuccess: (result) => {
      const { data } = result;
      setUserProfile({
        id: data?.id,
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        mobile: data?.mobile,
        Mda: {
          id: data?.Mda?.id,
          name: data?.Mda?.name,
        },
      });
    },
  });

  const {
    mutate: updateUserProfile,
    error,
    isLoading: isUpdating,
  } = useMutation(
    (data) =>
      fetch(`/api/users/${userProfile?.id}/update-profile`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    {
      onSuccess: async (data) => {
        swal('Success', 'Profile updated successfully', 'success');
        queryClient.invalidateQueries(['profile', 'user']);
      },
      onError: (error) => {
        swal('Error', 'An error occurred', 'error');
      },
    }
  );

  const busy = isLoading || isUpdating;
  return (
    <>
      <div className="xl:grid grid-cols-12 gap-12 flex 2xl:flex-row flex-col-reverse">
        <div className="2xl:col-span-8 xl:col-span-7">
          <h3 className="text-2xl font-bold pb-5 text-bgray-900 dark:text-white dark:border-darkblack-400 border-b border-bgray-200">
            Personal Information
          </h3>
          <div className="mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateUserProfile(userProfile as any);
              }}
            >
              <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                  >
                    First Name
                  </label>
                  <StaleHolder variant="rectangular" height={50} busy={busy}>
                    <input
                      type="text"
                      className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                      id="firstName"
                      value={userProfile?.firstName}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          firstName: e.target.value,
                        })
                      }
                    />
                  </StaleHolder>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="lastName"
                    className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                  >
                    Last Name
                  </label>
                  <StaleHolder variant="rectangular" height={50} busy={busy}>
                    <input
                      type="text"
                      className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                      id="lastName"
                      value={userProfile?.lastName}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          lastName: e.target.value,
                        })
                      }
                    />
                  </StaleHolder>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                  >
                    Email
                  </label>
                  <StaleHolder variant="rectangular" height={50} busy={busy}>
                    <input
                      type="text"
                      readOnly={true}
                      className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                      id="email"
                      value={userProfile?.email}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          email: e.target.value,
                        })
                      }
                    />
                  </StaleHolder>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                  >
                    Phone Number (Optional)
                  </label>
                  <StaleHolder variant="rectangular" height={50} busy={busy}>
                    <input
                      type="text"
                      className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                      id="phone"
                      value={userProfile?.mobile}
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          mobile: e.target.value,
                        })
                      }
                    />
                  </StaleHolder>
                </div>
              </div>

              <h4 className="pt-8 pb-6 text-xl font-bold text-bgray-900 dark:text-white">
                MDA Information
              </h4>

              <div className="grid">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mda"
                    className="text-base text-bgray-600 dark:text-bgray-50  font-medium"
                  >
                    Select Agency
                  </label>
                  <StaleHolder variant="rectangular" height={50} busy={busy}>
                    <select
                      id="mda"
                      aria-readonly={true}
                      className="bg-bgray-50 dark:bg-darkblack-500 dark:text-white p-4 rounded-lg h-14 border-0 focus:border focus:border-success-300 focus:ring-0"
                      onChange={(e) =>
                        setUserProfile({
                          ...userProfile,
                          Mda: {
                            id: parseInt(e.target.value),
                            name: e.target.value,
                          },
                        })
                      }
                    >
                      <option value={userProfile.Mda?.id}>
                        {userProfile.Mda?.name}
                      </option>
                    </select>
                  </StaleHolder>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="rounded-lg bg-success-300 text-white font-semibold mt-10 py-3.5 px-4">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="2xl:col-span-4 xl:col-span-5 2xl:mt-24 justify-center items-center text-center">
          <header className="mb-8">
            <h4 className="font-bold text-lg text-bgray-800 dark:text-white mb-2">
              Update Profile
            </h4>
            <p className="mb-4 text-bgray-500  text-center">
              Profile of at least Size 300x300.
            </p>
            <div className="text-center m-auto w-40 h-40 relative">
              <img src="assets/images/avatar/profile.png" alt="" />
              <button className="absolute right-4 bottom-1">
                <svg
                  width={29}
                  height={29}
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="14.2414"
                    cy="14.2414"
                    r="14.2414"
                    fill="#22C55E"
                  />
                  <path
                    d="M14.6994 10.2363C15.7798 11.3167 16.8434 12.3803 17.9171 13.454C17.7837 13.584 17.6403 13.7174 17.5036 13.8574C15.5497 15.8114 13.5924 17.7653 11.6385 19.7192C11.5118 19.8459 11.3884 19.9726 11.2617 20.0927C11.2317 20.1193 11.185 20.1427 11.145 20.1427C10.1281 20.146 9.11108 20.1427 8.0941 20.146C8.02408 20.146 8.01074 20.1193 8.01074 20.0593C8.01074 19.049 8.01074 18.0354 8.01408 17.0251C8.01408 16.9784 8.03742 16.9217 8.06743 16.8917C9.26779 15.688 10.4682 14.4876 11.6685 13.2873C12.6655 12.2903 13.6591 11.2967 14.6561 10.2997C14.6761 10.2797 14.6861 10.253 14.6994 10.2363Z"
                    fill="white"
                  />
                  <path
                    d="M18.6467 12.7197C17.573 11.646 16.506 10.579 15.4424 9.51537C15.6324 9.31864 15.8292 9.11858 16.0259 8.91852C16.256 8.68845 16.4894 8.45838 16.7228 8.22831C17.0162 7.93822 17.4197 7.93822 17.7097 8.22831C18.4466 8.9552 19.1802 9.68542 19.9171 10.4123C20.2038 10.6957 20.2138 11.0992 19.9371 11.3859C19.5136 11.8261 19.0868 12.2629 18.6634 12.703C18.66 12.7097 18.65 12.7163 18.6467 12.7197Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <h4 className="font-bold text-lg text-bgray-800 dark:text-white my-4">
              Update Cover
            </h4>
          </header>
        </div>
      </div>
    </>
  );
};

export default UserProfileTab;
