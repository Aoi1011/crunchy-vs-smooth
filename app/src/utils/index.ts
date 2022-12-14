import { PublicKey } from "@solana/web3.js";
import idl from "../idl.json";

export const preflightCommitment = "recent";
export const programID = new PublicKey(idl.metadata.address);

export const capitalize = (string: any) => {
  if (typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const percentize = (decimal: any, min?: any, max?: any) => {
  if (typeof decimal !== "number" || isNaN(decimal)) return "";
  return max === 0
    ? `${(decimal * 100).toFixed(0)}%`
    : `${(decimal * 100).toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: min || 2,
        maximumFractionDigits: max || 2,
      })}%`;
};

export const formatWithCommas = (number: any) =>
  typeof number === "number" ? number.toLocaleString("en-US") : number;
