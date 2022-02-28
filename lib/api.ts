import xml from "xml2js";
import { parseNumbers } from "xml2js/lib/processors";
import { Person } from "../interfaces/person.interface";

interface PersonResponse {
  person: Person[];
}

/**
 * Fetch users from api1 in json format
 *
 * @returns
 */
export const fetchJsonUsers = async (): Promise<PersonResponse> => {
  const response = await fetch("/api/api1");
  return response.json();
};

/**
 * Fetch users from api2 in xml format
 *
 * @returns
 */
export const fetchXmlUsers = async (): Promise<PersonResponse> => {
  const response = await fetch("/api/api2");
  const body = await response.text();

  const parsed = await xml.parseStringPromise(body, {
    explicitArray: false,
    valueProcessors: [parseNumbers],
  });

  return parsed.persons;
};
