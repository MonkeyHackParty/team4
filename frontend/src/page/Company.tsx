import React, { useEffect, useState } from "react";
import { JobResponse, JobType } from "../api/type";
import { useParams } from "react-router-dom";

const JobInfo: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<JobResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  if (!id) return <div>id null</div>;

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
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
        setData(res);
      } catch (err) {
        console.error(err);
        setError("An error occurred.");
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.results &&
        data.results.map((job: JobType, index) => {
          return (
            <div key={index}>
              <div>title: {job.title}</div>
            </div>
          );
        })}
    </div>
  );
};

export default JobInfo;
