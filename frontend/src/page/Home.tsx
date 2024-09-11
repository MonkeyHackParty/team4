import React, { useEffect, useState } from "react";
import { JobResponse, JobType } from "../api/type";
import { Link } from "react-router-dom";
import { salary } from "../util/salary";

const JobInfo: React.FC = () => {
  const [data, setData] = useState<JobResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          "/api/v1/furusato/jobinfo/?appid=dj00aiZpPUg3dXd2YzNEakNTSSZzPWNvbnN1bWVyc2VjcmV0Jng9NGU-",
          {
            mode: "cors",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const res: JobResponse = await response.json();
        setData(res);
      } catch (err) {
        console.error(err);
        setError("An error occurred.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.results &&
        data.results.map((job: JobType) => {
          const avgSalary = salary({
            max: job.salaryMax,
            min: job.salaryMin,
          });
          return (
            <div key={job.yJobId}>
              <div>yJobId: {job.yJobId}</div>
              <div>Average Salary: {avgSalary}</div>
              <Link to={`/${job.yJobId}`}>詳細を見る</Link>
            </div>
          );
        })}
    </div>
  );
};

export default JobInfo;
