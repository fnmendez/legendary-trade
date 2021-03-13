export type CompanySearch = {
  name: string;
  url: string;
};

export type CompanyStatus = "disclosed" | "quiet" | "error";

export type CompanyResult = CompanySearch & { status: CompanyStatus };

export type ResultToTextInput = {
  cd: CompanyResult[];
  cq: CompanyResult[];
  ce: CompanyResult[];
  shouldAlert: boolean;
};
