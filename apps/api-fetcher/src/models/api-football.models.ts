export class APILeague {
  id!: number;
  name!: string;
  type!: string;
  logo!: string;
}

export class APISeason {
  year!: number;
  start!: Date;
  end!: Date;
  current!: boolean;
}

export class APICountry {
  name!: string;
  code!: string;
  flag!: string;
}

export class FetchLeaguesResponse {
  league!: APILeague;
  country!: APICountry;
  seasons!: APISeason[];
}
