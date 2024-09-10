import { JobResponse } from "./type";

export const jobData = async (): Promise<void> => {
  try {
    const response = await fetch(
      `/api/v1/furusato/jobinfo/?appid=dj00aiZpPUg3dXd2YzNEakNTSSZzPWNvbnN1bWVyc2VjcmV0Jng9NGU-&`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res: JobResponse = await response.json();
  }
}
export const jobDataById = async (id:string): Promise<void> => {
  try {
    const response = await fetch(
      `/api/v1/furusato/jobinfo/?appid=dj00aiZpPUg3dXd2YzNEakNTSSZzPWNvbnN1bWVyc2VjcmV0Jng9NGU-&yJobId=${id}`,
      {
        mode: "cors",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const res: JobResponse = await response.json();
  }
}