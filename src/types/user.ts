export type LoginAPIResponse = {
  user: UserProfile;
};

export type UserCredentials = {
  accessToken: string;
  refreshToken: string;
  password: string;
};

export type UserProfile = {
  username: string;
  active: boolean;
  roleId: number;
  dateCreated: string;
  dateModified: string;
  lastName: string;
  firstName: string;
  displayName: string;
  jiraUsername: string;
  intacctUserId: string;
  userId: number;
  emailAddress: string;
  openAtCurWeeksTimesheet: boolean;
  activeInterviewer: boolean;
  createIntacctTimesheet: boolean;
  roleName: string;
};
