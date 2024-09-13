import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Company {
  id: number;
  corporation_id: number;
  name: string;
  name_kana: string;
  name_en: string | null;
  postal_code: string;
  local_government_code: number;
  prefecture: string;
  city: string;
  town: string;
  block: string;
  building: string | null;
  president_position: string | null;
  president_name: string;
  capital: number;
  employees: number;
  industry_code: string;
  listed: boolean | null;
  stock_code: number;
  average_age: number;
  female_rate: number;
  average_annual_income: number;
  paid_holiday_digestibility: number;
  turnover_rate: number;
  female_manager_rate: number;
  handicapped_employee_rate: number;
  average_duration: number;
  sales: number;
  current_earnings: number;
  branch: string | null;
  facebook_url: string | null;
  twitter_url: string | null;
  tel: string;
  web_url: string;
  pr_text: string;
  remarks: string;
  cp_name: string;
  y_company_id: string;
}

const calculateBlackTokens = (data: Company): number => {
  let blackTokens = 0;
  let maxBlackTokens = 0;

  // Number of employees
  if (data.employees > 0) {
    if (data.employees < 10) {
      blackTokens += 2;
    } else if (data.employees < 50) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Average age
  if (data.average_age > 0) {
    if (data.average_age < 25) {
      blackTokens += 2;
    } else if (data.average_age < 30) {
      blackTokens += 1;
    } else if (data.average_age >= 60) {
      blackTokens += 2;
    } else if (data.average_age >= 50) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Female ratio
  if (data.female_rate > 0) {
    if (data.female_rate < 0.1) {
      blackTokens += 2;
    } else if (data.female_rate < 0.2) {
      blackTokens += 1;
    } else if (data.female_rate >= 0.8) {
      blackTokens += 2;
    } else if (data.female_rate >= 0.7) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Average annual income
  if (data.average_annual_income > 0) {
    if (data.average_annual_income < 3000) {
      blackTokens += 2;
    } else if (data.average_annual_income < 4000) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Paid holiday usage rate
  if (data.paid_holiday_digestibility > 0) {
    if (data.paid_holiday_digestibility < 30) {
      blackTokens += 2;
    } else if (data.paid_holiday_digestibility < 40) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Turnover rate
  if (data.turnover_rate > 0) {
    if (data.turnover_rate >= 30) {
      blackTokens += 3;
    } else if (data.turnover_rate >= 25) {
      blackTokens += 2;
    } else if (data.turnover_rate >= 20) {
      blackTokens += 1;
    }
    maxBlackTokens += 3; // Max for this category
  }

  // Female manager ratio
  if (data.female_manager_rate > 0) {
    if (data.female_manager_rate < 10) {
      blackTokens += 2;
    } else if (data.female_manager_rate < 15) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // Average length of service
  if (data.average_duration > 0) {
    if (data.average_duration < 2) {
      blackTokens += 2;
    } else if (data.average_duration < 3) {
      blackTokens += 1;
    }
    maxBlackTokens += 2; // Max for this category
  }

  // If no tokens were added, return "判定不可"
  if (blackTokens === 0) {
    return -1; // Using -1 to indicate "判定不可"
  }

  return blackTokens;
};

const calculatePercentage = (
  actualTokens: number,
  maxTokens: number = 18
): number => {
  return (actualTokens / maxTokens) * 100;
};

const CompanyDetail: React.FC = () => {
  const { corporation_id } = useParams<{ corporation_id: string }>();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/job-listings/?corporation_id=${corporation_id}`
        );

        if (response.data.length > 0) {
          setCompany(response.data[0]); // 配列の最初の要素を設定
        } else {
          setError("Company not found");
        }
      } catch (error) {
        setError("Error fetching company details");
        console.error("Error fetching company details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetail();
  }, [corporation_id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!company) return <div>No data available</div>;

  const blackTokens = calculateBlackTokens(company);
  const percentage = blackTokens === -1 ? 0 : calculatePercentage(blackTokens);

  return (
    <div>
      <h1>
        {company.name}{" "}
        <span style={{ fontSize: "16px", color: "red" }}>
          {blackTokens === -1
            ? "判定不可"
            : `${blackTokens} BlackTokens - ${percentage.toFixed(2)}%`}
        </span>
      </h1>
      <p>Corporation ID: {company.corporation_id}</p>
      <p>Name Kana: {company.name_kana}</p>
      <p>Name En: {company.name_en || "N/A"}</p>
      <p>Postal Code: {company.postal_code}</p>
      <p>Local Government Code: {company.local_government_code}</p>
      <p>Prefecture: {company.prefecture}</p>
      <p>City: {company.city}</p>
      <p>Town: {company.town}</p>
      <p>Block: {company.block}</p>
      <p>Building: {company.building || "N/A"}</p>
      <p>President Position: {company.president_position || "N/A"}</p>
      <p>President Name: {company.president_name}</p>
      <p>Capital: {company.capital}</p>
      <p>Employees: {company.employees}</p>
      <p>Industry Code: {company.industry_code}</p>
      <p>Listed: {company.listed ? "Yes" : "No"}</p>
      <p>Stock Code: {company.stock_code}</p>
      <p>Average Age: {company.average_age}</p>
      <p>Female Rate: {company.female_rate}</p>
      <p>Average Annual Income: {company.average_annual_income}</p>
      <p>Paid Holiday Digestibility: {company.paid_holiday_digestibility}</p>
      <p>Turnover Rate: {company.turnover_rate}</p>
      <p>Female Manager Rate: {company.female_manager_rate}</p>
      <p>Handicapped Employee Rate: {company.handicapped_employee_rate}</p>
      <p>Average Duration: {company.average_duration}</p>
      <p>Sales: {company.sales}</p>
      <p>Current Earnings: {company.current_earnings}</p>
      <p>Branch: {company.branch || "N/A"}</p>
      <p>
        Facebook URL:{" "}
        {company.facebook_url ? (
          <a href={company.facebook_url}>{company.facebook_url}</a>
        ) : (
          "N/A"
        )}
      </p>
      <p>
        Twitter URL:{" "}
        {company.twitter_url ? (
          <a href={company.twitter_url}>{company.twitter_url}</a>
        ) : (
          "N/A"
        )}
      </p>
      <p>Tel: {company.tel}</p>
      <p>
        Web URL:{" "}
        {company.web_url ? (
          <a href={company.web_url}>{company.web_url}</a>
        ) : (
          "N/A"
        )}
      </p>
      <p>PR Text: {company.pr_text}</p>
      <p>Remarks: {company.remarks}</p>
      <p>CP Name: {company.cp_name}</p>
      <p>Y Company ID: {company.y_company_id}</p>
    </div>
  );
};

export default CompanyDetail;
