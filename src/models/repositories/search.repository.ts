import { MAX_RESULTS, SEED } from "consts";
import { Api } from "src/services/api";
import { ApiResponse } from "src/types/user";

const repositorySearch = {
  fetchStudents: async (page: number) => {
    try {
      const url = `/?seed=${SEED}&results=${MAX_RESULTS}&page=${page}`
      const response = await Api.get<ApiResponse>(url);

      return response
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default repositorySearch;