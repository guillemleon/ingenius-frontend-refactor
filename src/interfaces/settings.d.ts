interface Member {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

interface TeamInfo {
  name: string;
  members: Member[];
}

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  team_info: TeamInfo;
  team_picture_url: string;
}