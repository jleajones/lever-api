import { Router } from "express";

import { apiCheck, allJobsHandler, allJobTitlesHandler, jobHandler } from "../../handlers/api";

const Api = Router();
Api.get("/v0/api", apiCheck);
Api.get("/v0/api/jobs", allJobsHandler);
Api.get("/v0/api/jobs/titles", allJobTitlesHandler);
Api.get("/v0/api/jobs/postings/:jobSlug", jobHandler);

export default Api;
